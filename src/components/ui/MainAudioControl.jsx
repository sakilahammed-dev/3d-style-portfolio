import { useState, useRef, useEffect, useCallback } from "react";
import { BsFillVolumeMuteFill, BsFillVolumeUpFill } from "react-icons/bs";
import VolumeSlider from "../ui/VolumeSlider.jsx";

const AUTO_CLOSE_DELAY = 3500; // 3.5 seconds

const MainAudioControl = ({ audioRef }) => {
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.2); // range: 0 to 1
  const [showSlider, setShowSlider] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const containerRef = useRef(null);
  const timerRef = useRef(null);

  // Detect touch devices
  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const clearAutoCloseTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startAutoCloseTimer = useCallback(() => {
    clearAutoCloseTimer();
    timerRef.current = setTimeout(() => {
      setShowSlider(false);
    }, AUTO_CLOSE_DELAY);
  }, [clearAutoCloseTimer]);

  const handleToggleMute = () => {
    if (audioRef.current) {
      const nextMuted = !muted;
      audioRef.current.muted = nextMuted;
      setMuted(nextMuted);
    }
    // Show slider on click/tap and start auto-dismiss timer
    setShowSlider(true);
    startAutoCloseTimer();
  };

  const handleVolumeChange = (newVol) => {
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      if (newVol === 0) {
        setMuted(true);
        audioRef.current.muted = true;
      } else {
        setMuted(false);
        audioRef.current.muted = false;
      }
    }
    startAutoCloseTimer();
  };

  // Close when clicking or tapping outside
  useEffect(() => {
    if (!showSlider) return;

    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowSlider(false);
        clearAutoCloseTimer();
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [showSlider, clearAutoCloseTimer]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => clearAutoCloseTimer();
  }, [clearAutoCloseTimer]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume, audioRef]);

  return (
    <div
      ref={containerRef}
      className="h-1/5 relative"
      onPointerDown={() => {
        if (showSlider) startAutoCloseTimer();
      }}
      {...(!isTouch && {
        onMouseEnter: () => {
          clearAutoCloseTimer();
          setShowSlider(true);
        },
        onMouseLeave: () => {
          setShowSlider(false);
          clearAutoCloseTimer();
        },
      })}
    >
      <button
        onClick={handleToggleMute}
        aria-label="Toggle Sound"
        className={`pointer-events-auto p-4 backdrop-blur-xs transition-colors duration-200 ${
          showSlider
            ? "rounded-t-xl bg-neutral-800"
            : "rounded-xl bg-neutral-800/40"
        } cursor-pointer hover:bg-neutral-800`}
      >
        {muted ? (
          <BsFillVolumeMuteFill className="w-6 h-6 md:w-8 md:h-8" />
        ) : (
          <BsFillVolumeUpFill className="w-6 h-6 md:w-8 md:h-8" />
        )}
      </button>

      {/* Volume slider (vertical) */}
      {showSlider && (
        <div
          className="h-full pointer-events-auto bg-neutral-800 rounded-b-xl px-4 pb-4 flex items-center justify-center"
          onPointerDown={() => startAutoCloseTimer()}
        >
          <VolumeSlider volume={volume} onChange={handleVolumeChange} />
        </div>
      )}
    </div>
  );
};

export default MainAudioControl;
