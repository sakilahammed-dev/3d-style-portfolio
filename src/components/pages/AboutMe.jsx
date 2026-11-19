import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { BsFillHouseDoorFill } from "react-icons/bs";

export default function AboutMe({ setTarget, language, onHome }) {
  const content = {
    en: {
      title: "About Me",
      name: "I'm Sakil Ahammed",
      desc1:
        "Passionate about learning new technologies, building things, breaking them, and figuring out how to make them better.",
      desc2:
        "Full-Stack Web Developer & AI Automation Architect specializing in web, mobile applications, and workflow automation.",
      cv: "Check out my CV",
      cvFile: "images/Sakil_Ahammed_CV.pdf",
    },
    es: {
      title: "Sobre mí",
      name: "Soy Sakil Ahammed",
      desc1:
        "Apasionado por aprender nuevas tecnologías, construir cosas, romperlas y descubrir cómo mejorarlas.",
      desc2:
        "Desarrollador Web Full-Stack y Arquitecto de Automatización con IA especializado en web, aplicaciones móviles y flujos de trabajo.",
      cv: "Descarga mi CV",
      cvFile: "images/Sakil_Ahammed_CV.pdf",
    },
    bn: {
      title: "আমার সম্পর্কে",
      name: "আমি শাকিল আহাম্মেদ",
      desc1:
        "নতুন প্রযুক্তি শেখা, উন্নত সিস্টেম আর্কিটেকচার তৈরি এবং জটিল সমস্যার গভীরে গিয়ে সমাধান করতে নিবেদিতপ্রাণ।",
      desc2:
        "ফুল-স্ট্যাক ওয়েব ডেভেলপার ও এআই অটোমেশন আর্কিটেক্ট — ওয়েব, মোবাইল অ্যাপস ও স্বয়ংক্রিয় ব্যবসায়িক সমাধান তৈরিতে দক্ষ।",
      cv: "আমার সিভি দেখুন",
      cvFile: "images/Sakil_Ahammed_CV.pdf",
    },
  };

  const t = content[language] || content.en;

  return (
    <div className="h-full w-full relative bg-neutral-200 select-none text-black">
      <div className="absolute w-full h-full bg-grid"></div>
      <div className="absolute w-full h-full text-sm md:text-xl p-4 flex flex-col items-center justify-between border gap-2 font-mono text-black">
        <div className="w-full text-center items-center justify-between flex">
          <button onClick={() => setTarget("Contact_Red_Text_Target")}>
            <MdKeyboardArrowLeft className="w-7 h-7 md:w-12 md:h-12" />
          </button>
          <h1 className="text-2xl md:text-4xl font-bold">{t.title}</h1>
          <button onClick={() => setTarget("Contact_Red_Text_Target")}>
            <MdKeyboardArrowRight className="w-7 h-7 md:w-12 md:h-12" />
          </button>
        </div>

        <img
          src="images/profile.webp"
          alt="Sakil Ahammed"
          className="object-cover rounded-4xl shadow-lg shadow-neutral-500 h-1/3 aspect-square border border-neutral-50 shrink-0"
        />

        <div className="w-full h-full text-center items-center justify-between flex flex-col font-mono p-2 text-black">
          <p className="font-bold text-2xl md:text-3xl text-black">{t.name}</p>
          <p className="text-black">{t.desc1}</p>
          <p className="text-black">{t.desc2}</p>

          <div className="flex items-center gap-3 justify-center w-full mt-1">
            <a
              href={t.cvFile}
              download="Sakil_Ahammed_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-black flex gap-2 items-center justify-center px-4 py-2 rounded-2xl shadow-md shadow-neutral-500 hover:scale-105 transition-transform bg-neutral-200/80 border border-neutral-50 cursor-pointer font-bold text-sm md:text-base"
            >
              {t.cv}
            </a>
            {onHome && (
              <button
                onClick={onHome}
                type="button"
                className="font-mono text-white flex gap-2 items-center justify-center px-4 py-2 rounded-2xl shadow-md bg-neutral-900 hover:bg-neutral-800 hover:scale-105 transition-transform cursor-pointer font-bold text-sm md:text-base select-none"
              >
                <BsFillHouseDoorFill className="w-4 h-4" />
                <span>{language === "bn" ? "হোম" : "Home"}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
