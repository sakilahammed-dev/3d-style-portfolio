import { useState, useRef, useEffect, useCallback } from "react";
import {
  BsCollectionPlayFill,
  BsFillPlayFill,
  BsFillPauseFill,
  BsVolumeMuteFill,
  BsVolumeUpFill,
  BsFullscreen,
  BsFullscreenExit,
  BsFillHouseDoorFill,
} from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";
import { galleryVideos } from "../../utils/galleryData.js";

export default function GalleryPage({
  language = "en",
  audioRef,
  target,
  cameraReset,
  onHome,
}) {
  const [selectedVideo, setSelectedVideo] = useState(galleryVideos[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const videoRef = useRef(null);
  const playerContainerRef = useRef(null);
  const progressTrackRef = useRef(null);
  const isFirstMount = useRef(true);

  const content = {
    en: {
      title: "Video Gallery",
      subtitle: "Demonstrations of What We Build",
      selectVideo: "Select Video to Play:",
      nowPlaying: "NOW PLAYING",
      playVideo: "PLAY VIDEO",
    },
    es: {
      title: "Galería de Videos",
      subtitle: "Demostraciones de lo que Construimos",
      selectVideo: "Seleccionar video:",
      nowPlaying: "REPRODUCIENDO",
      playVideo: "VER VIDEO",
    },
    bn: {
      title: "ভিডিও গ্যালারি",
      subtitle: "আমাদের তৈরি কাজের বাস্তব প্রদর্শনী",
      selectVideo: "ভিডিও সিলেক্ট করুন:",
      nowPlaying: "এখন চলছে",
      playVideo: "প্লে করুন",
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

  // Format time mm:ss
  const formatTime = (secs) => {
    if (!secs || isNaN(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // Toggle play / pause cleanly
  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, []);

  // Handle clicking anywhere on the video player container
  const handleContainerClick = (e) => {
    // If click was on control buttons or progress scrubber, don't trigger container toggle
    if (e.target.closest("button") || e.target.closest("[data-progress-bar]")) {
      return;
    }
    togglePlay();
  };

  // Scrubber click/seek
  const handleProgressClick = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    const track = progressTrackRef.current;
    if (!video || !track || !video.duration) return;

    const rect = track.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    video.currentTime = ratio * video.duration;
  };

  // Toggle Mute
  const toggleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // Toggle Fullscreen
  const toggleFullscreen = (e) => {
    e.stopPropagation();
    const container = playerContainerRef.current || videoRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  // Native media event listeners for 100% reliable play/pause/ended & audio synchronization
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => {
      setIsPlaying(true);
      const bgAudio = audioRef?.current;
      if (bgAudio) {
        bgAudio.dataset.videoPlaying = "true";
        bgAudio.pause();
      }
    };

    const onPauseOrEnded = () => {
      setIsPlaying(false);
      const bgAudio = audioRef?.current;
      if (bgAudio) {
        bgAudio.dataset.videoPlaying = "false";
        if (
          !document.hidden &&
          document.visibilityState === "visible" &&
          bgAudio.dataset.userOff !== "true" &&
          bgAudio.dataset.pausedByTab !== "true"
        ) {
          bgAudio.muted = false;
          bgAudio.play().catch(() => {});
        }
      }
    };

    const onTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const onLoadedMetadata = () => {
      setDuration(video.duration);
    };

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPauseOrEnded);
    video.addEventListener("ended", onPauseOrEnded);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPauseOrEnded);
      video.removeEventListener("ended", onPauseOrEnded);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, [audioRef]);

  // When user navigates away from Gallery (target changes or cameraReset is triggered)
  useEffect(() => {
    const isGallery = isGalleryTarget(target);
    if (!isGallery) {
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
      }
      setIsPlaying(false);
      const bgAudio = audioRef?.current;
      if (bgAudio) {
        bgAudio.dataset.videoPlaying = "false";
        if (
          !document.hidden &&
          document.visibilityState === "visible" &&
          bgAudio.dataset.userOff !== "true" &&
          bgAudio.dataset.pausedByTab !== "true"
        ) {
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
      setIsPlaying(false);
      const bgAudio = audioRef?.current;
      if (bgAudio) {
        bgAudio.dataset.videoPlaying = "false";
        if (
          !document.hidden &&
          document.visibilityState === "visible" &&
          bgAudio.dataset.userOff !== "true" &&
          bgAudio.dataset.pausedByTab !== "true"
        ) {
          bgAudio.muted = false;
          bgAudio.play().catch(() => {});
        }
      }
    };
  }, [audioRef]);

  // Auto-load and play when selectedVideo changes after first mount
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    const video = videoRef.current;
    if (!video) return;
    video.load();
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, [selectedVideo]);

  const handleSelectVideo = (video) => {
    if (video.id === selectedVideo?.id) {
      togglePlay();
      return;
    }
    setSelectedVideo(video);
  };

  return (
    <div
      className="w-full h-full relative bg-neutral-200 select-none font-mono text-neutral-800 overflow-y-auto overflow-x-hidden scroll-smooth touch-pan-y"
      style={{
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "thin",
        scrollbarColor: "#9ca3af transparent",
      }}
    >
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid opacity-60 pointer-events-none"></div>

      <div className="relative w-full min-h-full p-2.5 md:p-5 flex flex-col justify-between border border-neutral-300">
        {/* Header - Clean with Home Button */}
        <div className="w-full flex items-center justify-between pb-1.5 md:pb-2 border-b border-neutral-300/80 shrink-0">
          <div className="flex items-center gap-2">
            <MdVideoLibrary className="w-5 h-5 md:w-7 md:h-7 text-neutral-800" />
            <h1 className="text-lg md:text-2xl font-black tracking-tight text-neutral-900">
              {t.title}
            </h1>
          </div>
          {onHome && (
            <button
              onClick={onHome}
              type="button"
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 font-bold text-xs md:text-sm font-mono tracking-wider cursor-pointer shadow-md shadow-neutral-500/20 active:scale-95 transition-all select-none"
            >
              <BsFillHouseDoorFill className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span>{language === "bn" ? "হোমে ফিরুন" : "Home"}</span>
            </button>
          )}
        </div>

        {/* Video Player Section with Center Tap Play/Pause & Sleek Overlay */}
        <div className="w-full flex flex-col items-center mt-0.5 mb-1 shrink-0">
          <div
            ref={playerContainerRef}
            onClick={handleContainerClick}
            className="relative w-full max-w-[580px] md:max-w-[750px] aspect-video bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-2xl shadow-neutral-900/60 border-2 border-neutral-800 flex items-center justify-center cursor-pointer group"
          >
            <video
              ref={videoRef}
              src={selectedVideo.src}
              poster={selectedVideo.poster}
              playsInline
              preload="metadata"
              className="w-full h-full object-contain bg-black"
            />

            {/* Prominent Center Play Button when Paused */}
            {!isPlaying && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                className="absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[1px] transition-all duration-200 z-10 cursor-pointer"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl shadow-red-600/70 ring-4 ring-white/40 transform transition-transform duration-200 hover:scale-110 active:scale-90 group-hover:scale-105">
                  <BsFillPlayFill className="w-8 h-8 md:w-9 md:h-9 ml-1" />
                </div>
              </div>
            )}

            {/* Sleek Minimalist Bottom Control Bar */}
            <div
              className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2 md:p-3 flex flex-col gap-1.5 z-20 transition-opacity duration-300 ${
                isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Interactive Progress Scrubber Track */}
              <div
                data-progress-bar="true"
                ref={progressTrackRef}
                onClick={handleProgressClick}
                className="w-full h-1.5 md:h-2 bg-white/25 hover:bg-white/40 rounded-full cursor-pointer relative overflow-hidden transition-all"
              >
                <div
                  className="h-full bg-red-600 rounded-full transition-all duration-100"
                  style={{
                    width: `${duration ? (currentTime / duration) * 100 : 0}%`,
                  }}
                />
              </div>

              {/* Control Buttons & Timestamps */}
              <div className="flex items-center justify-between text-white text-xs md:text-sm">
                <div className="flex items-center gap-2 md:gap-3">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="hover:text-red-500 transition-colors cursor-pointer p-0.5"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <BsFillPauseFill className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    ) : (
                      <BsFillPlayFill className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    )}
                  </button>

                  <span className="font-mono text-[9px] md:text-xs text-neutral-300">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="hover:text-red-500 transition-colors cursor-pointer p-0.5"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <BsVolumeMuteFill className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
                    ) : (
                      <BsVolumeUpFill className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    className="hover:text-red-500 transition-colors cursor-pointer p-0.5"
                    title="Fullscreen"
                  >
                    {isFullscreen ? (
                      <BsFullscreenExit className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                    ) : (
                      <BsFullscreen className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Current Video Info - Prominent & Clearly Legible */}
          <div className="w-full max-w-[580px] md:max-w-[750px] mt-1.5 md:mt-2 px-1">
            <h2 className="text-sm md:text-xl font-black text-neutral-950 truncate flex items-center gap-2">
              <span className="bg-red-600 text-white text-[9px] md:text-xs px-2 py-0.5 rounded font-black tracking-wider shadow-xs shrink-0">
                #{selectedVideo.id}
              </span>
              <span className="tracking-tight truncate">{selectedVideo.title[language] || selectedVideo.title.en}</span>
            </h2>
            <p className="text-[10px] md:text-xs text-neutral-600 font-medium line-clamp-1 mt-0.5">
              {selectedVideo.description[language] || selectedVideo.description.en}
            </p>
          </div>
        </div>

        {/* Video Thumbnail Selector Boxes (Distinct, Touch-Friendly, Scroll-Safe) */}
        <div className="w-full max-w-[580px] md:max-w-[750px] mx-auto pt-1.5 md:pt-2 border-t border-neutral-300/80 pb-4 md:pb-6 shrink-0">
          <p className="text-[10px] md:text-xs text-neutral-600 mb-1.5 font-bold flex items-center gap-1.5">
            <BsCollectionPlayFill className="text-red-600 w-3 h-3 md:w-3.5 md:h-3.5" />
            {t.selectVideo}
          </p>

          <div className="grid grid-cols-2 gap-2.5 md:gap-3.5 w-full">
            {galleryVideos.map((video) => {
              const isSelected = selectedVideo && video.id === selectedVideo.id;
              return (
                <button
                  key={video.id}
                  onClick={() => handleSelectVideo(video)}
                  type="button"
                  className={`group relative flex items-center gap-2 md:gap-3 p-2 md:p-2.5 rounded-xl text-left transition-all duration-200 cursor-pointer overflow-hidden ${
                    isSelected
                      ? "bg-neutral-950 text-white border-2 border-red-500 shadow-xl shadow-red-950/50 ring-2 ring-red-500/30"
                      : "bg-white/95 text-neutral-800 border-2 border-neutral-300 hover:border-red-400 hover:bg-white shadow-sm"
                  }`}
                >
                  {/* Thumbnail Image Box */}
                  <div className="relative w-20 md:w-28 aspect-video rounded-lg overflow-hidden flex-shrink-0 bg-neutral-900 border border-neutral-700/60 shadow-xs">
                    <img
                      src={video.poster}
                      alt={video.title[language] || video.title.en}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Centered Red Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-110 ${
                          isSelected
                            ? "bg-red-600 text-white ring-2 ring-red-400 shadow-red-600/50"
                            : "bg-red-600/90 text-white group-hover:bg-red-600"
                        }`}
                      >
                        <BsFillPlayFill className="w-3 h-3 md:w-3.5 md:h-3.5 ml-0.5" />
                      </div>
                    </div>

                    {/* Video ID badge */}
                    <span className="absolute bottom-0.5 right-0.5 px-1 py-0.2 text-[7px] md:text-[8px] font-black rounded bg-black/85 text-white tracking-wider">
                      #{video.id}
                    </span>
                  </div>

                  {/* Video Meta & Titles */}
                  <div className="min-w-0 flex-1 flex flex-col justify-between h-full py-0.5">
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <span
                          className={`text-[8px] md:text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full ${
                            isSelected
                              ? "bg-red-600 text-white shadow-xs flex items-center gap-1"
                              : "bg-neutral-100 text-neutral-700 border border-neutral-300"
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                          {isSelected ? t.nowPlaying : t.playVideo}
                        </span>
                      </div>
                      <h3
                        className={`text-xs md:text-sm font-extrabold line-clamp-1 leading-snug tracking-tight ${
                          isSelected ? "text-white" : "text-neutral-950 group-hover:text-red-600"
                        }`}
                      >
                        {video.title[language] || video.title.en}
                      </h3>
                    </div>
                    <p
                      className={`text-[9px] md:text-[10px] truncate mt-0.5 ${
                        isSelected ? "text-neutral-400" : "text-neutral-500 font-medium"
                      }`}
                    >
                      {video.category[language] || video.category.en}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
