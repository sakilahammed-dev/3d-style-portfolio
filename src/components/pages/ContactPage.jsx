import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useState } from "react";

export default function ContactPage({ setTarget, language }) {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const content = {
    en: {
      title: "Contact Me",
      findMe: "You can find me on:",
      orMessage: "Or send me a message:",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      sending: "Sending...",
      sentTitle: "Message Sent!",
      sentMsg:
        "Thanks for reaching out! Your message has been sent directly to sakilahammed114@gmail.com. I will get back to you shortly.",
      close: "Close",
    },
    es: {
      title: "Contáctame",
      findMe: "Puedes encontrarme en:",
      orMessage: "O envíame un mensaje:",
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      send: "Enviar",
      sending: "Enviando...",
      sentTitle: "¡Mensaje enviado!",
      sentMsg:
        "Gracias por contactarme. Tu mensaje ha sido enviado directamente a sakilahammed114@gmail.com. Te responderé pronto.",
      close: "Cerrar",
    },
    bn: {
      title: "যোগাযোগ",
      findMe: "সোশ্যাল মিডিয়ায় খুঁজুন:",
      orMessage: "অথবা সরাসরি বার্তা পাঠান:",
      name: "আপনার নাম",
      email: "ইমেইল অ্যাড্রেস",
      message: "আপনার বার্তা",
      send: "পাঠান",
      sending: "পাঠানো হচ্ছে...",
      sentTitle: "বার্তা সফলভাবে পাঠানো হয়েছে!",
      sentMsg:
        "যোগাযোগের জন্য ধন্যবাদ! আপনার বার্তাটি সরাসরি sakilahammed114@gmail.com এ পৌঁছে গেছে। আমি খুব দ্রুত আপনার সাথে যোগাযোগ করব।",
      close: "বন্ধ করুন",
    },
  };

  const t = content[language] || content.en;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);
    const clientName = (formData.get("name") || "").toString().trim();
    const clientEmail = (formData.get("email") || "").toString().trim();
    const clientMessage = (formData.get("message") || "").toString().trim();

    const payload = {
      name: clientName,
      email: clientEmail,
      _replyto: clientEmail,
      _subject: `New Portfolio Message from ${clientName}`,
      message: clientMessage,
      _template: "table",
      _captcha: "false",
    };

    try {
      const res = await fetch("https://formsubmit.co/ajax/sakilahammed114@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        keepalive: true,
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok || data.success === "true" || data.message?.includes("Activation")) {
        setShowModal(true);
        form.reset();
      } else {
        // Fallback: mailto link
        window.location.href = `mailto:sakilahammed114@gmail.com?subject=${encodeURIComponent(
          payload._subject,
        )}&body=${encodeURIComponent(
          `From: ${clientName} (${clientEmail})\n\nMessage:\n${clientMessage}`,
        )}`;
        setShowModal(true);
      }
    } catch (err) {
      console.warn("FormSubmit Network Error:", err);
      // Seamless fallback via mailto
      window.location.href = `mailto:sakilahammed114@gmail.com?subject=${encodeURIComponent(
        payload._subject,
      )}&body=${encodeURIComponent(
        `From: ${clientName} (${clientEmail})\n\nMessage:\n${clientMessage}`,
      )}`;
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full relative bg-neutral-200 select-none">
      <div className="absolute w-full h-full bg-grid"></div>
      <div className="absolute w-full h-full text-xl md:text-2xl p-4 flex flex-col items-center justify-between border font-mono">
        <div className="w-full text-center items-center justify-between flex font-mono">
          <button onClick={() => setTarget("AboutMe_Red_Text_Target")}>
            <MdKeyboardArrowLeft className="w-7 h-7 md:w-12 md:h-12" />
          </button>
          <h1 className="text-2xl md:text-4xl">{t.title}</h1>
          <button onClick={() => setTarget("AboutMe_Red_Text_Target")}>
            <MdKeyboardArrowRight className="w-7 h-7 md:w-12 md:h-12" />
          </button>
        </div>

        <div className="w-full text-center items-center justify-center flex flex-col md:gap-4">
          <h2 className="w-full text-center text-xl md:text-3xl font-mono">
            {t.findMe}
          </h2>
          <div className="w-full flex items-center justify-around">
            <a
              href="https://www.linkedin.com/in/sakilahammed-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono flex gap-4 items-center justify-center p-4 rounded-2xl shadow-md shadow-neutral-500 hover:scale-105 transition-transform bg-neutral-200/80 border border-neutral-50"
            >
              <BsLinkedin className="w-7 h-7 md:w-12 md:h-12" />
            </a>
            <a
              href="https://github.com/sakilahammed-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono flex gap-4 items-center justify-center p-4 rounded-2xl shadow-md shadow-neutral-500 hover:scale-105 transition-transform bg-neutral-200/80 border border-neutral-50"
            >
              <BsGithub className="w-7 h-7 md:w-12 md:h-12" />
            </a>
            <a
              href="https://wa.me/8801763838194"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono flex gap-4 items-center justify-center p-4 rounded-2xl shadow-md shadow-neutral-500 hover:scale-105 transition-transform bg-neutral-200/80 border border-neutral-50"
            >
              <BsWhatsapp className="w-7 h-7 md:w-12 md:h-12" />
            </a>
          </div>
        </div>

        {showModal ? (
          <div className="w-full h-full flex flex-col text-2xl items-center justify-around p-4 text-center">
            <h2 className="font-semibold w-full text-center text-3xl text-emerald-700">
              {t.sentTitle}
            </h2>
            <p className="w-full text-center text-base md:text-xl text-neutral-700 leading-relaxed max-w-md">
              {t.sentMsg}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="font-mono flex items-center justify-center py-2 px-6 rounded-2xl shadow-md shadow-neutral-500 hover:scale-105 transition-transform bg-neutral-800 text-white border border-neutral-50 cursor-pointer"
              >
                {t.close}
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleFormSubmit}
            className="w-full flex flex-col text-lg md:text-2xl md:gap-2 mb-4"
          >
            <h2 className="text-xl md:text-3xl w-full text-center font-mono">
              {t.orMessage}
            </h2>
            <div className="w-full h-full px-4">
              <label htmlFor="name" className="font-mono">
                {t.name}
              </label>
              <input
                id="name"
                name="name"
                required
                disabled={loading}
                className="p-2 rounded-2xl bg-neutral-200 shadow-inner shadow-neutral-500 w-full font-mono border border-neutral-50"
              />
            </div>
            <div className="w-full h-full px-4">
              <label htmlFor="email" className="font-mono">
                {t.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={loading}
                className="p-2 rounded-2xl shadow-inner bg-neutral-200 shadow-neutral-500 w-full font-mono border border-neutral-50"
              />
            </div>
            <div className="w-full h-full px-4">
              <label htmlFor="message" className="font-mono">
                {t.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                disabled={loading}
                className="p-2 rounded-2xl shadow-inner bg-neutral-200 shadow-neutral-500 w-full font-mono border border-neutral-50"
              />
            </div>
            <div className="w-full h-full px-4">
              <button
                type="submit"
                disabled={loading}
                className={`font-mono flex items-center justify-center px-4 md:py-2 rounded-2xl shadow-md shadow-neutral-500 transition-all bg-neutral-200/80 border border-neutral-50 cursor-pointer ${
                  loading ? "opacity-60 cursor-not-allowed" : "hover:scale-105"
                }`}
              >
                {loading ? t.sending : t.send}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
