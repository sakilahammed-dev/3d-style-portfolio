import { useState, useEffect } from "react";
import { projects } from "../../utils/projectsData";
import { BsGithub, BsArrowLeft, BsGlobe } from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import TechCarousel from "../ui/TechCarousel.jsx";

const ITEMS_PER_PAGE = 9;

export default function ProjectsPage({
  language,
  target,
  cameraReset,
  navKey,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Always reset to initial projects grid whenever user navigates or leaves
  useEffect(() => {
    setSelectedProject(null);
    setActiveImageIndex(0);
  }, [target, cameraReset, navKey]);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const content = {
    en: {
      projectsTitle: "Projects",
      back: "Back",
      prev: "Prev",
      next: "Next",
      page: "Page",
      of: "of",
      viewCode: "GitHub Source",
      liveDemo: "Live Website",
    },
    es: {
      projectsTitle: "Proyectos",
      back: "Volver",
      prev: "Anterior",
      next: "Siguiente",
      page: "Página",
      of: "de",
      viewCode: "Código GitHub",
      liveDemo: "Sitio Web",
    },
    bn: {
      projectsTitle: "Projects",
      back: "Back",
      prev: "পূর্ববর্তী",
      next: "পরবর্তী",
      page: "পৃষ্ঠা",
      of: "এর",
      viewCode: "GitHub এর সোর্স",
      liveDemo: "Live Website দেখুন",
    },
  };

  const t = content[language] || content.bn || content.en;

  // Single Project Clean & Crystal-Clear Showcase View
  if (selectedProject) {
    const images = selectedProject.images || [];
    const currentImg =
      images[activeImageIndex] ||
      images[0] || {
        src: selectedProject.can,
        alt: selectedProject.title,
      };

    const handlePrev = (e) => {
      e?.stopPropagation();
      setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = (e) => {
      e?.stopPropagation();
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    };

    const detailed =
      selectedProject.detailedDescription?.[language] ||
      selectedProject.detailedDescription?.bn ||
      selectedProject.detailedDescription?.en;

    return (
      <div className="font-mono w-full h-full relative bg-neutral-200 select-none text-xl md:text-3xl text-neutral-800">
        <div className="absolute w-full h-full bg-grid"></div>

        <div className="absolute w-full h-full p-6 flex flex-col items-center justify-between gap-3 border border-neutral-300">
          {/* Top Bar: Title & Date */}
          <div className="w-full flex items-center justify-between pb-2 border-b border-neutral-300/80">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 truncate px-1">
              {selectedProject.title}
            </h1>

            <span className="text-base md:text-xl text-neutral-600 font-medium px-1">
              {selectedProject.date?.[language] || selectedProject.date?.bn || selectedProject.date?.en}
            </span>
          </div>

          {/* Prominent High-Resolution Showcase Image */}
          <div className={`relative w-full ${detailed ? "h-[32%]" : "h-[45%]"} flex items-center justify-center overflow-hidden shrink-0`}>
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl shadow-neutral-500/30 border-2 border-neutral-50 bg-neutral-100 flex items-center justify-center">
              <img
                src={currentImg.src}
                alt={currentImg.alt || selectedProject.title}
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>

            {/* Slider arrows and dots only when there are multiple images */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-900/50 hover:bg-neutral-900/80 text-white backdrop-blur-xs transition-colors cursor-pointer"
                >
                  <MdKeyboardArrowLeft className="w-8 h-8 md:w-12 md:h-12" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-900/50 hover:bg-neutral-900/80 text-white backdrop-blur-xs transition-colors cursor-pointer"
                >
                  <MdKeyboardArrowRight className="w-8 h-8 md:w-12 md:h-12" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-3 flex gap-2 items-center justify-center px-3 py-1 rounded-full bg-neutral-900/60 backdrop-blur-xs">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        activeImageIndex === idx
                          ? "bg-white w-6"
                          : "bg-white/50 hover:bg-white/80 w-2.5"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Project Details Content Area */}
          {detailed ? (
            <div className="flex-1 w-full overflow-y-auto pr-2 flex flex-col gap-4 text-left font-sans text-neutral-800">
              {detailed.systems ? (
                <>
                  {/* Overview & Vision */}
                  {detailed.overview && (
                    <div className="bg-white/85 p-5 md:p-6 rounded-2xl border border-neutral-300 shadow-xs flex flex-col gap-2.5">
                      <h3 className="font-bold text-neutral-900 text-lg md:text-2xl flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                        <span>{detailed.overviewTitle || (language === "bn" ? "Overview & Vision / পরিচিতি ও ভিশন" : "Overview & Vision")}</span>
                      </h3>
                      <div className="space-y-2 text-base md:text-xl text-neutral-700 leading-relaxed font-normal">
                        {Array.isArray(detailed.overview) ? (
                          detailed.overview.map((para, i) => (
                            <p key={i}>{para}</p>
                          ))
                        ) : (
                          <p>{detailed.overview}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Problem & Solution Cards */}
                  {(detailed.problem || detailed.solution) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {detailed.problem && (
                        <div className="bg-rose-50/80 p-4 md:p-5 rounded-2xl border border-rose-200/80 shadow-xs flex flex-col gap-2">
                          <h4 className="font-bold text-rose-900 text-base md:text-xl flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                            <span>{detailed.problemTitle || (language === "bn" ? "The Problem / বাস্তব সমস্যা" : "The Problem")}</span>
                          </h4>
                          <p className="text-sm md:text-lg text-rose-950/80 leading-relaxed font-normal">
                            {detailed.problem}
                          </p>
                        </div>
                      )}

                      {detailed.solution && (
                        <div className="bg-emerald-50/80 p-4 md:p-5 rounded-2xl border border-emerald-200/80 shadow-xs flex flex-col gap-2">
                          <h4 className="font-bold text-emerald-900 text-base md:text-xl flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                            <span>{detailed.solutionTitle || (language === "bn" ? "The Solution / প্রকৌশলগত সমাধান" : "The Solution")}</span>
                          </h4>
                          <p className="text-sm md:text-lg text-emerald-950/80 leading-relaxed font-normal">
                            {detailed.solution}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Core Engineering Systems */}
                  <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-neutral-900 text-lg md:text-2xl flex items-center gap-2 px-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-800"></span>
                      <span>{detailed.systemsTitle || (language === "bn" ? "Core Engineering Systems / মূল প্রযুক্তিগত কাঠামো" : "Core Engineering Systems")}</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {detailed.systems.map((sys, idx) => (
                        <div
                          key={idx}
                          className="bg-white/85 p-4 md:p-5 rounded-2xl border border-neutral-300 shadow-xs flex flex-col gap-2"
                        >
                          <div className="flex items-center justify-between gap-2 border-b border-neutral-200 pb-2">
                            <span className="text-xs md:text-sm font-mono font-bold px-2 py-0.5 rounded-md bg-neutral-900 text-white">
                              {sys.num}
                            </span>
                            <span className="text-xs md:text-sm font-mono text-neutral-500 truncate">
                              {sys.sub}
                            </span>
                          </div>
                          <h4 className="font-bold text-base md:text-xl text-neutral-900 leading-snug">
                            {sys.title}
                          </h4>
                          <p className="text-sm md:text-lg text-neutral-600 leading-relaxed font-normal">
                            {sys.desc}
                          </p>
                          {sys.points && (
                            <ul className="mt-1 space-y-1.5 border-t border-neutral-100 pt-2 text-xs md:text-base text-neutral-700">
                              {sys.points.map((pt, pIdx) => (
                                <li key={pIdx} className="flex items-start gap-1.5">
                                  <span className="text-emerald-700 font-bold shrink-0">—</span>
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  {detailed.techList && (
                    <div className="bg-white/85 p-4 md:p-5 rounded-2xl border border-neutral-300 shadow-xs flex flex-col gap-2.5">
                      <h3 className="font-bold text-neutral-900 text-base md:text-xl flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        <span>{detailed.techTitle || (language === "bn" ? "Technologies Used / ব্যবহৃত প্রযুক্তি" : "Technologies Used")}</span>
                      </h3>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {detailed.techList.map((tName, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 bg-neutral-800 text-neutral-100 text-xs md:text-base font-mono rounded-xl shadow-2xs font-medium"
                          >
                            {tName}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                /* Fallback for other simple detailed views */
                <>
                  <div className="bg-white/70 p-4 rounded-2xl border border-neutral-300 shadow-xs">
                    <p className="text-base md:text-xl font-medium leading-relaxed text-neutral-800">
                      {detailed.intro}
                    </p>
                  </div>

                  {detailed.categories && (
                    <div className="bg-white/80 p-4 rounded-2xl border border-neutral-300 shadow-xs">
                      <h3 className="font-bold text-neutral-900 text-lg md:text-2xl mb-2 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                        {language === "bn" ? "আমাদের বিশেষ খাদ্যপণ্যসমূহ:" : "Core Premium Offerings:"}
                      </h3>
                      <ul className="space-y-2 text-base md:text-xl text-neutral-700">
                        {detailed.categories.map((cat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-700 font-bold text-lg">•</span>
                            <span>{cat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {detailed.techDetails && (
                    <div className="bg-white/80 p-4 rounded-2xl border border-neutral-300 shadow-xs">
                      <h3 className="font-bold text-neutral-900 text-lg md:text-2xl mb-2 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                        {language === "bn" ? "প্রযুক্তিগত বৈশিষ্ট্য ও বিশেষত্ব:" : "Technical Architecture & Highlights:"}
                      </h3>
                      <ul className="space-y-2 text-base md:text-xl text-neutral-700">
                        {detailed.techDetails.map((td, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-700 font-bold text-lg">•</span>
                            <span>{td}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          ) : (
            <>
              {/* Clean & Crisp Description */}
              <p className="text-center text-lg md:text-2xl text-neutral-800 leading-relaxed px-4 max-w-[95%]">
                {selectedProject.description?.[language] ||
                  selectedProject.description?.en}
              </p>

              {/* Smooth Sliding Tech Stack Ticker */}
              {selectedProject.tech && (
                <div className="w-full py-1">
                  <TechCarousel icons={selectedProject.tech} />
                </div>
              )}
            </>
          )}

          {/* Bottom Action Buttons: Back, GitHub Source, Live Website */}
          <div className="flex gap-4 w-full justify-center p-2 shrink-0">
            <button
              onClick={() => {
                setSelectedProject(null);
                setActiveImageIndex(0);
              }}
              className="flex-1 font-mono flex gap-2 items-center justify-center p-3.5 rounded-2xl shadow-md shadow-neutral-400 hover:scale-105 transition-transform bg-neutral-200/90 border border-neutral-50 text-base md:text-xl font-bold cursor-pointer text-neutral-800"
            >
              <BsArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
              <span>{t.back}</span>
            </button>

            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 font-mono flex gap-2 items-center justify-center p-3.5 rounded-2xl shadow-md shadow-neutral-500 hover:scale-105 transition-transform bg-neutral-900 text-white text-base md:text-xl font-bold"
              >
                <BsGithub className="w-5 h-5 md:w-6 md:h-6" />
                <span>{t.viewCode}</span>
              </a>
            )}

            {selectedProject.homepage && (
              <a
                href={selectedProject.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 font-mono flex gap-2 items-center justify-center p-3.5 rounded-2xl shadow-md shadow-neutral-500 hover:scale-105 transition-transform bg-emerald-700 text-white text-base md:text-xl font-bold"
              >
                <BsGlobe className="w-5 h-5 md:w-6 md:h-6" />
                <span>{t.liveDemo}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Grid view (3x3 Vending Machine Shelves - 1st 3 projects)
  return (
    <div className="w-full h-full relative bg-neutral-200 select-none font-mono text-2xl md:text-3xl text-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none"></div>
      <div className="absolute inset-0 font-mono p-6 md:p-8 flex flex-col justify-between gap-3 border border-neutral-300">
        {/* Top Header Bar - Exact Match with Services */}
        <div className="w-full flex items-center justify-between pb-2 border-b border-neutral-300/80 shrink-0 text-left">
          <h1 className="text-2xl md:text-4xl font-black tracking-tight text-neutral-900">
            {t.projectsTitle || "Projects"}
          </h1>
        </div>

        <div className="w-full flex-1 grid grid-cols-3 grid-rows-3 gap-3 md:gap-4 min-h-0">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedProject(project);
                setActiveImageIndex(0);
              }}
              className="flex flex-col shadow-lg shadow-neutral-400/70 bg-neutral-100/90 backdrop-blur-xs items-center justify-between p-3 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all border border-neutral-300/80 group"
            >
              <div className="w-full h-[76%] rounded-xl overflow-hidden flex items-center justify-center bg-white/60 border border-neutral-200/80">
                <img
                  src={project.can}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="h-[24%] flex items-center justify-center p-1 font-mono font-bold text-base md:text-2xl text-neutral-800 tracking-tight truncate w-full">
                {project.title}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex gap-4 justify-center items-center mt-1 shrink-0">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-xl shadow-md ${
              currentPage === 1
                ? "bg-neutral-400 cursor-not-allowed"
                : "bg-neutral-100 hover:bg-neutral-300"
            }`}
          >
            {t.prev}
          </button>

          <span className="flex items-center text-lg md:text-xl">
            {t.page} {currentPage} {t.of} {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-xl shadow-md ${
              currentPage === totalPages
                ? "bg-neutral-400 cursor-not-allowed"
                : "bg-neutral-100 hover:bg-neutral-300"
            }`}
          >
            {t.next}
          </button>
        </div>
      </div>
    </div>
  );
}
