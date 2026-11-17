import { useState } from "react";
import { servicesData } from "../../utils/servicesData.js";
import {
  BsCodeSlash,
  BsCpu,
  BsCollectionPlayFill,
  BsCheckCircleFill,
  BsArrowLeft,
  BsLightningChargeFill,
  BsStars,
  BsChatDotsFill,
  BsArrowRight,
} from "react-icons/bs";

export default function ServicesPage({ language = "bn", setTarget }) {
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const selectedService = servicesData.find((s) => s.id === selectedServiceId);

  const content = {
    bn: {
      catalogTitle: "সার্ভিসেস ক্যাটালগ",
      catalogSub: "আপনার ব্যবসার অটোমেশন, সফটওয়্যার ও প্রবৃদ্ধির জন্য বিশ্বমানের সেবা",
      exploreDetails: "বিস্তারিত ও সুফল দেখুন",
      backToList: "সকল সার্ভিসে ফিরে যান",
      overviewHeading: "সহজ কথায় (Overview)",
      deliverablesHeading: "আমি কী কী সেবা দিতে পারব (Deliverables)",
      clientRoiHeading: "ক্লায়েন্টের লাভ (Client ROI & Benefits)",
      techStackHeading: "টুলস ও প্রযুক্তি (Technologies)",
      discussProject: "এই সার্ভিসটি নিয়ে আলোচনা করুন",
      contactNotice: "সরাসরি যোগাযোগ ও প্রোজেক্ট শুরুর জন্য কন্টাক্ট ফর্মে যান",
    },
    en: {
      catalogTitle: "Services Catalog",
      catalogSub: "High-impact web engineering, intelligent AI workflows & media production",
      exploreDetails: "Explore Capabilities & ROI",
      backToList: "Back to All Services",
      overviewHeading: "In Plain Words (Overview)",
      deliverablesHeading: "What I Deliver (Key Capabilities)",
      clientRoiHeading: "Client ROI & Business Impact",
      techStackHeading: "Technologies & Tooling",
      discussProject: "Discuss This Service / Hire Me",
      contactNotice: "Connect directly to launch your project or get a free estimate",
    },
    es: {
      catalogTitle: "Catálogo de Servicios",
      catalogSub: "Soluciones de software, automatización e inteligencia artificial",
      exploreDetails: "Ver detalles y beneficios",
      backToList: "Volver a Servicios",
      overviewHeading: "En palabras simples",
      deliverablesHeading: "Servicios y Capacidades",
      clientRoiHeading: "Beneficios para el Cliente",
      techStackHeading: "Tecnologías",
      discussProject: "Consultar por este servicio",
      contactNotice: "Contáctame para iniciar tu proyecto o solicitar presupuesto",
    },
  };

  const t = content[language] || content.bn || content.en;

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case "code":
        return <BsCodeSlash className="w-6 h-6 text-red-500" />;
      case "gear":
        return <BsCpu className="w-6 h-6 text-red-500" />;
      case "video":
        return <BsCollectionPlayFill className="w-6 h-6 text-red-500" />;
      default:
        return <BsStars className="w-6 h-6 text-red-500" />;
    }
  };

  const handleDiscussClick = () => {
    if (typeof setTarget === "function") {
      setTarget("Contact_Red_Text_Target");
    } else if (typeof window.__navigateToTarget === "function") {
      window.__navigateToTarget("Contact_Red_Text_Target");
    }
  };

  // --- DETAIL VIEW ---
  if (selectedService) {
    const title =
      selectedService.title[language] || selectedService.title.bn || selectedService.title.en;
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
      <div className="select-none relative w-full h-full bg-neutral-200 text-neutral-900 font-mono overflow-y-auto">
        <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none"></div>

        <div className="relative z-10 p-4 md:p-6 flex flex-col gap-4 max-w-4xl mx-auto">
          {/* Top Bar: Back button & Category */}
          <div className="flex items-center justify-between border-b border-neutral-300 pb-3">
            <button
              onClick={() => setSelectedServiceId(null)}
              className="flex items-center gap-2 px-3 py-1.5 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors text-xs md:text-sm font-semibold cursor-pointer shadow-sm"
            >
              <BsArrowLeft className="w-4 h-4" />
              <span>{t.backToList}</span>
            </button>
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-100/80 px-2.5 py-1 rounded-md border border-red-200">
              {category}
            </span>
          </div>

          {/* Service Title */}
          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-neutral-800 rounded-xl text-white shrink-0 shadow-md">
              {getServiceIcon(selectedService.icon)}
            </div>
            <div>
              <span className="text-xs font-bold text-neutral-500 tracking-widest">
                SERVICE {selectedService.number}
              </span>
              <h1 className="text-xl md:text-2xl font-extrabold text-neutral-900 leading-tight">
                {title}
              </h1>
            </div>
          </div>

          {/* Section 1: Easy Explanation / Overview */}
          <div className="p-3.5 md:p-4 bg-white/80 backdrop-blur-xs rounded-xl border border-neutral-300 shadow-sm">
            <h2 className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <BsStars className="w-3.5 h-3.5" />
              {t.overviewHeading}
            </h2>
            <p className="text-xs md:text-sm leading-relaxed text-neutral-800 font-medium">
              {easyExp}
            </p>
          </div>

          {/* Section 2: Core Deliverables */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xs md:text-sm font-bold text-neutral-900 uppercase tracking-wider flex items-center gap-2">
              <BsLightningChargeFill className="w-3.5 h-3.5 text-red-600" />
              {t.deliverablesHeading}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {selectedService.features.map((feat, idx) => {
                const fTitle = feat.title[language] || feat.title.bn || feat.title.en;
                const fDesc = feat.desc[language] || feat.desc.bn || feat.desc.en;
                return (
                  <div
                    key={idx}
                    className="p-3 bg-neutral-100/90 rounded-xl border border-neutral-300 hover:border-red-400/60 transition-colors shadow-xs flex flex-col gap-1"
                  >
                    <div className="flex items-start gap-2">
                      <BsCheckCircleFill className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <h3 className="text-xs md:text-sm font-bold text-neutral-900 leading-snug">
                        {fTitle}
                      </h3>
                    </div>
                    <p className="text-[11px] md:text-xs leading-relaxed text-neutral-700 pl-6">
                      {fDesc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Client ROI Callout */}
          <div className="p-3.5 md:p-4 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-xl shadow-xs">
            <h3 className="text-xs md:text-sm font-bold text-amber-900 uppercase tracking-wider mb-1">
              🏆 {t.clientRoiHeading}
            </h3>
            <p className="text-xs md:text-sm text-amber-950 font-semibold leading-relaxed">
              {roi}
            </p>
          </div>

          {/* Section 4: Tech Stack */}
          <div className="p-3 bg-white/70 rounded-xl border border-neutral-300">
            <h3 className="text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
              ⚙️ {t.techStackHeading}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {selectedService.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-neutral-800 text-white rounded-md text-[11px] font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Section 5: Direct CTA to Contact */}
          <div className="p-4 bg-neutral-800 text-white rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left mt-1">
            <div>
              <p className="font-bold text-sm md:text-base">{t.discussProject}</p>
              <p className="text-neutral-400 text-xs">{t.contactNotice}</p>
            </div>
            <button
              onClick={handleDiscussClick}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs md:text-sm rounded-lg transition-transform hover:scale-105 cursor-pointer shadow-md shrink-0 flex items-center gap-2"
            >
              <span>{t.discussProject}</span>
              <BsArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- CATALOG LIST VIEW ---
  return (
    <div className="select-none relative w-full h-full bg-neutral-200 text-neutral-900 font-mono overflow-y-auto">
      <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none"></div>

      <div className="relative z-10 p-4 md:p-6 flex flex-col gap-4 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center border-b border-neutral-300 pb-3">
          <div className="inline-block px-3 py-0.5 bg-red-600 text-white text-[11px] font-bold rounded-full mb-1 tracking-wider uppercase">
            Solutions & Services
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight">
            {t.catalogTitle}
          </h1>
          <p className="text-xs md:text-sm text-neutral-600 mt-0.5 max-w-xl mx-auto">
            {t.catalogSub}
          </p>
        </div>

        {/* 3 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {servicesData.map((svc) => {
            const title = svc.title[language] || svc.title.bn || svc.title.en;
            const category = svc.category[language] || svc.category.bn || svc.category.en;
            const shortSum = svc.shortSummary[language] || svc.shortSummary.bn || svc.shortSummary.en;

            return (
              <div
                key={svc.id}
                onClick={() => setSelectedServiceId(svc.id)}
                className="group relative p-4 bg-white/90 backdrop-blur-xs rounded-2xl border border-neutral-300 hover:border-red-500 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-extrabold text-xs text-neutral-400 group-hover:text-red-600 transition-colors tracking-wider">
                      #{svc.number}
                    </span>
                    <div className="p-2 bg-neutral-100 rounded-lg group-hover:bg-red-50 transition-colors">
                      {getServiceIcon(svc.icon)}
                    </div>
                  </div>

                  {/* Category Pill */}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-100">
                    {category}
                  </span>

                  {/* Title */}
                  <h3 className="text-base font-bold text-neutral-900 mt-2 mb-1.5 leading-snug group-hover:text-red-600 transition-colors">
                    {title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3 mb-3">
                    {shortSum}
                  </p>
                </div>

                <div>
                  {/* Quick Feature Bullets */}
                  <div className="space-y-1 mb-3 pt-2 border-t border-neutral-200 text-[11px] text-neutral-700 font-medium">
                    {svc.features.slice(0, 2).map((f, i) => {
                      const fTitle = f.title[language] || f.title.bn || f.title.en;
                      return (
                        <div key={i} className="flex items-center gap-1.5 truncate">
                          <BsCheckCircleFill className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span className="truncate">{fTitle}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center justify-between pt-2 border-t border-neutral-200 text-xs font-bold text-red-600 group-hover:text-red-700">
                    <span>{t.exploreDetails}</span>
                    <BsArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
