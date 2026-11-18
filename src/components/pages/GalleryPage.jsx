import { useState, useRef, useEffect, useCallback } from "react";
import { BsCollectionPlayFill } from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";
import { galleryVideos } from "../../utils/galleryData.js";

export default function GalleryPage({
  language = "en",
  audioRef,
  target,
  cameraReset,
}) {
  const [selectedVideo, setSelectedVideo] = useState(galleryVideos[0]);
  const videoRef = useRef(null);

  const content = {
    en: {
      title: "Video Showcase Gallery",
      subtitle: "Demonstrations of What We Build & Automate",
      selectVideo: "Select a Capability Demo:",
    },
    es: {
      title: "Galería de Videos",
      subtitle: "Demostraciones de lo que Construimos y Automatizamos",
      selectVideo: "Selecciona una demostración:",
    },
    bn: {
      title: "ভিডিও শোকেস গ্যালারি",
      subtitle: "আমাদের তৈরি সক্ষমতা ও অটোমেশনের জীবন্ত প্রমাণ",
      selectVideo: "ডেমো নির্বাচন করুন:",
    },
  };

  const t = content[language] || content.en;

  // Helper: check if current navigation target is Gallery
  const isGalleryTarget = useCallback((tName) => {
    if (!tName) return false;
    if (typeof tName === "string") {
      return (
        tName.includes("Games") ||
        tName.includes("Arcade") ||
        tName.toLowerCase().includes("gallery")
      );
    }
    return false;
  }, []);

  // Native media event listeners for 100% reliable play/pause/ended detection
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => {
      const bgAudio = audioRef?.current;
      if (bgAudio) {
        bgAudio.dataset.videoPlaying = "true";
        bgAudio.pause();
      }
    };

    const onPauseOrEnded = () => {
      const bgAudio = audioRef?.current;
      if (bgAudio) {
        bgAudio.dataset.videoPlaying = "false";
        if (bgAudio.dataset.userOff !== "true") {
          bgAudio.muted = false;
          bgAudio.play().catch(() => {});
        }
      }
    };

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPauseOrEnded);
    video.addEventListener("ended", onPauseOrEnded);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPauseOrEnded);
      video.removeEventListener("ended", onPauseOrEnded);
    };
  }, [audioRef]);

  // When user navigates away from Gallery (target changes or cameraReset is triggered)
  useEffect(() => {
    const isGallery = isGalleryTarget(target);
    if (!isGallery) {
      // Pause video if currently playing
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
      }
      // Resume background music if allowed
      const bgAudio = audioRef?.current;
      if (bgAudio) {
        bgAudio.dataset.videoPlaying = "false";
        if (bgAudio.dataset.userOff !== "true") {
          bgAudio.muted = false;
          bgAudio.play().catch(() => {});
        }
      }
    }
  }, [target, cameraReset, audioRef, isGalleryTarget]);

  // Cleanup when component unmounts
  useEffect(() => {
    return () => {
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
      }
      const bgAudio = audioRef?.current;
      if (bgAudio) {
        bgAudio.dataset.videoPlaying = "false";
        if (bgAudio.dataset.userOff !== "true") {
          bgAudio.muted = false;
          bgAudio.play().catch(() => {});
        }
      }
    };
  }, [audioRef]);

  const handleSelectVideo = (video) => {
    setSelectedVideo(video);
    const bgAudio = audioRef?.current;
    if (bgAudio) {
      bgAudio.dataset.videoPlaying = "true";
      bgAudio.pause();
    }
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="w-full h-full relative bg-neutral-200 select-none font-mono text-neutral-800 overflow-hidden">
      <div className="absolute w-full h-full bg-grid"></div>

      <div className="absolute w-full h-full p-4 md:p-6 flex flex-col justify-between border border-neutral-300">
        {/* Header */}
        <div className="w-full flex items-center justify-between pb-2 border-b border-neutral-300/80">
          <div className="flex items-center gap-2">
            <MdVideoLibrary className="w-6 h-6 md:w-8 md:h-8 text-neutral-700" />
            <h1 className="text-xl md:text-3xl font-bold tracking-tight text-neutral-900">
              {t.title}
            </h1>
          </div>
          <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-neutral-800 text-white shadow-sm">
            {selectedVideo.category[language] || selectedVideo.category.en}
          </span>
        </div>

        {/* Video Player Display Screen */}
        <div className="w-full flex-1 my-3 flex flex-col items-center justify-center overflow-hidden">
          <div className="relative w-full h-44 md:h-64 bg-black rounded-2xl overflow-hidden shadow-lg shadow-neutral-400 border border-neutral-50 flex items-center justify-center">
            <video
              ref={videoRef}
              src={selectedVideo.src}
              poster={selectedVideo.poster}
              controls
              playsInline
              className="w-full h-full object-contain bg-black"
            />
          </div>

          {/* Current Video Info */}
          <div className="w-full mt-2 px-1">
            <h2 className="text-base md:text-xl font-bold text-neutral-900 truncate">
              {selectedVideo.title[language] || selectedVideo.title.en}
            </h2>
            <p className="text-xs md:text-sm text-neutral-600 line-clamp-2 mt-0.5">
              {selectedVideo.description[language] || selectedVideo.description.en}
            </p>
          </div>
        </div>

        {/* Capability Video Selector Cards */}
        <div className="w-full pt-1 border-t border-neutral-300/80">
          <p className="text-xs md:text-sm text-neutral-500 mb-2 font-semibold">
            {t.selectVideo}
          </p>

          <div
            className={`grid gap-2 w-full ${
              galleryVideos.length === 1
                ? "grid-cols-1"
                : galleryVideos.length === 2
                ? "grid-cols-2"
                : "grid-cols-3"
            }`}
          >
            {galleryVideos.map((video) => {
              const isSelected = selectedVideo && video.id === selectedVideo.id;
              return (
                <button
                  key={video.id}
                  onClick={() => handleSelectVideo(video)}
                  className={`flex ${
                    galleryVideos.length === 1
                      ? "flex-row items-center justify-between px-4 py-2.5"
                      : "flex-col items-center p-2"
                  } rounded-xl text-left transition-all cursor-pointer ${
                    isSelected
                      ? "bg-neutral-800 text-white shadow-md shadow-neutral-500 scale-[1.01]"
                      : "bg-neutral-100/90 text-neutral-700 hover:bg-neutral-300/80 border border-neutral-50"
                  }`}
                >
                  <div
                    className={`${
                      galleryVideos.length === 1
                        ? "flex items-center gap-2 text-xs"
                        : "w-full flex items-center justify-between text-xs mb-1"
                    }`}
                  >
                    <span className="font-bold">#{video.id}</span>
                    <BsCollectionPlayFill className="w-3.5 h-3.5 opacity-80" />
                  </div>
                  <span
                    className={`${
                      galleryVideos.length === 1
                        ? "text-xs md:text-sm font-semibold truncate text-right ml-2"
                        : "text-[11px] md:text-xs font-medium line-clamp-2 w-full"
                    }`}
                  >
                    {video.title[language] || video.title.en}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
