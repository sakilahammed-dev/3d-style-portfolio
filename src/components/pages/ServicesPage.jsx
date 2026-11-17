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
} from "react-icons/bs";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

export default function ServicesPage({ language = "bn", setTarget }) {
  // null means show the 3-service catalog cards; a service id means show that service's inside detail view
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const selectedService = servicesData.find((s) => s.id === selectedServiceId);

  const content = {
    bn: {
      catalogBadge: "সলিউশন ও সার্ভিসেস ক্যাটালগ",
      catalogTitle: "সার্ভিসেস ও সলিউশনস",
      catalogSub: "আপনার ব্যবসার প্রবৃদ্ধি, সফটওয়্যার ও অটোমেশনের ৩টি বিশেষায়িত সেবা",
      exploreDetails: "বিস্তারিত ও সুফল দেখুন",
      backToList: "← সকল সার্ভিসে ফিরে যান",
      overviewHeading: "সহজ কথায় (Executive Overview)",
      deliverablesHeading: "আমি কী কী তৈরি ও ডেলিভারি করব (Key Deliverables)",
      clientRoiHeading: "ক্লায়েন্টের লাভ (Client ROI & Impact)",
      techStackHeading: "ব্যবহৃত টুলস ও প্রযুক্তি",
      discussProject: "এই সার্ভিসটি নিয়ে আলোচনা করুন",
      contactNotice: "সরাসরি যোগাযোগ ও বাজেট আলোচনার জন্য ক্লিক করুন",
      bottomBackHint: "অন্যান্য সার্ভিস দেখতে ব্যাক বাটনে ক্লিক করুন",
      serviceNumber: "সার্ভিস",
    },
    en: {
      catalogBadge: "Solutions & Services Catalog",
      catalogTitle: "Services & Solutions",
      catalogSub: "High-impact web engineering, intelligent AI workflows & media production",
      exploreDetails: "Explore Details & ROI",
      backToList: "← Back to All Services",
      overviewHeading: "In Plain Words (Executive Overview)",
      deliverablesHeading: "What I Build & Deliver (Key Deliverables)",
      clientRoiHeading: "Client ROI & Business Impact",
      techStackHeading: "Tools & Technologies",
      discussProject: "Discuss This Project / Hire Me",
      contactNotice: "Connect directly to launch your project or get a free estimate",
      bottomBackHint: "Click back to explore other services",
      serviceNumber: "SERVICE",
    },
    es: {
      catalogBadge: "Catálogo de Servicios y Soluciones",
      catalogTitle: "Servicios y Soluciones",
      catalogSub: "Ingeniería web de alto impacto, automatización con IA y producción multimedia",
      exploreDetails: "Ver Detalles y Beneficios",
      backToList: "← Volver a Todos los Servicios",
      overviewHeading: "En palabras simples",
      deliverablesHeading: "Servicios y Capacidades Clave",
      clientRoiHeading: "Beneficios e Impacto para el Cliente",
      techStackHeading: "Herramientas y Tecnologías",
      discussProject: "Consultar por este servicio",
      contactNotice: "Contáctame para iniciar tu proyecto o solicitar presupuesto",
      bottomBackHint: "Haz clic atrás para ver otros servicios",
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
  // VIEW 2: SERVICE DETAIL VIEW (ভেতরের বিস্তারিত ভিউ — স্পষ্ট ব্যাক বাটন সহ)
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
              className="flex items-center gap-2 px-3.5 py-2 bg-neutral-900 hover:bg-red-600 text-white rounded-xl text-xs md:text-sm font-bold shadow-md transition-all hover:scale-105 cursor-pointer group"
              title="Return to 3 Services List"
            >
              <BsArrowLeft className="w-4 h-4 text-red-400 group-hover:text-white transition-colors" />
              <span>{t.backToList}</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-[10px] md:text-xs font-extrabold px-2 py-0.5 rounded bg-red-600 text-white tracking-wider">
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
                <div className="p-2.5 bg-neutral-900 text-white rounded-xl shadow-xs shrink-0">
                  {getServiceIcon(selectedService.icon, "w-6 h-6 text-red-500")}
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
                className="self-start sm:self-auto px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs md:text-sm rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2 shrink-0"
              >
                <span>{t.discussProject}</span>
                <BsArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Overview / "সহজ কথায়" Highlight Card */}
            <div className="p-3 bg-neutral-100/90 rounded-xl border-l-4 border-red-500 border-neutral-300 shadow-xs">
              <div className="flex items-center gap-1.5 text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
                <BsStars className="w-3.5 h-3.5" />
                <span>{t.overviewHeading}</span>
              </div>
              <p className="text-xs md:text-sm text-neutral-800 leading-relaxed font-medium">
                {easyExp}
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
                {roi}
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

          {/* Bottom Bar: Second Back Button */}
          <div className="w-full pt-2 border-t border-neutral-300/80 shrink-0 flex items-center justify-between">
            <button
              onClick={() => setSelectedServiceId(null)}
              className="flex items-center gap-2 px-3 py-1.5 bg-neutral-800 hover:bg-red-600 text-white rounded-lg text-xs font-bold transition-all cursor-pointer"
            >
              <BsArrowLeft className="w-3.5 h-3.5 text-red-400" />
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
  // VIEW 1: SERVICES CATALOG (৩টি সার্ভিসের মূল সুন্দর ক্যাটালগ কার্ডস)
  // =========================================================================
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
                <span className="text-[10px] md:text-xs font-bold px-2 py-0.5 rounded bg-red-600 text-white uppercase tracking-wider">
                  {t.catalogBadge}
                </span>
                <h1 className="text-lg md:text-2xl font-black tracking-tight text-neutral-900 leading-none">
                  {t.catalogTitle}
                </h1>
              </div>
              <p className="text-[11px] md:text-xs text-neutral-600 truncate max-w-xl mt-0.5">
                {t.catalogSub}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Services Cards Grid - Full Height Utilization */}
        <div className="w-full flex-1 my-2.5 min-h-0 overflow-y-auto pr-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-full">
            {servicesData.map((svc) => {
              const title = svc.title[language] || svc.title.bn || svc.title.en;
              const category = svc.category[language] || svc.category.bn || svc.category.en;
              const shortSum =
                svc.shortSummary[language] || svc.shortSummary.bn || svc.shortSummary.en;

              return (
                <div
                  key={svc.id}
                  onClick={() => setSelectedServiceId(svc.id)}
                  className="group relative p-3 md:p-4 bg-white/95 rounded-2xl border border-neutral-300 hover:border-red-500 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    {/* Top Bar with Number & Icon */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-extrabold text-xs px-2 py-0.5 rounded bg-neutral-900 text-white group-hover:bg-red-600 transition-colors tracking-wider">
                        #{svc.number}
                      </span>
                      <div className="p-1.5 bg-neutral-100 rounded-lg group-hover:bg-red-50 transition-colors">
                        {getServiceIcon(svc.icon, "w-5 h-5 text-red-500")}
                      </div>
                    </div>

                    {/* Category Pill */}
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-100 block w-fit mb-1.5">
                      {category}
                    </span>

                    {/* Title */}
                    <h3 className="text-sm md:text-base font-extrabold text-neutral-900 mb-2 leading-snug group-hover:text-red-600 transition-colors">
                      {title}
                    </h3>

                    {/* Summary */}
                    <p className="text-[11px] md:text-xs text-neutral-600 leading-relaxed mb-3 line-clamp-3">
                      {shortSum}
                    </p>

                    {/* Key Capability Points */}
                    <div className="space-y-1.5 pt-2 border-t border-neutral-200 text-[11px] text-neutral-700 font-medium">
                      {svc.features.slice(0, 3).map((f, i) => {
                        const fTitle = f.title[language] || f.title.bn || f.title.en;
                        return (
                          <div key={i} className="flex items-start gap-1.5">
                            <BsCheckCircleFill className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="truncate leading-tight">{fTitle}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Prominent Action Button: Click to Go Inside */}
                  <div className="mt-3 pt-2.5 border-t border-neutral-200">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedServiceId(svc.id);
                      }}
                      className="w-full py-2 px-3 bg-neutral-900 group-hover:bg-red-600 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                    >
                      <span>{t.exploreDetails}</span>
                      <BsArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Status / Guidance Bar */}
        <div className="w-full pt-1.5 border-t border-neutral-300/80 shrink-0 flex items-center justify-between text-[11px] text-neutral-600 font-semibold">
          <span>💡 যেকোনো সার্ভিসের পূর্ণাঙ্গ তথ্য ও লাভ দেখতে কার্ডে ক্লিক করুন</span>
          <span className="hidden sm:inline text-neutral-500">৩টি প্রিমিয়ার সার্ভিস ক্যাটালগ</span>
        </div>
      </div>
    </div>
  );
}
