import { useState } from "react";
import { projects } from "../../utils/projectsData";
import { BsGithub, BsArrowLeft, BsGlobe } from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import TechCarousel from "../ui/TechCarousel.jsx";

const ITEMS_PER_PAGE = 9;

export default function ProjectsPage({ language }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const content = {
    en: {
      back: "Back to Projects",
      prev: "Prev",
      next: "Next",
      page: "Page",
      of: "of",
      viewCode: "GitHub",
      liveDemo: "Live Demo",
    },
    es: {
      back: "Volver",
      prev: "Anterior",
      next: "Siguiente",
      page: "Página",
      of: "de",
      viewCode: "GitHub",
      liveDemo: "Ver Demo",
    },
    bn: {
      back: "তালিকায় ফিরুন",
      prev: "পূর্ববর্তী",
      next: "পরবর্তী",
      page: "পৃষ্ঠা",
      of: "এর",
      viewCode: "GitHub",
      liveDemo: "লাইভ দেখুন",
    },
  };

  const t = content[language] || content.en;

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

    return (
      <div className="font-mono w-full h-full relative bg-neutral-200 select-none text-xl md:text-3xl text-neutral-800">
        <div className="absolute w-full h-full bg-grid"></div>

        <div className="absolute w-full h-full p-6 flex flex-col items-center justify-between gap-4 border border-neutral-300">
          {/* Top Bar: Back Button & Title */}
          <div className="w-full flex items-center justify-between pb-2 border-b border-neutral-300/80">
            <button
              onClick={() => {
                setSelectedProject(null);
                setActiveImageIndex(0);
              }}
              className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-neutral-200/90 shadow-md shadow-neutral-400 hover:scale-105 transition-transform border border-neutral-50 text-base md:text-xl font-bold cursor-pointer"
            >
              <BsArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
              <span>{t.back}</span>
            </button>

            <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 truncate px-2">
              {selectedProject.title}
            </h1>

            <span className="text-base md:text-xl text-neutral-600 font-medium">
              {selectedProject.date?.[language] || selectedProject.date?.en}
            </span>
          </div>

          {/* Prominent High-Resolution Showcase Image with Navigation Arrows */}
          <div className="relative w-full h-[45%] flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl shadow-neutral-500/40 border-2 border-neutral-50 bg-neutral-100 flex items-center justify-center">
              <img
                src={currentImg.src}
                alt={currentImg.alt || selectedProject.title}
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>

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

          {/* Bottom Action Buttons */}
          <div className="flex gap-4 w-full justify-center p-2">
            <button
              onClick={() => {
                setSelectedProject(null);
                setActiveImageIndex(0);
              }}
              className="flex-1 font-mono flex gap-3 items-center justify-center p-4 rounded-2xl shadow-md shadow-neutral-500 hover:scale-105 transition-transform bg-neutral-200/80 border border-neutral-50 text-lg md:text-2xl font-bold cursor-pointer"
            >
              <BsArrowLeft className="w-6 h-6" />
              <span>{t.back}</span>
            </button>

            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 font-mono flex gap-3 items-center justify-center p-4 rounded-2xl shadow-md shadow-neutral-500 hover:scale-105 transition-transform bg-neutral-900 text-white text-lg md:text-2xl font-bold"
              >
                <BsGithub className="w-6 h-6" />
                <span>{t.viewCode}</span>
              </a>
            )}

            {selectedProject.homepage && (
              <a
                href={selectedProject.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 font-mono flex gap-3 items-center justify-center p-4 rounded-2xl shadow-md shadow-neutral-500 hover:scale-105 transition-transform bg-emerald-700 text-white text-lg md:text-2xl font-bold"
              >
                <BsGlobe className="w-6 h-6" />
                <span>{t.liveDemo}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Grid view (3x3 Vending Machine Cans - 100% matches original reference screenshot)
  return (
    <div className="w-full h-full relative bg-neutral-200 select-none font-mono text-2xl md:text-3xl text-center">
      <div className="absolute w-full h-full bg-grid"></div>
      <div className="absolute w-full h-full font-mono p-8 flex flex-col items-center gap-6">
        <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-4">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedProject(project);
                setActiveImageIndex(0);
              }}
              className="flex flex-col shadow-lg shadow-neutral-500 bg-neutral-200/60 backdrop-blur-xs items-center justify-center rounded-2xl cursor-pointer hover:scale-105 transition-transform border border-neutral-50"
            >
              <img
                src={project.can}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="p-2 font-mono">{project.title}</div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex gap-4 mt-4">
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

          <span className="flex items-center">
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
