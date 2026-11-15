import {
  SiThreedotjs,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiBlender,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiKotlin,
  SiMysql,
  SiAndroidstudio,
  SiUnity,
  SiReactrouter,
  SiMui,
  SiArduino,
  SiHtml5,
  SiCss as SiCss3,
  SiJss,
  SiDocker, 
  SiPytorch,
  SiPython,
  SiNumpy,
  SiScikitlearn,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiRedis,
} from "react-icons/si";

export const projects = [
  {
    title: "Unnoto Khabar",
    can: "images/projects/UnnotoKhabar/UnnotoKhabarCan.webp",
    images: [
      { src: "images/projects/UnnotoKhabar/unnoto_banner.webp", alt: "উন্নত খাবার - সুস্থ জীবনের সমাহার" },
    ],
    description: {
      en: "Unnoto Khabar (উন্নত খাবার) is a full-stack premium organic e-commerce platform built with Next.js, TypeScript, Tailwind CSS, Prisma, and PostgreSQL. Dedicated to providing 100% pure, natural, and adulteration-free wholesome nutrition across Bangladesh with frictionless 1-click quick orders.",
      es: "Unnoto Khabar es una plataforma de comercio electrónico orgánica premium construida con Next.js, TypeScript, Tailwind CSS, Prisma y PostgreSQL.",
      bn: "উন্নত খাবার (Unnoto Khabar) - সুস্থ জীবনের জন্য শতভাগ খাঁটি, প্রাকৃতিক ও নির্ভেজাল খাদ্যের বিশ্বস্ত অনলাইন শপ। নেক্সট.জেএস (Next.js), টাইপস্ক্রিপ্ট, প্রিজমা এবং পোস্টগ্রেসকিউএল দিয়ে নির্মিত একটি পূর্ণাঙ্গ আধুনিক ই-কমার্স প্ল্যাটফর্ম।",
    },
    detailedDescription: {
      en: {
        intro: "Unnoto Khabar (উন্নত খাবার) is a modern full-stack organic e-commerce brand engineered to deliver 100% natural, unadulterated, and nutrient-dense foods straight to households across Bangladesh with high-speed performance and zero friction.",
        categories: [
          "Pure Raw Honey: 100% unprocessed, natural floral honey sustainably harvested from the Sundarbans and local organic beekeepers.",
          "Nutritious Premium Honey Nuts: A power-packed fusion of hand-roasted cashews, almonds, walnuts, and pistachios steeped in pure raw honey.",
          "Cold-Pressed Virgin Black Seed Oil: 100% pure therapeutic oil extracted with cold-press methods to ensure peak health benefits.",
          "Imported Royal Dates: Hand-selected authentic Medjool, Ajwa, and Maryam dates delivered in hygienic airtight packaging."
        ],
        techDetails: [
          "Next.js App Router & TypeScript: Ultra-responsive edge rendering with instant hydration and high-speed page loads.",
          "1-Click Quick Order: Frictionless guest checkout modal without mandatory upfront sign-in.",
          "64 Districts Delivery Engine: Automated district delivery calculations with real-time tracking and PostgreSQL database safety."
        ]
      },
      bn: {
        intro: "উন্নত খাবার (Unnoto Khabar) - সুস্থ ও সুন্দর জীবনের জন্য শতভাগ খাঁটি, প্রাকৃতিক ও নির্ভেজাল পুষ্টিকর খাদ্যের এক অনন্য বিশ্বস্ত সমাহার। আধুনিক প্রযুক্তি ও স্বাস্থ্যকর খাদ্যসংস্কৃতির সমন্বয়ে সারা বাংলাদেশের মানুষের কাছে নিরাপদ ও নির্ভেজাল খাদ্যপণ্য দ্রুত পৌঁছে দেওয়ার লক্ষ্য নিয়ে এই পূর্ণাঙ্গ ই-কমার্স প্ল্যাটফর্মটি তৈরি করা হয়েছে।",
        categories: [
          "খাঁটি প্রাকৃতিক মধু (Pure Honey): কোনো কৃত্রিম চিনি বা কেমিক্যাল প্রসেসিং ছাড়া সুন্দরবন ও বিভিন্ন ফুলের শতভাগ খাঁটি কাঁচা মধু।",
          "পুষ্টিকর প্রিমিয়াম হানি নাট (Honey Nuts): কাজুবাদাম, কাঠবাদাম, পেস্তাবাদাম ও আখরোটের পুষ্টিকর সংমিশ্রণে প্রস্তুত প্রিমিয়াম হেলথ ফুড।",
          "কোল্ড-প্রেসড কালোজিরা তেল (Black Seed Oil): রোগপ্রতিরোধ ক্ষমতা বৃদ্ধি ও সুস্বাস্থ্যের জন্য শতভাগ নির্ভেজাল ফার্স্ট-কোল্ড-প্রেসড তেল।",
          "আমদানি করা প্রিমিয়াম খেজুর (Premium Dates): আজওয়া, মেদজুল, মরিয়ম ও আম্বর খেজুরের বিশেষ ফ্রেশ কালেকশন।"
        ],
        techDetails: [
          "নেক্সট.জেএস (Next.js) ও টাইপস্ক্রিপ্ট: সর্বাধুনিক এজ আর্কিটেকচার যা প্রতিটি পেজকে চোখের পলকে লোড করে।",
          "১-ক্লিকে কুইক অর্ডার সিস্টেম: অ্যাকাউন্ট খোলার ঝামেলা ছাড়াই সরাসরি নাম, ফোন ও ঠিকানা দিয়ে চোখের পলকে অর্ডার করার সুবিধা।",
          "৬৪ জেলার স্বয়ংক্রিয় ডেলিভারি: কুরিয়ার চার্জ স্বয়ংক্রিয় হিসাব, রিয়েল-টাইম কার্ট এবং প্রিজমা ও পোস্টগ্রেসকিউএল ডেটাবেস নিরাপত্তা।"
        ]
      }
    },
    tech: [SiNextdotjs, SiTypescript, SiReact, SiTailwindcss, SiPostgresql, SiPrisma],
    features: {
      en: [
        "Modern Next.js App Router architecture with high-speed performance.",
        "Quick Order modal and reactive Cart Context management.",
        "Prisma ORM with PostgreSQL database schema and migrations.",
        "Full mobile-responsive design with district delivery calculations.",
        "Edge-ready Cloudflare & Vercel deployment with SSL and caching.",
      ],
      es: [
        "Arquitectura moderna de Next.js App Router con alto rendimiento.",
        "Modal de pedido rápido y gestión reactiva de carrito de compras.",
        "Integración de base de datos PostgreSQL con Prisma ORM.",
        "Diseño totalmente adaptable a móviles con cálculo de envíos.",
        "Despliegue optimizado en Vercel y Cloudflare con caché perimetral.",
      ],
      bn: [
        "নেক্সট.জেএস অ্যাপ রাউটার ও হাই-স্পিড পারফরম্যান্স আর্কিটেকচার।",
        "কুইক অর্ডার মডাল ও রিয়েল-টাইম কার্ট স্টেট ম্যানেজমেন্ট।",
        "প্রিজমা ওআরএম ও পোস্টগ্রেসকিউএল ডেটাবেস ইন্টিগ্রেশন।",
        "৬৪ জেলার ডেলিভারি ও কুরিয়ার শিপিং ক্যালকুলেশন।",
        "ভার্সেল ও ক্লাউডফ্লেয়ার এজ ডিপ্লয়মেন্ট।",
      ],
    },
    date: { en: "November 2026", es: "Noviembre 2026", bn: "নভেম্বর ২০২৬" },
    github: "https://github.com/sakilahammed-dev/unnoto-khabar",
    homepage: "https://unnoto-khabar.vercel.app",
  },
  {
    title: "TutorBari",
    can: "images/projects/TutorBari/TutorBariCan.webp",
    images: [
      { src: "images/projects/TutorBari/1.webp", alt: "TutorBari Hero Marketplace & Tutor Search" },
      { src: "images/projects/TutorBari/2.webp", alt: "Explainable 5-Factor AI Matchmaking Engine" },
      { src: "images/projects/TutorBari/3.webp", alt: "Live Tuition Job Board Across 64 Districts" },
      { src: "images/projects/TutorBari/4.webp", alt: "Confirmation Letter, Automated Invoicing & Escrow Gateway" },
    ],
    description: {
      en: "TutorBari is an enterprise-grade digital tutoring platform connecting verified tutors with guardians across 64 districts in Bangladesh. Built with Next.js 16, TypeScript, Tailwind CSS, Prisma, and PostgreSQL. Features an Explainable 5-Factor AI Matchmaking Algorithm, 3-step guest hiring funnel, confirmation letters, and automated invoicing with bKash/Nagad checkout simulation.",
      es: "TutorBari es una plataforma empresarial de emparejamiento de tutores que conecta tutores verificados con familias en 64 distritos de Bangladesh. Construida con Next.js 16, TypeScript, Tailwind CSS, Prisma y PostgreSQL.",
      bn: "টিউটরবাড়ি (TutorBari) - বাংলাদেশে ভেরিফাইড গৃহশিক্ষক ও শিক্ষার্থী সংযোগকারী আধুনিক এডুটেক প্ল্যাটফর্ম। নেক্সট.জেএস ১৬, টাইপস্ক্রিপ্ট, প্রিজমা ও পোস্টগ্রেসকিউএল দিয়ে নির্মিত। এতে রয়েছে ৫-ফ্যাক্টর এআই ম্যাচমেকিং অ্যালগরিদম, ৩-ধাপের হায়ার টিউটর উইজার্ড, লিগ্যাল কনফার্মেশন লেটার, স্বয়ংক্রিয় ইনভয়েস এবং বিকাশ ও নগদ পেমেন্ট সিমুলেশন।",
    },
    tech: [SiNextdotjs, SiTypescript, SiReact, SiTailwindcss, SiPostgresql, SiPrisma],
    features: {
      en: [
        "Explainable 5-Factor AI Matchmaking Algorithm (location, curriculum, university, trust).",
        "High-conversion 3-step guest 'Hire a Tutor' wizard with auto-registration.",
        "Comprehensive role-based portals for Guardians, Tutors, and Operations Admin.",
        "Automated confirmation letters, Caretutors commission policy & formal tax invoicing.",
        "Integrated checkout simulation with bKash, Nagad, and digital payment escrow.",
      ],
      es: [
        "Algoritmo de emparejamiento con IA explicable de 5 factores.",
        "Asistente intuitivo de 3 pasos para contratar tutores con registro automático.",
        "Portales específicos basados en roles para tutores, familias y administración.",
        "Generación automática de cartas de confirmación y facturación formal.",
        "Pasarela de pago simulada con bKash, Nagad y custodia segura.",
      ],
      bn: [
        "৫-ফ্যাক্টর ব্যাখ্যামূলক এআই ম্যাচমেকিং ইঞ্জিন (দূরত্ব, কারিকুলাম, ভার্সিটি ও ট্রাস্ট)।",
        "স্বয়ংক্রিয় অ্যাকাউন্ট তৈরির সুবিধা সহ ৩-ধাপের দ্রুত 'হায়ার এ টিউটর' উইজার্ড।",
        "অভিভাবক, টিউটর এবং অ্যাডমিনদের জন্য সম্পূর্ণ পৃথক ও সুরক্ষিত রোল-বেসড ড্যাশবোর্ড।",
        "আইনি কনফার্মেশন লেটার, প্ল্যাটফর্ম কমিশন পলিসি এবং স্বয়ংক্রিয় ট্যাক্স ইনভয়েস।",
        "বিকাশ, নগদ এবং ডিজিটাল পেমেন্ট এসক্রো সিমুলেশন ইন্টিগ্রেশন।",
      ],
    },
    date: { en: "November 2026", es: "Noviembre 2026", bn: "নভেম্বর ২০২৬" },
    github: "https://github.com/sakilahammed-dev/TutorBari",
    homepage: "https://tutorbari.vercel.app",
  },

  {
    title: "Al-Mu'allim OS",
    can: "images/projects/AlMuallimOS/AlMuallimCan.webp",
    images: [
      { src: "images/projects/AlMuallimOS/1.webp", alt: "Muhtamim Executive Dashboard & Institutional Hub" },
      { src: "images/projects/AlMuallimOS/2.webp", alt: "30-Para Hifz Engine & Retention Heatmap" },
      { src: "images/projects/AlMuallimOS/3.webp", alt: "Verified Campus Gatepass Security Terminal" },
      { src: "images/projects/AlMuallimOS/4.webp", alt: "Shariah Dual-Fund Double-Entry Ledger & Balance Sheet" },
    ],
    description: {
      en: "Al-Mu'allim OS is an enterprise-grade, multi-tenant madrasa operating system engineered for Bangladeshi Qawmi, Hifz, and Aliya institutions. Features a 30-Para Quran Hifz memorization engine with retention heatmaps, Shariah-compliant dual-fund double-entry accounting (General vs Zakat/Lillah), server-side OTP gatepass terminal, dual-board exams (Befaq & NCTB), and BANBEIS regulatory survey export.",
      es: "Al-Mu'allim OS es un sistema operativo madrasa multi-inquilino de nivel empresarial diseñado para instituciones islámicas en Bangladesh con motor de memorización Hifz de 30 paras, contabilidad dual de la Shariah y terminal de seguridad con OTP.",
      bn: "আল-মু'আল্লিম ওএস (Al-Mu'allim OS) - বাংলাদেশের কওমি, হিফজ ও আলিয়া মাদ্রাসার জন্য নির্মিত এন্টারপ্রাইজ মাল্টি-টেন্যান্ট ম্যানেজমেন্ট অপারেটিং সিস্টেম। এতে রয়েছে ৩০-পারা হিফজ ট্র্যাকার ও রিটেনশন হিটম্যাপ, শরিয়াহ দ্বৈত-তহবিল (সাধারণ বনাম যাকাত/লিল্লাহ) ডাবল-এন্ট্রি লেজার, অভিভাবক ওটিপি সম্বলিত গেটপাস সিকিউরিটি টার্মিনাল এবং ব্যানবেইস বার্ষিক অডিট এক্সপোর্ট।",
    },
    tech: [SiNextdotjs, SiTypescript, SiReact, SiTailwindcss, SiPostgresql, SiPrisma, SiRedis, SiDocker],
    features: {
      en: [
        "30-Para Hifz memorization engine with Sabak, Sabki, Amokhta and revision decay heatmaps.",
        "Shariah Dual-Fund accounting strictly isolating General operating funds from Zakat/Lillah welfare.",
        "High-security campus gatepass terminal with server-side OTP, 3-attempt lockout & NID fallback.",
        "Dual-board examination & sanad engine supporting Qawmi (Befaq) and Aliya (NCTB) grading.",
        "BANBEIS regulatory survey reporting, Argon2id security, and tested disaster recovery backup.",
      ],
      es: [
        "Motor de memorización de 30 paras con mapas de calor de revisión y retención.",
        "Contabilidad de doble fondo de la Shariah que aísla fondos operativos de Zakat/Lillah.",
        "Terminal de seguridad de pases con OTP del servidor y bloqueo ante intentos fallidos.",
        "Motor académico unificado para calificaciones de juntas Qawmi y Aliya.",
        "Exportación regulatoria BANBEIS y copias de seguridad de recuperación ante desastres.",
      ],
      bn: [
        "সবক, সবকি, আমুখতা ও রিভিশন ডিকে অ্যালার্ট সহ ৩০-পারা হিফজ ট্র্যাকিং হিটম্যাপ।",
        "সাধারণ তহবিল ও যাকাত/লিল্লাহ ফান্ড সম্পূর্ণ পৃথক রেখে শরিয়াহ ডাবল-এন্ট্রি ব্যালেন্স শিট।",
        "সার্ভার-সাইড ওটিপি ও ৩-বার ব্যর্থতায় লকআউট সুবিধা সহ সুরক্ষিত ক্যাম্পাস গেটপাস টার্মিনাল।",
        "বেফাকুল মাদারিস (কওমি) ও মাদ্রাসা বোর্ড (আলিয়া) উভয় ধারার সমন্বিত রেজাল্ট ও সনদ ইঞ্জিন।",
        "ব্যানবেইস (BANBEIS) বাৎসরিক শিক্ষা অডিট এক্সপোর্ট এবং পিডিপিএ ২০২৬ কমপ্লায়েন্স।",
      ],
    },
    date: { en: "November 2026", es: "Noviembre 2026", bn: "নভেম্বর ২০২৬" },
    github: "https://github.com/sakilahammed-dev/al-muallim-os",
    homepage: "https://al-muallim-os.vercel.app",
  },

  {
    title: "Cicata Nexus",
    can: "images/projects/CicataNexus/CicataNexusCan.webp",
    images: [
      { src: "images/projects/CicataNexus/1.webp", alt: "Image1" },
      { src: "images/projects/CicataNexus/2.webp", alt: "Image2" },
      { src: "images/projects/CicataNexus/3.webp", alt: "Image3" },
      { src: "images/projects/CicataNexus/4.webp", alt: "Image4" },
      { src: "images/projects/CicataNexus/5.webp", alt: "Image5" },
      { src: "images/projects/CicataNexus/6.webp", alt: "Image6" },
      { src: "images/projects/CicataNexus/7.webp", alt: "Image7" },
      { src: "images/projects/CicataNexus/8.webp", alt: "Image8" },
      { src: "images/projects/CicataNexus/9.webp", alt: "Image9" },
    ],
    description: {
      en: "Cicata Nexus is a web-based service request platform that centralizes equipment, materials, and support requests. It features role-specific dashboards, scheduling tools, and inventory tracking to streamline laboratory operations.",
      es: "Cicata Nexus es una plataforma web para la gestión de solicitudes de servicios que centraliza solicitudes de equipo, materiales y soporte. Cuenta con paneles específicos por rol, herramientas de programación y control de inventario para optimizar operaciones de laboratorio.",
    },
    tech: [
      SiReact,
      SiTailwindcss,
      SiVite,
      SiMongodb,
      SiExpress,
      SiNodedotjs,
      SiDocker,
    ],
    madeFor: [
      "CICATA Unidad Morelos",
      "https://mx.linkedin.com/company/cicatamor",
    ],
    features: {
      en: [
        "Centralized requests for equipment, materials, and support.",
        "Role-specific dashboards for users, managers, and admins.",
        "Integrated scheduling and calendar views.",
        "Inventory tracking and request history.",
        "Responsive design for desktop and mobile access.",
      ],
      es: [
        "Solicitudes centralizadas de equipo, materiales y soporte.",
        "Paneles específicos por rol para usuarios, gestores y administradores.",
        "Programación integrada con vistas de calendario.",
        "Control de inventario e historial de solicitudes.",
        "Diseño adaptable para acceso en escritorio y móvil.",
      ],
    },
    date: { en: "August 2025", es: "Agosto de 2025" },
    github: "https://github.com/ItO210/service-request-manager",
  },

  {
    title: "Health Sync",
    can: "images/projects/HealthSync/HealthSyncCan.webp",
    images: [
      { src: "images/projects/HealthSync/1.webp", alt: "Image1" },
      { src: "images/projects/HealthSync/2.webp", alt: "Image2" },
      { src: "images/projects/HealthSync/3.webp", alt: "Image3" },
      { src: "images/projects/HealthSync/4.webp", alt: "Image4" },
      { src: "images/projects/HealthSync/5.webp", alt: "Image5" },
    ],
    madeFor: ["Hospital del Niño Morelense", "https://www.hnm.org.mx/"],
    description: {
      en: "HealthSync is a hospital equipment ticket management system for web and Android. Staff can report equipment issues online, while technicians and admins handle tickets through the mobile app. It supports repair tracking, evidence uploads, performance monitoring, and account management.",
      es: "HealthSync es un sistema de gestión de tickets de equipos hospitalarios para web y Android. El personal reporta problemas en línea, mientras que técnicos y administradores gestionan tickets desde la app. Permite seguimiento de reparaciones, carga de evidencias, control de rendimiento y administración de cuentas.",
    },
    tech: [
      SiReact,
      SiTailwindcss,
      SiVite,
      SiKotlin,
      SiMysql,
      SiAndroidstudio,
      SiExpress,
      SiNodedotjs,
    ],
    features: {
      en: [
        "Web form for reporting equipment issues.",
        "Android app for technicians and admins.",
        "Ticket states for progress tracking.",
        "Evidence upload requirement for certain tickets.",
        "Performance stats and account management tools.",
      ],
      es: [
        "Formulario web para reportar problemas de equipos.",
        "Aplicación Android para técnicos y administradores.",
        "Estados de ticket para seguimiento del progreso.",
        "Carga obligatoria de evidencias para ciertos tickets.",
        "Estadísticas de rendimiento y gestión de cuentas.",
      ],
    },
    date: { en: "September 2024", es: "Septiembre de 2024" },
    github: "https://github.com/ItO210/equipment-ticket-system",
  },

  {
    title: "AI Racing Line",
    can: "images/projects/AIRacingLine/AIRacingLineCan.webp",
    images: [
      { src: "images/projects/AIRacingLine/1.webp", alt: "Image1" },
      { src: "images/projects/AIRacingLine/2.webp", alt: "Image2" },
      { src: "images/projects/AIRacingLine/3.webp", alt: "Image3" },
      { src: "images/projects/AIRacingLine/4.webp", alt: "Image4" },
    ],
    description: {
      en: "AIRacingLine is an AI-powered Unity tool that generates optimal racing lines and gives speed feedback in real time. An ML-Agents-trained AI drives the ideal path, which is recorded and shown with dynamic colors to guide acceleration and braking.",
      es: "AIRacingLine es una herramienta para Unity con IA que genera líneas de carrera óptimas y ofrece retroalimentación de velocidad en tiempo real. Una IA entrenada con ML-Agents conduce el camino ideal, que se registra y muestra con colores dinámicos para guiar aceleración y frenado.",
    },
    madeFor: ["Rewind Games", "https://rewindgames.ca/"],
    tech: [SiUnity, SiUnity, SiUnity, SiUnity, SiUnity],
    features: {
      en: [
        "Trains AI agents with reward shaping and sensor tuning.",
        "Generates racing lines from AI driving data.",
        "Real-time color feedback for speed zones.",
        "Integration with Unity ML-Agents.",
        "Visual guidance for acceleration and braking.",
      ],
      es: [
        "Entrena agentes IA con modelado de recompensas y ajuste de sensores.",
        "Genera líneas de carrera a partir de datos de conducción IA.",
        "Retroalimentación de color en tiempo real para zonas de velocidad.",
        "Integración con Unity ML-Agents.",
        "Guía visual para aceleración y frenado.",
      ],
    },
    date: { en: "September 2024", es: "Septiembre de 2024" },
    github: "https://github.com/ItO210/ai-racing-line",
  },

  {
    title: "Code Cuisine",
    can: "images/projects/CodeCuisine/CodeCuisineCan.webp",
    images: [
      { src: "images/projects/CodeCuisine/2.webp", alt: "Image2" },
      { src: "images/projects/CodeCuisine/1.gif", alt: "Image1" },
      { src: "images/projects/CodeCuisine/3.webp", alt: "Image3" },
      { src: "images/projects/CodeCuisine/4.webp", alt: "Image4" },
      { src: "images/projects/CodeCuisine/5.webp", alt: "Image5" },
      { src: "images/projects/CodeCuisine/6.webp", alt: "Image6" },
    ],
    madeFor: ["Aulify", "https://www.aulify.mx/"],
    description: {
      en: "CodeCuisine is an educational game that teaches programming through a hamburger-making challenge. Players use drag-and-drop logic blocks to build recipes, and the system checks their logic with instant feedback. It includes progress tracking and an admin dashboard.",
      es: "CodeCuisine es un juego educativo que enseña programación mediante un reto de hacer hamburguesas. Los jugadores usan bloques lógicos de arrastrar y soltar para crear recetas, y el sistema revisa su lógica al instante. Incluye seguimiento de progreso y panel de administración.",
    },
    tech: [
      SiReact,
      SiTailwindcss,
      SiVite,
      SiMysql,
      SiExpress,
      SiNodedotjs,
      SiReactrouter,
      SiUnity,
      SiMui,
    ],
    features: {
      en: [
        "Teaches programming basics through play.",
        "Drag-and-drop logic block interface.",
        "Instant feedback on recipe logic.",
        "Tracks user progress and rankings.",
        "Admin dashboard for monitoring activity.",
      ],
      es: [
        "Enseña fundamentos de programación mediante juego.",
        "Interfaz con bloques lógicos de arrastrar y soltar.",
        "Retroalimentación instantánea sobre la lógica.",
        "Seguimiento de progreso y clasificaciones.",
        "Panel de administración para monitorear actividad.",
      ],
    },
    date: { en: "March 2024", es: "Marzo de 2024" },
    github: "https://github.com/ItO210/educational-coding-game",
  },

  {
    title: "Aire Sano",
    can: "images/projects/AireSano/AireSanoCan.webp",
    images: [
      { src: "images/projects/AireSano/1.webp", alt: "Image1" },
      { src: "images/projects/AireSano/2.webp", alt: "Image2" },
      { src: "images/projects/AireSano/3.webp", alt: "Image3" },
    ],
    description: {
      en: "AireSano is an IoT-based air quality monitoring system using an ESP32 microcontroller. It collects temperature, humidity, and air quality data, sends it to a REST API, stores it in MySQL, and displays it on a web dashboard for real-time and historical tracking.",
      es: "AireSano es un sistema IoT de monitoreo de calidad del aire que usa un microcontrolador ESP32. Recopila datos de temperatura, humedad y calidad del aire, los envía a una API REST, los guarda en MySQL y los muestra en un panel web para seguimiento en tiempo real e histórico.",
    },
    tech: [SiMysql, SiExpress, SiNodedotjs, SiArduino, SiHtml5, SiCss3, SiJss],
    features: {
      en: [
        "Real-time data collection from sensors.",
        "Wi-Fi transmission to a REST API.",
        "Database storage with MySQL.",
        "Web dashboard for data visualization.",
        "Historical trend analysis tools.",
      ],
      es: [
        "Recolección de datos en tiempo real desde sensores.",
        "Transmisión por Wi-Fi a una API REST.",
        "Almacenamiento en base de datos MySQL.",
        "Panel web para visualización de datos.",
        "Herramientas de análisis de tendencias.",
      ],
    },
    date: { en: "September 2023", es: "Septiembre de 2023" },
    github: "https://github.com/ItO210/air-monitoring-system/tree/main",
  },
];
