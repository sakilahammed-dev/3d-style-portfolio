import { useState } from "react";
import { projects } from "../../utils/projectsData";
import { BsGithub, BsArrowLeft, BsGlobe } from "react-icons/bs";

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

  // Single Project Clean Showcase View
  if (selectedProject) {
    const images = selectedProject.images || [];
    const currentImg = images[activeImageIndex] || images[0] || { src: selectedProject.can, alt: selectedProject.title };

    return (
      <div className="font-mono w-full h-full relative bg-neutral-200 select-none text-neutral-800 overflow-hidden">
        <div className="absolute w-full h-full bg-grid"></div>

        <div className="absolute w-full h-full p-4 md:p-6 flex flex-col justify-between border border-neutral-300">
          {/* Top Bar with Back Button and Project Title */}
          <div className="w-full flex items-center justify-between pb-2 border-b border-neutral-300/80">
            <button
              onClick={() => {
                setSelectedProject(null);
                setActiveImageIndex(0);
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-200/90 shadow-sm hover:bg-neutral-300 transition-colors border border-neutral-50 text-xs md:text-sm font-semibold cursor-pointer"
            >
              <BsArrowLeft className="w-4 h-4" />
              <span>{t.back}</span>
            </button>

            <h1 className="text-base md:text-xl font-bold tracking-tight text-neutral-900 truncate px-2">
              {selectedProject.title}
            </h1>

            <span className="text-xs text-neutral-500 font-medium">
              {selectedProject.date?.[language] || selectedProject.date?.en}
            </span>
          </div>

          {/* Prominent Main Picture Container */}
          <div className="w-full flex-1 my-2 flex flex-col items-center justify-center overflow-hidden">
            <div className="relative w-full h-44 md:h-64 rounded-2xl overflow-hidden shadow-lg shadow-neutral-400 border-2 border-neutral-50 bg-neutral-100 flex items-center justify-center">
              <img
                src={currentImg.src}
                alt={currentImg.alt || selectedProject.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>

            {/* Subtle Thumbnail Dots / Selector (if multiple images) */}
            {images.length > 1 && (
              <div className="flex gap-2 mt-2 items-center justify-center">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? "bg-neutral-900 w-6"
                        : "bg-neutral-400 hover:bg-neutral-600"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Clean Description & Tech Icons */}
          <div className="w-full flex flex-col gap-2 pt-2 border-t border-neutral-300/80">
            <p className="text-xs md:text-sm text-neutral-700 text-center line-clamp-2 px-2">
              {selectedProject.description?.[language] || selectedProject.description?.en}
            </p>

            {/* Tech Stack Icons Row */}
            {selectedProject.tech && (
              <div className="flex items-center justify-center gap-3 py-1">
                {selectedProject.tech.map((Icon, idx) => (
                  <div
                    key={idx}
                    className="p-1.5 rounded-lg bg-neutral-100 shadow-sm border border-neutral-50 text-neutral-700"
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                ))}
              </div>
            )}

            {/* Action Links */}
            <div className="flex gap-3 w-full justify-center pt-1">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 max-w-[200px] flex items-center justify-center gap-2 py-2 px-4 rounded-xl shadow-md shadow-neutral-400 bg-neutral-900 text-white text-xs md:text-sm font-semibold hover:scale-105 transition-transform"
                >
                  <BsGithub className="w-4 h-4" />
                  <span>{t.viewCode}</span>
                </a>
              )}
              {selectedProject.homepage && (
                <a
                  href={selectedProject.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 max-w-[200px] flex items-center justify-center gap-2 py-2 px-4 rounded-xl shadow-md shadow-neutral-400 bg-neutral-200/90 text-neutral-800 border border-neutral-50 text-xs md:text-sm font-semibold hover:scale-105 transition-transform"
                >
                  <BsGlobe className="w-4 h-4" />
                  <span>{t.liveDemo}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid view (Vending Machine Shelf of Cans)
  return (
    <div className="w-full h-full relative bg-neutral-200 select-none font-mono text-center overflow-hidden">
      <div className="absolute w-full h-full bg-grid"></div>

      <div className="absolute w-full h-full p-4 md:p-6 flex flex-col items-center justify-between">
        {/* Project Cans Grid */}
        <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-3">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedProject(project);
                setActiveImageIndex(0);
              }}
              className="flex flex-col shadow-md shadow-neutral-400 bg-neutral-200/70 backdrop-blur-xs items-center justify-center rounded-2xl cursor-pointer hover:scale-105 transition-transform border border-neutral-50 p-1"
            >
              <div className="w-full h-3/4 flex items-center justify-center overflow-hidden rounded-xl">
                <img
                  src={project.can}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-1/4 flex items-center justify-center text-[10px] md:text-xs font-bold text-neutral-800 truncate px-1">
                {project.title}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center gap-3 mt-2 text-xs md:text-sm">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-xl shadow-sm ${
              currentPage === 1
                ? "bg-neutral-300 text-neutral-400 cursor-not-allowed"
                : "bg-neutral-100 hover:bg-neutral-300 text-neutral-800 cursor-pointer"
            }`}
          >
            {t.prev}
          </button>

          <span className="text-neutral-600 font-medium">
            {t.page} {currentPage} {t.of} {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-xl shadow-sm ${
              currentPage === totalPages
                ? "bg-neutral-300 text-neutral-400 cursor-not-allowed"
                : "bg-neutral-100 hover:bg-neutral-300 text-neutral-800 cursor-pointer"
            }`}
          >
            {t.next}
          </button>
        </div>
      </div>
    </div>
  );
}
