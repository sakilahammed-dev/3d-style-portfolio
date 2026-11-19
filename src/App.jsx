import React, { useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import SceneWrapper from "./components/3d/SceneWrapper";
import Loading from "./components/pages/Loading.jsx";
import LanguageSelector from "./components/ui/LanguageSelector.jsx";
import MainAudioControl from "./components/ui/MainAudioControl.jsx";
import {
  BsFillVolumeMuteFill,
  BsFillVolumeUpFill,
  BsFillHouseDoorFill,
} from "react-icons/bs";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [cameraReset, setCameraReset] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTarget, setActiveTarget] = useState(null);
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("portfolio_lang") || "bn";
  });

  // Fast-track START button appearance within 1.5 seconds on mobile
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem("portfolio_lang", lang);
  };

  const handleToggleMute = () => {
    if (!audioRef.current) return;
    const newMuted = !muted;
    audioRef.current.muted = newMuted;
    setMuted(newMuted);
  };

  const handleCameraReset = () => {
    setCameraReset((prev) => !prev);
    setActiveTarget(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCameraReset();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAnimating]);

  // Global Tab Visibility & Activity Handler (Page Visibility API)
  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef?.current;
      const allVideos = Array.from(document.querySelectorAll("video"));

      if (document.hidden || document.visibilityState === "hidden") {
        // Tab is hidden, switched, minimized, or mobile screen locked / app switched
        if (audio && !audio.paused) {
          audio.dataset.pausedByTab = "true";
          audio.pause();
        }

        allVideos.forEach((vid) => {
          if (!vid.paused) {
            vid.dataset.pausedByTab = "true";
            vid.pause();
          }
        });
      } else {
        // Tab is back on screen and active
        let resumedVideo = false;
        allVideos.forEach((vid) => {
          if (vid.dataset.pausedByTab === "true") {
            delete vid.dataset.pausedByTab;
            const playPromise = vid.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {});
            }
            resumedVideo = true;
          }
        });

        if (audio && audio.dataset.pausedByTab === "true") {
          delete audio.dataset.pausedByTab;
          if (
            audio.dataset.userOff !== "true" &&
            audio.dataset.videoPlaying !== "true" &&
            !resumedVideo
          ) {
            audio.muted = false;
            audio.play().catch(() => {});
          }
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", handleVisibilityChange);
    };
  }, [audioRef]);

  return (
    <div className="relative h-screen w-full bg-black flex ">
      <Canvas camera={{ position: [16.5, 4, 14.5], fov: 35 }} className="z-0">
        <SceneWrapper
          setLoaded={setLoaded}
          audioRef={audioRef}
          showLoading={showLoading}
          cameraReset={cameraReset}
          setCameraReset={setCameraReset}
          setIsAnimating={setIsAnimating}
          language={language}
          onTargetChange={setActiveTarget}
        />
      </Canvas>
      <div className="absolute pointer-events-none text-3xl w-full h-full text-neutral-200 font-mono z-10 flex flex-col">
        {showLoading ? (
          <Loading loaded={loaded} setShowLoading={setShowLoading} />
        ) : (
          <div className="absolute pointer-events-none p-4 w-full h-full flex items-start justify-between">
            <button
              id="home-btn"
              aria-label="Home"
              onClick={handleCameraReset}
              className={`pointer-events-auto backdrop-blur-md rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 ease-out active:scale-95 shadow-lg shadow-black/30 select-none ${
                activeTarget
                  ? "h-14 md:h-16 px-4 md:px-5 gap-2.5 bg-neutral-800 border border-white/25 text-white"
                  : "w-14 h-14 md:w-16 md:h-16 bg-neutral-800/60 hover:bg-neutral-800 border border-white/10 hover:border-white/20 text-white/90 hover:text-white"
              }`}
            >
              <BsFillHouseDoorFill className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
              {activeTarget && (
                <span className="text-xs md:text-sm font-mono font-bold tracking-wider uppercase whitespace-nowrap">
                  {language === "bn" ? "হোম" : "HOME"}
                </span>
              )}
            </button>
            <div className="h-full flex items-start gap-2">
              <LanguageSelector selected={language} onChange={handleLanguageChange} />
              <audio
                ref={audioRef}
                src={"music/islamic_bgm.mp3"}
                className="hidden"
                autoPlay
                loop
              />
              <MainAudioControl audioRef={audioRef} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
