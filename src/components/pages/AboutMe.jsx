import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function AboutMe({ setTarget, language }) {
  const content = {
    en: {
      title: "About Me",
      name: "I'm Sakil Ahammed",
      role: "Full-Stack Web Developer & AI Automation Architect",
      desc1:
        "Building scalable, high-speed web platforms with modern full-stack technologies, clean architecture, and intuitive user experiences.",
      desc2:
        "Architecting autonomous AI agents and intelligent business workflow automations that eliminate friction and multiply operational efficiency.",
      cv: "Check out my CV",
      cvFile: "images/Sakil_Ahammed_CV.pdf",
    },
    es: {
      title: "Sobre mí",
      name: "Soy Sakil Ahammed",
      role: "Desarrollador Web Full-Stack y Arquitecto de IA",
      desc1:
        "Construcción de aplicaciones web escalables y de alto rendimiento con arquitecturas modernas full-stack y diseño intuitivo.",
      desc2:
        "Arquitectura de agentes autónomos de IA y automatizaciones de flujos de trabajo que optimizan la eficiencia operativa.",
      cv: "Descarga mi CV",
      cvFile: "images/Sakil_Ahammed_CV.pdf",
    },
    bn: {
      title: "আমার সম্পর্কে",
      name: "আমি শাকিল আহাম্মেদ",
      role: "ফুল-স্ট্যাক ওয়েব ডেভেলপার ও এআই অটোমেশন আর্কিটেক্ট",
      desc1:
        "আধুনিক ফুল-স্ট্যাক প্রযুক্তি ও ক্লিন আর্কিটেকচার দিয়ে উচ্চগতির, নির্ভরযোগ্য ও স্কেলেবল ওয়েব প্ল্যাটফর্ম নির্মাণে নিবেদিতপ্রাণ।",
      desc2:
        "স্বয়ংক্রিয় এআই এজেন্ট ও বুদ্ধিমান ওয়ার্কফ্লো অটোমেশন তৈরি করি—যা জটিল কাজের পুনরাবৃত্তি দূর করে ব্যবসায়িক গতি বহুগুণ বৃদ্ধি করে।",
      cv: "আমার সিভি দেখুন",
      cvFile: "images/Sakil_Ahammed_CV.pdf",
    },
  };

  const t = content[language] || content.en;

  return (
    <div className="h-full w-full relative bg-neutral-200 select-none">
      <div className="absolute w-full h-full bg-grid"></div>
      <div className="absolute w-full h-full text-sm md:text-xl p-4 flex flex-col items-center justify-between border gap-2 font-mono">
        <div className="w-full text-center items-center justify-between flex">
          <button onClick={() => setTarget("Contact_Red_Text_Target")}>
            <MdKeyboardArrowLeft className="w-7 h-7 md:w-12 md:h-12" />
          </button>
          <h1 className="text-2xl md:text-4xl">{t.title}</h1>
          <button onClick={() => setTarget("Contact_Red_Text_Target")}>
            <MdKeyboardArrowRight className="w-7 h-7 md:w-12 md:h-12" />
          </button>
        </div>

        <img
          src="images/profile.webp"
          alt="Sakil Ahammed"
          className="object-cover rounded-4xl shadow-lg shadow-neutral-500 h-1/3 aspect-square border border-neutral-50 shrink-0"
        />

        <div className="w-full h-full text-center items-center justify-between flex flex-col font-mono p-1">
          <div>
            <p className="font-bold text-xl md:text-3xl text-neutral-900">{t.name}</p>
            <p className="text-xs md:text-sm font-semibold text-red-600 mt-0.5 tracking-tight">
              {t.role}
            </p>
          </div>
          <p className="text-xs md:text-sm leading-snug px-1 text-neutral-700">{t.desc1}</p>
          <p className="text-xs md:text-sm leading-snug px-1 text-neutral-700">{t.desc2}</p>

          <a
            href={t.cvFile}
            download="Sakil_Ahammed_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono flex gap-4 items-center justify-center px-4 py-2 rounded-2xl shadow-md shadow-neutral-500 hover:scale-105 transition-transform bg-neutral-200/80 border border-neutral-50 cursor-pointer"
          >
            {t.cv}
          </a>
        </div>
      </div>
    </div>
  );
}
