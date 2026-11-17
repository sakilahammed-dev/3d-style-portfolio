import { useState, useEffect, useRef, useCallback } from "react";
import { BsTranslate } from "react-icons/bs";

const LANGUAGES = [
  { code: "bn", label: "বাংলা", native: "Bangla" },
  { code: "en", label: "English", native: "English" },
];

const AUTO_CLOSE_DELAY = 4000; // 4 seconds auto-dismiss on mobile

export default function LanguageSelector({ selected, onChange }) {
  const [open, setOpen] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const containerRef = useRef(null);
  const timerRef = useRef(null);

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

  const handleToggle = (e) => {
    e.stopPropagation();
    setOpen((prev) => {
      const next = !prev;
      if (next && !canHover) {
        startTimer();
      } else {
        clearTimer();
      }
      return next;
    });
  };

  const handleSelect = (code, e) => {
    e.stopPropagation();
    onChange(code);
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
    return () => {
      document.removeEventListener("pointerdown", handleOutside);
    };
  }, [open, clearTimer]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  return (
    <div
      ref={containerRef}
      id="lang-selector"
      className="relative h-fit pointer-events-auto select-none"
      {...(canHover && {
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => setOpen(false),
      })}
    >
      <button
        onClick={handleToggle}
        className={`pointer-events-auto p-4 backdrop-blur-xs transition-all duration-200 ${
          open
            ? "bg-neutral-800 rounded-t-xl border-t border-x border-neutral-700"
            : "bg-neutral-800/40 rounded-xl hover:bg-neutral-800"
        } cursor-pointer flex items-center justify-center`}
        aria-label="Select Language"
        type="button"
      >
        <BsTranslate className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full min-w-[120px] bg-neutral-800 border border-neutral-700 rounded-b-xl shadow-xl shadow-black/50 p-1.5 z-50 flex flex-col gap-1"
          onPointerDown={() => {
            if (!canHover) startTimer();
          }}
        >
          {LANGUAGES.map(({ code, label }) => {
            const isSelected = selected === code;
            return (
              <button
                key={code}
                onClick={(e) => handleSelect(code, e)}
                type="button"
                className={`w-full py-2 px-3 text-sm md:text-base rounded-lg transition-all flex items-center justify-between gap-2 cursor-pointer font-sans ${
                  isSelected
                    ? "bg-neutral-700 text-white font-semibold shadow-inner"
                    : "text-neutral-300 hover:bg-neutral-700/60 hover:text-white"
                }`}
              >
                <span>{label}</span>
                <span
                  className={`text-xs uppercase font-mono px-1.5 py-0.5 rounded ${
                    isSelected
                      ? "bg-red-600 text-white"
                      : "bg-neutral-900 text-neutral-400"
                  }`}
                >
                  {code}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
