import { BsLinkedin, BsGithub, BsWhatsapp, BsEnvelopeFill } from "react-icons/bs";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useForm } from "@formspree/react";
import { useState, useEffect } from "react";

export default function ContactPage({ setTarget, language }) {
  const [state, handleSubmit] = useForm("mzzvpzbg");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (state.succeeded) setShowModal(true);
  }, [state.succeeded]);

  const content = {
    en: {
      title: "Contact Me",
      findMe: "Connect with me:",
      orMessage: "Or send a direct message:",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      sentTitle: "Message Sent!",
      sentMsg: "Thanks for reaching out! I’ll get back to you shortly.",
      close: "Close",
      location: "Dhaka, Bangladesh",
    },
    es: {
      title: "Contáctame",
      findMe: "Conéctate conmigo:",
      orMessage: "O envíame un mensaje directo:",
      name: "Tu Nombre",
      email: "Tu Correo Electrónico",
      message: "Tu Mensaje",
      send: "Enviar Mensaje",
      sentTitle: "¡Mensaje Enviado!",
      sentMsg: "¡Gracias por contactarme! Te responderé muy pronto.",
      close: "Cerrar",
      location: "Dhaka, Bangladesh",
    },
    bn: {
      title: "যোগাযোগ",
      findMe: "সোশ্যাল ও সরাসরি কানেক্ট:",
      orMessage: "অথবা সরাসরি বার্তা পাঠান:",
      name: "আপনার নাম",
      email: "আপনার ইমেইল",
      message: "আপনার বার্তা",
      send: "বার্তা পাঠান",
      sentTitle: "বার্তা সফলভাবে পাঠানো হয়েছে!",
      sentMsg: "যোগাযোগ করার জন্য ধন্যবাদ! আমি দ্রুত আপনার সাথে যোগাযোগ করব।",
      close: "বন্ধ করুন",
      location: "ঢাকা, বাংলাদেশ",
    },
  };

  const t = content[language] || content.en;

  return (
    <div className="w-full h-full relative bg-neutral-200 select-none overflow-hidden font-mono">
      <div className="absolute w-full h-full bg-grid"></div>

      <div className="absolute w-full h-full text-xs md:text-sm p-4 flex flex-col justify-between border border-neutral-300">
        {/* Header */}
        <div className="w-full text-center items-center justify-between flex pb-1 border-b border-neutral-300/60">
          <button
            onClick={() => setTarget("AboutMe_Red_Text_Target")}
            className="cursor-pointer hover:scale-110 transition-transform"
          >
            <MdKeyboardArrowLeft className="w-6 h-6 md:w-10 md:h-10 text-neutral-800" />
          </button>
          <h1 className="text-xl md:text-3xl font-bold tracking-tight text-neutral-900">
            {t.title}
          </h1>
          <button
            onClick={() => setTarget("AboutMe_Red_Text_Target")}
            className="cursor-pointer hover:scale-110 transition-transform"
          >
            <MdKeyboardArrowRight className="w-6 h-6 md:w-10 md:h-10 text-neutral-800" />
          </button>
        </div>

        {/* Quick Connect Icon Buttons */}
        <div className="w-full text-center flex flex-col gap-1 my-2">
          <p className="text-xs md:text-sm font-semibold text-neutral-700">
            {t.findMe}
          </p>
          <div className="w-full flex items-center justify-around px-2">
            <a
              href="https://linkedin.com/in/sakilahammed"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-2xl shadow-md shadow-neutral-400 hover:scale-110 transition-transform bg-neutral-100 text-blue-700 border border-neutral-50 cursor-pointer"
            >
              <BsLinkedin className="w-5 h-5 md:w-7 md:h-7" />
            </a>
            <a
              href="https://github.com/sakilahammed-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-2xl shadow-md shadow-neutral-400 hover:scale-110 transition-transform bg-neutral-100 text-neutral-900 border border-neutral-50 cursor-pointer"
            >
              <BsGithub className="w-5 h-5 md:w-7 md:h-7" />
            </a>
            <a
              href="https://wa.me/8801763838194"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Chat"
              className="p-3 rounded-2xl shadow-md shadow-neutral-400 hover:scale-110 transition-transform bg-neutral-100 text-green-600 border border-neutral-50 cursor-pointer"
            >
              <BsWhatsapp className="w-5 h-5 md:w-7 md:h-7" />
            </a>
            <a
              href="mailto:sakilahammed114@gmail.com"
              aria-label="Email Directly"
              className="p-3 rounded-2xl shadow-md shadow-neutral-400 hover:scale-110 transition-transform bg-neutral-100 text-red-600 border border-neutral-50 cursor-pointer"
            >
              <BsEnvelopeFill className="w-5 h-5 md:w-7 md:h-7" />
            </a>
          </div>
          <p className="text-[11px] text-neutral-500 mt-1">
            sakilahammed114@gmail.com • {t.location}
          </p>
        </div>

        {/* Message Form or Success Modal */}
        {showModal ? (
          <div className="w-full flex-1 flex flex-col items-center justify-center gap-3 p-4 bg-neutral-100/90 rounded-2xl border border-neutral-300">
            <h2 className="font-bold text-lg md:text-xl text-neutral-900 text-center">
              {t.sentTitle}
            </h2>
            <p className="text-xs md:text-sm text-neutral-600 text-center">
              {t.sentMsg}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 rounded-xl bg-neutral-900 text-white text-xs md:text-sm font-semibold hover:scale-105 transition-transform cursor-pointer"
            >
              {t.close}
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-2 pt-1 border-t border-neutral-300/60"
          >
            <div className="w-full flex flex-col">
              <label htmlFor="name" className="text-[11px] md:text-xs text-neutral-600 font-semibold mb-0.5">
                {t.name}
              </label>
              <input
                id="name"
                name="name"
                required
                className="p-1.5 md:p-2 rounded-xl bg-neutral-100 shadow-inner text-xs md:text-sm border border-neutral-300 outline-none focus:border-neutral-700"
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="email" className="text-[11px] md:text-xs text-neutral-600 font-semibold mb-0.5">
                {t.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="p-1.5 md:p-2 rounded-xl bg-neutral-100 shadow-inner text-xs md:text-sm border border-neutral-300 outline-none focus:border-neutral-700"
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="message" className="text-[11px] md:text-xs text-neutral-600 font-semibold mb-0.5">
                {t.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={2}
                required
                className="p-1.5 md:p-2 rounded-xl bg-neutral-100 shadow-inner text-xs md:text-sm border border-neutral-300 outline-none focus:border-neutral-700 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-1 py-2 rounded-xl bg-neutral-900 text-white text-xs md:text-sm font-semibold shadow-md shadow-neutral-400 hover:scale-[1.02] transition-transform cursor-pointer"
            >
              {t.send}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
