import { useState, useEffect, useRef, useCallback } from "react";
import { BsFillVolumeMuteFill, BsFillVolumeUpFill } from "react-icons/bs";

const AUTO_CLOSE_DELAY = 4000; // 4 seconds auto-dismiss on mobile

const OPTIONS = [
  { value: true, label: "ON" },
  { value: false, label: "OFF" },
];

export default function MainAudioControl({ audioRef }) {
  const [isOn, setIsOn] = useState(true);
  const [open, setOpen] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const containerRef = useRef(null);
  const timerRef = useRef(null);
  const hoverCloseTimerRef = useRef(null);

  // Check if device supports true hover (desktop with mouse)
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(mq.matches);

    const handler = (e) => setCanHover(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      setOpen(false);
    }, AUTO_CLOSE_DELAY);
  }, [clearTimer]);

  const handleMouseEnter = () => {
    if (!canHover) return;
    if (hoverCloseTimerRef.current) {
      clearTimeout(hoverCloseTimerRef.current);
      hoverCloseTimerRef.current = null;
    }
    window.dispatchEvent(new CustomEvent("portfolio:close-dropdowns", { detail: "sound" }));
    setOpen(true);
  };

  const handleMouseLeave = () => {
    if (!canHover) return;
    hoverCloseTimerRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  // Synchronize audio state with isOn
  useEffect(() => {
    const audio = audioRef?.current;
    if (!audio) return;

    audio.volume = 1.0; // Full volume as requested

    if (isOn) {
      audio.muted = false;
      delete audio.dataset.userOff;
      // Only play if video is NOT playing and tab is currently visible
      if (
        audio.dataset.videoPlaying !== "true" &&
        !document.hidden &&
        document.visibilityState === "visible"
      ) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    } else {
      audio.muted = true;
      audio.dataset.userOff = "true";
      audio.pause();
    }
  }, [isOn, audioRef]);

  const handleToggle = (e) => {
    e.stopPropagation();
    setOpen((prev) => {
      const next = canHover ? true : !prev;
      if (next) {
        window.dispatchEvent(new CustomEvent("portfolio:close-dropdowns", { detail: "sound" }));
        if (!canHover) startTimer();
      } else {
        clearTimer();
      }
      return next;
    });
  };

  const handleSelect = (val, e) => {
    e.stopPropagation();
    setIsOn(val);
    const audio = audioRef?.current;
    if (audio) {
      audio.volume = 1.0;
      if (val) {
        audio.muted = false;
        delete audio.dataset.userOff;
        if (
          audio.dataset.videoPlaying !== "true" &&
          !document.hidden &&
          document.visibilityState === "visible"
        ) {
          audio.play().catch(() => {});
        }
      } else {
        audio.muted = true;
        audio.dataset.userOff = "true";
        audio.pause();
      }
    }
    setOpen(false);
    clearTimer();
  };

  // Close when tapping/clicking outside
  useEffect(() => {
    if (!open) return;

    const handleOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        clearTimer();
      }
    };

    document.addEventListener("pointerdown", handleOutside);
    document.addEventListener("click", handleOutside);
    return () => {
      document.removeEventListener("pointerdown", handleOutside);
      document.removeEventListener("click", handleOutside);
    };
  }, [open, clearTimer]);

  // Mutual exclusion: Close when another dropdown opens
  useEffect(() => {
    const handleCloseOthers = (e) => {
      if (e.detail !== "sound") {
        setOpen(false);
        clearTimer();
      }
    };
    window.addEventListener("portfolio:close-dropdowns", handleCloseOthers);
    return () => window.removeEventListener("portfolio:close-dropdowns", handleCloseOthers);
  }, [clearTimer]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      clearTimer();
      if (hoverCloseTimerRef.current) {
        clearTimeout(hoverCloseTimerRef.current);
      }
    };
  }, [clearTimer]);

  return (
    <div
      ref={containerRef}
      id="sound-selector"
      className="relative pointer-events-auto select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleToggle}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-xl border backdrop-blur-md cursor-pointer flex items-center justify-center transition-all duration-200 ease-out active:scale-95 shadow-lg shadow-black/30 ${
          open
            ? "bg-neutral-800 border-white/25 text-white"
            : "bg-neutral-800/60 border-white/10 text-white/90 hover:bg-neutral-800 hover:border-white/20 hover:text-white"
        }`}
        aria-label="Toggle Sound"
        type="button"
      >
        {isOn ? (
          <BsFillVolumeUpFill className="w-6 h-6 md:w-8 md:h-8 text-white transition-transform duration-200" />
        ) : (
          <BsFillVolumeMuteFill className="w-6 h-6 md:w-8 md:h-8 text-neutral-400 transition-transform duration-200" />
        )}
      </button>

      <div
        className={`absolute right-0 top-full mt-2 w-full bg-neutral-900/95 backdrop-blur-xl border border-neutral-700/80 rounded-xl shadow-2xl shadow-black/80 p-1.5 z-50 flex flex-col gap-1 items-center transition-all duration-200 ease-out origin-top before:content-[''] before:absolute before:-top-2.5 before:left-0 before:right-0 before:h-2.5 ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
        onPointerDown={() => {
          if (!canHover) startTimer();
        }}
      >
        {OPTIONS.map(({ value, label }) => {
          const isSelected = isOn === value;
          return (
            <button
              key={label}
              onClick={(e) => handleSelect(value, e)}
              type="button"
              className={`w-full py-2.5 text-xs md:text-sm uppercase font-mono font-bold rounded-lg transition-colors duration-150 flex items-center justify-center cursor-pointer ${
                isSelected
                  ? "bg-red-600 text-white shadow-sm"
                  : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
