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
  BsGridFill,
  BsViewStacked,
} from "react-icons/bs";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

export default function ServicesPage({ language = "bn", setTarget }) {
  const [selectedServiceId, setSelectedServiceId] = useState(servicesData[0].id);
  const [viewMode, setViewMode] = useState("featured"); // "featured" or "compare"

  const selectedService =
    servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];

  const content = {
    bn: {
      title: "সার্ভিসেস ও সলিউশনস",
      subtitle: "আপনার ব্যবসার প্রবৃদ্ধি, সফটওয়্যার ও অটোমেশনের পূর্ণাঙ্গ সমাধান",
      statusAvailable: "ক্লায়েন্ট প্রজেক্টের জন্য উন্মুক্ত",
      selectService: "সার্ভিস নির্বাচন করুন (Select a Capability):",
      overviewHeading: "সহজ কথায় (Executive Overview)",
      deliverablesHeading: "আমি কী কী তৈরি ও ডেলিভারি করব (Key Deliverables)",
      clientRoiHeading: "ক্লায়েন্টের লাভ (Client ROI & Impact)",
      techStackHeading: "টুলস ও প্রযুক্তি",
      discussProject: "এই সার্ভিসটি নিয়ে আলোচনা করুন",
      contactNotice: "সরাসরি যোগাযোগ ও বাজেট আলোচনার জন্য ক্লিক করুন",
      viewModeFeatured: "ডিটেইল ভিউ",
      viewModeCompare: "৩টি সার্ভিস একসাথে",
      exploreDetails: "বিস্তারিত দেখুন",
      activeServiceLabel: "নির্বাচিত সার্ভিস",
    },
    en: {
      title: "Services & Solutions",
      subtitle: "High-impact web engineering, intelligent AI workflows & media production",
      statusAvailable: "Available for Client Projects",
      selectService: "Select a Capability Service:",
      overviewHeading: "In Plain Words (Executive Overview)",
      deliverablesHeading: "What I Build & Deliver (Key Deliverables)",
      clientRoiHeading: "Client ROI & Business Impact",
      techStackHeading: "Tools & Technologies",
      discussProject: "Discuss This Project / Hire Me",
      contactNotice: "Connect directly to launch your project or get a free estimate",
      viewModeFeatured: "Detail View",
      viewModeCompare: "Compare All 3",
      exploreDetails: "View Details",
      activeServiceLabel: "Active Service",
    },
    es: {
      title: "Servicios y Soluciones",
      subtitle: "Ingeniería web de alto impacto, automatización con IA y producción multimedia",
      statusAvailable: "Disponible para Proyectos",
      selectService: "Selecciona un Servicio:",
      overviewHeading: "En palabras simples",
      deliverablesHeading: "Servicios y Capacidades Clave",
      clientRoiHeading: "Beneficios e Impacto para el Cliente",
      techStackHeading: "Herramientas y Tecnologías",
      discussProject: "Consultar por este servicio",
      contactNotice: "Contáctame para iniciar tu proyecto o solicitar presupuesto",
      viewModeFeatured: "Vista Detallada",
      viewModeCompare: "Comparar los 3",
      exploreDetails: "Ver Detalles",
      activeServiceLabel: "Servicio Activo",
    },
  };

  const t = content[language] || content.bn || content.en;

  const getServiceIcon = (iconName, className = "w-5 h-5") => {
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

  return (
    <div className="w-full h-full relative bg-neutral-200 select-none font-mono text-neutral-800 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none"></div>

      {/* Main Container - Full Bleed */}
      <div className="absolute inset-0 p-3 md:p-5 flex flex-col justify-between border border-neutral-300">
        {/* Top Header Bar */}
        <div className="w-full flex items-center justify-between pb-2 border-b border-neutral-300/80 shrink-0">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-neutral-800 rounded-lg text-white">
              <MdOutlineMiscellaneousServices className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg md:text-2xl font-black tracking-tight text-neutral-900 leading-none">
                  {t.title}
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-[10px] md:text-xs font-bold">
                  ● {t.statusAvailable}
                </span>
              </div>
              <p className="text-[11px] md:text-xs text-neutral-600 truncate max-w-md mt-0.5">
                {t.subtitle}
              </p>
            </div>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1.5 bg-neutral-300/80 p-1 rounded-xl border border-neutral-300">
            <button
              onClick={() => setViewMode("featured")}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === "featured"
                  ? "bg-neutral-800 text-white shadow-xs"
                  : "text-neutral-700 hover:text-neutral-900"
              }`}
            >
              <BsViewStacked className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.viewModeFeatured}</span>
            </button>
            <button
              onClick={() => setViewMode("compare")}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === "compare"
                  ? "bg-neutral-800 text-white shadow-xs"
                  : "text-neutral-700 hover:text-neutral-900"
              }`}
            >
              <BsGridFill className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.viewModeCompare}</span>
            </button>
          </div>
        </div>

        {/* --- MAIN CENTER STAGE --- */}
        {viewMode === "featured" ? (
          /* FEATURED SINGLE SERVICE HERO STAGE */
          <div className="w-full flex-1 my-2 min-h-0 overflow-y-auto pr-1 flex flex-col gap-2.5">
            {/* Service Identity Banner */}
            <div className="p-3 md:p-3.5 bg-white/95 rounded-2xl border border-neutral-300/90 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-neutral-900 text-white rounded-xl shadow-xs shrink-0">
                  {getServiceIcon(selectedService.icon, "w-6 h-6 text-red-500")}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] md:text-xs font-extrabold px-2 py-0.5 rounded bg-red-600 text-white tracking-wider">
                      SERVICE #{selectedService.number}
                    </span>
                    <span className="text-[10px] md:text-xs font-bold text-neutral-600 uppercase tracking-wider">
                      {selectedService.category[language] ||
                        selectedService.category.bn ||
                        selectedService.category.en}
                    </span>
                  </div>
                  <h2 className="text-base md:text-xl font-black text-neutral-900 leading-tight mt-0.5">
                    {selectedService.title[language] ||
                      selectedService.title.bn ||
                      selectedService.title.en}
                  </h2>
                </div>
              </div>

              {/* Direct Hire Button */}
              <button
                onClick={handleDiscussClick}
                className="self-start sm:self-auto px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs md:text-sm rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2 shrink-0"
              >
                <span>{t.discussProject}</span>
                <BsArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Overview / "সহজ কথায়" Quote Card */}
            <div className="p-3 bg-neutral-100/90 rounded-xl border-l-4 border-red-500 border-neutral-300 shadow-xs">
              <div className="flex items-center gap-1.5 text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
                <BsStars className="w-3.5 h-3.5" />
                <span>{t.overviewHeading}</span>
              </div>
              <p className="text-xs md:text-sm text-neutral-800 leading-relaxed font-medium">
                {selectedService.easyExplanation[language] ||
                  selectedService.easyExplanation.bn ||
                  selectedService.easyExplanation.en}
              </p>
            </div>

            {/* Key Deliverables - 2x2 Clean Grid */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 text-xs font-extrabold text-neutral-900 uppercase tracking-wider px-1">
                <BsLightningChargeFill className="w-3.5 h-3.5 text-red-600" />
                <span>{t.deliverablesHeading}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {selectedService.features.map((feat, idx) => {
                  const fTitle = feat.title[language] || feat.title.bn || feat.title.en;
                  const fDesc = feat.desc[language] || feat.desc.bn || feat.desc.en;
                  return (
                    <div
                      key={idx}
                      className="p-2.5 md:p-3 bg-white/90 rounded-xl border border-neutral-300/80 shadow-2xs hover:border-red-400 transition-colors flex flex-col gap-1"
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

            {/* Client ROI Callout Banner */}
            <div className="p-2.5 md:p-3 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-xl border border-amber-500/30 shadow-2xs">
              <span className="text-[11px] md:text-xs font-black text-amber-900 uppercase tracking-wider block mb-0.5">
                🏆 {t.clientRoiHeading}
              </span>
              <p className="text-xs md:text-sm text-amber-950 font-semibold leading-relaxed">
                {selectedService.clientRoi[language] ||
                  selectedService.clientRoi.bn ||
                  selectedService.clientRoi.en}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="p-2.5 bg-white/80 rounded-xl border border-neutral-300 flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-wider mr-1">
                {t.techStackHeading}:
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
        ) : (
          /* COMPARE 3 SERVICES SIDE-BY-SIDE GRID */
          <div className="w-full flex-1 my-2 min-h-0 overflow-y-auto pr-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 h-full">
              {servicesData.map((svc) => {
                const title = svc.title[language] || svc.title.bn || svc.title.en;
                const shortSum =
                  svc.shortSummary[language] || svc.shortSummary.bn || svc.shortSummary.en;
                const isCurrent = svc.id === selectedServiceId;

                return (
                  <div
                    key={svc.id}
                    onClick={() => {
                      setSelectedServiceId(svc.id);
                      setViewMode("featured");
                    }}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-md ${
                      isCurrent
                        ? "bg-white border-2 border-red-500"
                        : "bg-white/90 border-neutral-300 hover:border-neutral-400"
                    }`}
                  >
                    <div>
                      {/* Top Bar */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-neutral-800 text-white">
                          #{svc.number}
                        </span>
                        <div className="p-1.5 bg-neutral-100 rounded-lg text-neutral-800">
                          {getServiceIcon(svc.icon, "w-4 h-4 text-red-500")}
                        </div>
                      </div>

                      <h3 className="text-xs md:text-sm font-bold text-neutral-900 leading-snug mb-1.5">
                        {title}
                      </h3>

                      <p className="text-[11px] text-neutral-600 leading-relaxed mb-2.5 line-clamp-3">
                        {shortSum}
                      </p>

                      {/* Top 3 Features */}
                      <div className="space-y-1 pt-2 border-t border-neutral-200">
                        {svc.features.slice(0, 3).map((f, i) => {
                          const fTitle = f.title[language] || f.title.bn || f.title.en;
                          return (
                            <div key={i} className="flex items-center gap-1.5 text-[10px] text-neutral-700">
                              <BsCheckCircleFill className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                              <span className="truncate">{fTitle}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-xs font-bold text-red-600 mt-2">
                      <span>{t.exploreDetails}</span>
                      <BsArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* --- BOTTOM SERVICE SELECTOR DOCK --- */}
        <div className="w-full pt-1.5 border-t border-neutral-300/80 shrink-0">
          <p className="text-[11px] md:text-xs text-neutral-500 mb-1.5 font-bold tracking-tight">
            {t.selectService}
          </p>

          <div className="grid grid-cols-3 gap-2 w-full">
            {servicesData.map((svc) => {
              const isSelected = selectedService.id === svc.id;
              const shortT =
                svc.shortTitle?.[language] ||
                svc.shortTitle?.bn ||
                svc.shortTitle?.en ||
                svc.title[language] ||
                svc.title.en;

              return (
                <button
                  key={svc.id}
                  onClick={() => {
                    setSelectedServiceId(svc.id);
                    setViewMode("featured");
                  }}
                  className={`p-2 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between border ${
                    isSelected
                      ? "bg-neutral-800 text-white border-neutral-900 shadow-md scale-[1.02]"
                      : "bg-white/80 text-neutral-800 border-neutral-300 hover:bg-white hover:border-neutral-400"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span
                      className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded ${
                        isSelected
                          ? "bg-red-600 text-white"
                          : "bg-neutral-200 text-neutral-700"
                      }`}
                    >
                      #{svc.number}
                    </span>
                    <div className={isSelected ? "text-red-400" : "text-neutral-500"}>
                      {getServiceIcon(svc.icon, "w-3.5 h-3.5")}
                    </div>
                  </div>

                  <span className="text-xs md:text-sm font-bold truncate block leading-tight">
                    {shortT}
                  </span>

                  <span
                    className={`text-[9px] md:text-[10px] truncate block mt-0.5 ${
                      isSelected ? "text-neutral-300" : "text-neutral-500"
                    }`}
                  >
                    {svc.tags}
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
