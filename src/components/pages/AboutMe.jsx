import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function AboutMe({ setTarget, language }) {
  const content = {
    en: {
      title: "About Me",
      name: "Sakil Ahammed",
      designation: "Full-Stack AI & Automation Architect",
      domains: "Web • Mobile • Workflow Automation • Business Solutions",
      desc1:
        "Passionate about architecting end-to-end intelligent systems, scalable web applications, and autonomous workflow operations.",
      desc2:
        "Driven by rapid learning, deep resilience, and root-cause problem solving to engineer reliable technology solutions.",
      cv: "Download My CV",
      cvFile: "images/Sakil_Ahammed_CV.pdf",
    },
    es: {
      title: "Sobre mí",
      name: "Sakil Ahammed",
      designation: "Arquitecto Full-Stack de IA y Automatización",
      domains: "Web • Móvil • Automatización de Procesos • Soluciones",
      desc1:
        "Especializado en el diseño de sistemas inteligentes de extremo a extremo, aplicaciones web escalables y flujos autónomos.",
      desc2:
        "Impulsado por el aprendizaje ágil y la resolución de problemas de raíz para transformar operaciones complejas en tecnología confiable.",
      cv: "Descargar mi CV",
      cvFile: "images/Sakil_Ahammed_CV.pdf",
    },
    bn: {
      title: "আমার সম্পর্কে",
      name: "শাকিল আহাম্মেদ",
      designation: "Full-Stack AI & Automation Architect",
      domains: "Web • Mobile • Workflow Automation • Business Solutions",
      desc1:
        "ওয়েব ডেভেলপমেন্ট, মোবাইল অ্যাপস, ওয়ার্কফ্লো অটোমেশন এবং ব্যবসায়িক সিস্টেমের জন্য এন্ড-টু-এন্ড ইন্টেলিজেন্ট আর্কিটেকচার ডিজাইন করি।",
      desc2:
        "গভীর ধৈর্য, দ্রুত শেখার ক্ষমতা ও রুট-কজ সমাধানের মাধ্যমে যেকোনো জটিল ব্যবসায়িক অপারেশনকে সহজ ও স্বয়ংক্রিয় করতে নিবেদিত।",
      cv: "আমার সিভি ডাউনলোড করুন",
      cvFile: "images/Sakil_Ahammed_CV.pdf",
    },
  };

  const t = content[language] || content.en;

  return (
    <div className="h-full w-full relative bg-neutral-200 select-none">
      <div className="absolute w-full h-full bg-grid"></div>
      <div className="absolute w-full h-full text-xs md:text-lg p-4 flex flex-col items-center justify-between border border-neutral-300 font-mono">
        <div className="w-full text-center items-center justify-between flex pb-1 border-b border-neutral-300/60">
          <button
            onClick={() => setTarget("Contact_Red_Text_Target")}
            className="cursor-pointer hover:scale-110 transition-transform"
          >
            <MdKeyboardArrowLeft className="w-6 h-6 md:w-10 md:h-10 text-neutral-800" />
          </button>
          <h1 className="text-xl md:text-3xl font-bold tracking-tight text-neutral-900">
            {t.title}
          </h1>
          <button
            onClick={() => setTarget("Contact_Red_Text_Target")}
            className="cursor-pointer hover:scale-110 transition-transform"
          >
            <MdKeyboardArrowRight className="w-6 h-6 md:w-10 md:h-10 text-neutral-800" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center my-2">
          <img
            src="images/profile.webp"
            alt={t.name}
            className="object-cover rounded-3xl shadow-lg shadow-neutral-400 h-28 w-28 md:h-36 md:w-36 border-2 border-neutral-100"
          />
        </div>

        <div className="w-full text-center items-center justify-between flex flex-col font-mono gap-1 px-2">
          <p className="font-extrabold text-lg md:text-2xl text-neutral-900">
            {t.name}
          </p>
          <p className="text-xs md:text-sm font-semibold text-blue-700 tracking-wide uppercase">
            {t.designation}
          </p>
          <p className="text-[11px] md:text-xs text-neutral-500 font-medium">
            {t.domains}
          </p>
          <p className="text-xs md:text-sm text-neutral-700 mt-1 line-clamp-2">
            {t.desc1}
          </p>
          <p className="text-[11px] md:text-xs text-neutral-600 line-clamp-2">
            {t.desc2}
          </p>

          <a
            href={t.cvFile}
            download="Sakil_Ahammed_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 font-mono flex items-center justify-center px-4 py-1.5 md:py-2 rounded-xl shadow-md shadow-neutral-400 hover:scale-105 transition-transform bg-neutral-900 text-white text-xs md:text-sm cursor-pointer"
          >
            {t.cv}
          </a>
        </div>
      </div>
    </div>
  );
}
