import { useState } from "react";
import { servicesData } from "../../utils/servicesData.js";
import {
  BsCodeSlash,
  BsCpu,
  BsCollectionPlayFill,
  BsCheckCircleFill,
  BsLightningChargeFill,
  BsStars,
  BsArrowRight,
  BsArrowLeft,
  BsAwardFill,
} from "react-icons/bs";

export default function ServicesPage({ language = "bn", setTarget }) {
  // null = 3-service catalog cards; serviceId = inside detail view
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [hoveredServiceId, setHoveredServiceId] = useState(null);

  const selectedService = servicesData.find((s) => s.id === selectedServiceId);

  const content = {
    bn: {
      catalogTitle: "Services",
      exploreDetails: "বিস্তারিত দেখুন",
      backToList: "← সকল সার্ভিসে ফিরে যান",
      overviewHeading: "সহজ কথায় (Executive Overview)",
      deliverablesHeading: "আমি কী কী তৈরি ও ডেলিভারি করব (Key Deliverables)",
      clientRoiHeading: "ক্লায়েন্টের লাভ (Client ROI & Impact)",
      techStackHeading: "ব্যবহৃত টুলস ও প্রযুক্তি",
      discussProject: "এই সার্ভিসটি নিয়ে আলোচনা করুন",
      contactNotice: "সরাসরি যোগাযোগ ও বাজেট আলোচনার জন্য ক্লিক করুন",
      bottomBackHint: "অন্যান্য সার্ভিস দেখতে ব্যাক বাটনে ক্লিক করুন",
      bottomNotice: "যে কোনো সার্ভিসে ক্লিক করে ভেতরে বিস্তারিত জানুন",
      catalogSubNotice: "৩টি প্রিমিয়ার সার্ভিস ক্যাটালগ",
      serviceNumber: "সার্ভিস",
    },
    en: {
      catalogTitle: "Services",
      exploreDetails: "Explore Details",
      backToList: "← Back to All Services",
      overviewHeading: "In Plain Words (Executive Overview)",
      deliverablesHeading: "What I Build & Deliver (Key Deliverables)",
      clientRoiHeading: "Client ROI & Business Impact",
      techStackHeading: "Tools & Technologies",
      discussProject: "Discuss This Project / Hire Me",
      contactNotice: "Connect directly to launch your project or get a free estimate",
      bottomBackHint: "Click back to explore other services",
      bottomNotice: "Click on any service to explore full capabilities & details",
      catalogSubNotice: "3 Premium Offerings Catalog",
      serviceNumber: "SERVICE",
    },
    es: {
      catalogTitle: "Servicios",
      exploreDetails: "Ver Detalles",
      backToList: "← Volver a Todos los Servicios",
      overviewHeading: "En palabras simples",
      deliverablesHeading: "Servicios y Capacidades Clave",
      clientRoiHeading: "Beneficios e Impacto para el Cliente",
      techStackHeading: "Herramientas y Tecnologías",
      discussProject: "Consultar por este servicio",
      contactNotice: "Contáctame para iniciar tu proyecto o solicitar presupuesto",
      bottomBackHint: "Haz clic atrás para ver otros servicios",
      bottomNotice: "Haz clic en cualquier servicio para conocer los detalles",
      catalogSubNotice: "Catálogo de 3 Servicios Principales",
      serviceNumber: "SERVICIO",
    },
  };

  const t = content[language] || content.bn || content.en;

  const getServiceIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case "code":
        return <BsCodeSlash className={className} />;
      case "gear":
        return <BsCpu className={className} />;
      case "video":
        return <BsCollectionPlayFill className={className} />;
      default:
        return <BsStars className={className} />;
    }
  };

  const handleDiscussClick = () => {
    if (typeof setTarget === "function") {
      setTarget("Contact_Red_Text_Target");
    } else if (typeof window.__navigateToTarget === "function") {
      window.__navigateToTarget("Contact_Red_Text_Target");
    }
  };

  // =========================================================================
  // VIEW 2: SERVICE DETAIL VIEW (ভেতরের বিস্তারিত ভিউ — নো ইমোজি, প্রিমিয়াম লুক)
  // =========================================================================
  if (selectedService) {
    const title =
      selectedService.title[language] ||
      selectedService.title.bn ||
      selectedService.title.en;
    const category =
      selectedService.category[language] ||
      selectedService.category.bn ||
      selectedService.category.en;
    const easyExp =
      selectedService.easyExplanation[language] ||
      selectedService.easyExplanation.bn ||
      selectedService.easyExplanation.en;
    const roi =
      selectedService.clientRoi[language] ||
      selectedService.clientRoi.bn ||
      selectedService.clientRoi.en;

    return (
      <div className="w-full h-full relative bg-neutral-200 select-none font-mono text-neutral-800 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none"></div>

        {/* Content Box */}
        <div className="absolute inset-0 p-3 md:p-5 flex flex-col justify-between border border-neutral-300">
          {/* Top Bar: PROMINENT BACK BUTTON TO RETURN TO SERVICES CATALOG */}
          <div className="w-full flex items-center justify-between pb-2.5 border-b border-neutral-300/80 shrink-0">
            <button
              onClick={() => setSelectedServiceId(null)}
              className="flex items-center gap-2 px-3.5 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs md:text-sm font-bold shadow-md transition-all duration-200 hover:scale-105 cursor-pointer group border border-slate-700/60"
              title="Return to Services List"
            >
              <BsArrowLeft className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
              <span>{t.backToList}</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-[10px] md:text-xs font-black px-2 py-0.5 rounded bg-neutral-900 text-white tracking-wider border border-slate-700/50">
                {t.serviceNumber} #{selectedService.number}
              </span>
              <span className="text-xs font-bold text-neutral-700 uppercase tracking-wider hidden sm:inline-block">
                {category}
              </span>
            </div>
          </div>

          {/* Main Scrollable Body */}
          <div className="w-full flex-1 my-2 min-h-0 overflow-y-auto pr-1 flex flex-col gap-2.5">
            {/* Service Title Bar */}
            <div className="p-3 md:p-3.5 bg-white/95 rounded-2xl border border-neutral-300/90 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-neutral-900 text-white rounded-xl shadow-xs shrink-0 border border-slate-800">
                  {getServiceIcon(selectedService.icon, "w-6 h-6 text-slate-200")}
                </div>
                <div>
                  <span className="text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-wider block">
                    {category}
                  </span>
                  <h1 className="text-base md:text-xl font-black text-neutral-900 leading-tight">
                    {title}
                  </h1>
                </div>
              </div>

              {/* Direct Hire / Discuss Button */}
              <button
                onClick={handleDiscussClick}
                className="self-start sm:self-auto px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs md:text-sm rounded-xl transition-all shadow-md cursor-pointer flex items-center gap-2 shrink-0 border border-slate-700/60"
              >
                <span>{t.discussProject}</span>
                <BsArrowRight className="w-3.5 h-3.5 text-slate-300" />
              </button>
            </div>

            {/* Overview / "সহজ কথায়" Highlight Card */}
            <div className="p-3 bg-neutral-100/90 rounded-xl border-l-4 border-slate-800 border-neutral-300 shadow-xs">
              <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">
                <BsStars className="w-3.5 h-3.5 text-slate-700" />
                <span>{t.overviewHeading}</span>
              </div>
              <p className="text-xs md:text-sm text-neutral-800 leading-relaxed font-medium">
                {easyExp}
              </p>
            </div>

            {/* Key Deliverables - 2x2 Clean Grid */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 text-xs font-extrabold text-neutral-900 uppercase tracking-wider px-1">
                <BsLightningChargeFill className="w-3.5 h-3.5 text-blue-600" />
                <span>{t.deliverablesHeading}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {selectedService.features.map((feat, idx) => {
                  const fTitle = feat.title[language] || feat.title.bn || feat.title.en;
                  const fDesc = feat.desc[language] || feat.desc.bn || feat.desc.en;
                  return (
                    <div
                      key={idx}
                      className="p-2.5 md:p-3 bg-white/90 rounded-xl border border-neutral-300/80 shadow-2xs hover:border-blue-400 transition-colors flex flex-col gap-1"
                    >
                      <div className="flex items-start gap-2">
                        <BsCheckCircleFill className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <h4 className="text-xs md:text-sm font-bold text-neutral-900 leading-snug">
                          {fTitle}
                        </h4>
                      </div>
                      <p className="text-[11px] md:text-xs text-neutral-600 leading-relaxed pl-5 font-normal">
                        {fDesc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Client ROI Callout Banner (NO EMOJI) */}
            <div className="p-2.5 md:p-3 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-xl border border-amber-500/30 shadow-2xs">
              <span className="text-[11px] md:text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5 mb-0.5">
                <BsAwardFill className="w-3.5 h-3.5 text-amber-600" />
                <span>{t.clientRoiHeading}</span>
              </span>
              <p className="text-xs md:text-sm text-amber-950 font-semibold leading-relaxed">
                {roi}
              </p>
            </div>

            {/* Tech Stack Pills (NO EMOJI) */}
            <div className="p-2.5 bg-white/80 rounded-xl border border-neutral-300 flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-wider mr-1 flex items-center gap-1">
                <BsCpu className="w-3.5 h-3.5 text-neutral-600" />
                <span>{t.techStackHeading}:</span>
              </span>
              {selectedService.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-neutral-800 text-white rounded-md text-[10px] md:text-[11px] font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Bar: Second Back Button */}
          <div className="w-full pt-2 border-t border-neutral-300/80 shrink-0 flex items-center justify-between">
            <button
              onClick={() => setSelectedServiceId(null)}
              className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-bold transition-all cursor-pointer border border-slate-700/60"
            >
              <BsArrowLeft className="w-3.5 h-3.5 text-slate-300" />
              <span>{t.backToList}</span>
            </button>
            <span className="text-[11px] text-neutral-500 hidden sm:inline">
              {t.bottomBackHint}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 1: SERVICES CATALOG (একটার নিচে আরেকটা — বোল্ড, বড়, গর্জিয়াস ব্লু হোভার)
  // =========================================================================
  return (
    <div className="w-full h-full relative bg-neutral-200 select-none font-mono text-neutral-800 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none"></div>

      {/* Main Container - Full Bleed */}
      <div className="absolute inset-0 p-3 md:p-5 flex flex-col justify-between border border-neutral-300">
        {/* Top Header Bar - Clean & Minimalist */}
        <div className="w-full flex items-center justify-between pb-2 border-b border-neutral-300/80 shrink-0">
          <h1 className="text-2xl md:text-4xl font-black tracking-tight text-neutral-900">
            {t.catalogTitle}
          </h1>
        </div>

        {/* 3 Services Cards - Stacked Vertically with Gorgeous Royal Blue Hover */}
        <div className="w-full flex-1 my-2.5 min-h-0 overflow-y-auto pr-1">
          <div className="flex flex-col gap-3 md:gap-3.5 h-full justify-between">
            {servicesData.map((svc) => {
              const title = svc.title[language] || svc.title.bn || svc.title.en;
              const highlight =
                svc.coreHighlight?.[language] ||
                svc.coreHighlight?.bn ||
                svc.coreHighlight?.en ||
                svc.tags;

              const isHovered = hoveredServiceId === svc.id;

              return (
                <div
                  key={svc.id}
                  onClick={() => setSelectedServiceId(svc.id)}
                  onMouseEnter={() => setHoveredServiceId(svc.id)}
                  onMouseLeave={() => setHoveredServiceId(null)}
                  className={`group relative flex-1 p-4 md:p-5 bg-white/95 rounded-2xl border-2 transition-all duration-300 cursor-pointer shadow-sm flex items-center justify-between gap-4 overflow-hidden transform-none ${
                    isHovered
                      ? "border-slate-800 shadow-xl shadow-slate-900/10"
                      : "border-neutral-300 hover:border-slate-800 hover:shadow-xl hover:shadow-slate-900/10"
                  }`}
                >
                  {/* LIQUID WAVE EFFECT: Fills bottom ~40% with animated Executive Midnight Slate & Obsidian waves on hover */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-0">
                    <div
                      className={`absolute inset-x-0 bottom-0 h-[40%] transition-transform duration-600 ease-out flex flex-col justify-end ${
                        isHovered
                          ? "translate-y-0"
                          : "translate-y-[102%] group-hover:translate-y-0"
                      }`}
                    >
                      {/* Animated Wave Crests (Refined Midnight Slate Waves) */}
                      <div className="relative w-full h-5 overflow-hidden shrink-0">
                        {/* Back Wave (Deep Midnight Charcoal) */}
                        <svg
                          className="absolute bottom-0 left-0 w-[200%] h-5 animate-liquid-wave-back opacity-50"
                          viewBox="0 0 1200 120"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M 0 50 C 100 50, 200 10, 300 10 C 400 10, 500 50, 600 50 C 700 50, 800 10, 900 10 C 1000 10, 1100 50, 1200 50 L 1200 120 L 0 120 Z"
                            fill="#1e293b"
                          />
                        </svg>

                        {/* Front Wave (Executive Slate Graphite) */}
                        <svg
                          className="absolute bottom-0 left-0 w-[200%] h-5 animate-liquid-wave-front opacity-90"
                          viewBox="0 0 1200 120"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M 0 30 C 100 5, 200 5, 300 30 C 400 55, 500 55, 600 30 C 700 5, 800 5, 900 30 C 1000 55, 1100 55, 1200 30 L 1200 120 L 0 120 Z"
                            fill="#475569"
                          />
                        </svg>
                      </div>

                      {/* Liquid Body (Deep Obsidian Slate Gradient) */}
                      <div className="w-full flex-1 bg-gradient-to-b from-slate-800 via-slate-900 to-neutral-950"></div>
                    </div>
                  </div>

                  {/* Left Accent Glow Bar on Hover */}
                  <div
                    className={`absolute left-0 top-2 bottom-2 w-1.5 rounded-r-full transition-all duration-300 z-10 ${
                      isHovered
                        ? "bg-gradient-to-b from-slate-400 to-slate-900 opacity-100"
                        : "bg-transparent group-hover:bg-gradient-to-b group-hover:from-slate-400 group-hover:to-slate-900"
                    }`}
                  ></div>

                  {/* Left: Icon & Big Bold Title + Tagline (z-10 sits on top of water) */}
                  <div className="relative z-10 flex items-center gap-4 md:gap-6 min-w-0 pl-1">
                    {/* Large Service Icon with Executive Matte Obsidian Box */}
                    <div
                      className={`p-3.5 md:p-4 rounded-2xl shadow-md transition-all duration-300 shrink-0 ${
                        isHovered
                          ? "bg-neutral-900 border border-slate-700/80 shadow-lg shadow-slate-900/40 text-white"
                          : "bg-neutral-900 text-white border border-neutral-800"
                      }`}
                    >
                      {getServiceIcon(
                        svc.icon,
                        "w-7 h-7 md:w-9 md:h-9 text-slate-200 transition-colors duration-300",
                      )}
                    </div>

                    <div className="min-w-0">
                      {/* BIG EYE-CATCHING TITLE (চোখে পড়ার মতো অনেক বড় ফন্ট - অলওয়েজ ক্লাসিক বোল্ড ব্ল্যাক) */}
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-neutral-900 tracking-tight leading-tight transition-colors duration-300 truncate">
                        {title}
                      </h2>

                      {/* Clean Sub-line / Tagline: Pure crisp white on dark fluid */}
                      <p
                        className={`text-xs md:text-sm font-semibold leading-relaxed mt-1.5 transition-colors duration-200 truncate ${
                          isHovered
                            ? "!text-white drop-shadow-xs"
                            : "text-neutral-500 group-hover:!text-white group-hover:drop-shadow-xs"
                        }`}
                      >
                        {highlight}
                      </p>
                    </div>
                  </div>

                  {/* Right: Gorgeous Action Button with Executive Obsidian Look (z-10 sits on top) */}
                  <div className="relative z-10 shrink-0 flex items-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedServiceId(svc.id);
                      }}
                      className="px-4 md:px-6 py-2.5 md:py-3.5 bg-neutral-900 hover:bg-neutral-800 group-hover:border-slate-600 text-white text-xs md:text-sm font-bold rounded-xl transition-all duration-300 shadow-md border border-slate-700/60 flex items-center gap-2 cursor-pointer shrink-0"
                    >
                      <span className="hidden sm:inline">{t.exploreDetails}</span>
                      <span className="sm:hidden">বিস্তারিত</span>
                      <BsArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 text-slate-300" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Guidance Bar - 100% Clean, NO EMOJIS */}
        <div className="w-full pt-1.5 border-t border-neutral-300/80 shrink-0 flex items-center justify-between text-[11px] text-neutral-600 font-semibold">
          <span>{t.bottomNotice}</span>
          <span className="hidden sm:inline text-neutral-500 font-medium">
            {t.catalogSubNotice}
          </span>
        </div>
      </div>
    </div>
  );
}
