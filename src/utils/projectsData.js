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
  SiJavascript,
  SiTelegram,
  SiGooglesheets,
} from "react-icons/si";

/* ==========================================================================
   1. UNNOTO KHABAR (উন্নত খাবার) - DETAILED ARCHITECTURE
   ========================================================================== */
const unnotoDetails_bn = {
  overviewTitle: "পরিচিতি ও ভিশন (Overview & Vision)",
  overview: [
    "উন্নত খাবার (Unnoto Khabar) হলো বাংলাদেশের মানুষের কাছে ভেজালমুক্ত খাঁটি ও অর্গানিক খাদ্যপণ্য পৌঁছে দেওয়ার জন্য শাকিল আহাম্মেদ দ্বারা গ্রাউন্ড-আপ থেকে ডিজাইন ও ডেভেলপ করা একটি পূর্ণাঙ্গ ফুল-স্ট্যাক ই-কমার্স প্ল্যাটফর্ম।",
    "প্রচলিত জটিল অনলাইন শপিংয়ের বিকল্প হিসেবে নির্মিত—যেখানে কোনো অপ্রয়োজনীয় অ্যাকাউন্ট রেজিস্ট্রেশন বা পাসওয়ার্ডের ঝামেলা ছাড়াই যে কেউ মাত্র এক ক্লিকে ক্যাশ অন ডেলিভারিতে অর্ডার করতে পারেন। আধুনিক কৃষিপণ্য ও খাঁটি খাদ্যসামগ্রী সরাসরি ভোক্তার দোরগোড়ায় পৌঁছে দিয়ে নিরাপদ খাদ্য সরবরাহ বলয় গড়ে তোলাই এর মূল লক্ষ্য।"
  ],
  problemTitle: "বাস্তব সমস্যা (The Problem)",
  problem: "সাধারণ ই-কমার্স প্ল্যাটফর্মে অতিরিক্ত স্টেপযুক্ত চেকআউট ফানেল (যেমন: ওটিপি ভেরিফিকেশন, প্রোফাইল ক্রিয়েশন ও জটিল ফর্ম ফিলিং)-এর কারণে প্রায় ৬৮% এর বেশি গ্রাহক মাঝপথেই কার্ট ছেড়ে চলে যায়। এছাড়া ধীরগতির পেজ লোড এবং অস্বচ্ছ ডেলিভারি ট্র্যাকিংয়ের ফলে অর্গানিক ফুড সার্ভিসে গ্রাহকের আস্থার সংকট তৈরি হয়।",
  solutionTitle: "প্রকৌশলগত সমাধান (The Solution)",
  solution: "Next.js অ্যাপ রাউটার এবং আধুনিক সার্ভার কম্পোনেন্টস আর্কিটেকচার ব্যবহার করে সাব-সেকেন্ড পেজ লোড নিশ্চিত করা হয়েছে। ১-ক্লিক এক্সপ্রেস চেকআউট মডেল, রিয়েল-টাইম ডেলিভারি ক্যালকুলেশন এবং সেলফ-হিলিং প্রিজমা ডেটাবেজ ম্যানেজমেন্ট দিয়ে একটি বিরামহীন ও অত্যন্ত দ্রুতগতির গ্রাহক অভিজ্ঞতা নিশ্চিত করা হয়েছে।",
  systemsTitle: "মূল প্রযুক্তিগত কাঠামো (Core Engineering Systems)",
  systems: [
    {
      num: "01",
      title: "১-ক্লিক এক্সপ্রেস চেকআউট ইঞ্জিন",
      sub: "Frictionless Instant Checkout Modal",
      desc: "কোনো সাইন-আপ, ওটিপি বা পাসওয়ার্ড মনে রাখার প্রয়োজন নেই। শুধু নাম, ফোন নাম্বার এবং ঠিকানা দিলেই তাৎক্ষণিক ক্যাশ অন ডেলিভারি অর্ডার প্রস্তুত হয়ে যায়।",
      points: [
        "জিরো-ফ্রিকশন ৩-ফিল্ড চেকআউট ফানেল",
        "অটোমেটিক ঢাকা ও ঢাকার বাইরের কুরিয়ার ফি গণনা",
        "কুপন কোড ও ইনস্ট্যান্ট ডিসকাউন্ট রিক্যালকুলেশন"
      ]
    },
    {
      num: "02",
      title: "রিয়েল-টাইম লাইভ অর্ডার ট্র্যাকার",
      sub: "Dedicated /track Pipeline & State Machine",
      desc: "গ্রাহক তার মোবাইল নাম্বার অথবা অর্ডার আইডি ইনপুট করে মুহূর্তের মধ্যে অর্ডারের লাইভ অগ্রগতি ট্র্যাক করতে পারেন।",
      points: [
        "৪-ধাপের ভিজ্যুয়াল পাইপলাইন (অর্ডার গৃহীত > প্যাকিং > কুরিয়ার > ডেলিভার্ড)",
        "স্বচ্ছ ডেলিভারি টাইমলাইন ও কুরিয়ার পার্টনার স্ট্যাটাস",
        "গ্রাহকের আস্থাবৃদ্ধিতে লাইভ হেল্পলাইন ইন্টিগ্রেশন"
      ]
    },
    {
      num: "03",
      title: "ইন্টেলিজেন্ট কার্ট ও ভ্যারিয়েশন প্রাইসিং",
      sub: "Dynamic Tiered Weight & Variation Engine",
      desc: "পণ্যভেদে ওজন ও সাইজ পরিবর্তনের সাথে সাথে রিয়েল-টাইমে প্রাইস আপডেট হয় (যেমন: খাঁটি মধু বা ঘিয়ে ১ কেজি, ৫০০ গ্রাম, ২৫০ গ্রাম)।",
      points: [
        "স্লাইড-ইন কার্ট ড্রয়ার ও ফ্লোটিং কার্ট ট্রিগার ট্যাব",
        "ভ্যারিয়েশন ভিত্তিক স্টক লিমিট ও স্বয়ংক্রিয় সাবটোটাল ক্যালকুলেশন",
        "লোকাল স্টোরেজ সিনক্রোনাইজেশন ও কার্ট পারসিস্টেন্স"
      ]
    },
    {
      num: "04",
      title: "সেন্ট্রাল অ্যাডমিন অপারেশনাল ড্যাশবোর্ড",
      sub: "Executive Operations & Inventory Control (/admin)",
      desc: "ব্যবসার সার্বিক অপারেশন পরিচালনার জন্য নির্মিত পূর্ণাঙ্গ অ্যাডমিন কন্ট্রোল সেন্টার।",
      points: [
        "রিয়েল-টাইম সেলস রেভিনিউ, আজকের অর্ডার ও ট্রানজ্যাকশন মেট্রিক্স",
        "১-ক্লিকে অর্ডার স্ট্যাটাস ট্রানজিশন ও ফিল্টারিং",
        "ইনভেন্টরি স্টক অ্যালার্ট ও প্রোডাক্ট ক্যাটালগ ম্যানেজমেন্ট"
      ]
    },
    {
      num: "05",
      title: "ফুল-স্ট্যাক রিলেশনাল ডেটাবেজ ও প্রিজমা ওআরএম",
      sub: "Type-Safe High-Performance Data Layer",
      desc: "প্রিজমা ওআরএম ব্যবহারের মাধ্যমে টাইপ-সেফ কুয়েরি এবং রিলেশনাল মডেলের নিরাপত্তা নিশ্চিত করা হয়েছে।",
      points: [
        "নর্মালাইজড রিলেশনাল স্কিমা (Order, OrderItem, Product, Customer)",
        "সাব-১৫ মিলিসেকেন্ড আল্ট্রা-ফাস্ট কোয়েরি এক্সিকিউশন",
        "ক্লাউড ডেটাবেজ ও ব্যাকআপ রেপ্লিকেশন রেডি"
      ]
    },
    {
      num: "06",
      title: "সার্ভার অ্যাকশনস ও সিকিউরিটি আর্কিটেকচার",
      sub: "Next.js 16 Server Components & Data Integrity",
      desc: "ক্লায়েন্ট সাইডের কোনো সেনসিটিভ লজিক এক্সপোজ না করে সম্পূর্ণ সার্ভার অ্যাকশনসের মাধ্যমে অর্ডার প্রসেসিং সম্পন্ন হয়।",
      points: [
        "কড়া ইনপুট স্যানিটাইজেশন ও স্প্যাম অর্ডার প্রিভেনশন",
        "জিরো লেআউট শিফট (CLS: 0) ও অপ্টিমাইজড ইমেজ অ্যাসেটস",
        "ক্লাউডফ্লেয়ার ওয়ার্কার্স ও এজ-রেডি রেসপন্সিভনেস"
      ]
    }
  ],
  techTitle: "ব্যবহৃত প্রযুক্তি (Technologies Used)",
  techList: [
    "Next.js 16 (App Router)",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "Prisma ORM",
    "PostgreSQL / SQLite",
    "Bun Engine",
    "Cloudflare Workers / OpenNext",
    "Lucide Icons"
  ]
};

const unnotoDetails_en = {
  overviewTitle: "Overview & Vision",
  overview: [
    "Unnoto Khabar is a production-ready, full-stack organic food e-commerce platform architected and developed from the ground up by Sakil Ahammed to deliver 100% authentic, chemical-free food products across Bangladesh.",
    "Engineered as a high-conversion alternative to bloated online stores, it removes registration barriers, enabling friction-free 1-click Cash on Delivery orders while establishing a secure, transparent farm-to-table digital supply ecosystem."
  ],
  problemTitle: "The Problem",
  problem: "Traditional e-commerce platforms suffer from excessive checkout friction (mandatory account signups, SMS OTP gates, multi-step forms), leading to over 68% cart abandonment. Furthermore, sluggish page response and opaque delivery timelines undermine consumer trust in organic food delivery.",
  solutionTitle: "The Solution",
  solution: "Architected on Next.js App Router and React Server Components to deliver sub-second page loads. Implemented a zero-friction 1-Click Express Checkout, dynamic district courier rate computation, live order state machine (/track), and resilient Prisma ORM for seamless user experience and business automation.",
  systemsTitle: "Core Engineering Systems",
  systems: [
    {
      num: "01",
      title: "1-Click Express Checkout Engine",
      sub: "Frictionless Instant Checkout Modal",
      desc: "Zero mandatory account creation or password barriers. Customers place cash-on-delivery orders in under 15 seconds.",
      points: [
        "Zero-friction 3-field high-converting checkout modal",
        "Automated Dhaka vs Outer-Dhaka delivery fee computation",
        "Real-time coupon code & instant discount recalculation"
      ]
    },
    {
      num: "02",
      title: "Real-Time Live Order Tracker",
      sub: "Dedicated /track Pipeline & State Machine",
      desc: "Customers track live order fulfillment status instantly via mobile phone number or Order ID.",
      points: [
        "4-stage visual fulfillment progress bar (Placed > Packing > Courier > Delivered)",
        "Transparent delivery timeline with courier tracking updates",
        "Integrated instant WhatsApp and direct phone helpline"
      ]
    },
    {
      num: "03",
      title: "Intelligent Cart & Dynamic Pricing",
      sub: "Dynamic Tiered Weight & Variation Engine",
      desc: "Instant client-side subtotal recalculation based on product weight and volume variants.",
      points: [
        "Slide-in interactive cart drawer with floating trigger tab",
        "Variant-specific inventory validation and subtotal updates",
        "Local storage state synchronization and persistent user cart"
      ]
    },
    {
      num: "04",
      title: "Central Admin Operations Console",
      sub: "Executive Operations & Inventory Control (/admin)",
      desc: "Comprehensive managerial cockpit designed to oversee daily operations, orders, and sales performance.",
      points: [
        "Real-time revenue metrics, daily transaction volume & orders",
        "1-click batch order fulfillment status transitions",
        "Automated low-stock alerts and dynamic product catalog manager"
      ]
    },
    {
      num: "05",
      title: "Full-Stack Relational Database Layer",
      sub: "Type-Safe High-Performance Data Layer",
      desc: "Type-safe database interactions powered by Prisma ORM and PostgreSQL for lightning-fast querying.",
      points: [
        "Normalized relational models (Order, OrderItem, Product, Customer)",
        "Sub-15ms database query execution with indexing",
        "Production-ready replication, migration, and disaster recovery"
      ]
    },
    {
      num: "06",
      title: "Server Actions & Security Architecture",
      sub: "Next.js 16 Server Components & Data Integrity",
      desc: "All mutation logic executed through Next.js Server Actions, keeping private logic and keys strictly off the client bundle.",
      points: [
        "Strict input validation and bot prevention safeguards",
        "Zero Cumulative Layout Shift (CLS: 0) and optimized assets",
        "Edge-ready responsiveness with global Cloudflare routing"
      ]
    }
  ],
  techTitle: "Technologies Used",
  techList: [
    "Next.js 16 (App Router)",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "Prisma ORM",
    "PostgreSQL / SQLite",
    "Bun Engine",
    "Cloudflare Workers / OpenNext",
    "Lucide Icons"
  ]
};

/* ==========================================================================
   2. TUTORBARI (টিউটরবাড়ি) - DETAILED ARCHITECTURE
   ========================================================================== */
const tutorbariDetails_bn = {
  overviewTitle: "পরিচিতি ও ভিশন (Overview & Vision)",
  overview: [
    "টিউটরবাড়ি (TutorBari) হলো বাংলাদেশের ৬৪ জেলায় নির্ভরযোগ্য ও যাচাইকৃত গৃহশিক্ষক খুঁজে পাওয়ার আধুনিক এন্টারপ্রাইজ এডুটেক প্ল্যাটফর্ম। অভিভাবক এবং শিক্ষার্থীদের জন্য উপযুক্ত শিক্ষক খুঁজে নেওয়ার দীর্ঘদিনের আস্থার সংকট দূর করতে শাকিল আহাম্মেদ এটি একটি পূর্ণাঙ্গ এন্টারপ্রাইজ সিস্টেম হিসেবে ডিজাইন করেছেন।",
    "ক্যামব্রিজ, এডেক্সেল, ইংলিশ ভার্সন এবং জাতীয় শিক্ষাক্রমের শিক্ষার্থীদের জন্য মানসম্মত শিক্ষক নির্বাচন প্রক্রিয়াকে স্বয়ংক্রিয় ও স্বচ্ছ করে দেশের শিক্ষাব্যবস্থায় ডিজিটাল রূপান্তর ঘটানোই এই প্ল্যাটফর্মের মূল লক্ষ্য।"
  ],
  problemTitle: "বাস্তব সমস্যা (The Problem)",
  problem: "প্রচলিত টিউশন মিডিয়াগুলোতে অস্বচ্ছ কমিশন ব্যবস্থা, শিক্ষকদের অসম্পূর্ণ ব্যাকগ্রাউন্ড ভেরিফিকেশন এবং অভিভাবকদের জন্য ঘণ্টার পর ঘণ্টা উপযুক্ত শিক্ষক খোঁজার জটিলতা থাকে। এছাড়া ভুয়া প্রোফাইল, নিরাপত্তা ঝুঁকি এবং পেমেন্ট সংক্রান্ত বিরোধ অভিভাবক ও শিক্ষক উভয়ের জন্যই বড় সমস্যা।",
  solutionTitle: "প্রকৌশলগত সমাধান (The Solution)",
  solution: "৫-ফ্যাক্টর ব্যাখ্যামূলক এআই ম্যাচমেকিং অ্যালগরিদম যা দূরত্ব, পাঠ্যক্রম, বিশ্ববিদ্যালয়ের ব্যাকগ্রাউন্ড ও ট্রাস্ট স্কোর বিশ্লেষণ করে স্বয়ংক্রিয়ভাবে সেরা শিক্ষক সুপারিশ করে। সাথে রয়েছে ৩-ধাপের কুইক হায়ার উইজার্ড, লিগ্যাল কনফার্মেশন লেটার এবং রোল-বেসড সিকিউর পোর্টাল।",
  systemsTitle: "মূল প্রযুক্তিগত কাঠামো (Core Engineering Systems)",
  systems: [
    {
      num: "01",
      title: "৫-ফ্যাক্টর এআই ম্যাচমেকিং ইঞ্জিন",
      sub: "Explainable 5-Factor AI Matchmaking Engine",
      desc: "দূরত্ব, শিক্ষাক্রম, বিশ্ববিদ্যালয়ের ব্যাকগ্রাউন্ড, অভিজ্ঞতা ও অভিভাবক রিভিউয়ের গাণিতিক বিশ্লেষণ করে স্বয়ংক্রিয়ভাবে সেরা শিক্ষক নির্ধারণ করে।",
      points: [
        "জিও-কোঅর্ডিনেট ভিত্তিক নিকটতম টিউটর ফিল্টারিং",
        "কারিকুলাম এক্সপার্টাইজ (Cambridge/Edexcel/NCTB)",
        "ব্যাখ্যামূলক ট্রাস্ট ও রেটিং মেট্রিক্স"
      ]
    },
    {
      num: "02",
      title: "৩-ধাপের ইনস্ট্যান্ট 'হায়ার এ টিউটর' উইজার্ড",
      sub: "High-Conversion 3-Step Hiring Wizard",
      desc: "কোনো জটিল সাইন-আপ ছাড়াই অভিভাবক মাত্র ৩টি ধাপে শিক্ষার্থীর প্রয়োজন অনুযায়ী টিউশন রিকোয়েস্ট পোস্ট করতে পারেন।",
      points: [
        "গেস্ট মোডে অটো-ইউজার অ্যাকাউন্ট জেনারেশন",
        "শ্রেণি, বিষয় ও স্যালারি রেঞ্জ সিলেকশন",
        "তাৎক্ষণিক এসএমএস ও ইমেইল কনফার্মেশন"
      ]
    },
    {
      num: "03",
      title: "মাল্টি-রোল ড্যাশবোর্ড ও অ্যাক্সেস কন্ট্রোল",
      sub: "Role-Based Portals (Guardian, Tutor & Admin)",
      desc: "অভিভাবক, গৃহশিক্ষক এবং সিস্টেম অ্যাডমিনিস্ট্রেটরদের জন্য সম্পূর্ণ পৃথক ও সুরক্ষিত তিন স্তরের পোর্টাল আর্কিটেকচার।",
      points: [
        "অভিভাবকের অ্যাপ্লিকে্যান্ট ট্র্যাকার ও ইন্টারভিউ শিডিউলার",
        "টিউটরের ভেরিফায়েড ব্যাজ ও সিভি বিল্ডার",
        "অ্যাডমিন সুপারভিশন ও কেওয়াইসি ভেরিফিকেশন"
      ]
    },
    {
      num: "04",
      title: "স্বয়ংক্রিয় লিগ্যাল লেটার ও ইনভয়েসিং",
      sub: "Automated Agreement & Billing System",
      desc: "টিউশন চূড়ান্ত হওয়ার সাথে সাথে প্ল্যাটফর্ম রুলস, কমিশন পলিসি এবং আইনি নিশ্চয়তাপত্র সম্বলিত স্বয়ংক্রিয় পিডিএফ প্রস্তুত হয়।",
      points: [
        "স্বয়ংক্রিয় কনফার্মেশন লেটার জেনারেশন",
        "প্ল্যাটফর্ম কমিশন ও সার্ভিস চার্জ ক্যালকুলেশন",
        "আনুষ্ঠানিক ভ্যাট ও ট্যাক্স ইনভয়েস ডাউনলোড"
      ]
    },
    {
      num: "05",
      title: "৬৪ জেলার লাইভ টিউশন জব বোর্ড",
      sub: "Real-Time Geo Job Board & Alert Pipeline",
      desc: "সারা দেশের টিউটরদের জন্য রিয়েল-টাইম টিউশন সার্কুলার এবং ক্যাটাগরি অনুযায়ী ফিল্টারিং ব্যবস্থা।",
      points: [
        "বিভাগ ও জেলা ভিত্তিক লাইভ টিউশন ফিড",
        "ইনস্ট্যান্ট পুশ নোটিফিকেশন ও অ্যালার্ট",
        "১-ক্লিকে টিউশনে আবেদন সুবিধা"
      ]
    },
    {
      num: "06",
      title: "ডিজিটাল এসক্রো ও মোবাইল পেমেন্ট গেটওয়ে",
      sub: "Secure Escrow & Mobile Financial Services",
      desc: "বিকাশ, নগদ এবং কার্ড পেমেন্টের মাধ্যমে টিউশন ফি জমা এবং ক্লাস সম্পন্ন হওয়ার পর নিরাপদ ফান্ড রিলিজ আর্কিটেকচার।",
      points: [
        "বিকাশ ও নগদ পেমেন্ট সিমুলেশন ইন্টিগ্রেশন",
        "এসক্রো ট্রাস্ট ব্যালেন্স ও ট্রানজ্যাকশন লগ",
        "ডিসপুট রেজোলিউশন ও রিফান্ড ম্যানেজমেন্ট"
      ]
    }
  ],
  techTitle: "ব্যবহৃত প্রযুক্তি (Technologies Used)",
  techList: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Prisma ORM",
    "PostgreSQL",
    "Redis Caching",
    "Docker",
    "PDFKit",
    "Lucide Icons"
  ]
};

const tutorbariDetails_en = {
  overviewTitle: "Overview & Vision",
  overview: [
    "TutorBari is an enterprise-grade digital tutoring marketplace engineered by Sakil Ahammed to bridge verified high-caliber educators with families across all 64 districts in Bangladesh.",
    "Built to replace informal and untrusted middlemen, TutorBari establishes an automated, highly transparent ecosystem tailored for English Medium (Cambridge, Edexcel), English Version, and National Curriculum students."
  ],
  problemTitle: "The Problem",
  problem: "The private tuition ecosystem in Bangladesh is plagued by opaque commission structures, lack of verified educator credentials, safety concerns for families, and tedious search cycles that can take weeks.",
  solutionTitle: "The Solution",
  solution: "Engineered an Explainable 5-Factor AI Matchmaking Engine that evaluates proximity, university pedigree, subject mastery, and trust history to suggest top tutors within seconds. Backed by a 3-step guest onboarding wizard, automated legal agreement generators, and segregated multi-role portals.",
  systemsTitle: "Core Engineering Systems",
  systems: [
    {
      num: "01",
      title: "Explainable 5-Factor AI Matchmaker",
      sub: "Algorithmic Precision Educator Matching",
      desc: "Multi-parameter ranking engine evaluating geodetic distance, university pedigree, board specialization, experience, and guardian reviews.",
      points: [
        "Proximity-based radius filtering across 64 districts",
        "Curriculum alignment (Cambridge, Edexcel, NCTB)",
        "Transparent matching rationale and trust indices"
      ]
    },
    {
      num: "02",
      title: "3-Step Instant 'Hire a Tutor' Wizard",
      sub: "Zero-Friction Parent Conversion Funnel",
      desc: "Streamlined 3-step guest onboarding workflow allowing parents to post requirements without mandatory pre-registration.",
      points: [
        "Automated user provisioning in background",
        "Interactive grade, subject & budget selectors",
        "Immediate SMS and email verification triggers"
      ]
    },
    {
      num: "03",
      title: "Multi-Role Portal Architecture",
      sub: "Independent Role-Based Access Control",
      desc: "Segregated, highly secured dashboard environments designed specifically for Guardians, Tutors, and Central Operations Admin.",
      points: [
        "Guardian interview scheduler & applicant tracker",
        "Tutor verification badge & dynamic CV builder",
        "Executive admin oversight and KYC document audit"
      ]
    },
    {
      num: "04",
      title: "Automated Legal Letters & Invoicing",
      sub: "Dynamic PDF Generation & Agreement Pipeline",
      desc: "Instantly compiles formal confirmation agreements, platform terms, and commission invoices upon successful match.",
      points: [
        "Server-side confirmation letter generation",
        "Tiered platform commission calculation",
        "Audit-ready digital receipts and tax invoices"
      ]
    },
    {
      num: "05",
      title: "64-District Live Tuition Job Board",
      sub: "Real-Time Circular Pipeline & WebSockets",
      desc: "Nationwide live feed for verified educators with multi-level filtering by location, medium, and expected honorarium.",
      points: [
        "District and sub-district indexed job feeds",
        "Instant circular notifications and SMS alerts",
        "1-click proposal submission with cover notes"
      ]
    },
    {
      num: "06",
      title: "Digital Escrow & MFS Payment Simulation",
      sub: "High-Security Mobile Financial Services",
      desc: "bKash, Nagad, and digital payment simulation ensuring tuition fees are held securely in escrow until class milestones are met.",
      points: [
        "Integrated bKash and Nagad API simulation",
        "Milestone-based escrow releases and dispute lock",
        "Immutable financial ledger and refund protocols"
      ]
    }
  ],
  techTitle: "Technologies Used",
  techList: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Prisma ORM",
    "PostgreSQL",
    "Redis Caching",
    "Docker",
    "PDFKit",
    "Lucide Icons"
  ]
};

/* ==========================================================================
   3. AL-MU'ALLIM OS (আল-মু'াল্লিম ওএস) - DETAILED ARCHITECTURE
   ========================================================================== */
const alMuallimDetails_bn = {
  overviewTitle: "পরিচিতি ও ভিশন (Overview & Vision)",
  overview: [
    "আল-মু'াল্লিম ওএস (Al-Mu'allim OS) হলো বাংলাদেশের কওমি, হিফজ এবং আলিয়া মাদ্রাসার প্রাতিষ্ঠানিক পরিচালনার জন্য শাকিল আহাম্মেদ দ্বারা গ্রাউন্ড-আপ থেকে ডিজাইন করা একটি এন্টারপ্রাইজ মাল্টি-টেন্যান্ট অপারেটিং সিস্টেম।",
    "সনাতন খাতা-কলম নির্ভর জটিল হিসাব এবং নিরাপত্তাহীন ক্যাম্পাস ব্যবস্থাপনার বদলে একটি শরিয়াহ-সম্মত, স্বয়ংক্রিয় এবং আধুনিক প্রাতিষ্ঠানিক পরিবেশ নিশ্চিত করাই এই প্ল্যাটফর্মের মূল লক্ষ্য।"
  ],
  problemTitle: "বাস্তব সমস্যা (The Problem)",
  problem: "মাদ্রাসার আবাসিক ব্যবস্থাপনা অত্যন্ত সংবেদনশীল। সনাতন অ্যাকাউন্টিং সফটওয়্যার সাধারণ প্রশাসনিক তহবিল এবং যাকাত/লিল্লাহ ফান্ড সম্পূর্ণ আলাদা রাখতে ব্যর্থ হয়, যা শরিয়াহ নির্দেশিকা লঙ্ঘনের বড় ঝুঁকি তৈরি করে। এছাড়া ৩০-পারা হিফজ মুখস্থের অগ্রগতি পর্যবেক্ষণ এবং শত শত শিক্ষার্থীর ক্যাম্পাস আগমন-প্রস্থানে নিরাপত্তা ব্যবস্থার বড় ঘাটতি ছিল।",
  solutionTitle: "প্রকৌশলগত সমাধান (The Solution)",
  solution: "শরিয়াহ-সম্মত ডুয়াল-ফান্ড ডাবল-এন্ট্রি লেজার যা সাধারণ ফান্ড ও যাকাত/লিল্লাহ তহবিলকে শতভাগ আলাদা রাখে। রিভিশন ডিকে অ্যালার্ট সহ ৩০-পারা হিফজ মেমোরাইজেশন ট্র্যাকার, ওটিপি-ভিত্তিক ক্যাম্পাস গেটপাস টার্মিনাল এবং ব্যানবেইস (BANBEIS) সরকারি শিক্ষা অডিট এক্সপোর্ট ইঞ্জিন গড়ে তোলা হয়েছে।",
  systemsTitle: "মূল প্রযুক্তিগত কাঠামো (Core Engineering Systems)",
  systems: [
    {
      num: "01",
      title: "৩০-পারা হিফজ মেমোরাইজেশন ইঞ্জিন ও হিটম্যাপ",
      sub: "30-Para Quran Memorization & Retention Heatmap",
      desc: "প্রতিটি শিক্ষার্থীর সবক (নতুন পড়া), সবকি (সাম্প্রতিক মুখস্থ) এবং আমুখতা (পূর্ববর্তী পারা) নির্ভুলভাবে ট্র্যাকিংয়ের ভিজ্যুয়াল হিটম্যাপ।",
      points: [
        "পারা ও রুকু ভিত্তিক মেমোরি ডিকে (ভুলে যাওয়ার ঝুঁকি) অ্যালার্ট",
        "দৈনিক তিলাওয়াত অগ্রগতি ও মুহতামিম অডিট ভিউ",
        "বার্ষিক হিফজ সম্পন্ন পূর্বাভাস অ্যালগরিদম"
      ]
    },
    {
      num: "02",
      title: "শরিয়াহ দ্বৈত-তহবিল ডাবল-এন্ট্রি লেজার",
      sub: "Shariah-Compliant Dual-Fund Accounting",
      desc: "সাধারণ পরিচালনা ফান্ড এবং যাকাত/লিল্লাহ কল্যাণ ফান্ডকে সম্পূর্ণ আলাদা রেখে নিখুঁত ব্যালেন্স শিট তৈরি করে।",
      points: [
        "যাকাত ও লিল্লাহ তহবিলের শরিয়াহ আইসোলেশন",
        "স্বয়ংক্রিয় ভাউচার, ক্যাশবুক ও ডাবল-এন্ট্রি জার্নাল",
        "এক ক্লিকে মাদ্রাসার বাৎসরিক আয়-ব্যয় অডিট রিপোর্ট"
      ]
    },
    {
      num: "03",
      title: "ক্যাম্পাস গেটপাস সিকিউরিটি টার্মিনাল",
      sub: "Server-Side OTP Gatepass Verification",
      desc: "আবাসিক শিক্ষার্থীদের ক্যাম্পাসের বাইরে যাওয়ার ক্ষেত্রে অভিভাবকের মোবাইল ওটিপি ছাড়া গেট খোলা অসম্ভব।",
      points: [
        "সার্ভার-সাইড এসএমএস ওটিপি ও ৩-বার ব্যর্থতায় স্বয়ংক্রিয় লকআউট",
        "গার্ডিয়ানের এনআইডি ও ডিজিটাল সিগনেচার ব্যাকআপ",
        "লাইভ সিকিউরিটি গার্ড গেটপাস ভেরিফিকেশন কনসোল"
      ]
    },
    {
      num: "04",
      title: "দ্বৈত-বোর্ড এক্সাম ও সনদ ইঞ্জিন",
      sub: "Dual-Board Unified Examination Engine",
      desc: "বেফাকুল মাদারিসিল আরাবিয়া (কওমি) এবং বাংলাদেশ মাদ্রাসা শিক্ষা বোর্ড (আলিয়া) উভয়ের ফলাফল ও মেধার সমন্বিত মূল্যায়ন।",
      points: [
        "মুমতাজ, জায়্যিদ জিদ্দান গ্রেডিং রুলস সাপোর্ট",
        "এক ক্লিকে পরীক্ষার প্রবেশপত্র ও মার্কশিট জেনারেশন",
        "স্বয়ংক্রিয় ডিজিটাল আরবি ও বাংলা সনদ প্রস্তুত"
      ]
    },
    {
      num: "05",
      title: "ব্যানবেইস (BANBEIS) অডিট ও রেগুলেটরি রিপোর্টিং",
      sub: "Government Compliance & Survey Exporter",
      desc: "বাংলাদেশ শিক্ষাতথ্য ও পরিসংখ্যান ব্যুরোর বাৎসরিক শিক্ষা জরিপের জন্য সরাসরি গ্রহণযোগ্য এক্সেল ও পিডিএফ রিপোর্ট প্রস্তুত করে।",
      points: [
        "ব্যানবেইস নির্ধারিত ফরম্যাটে ডেটা প্রস্তুতকরণ",
        "শিক্ষক-শিক্ষার্থী অনুপাত ও কোটা অ্যানালিটিক্স",
        "ব্যক্তিগত উপাত্ত সুরক্ষা আইন (PDPA ২০২৬) কমপ্লায়েন্স"
      ]
    },
    {
      num: "06",
      title: "মাল্টি-টেন্যান্ট ক্লাউড ও সিকিউরিটি",
      sub: "High-Availability Multi-Tenant Architecture",
      desc: "শত শত মাদ্রাসার ডেটা সম্পূর্ণ পৃথক ও সুরক্ষিত রেখে ক্লাউডে ডেপ্লয়মেন্টের জন্য ডিজাইন করা হয়েছে।",
      points: [
        "Argon2id পাসওয়ার্ড ক্রিপ্টোগ্রাফি ও রোল গার্ড",
        "মাদ্রাসাভেদে সম্পূর্ণ আলাদা স্কিমা ও ডেটা এনক্রিপশন",
        "স্বয়ংক্রিয় ক্লাউড ব্যাকআপ ও ডিজাস্টার রিকভারি"
      ]
    }
  ],
  techTitle: "ব্যবহৃত প্রযুক্তি (Technologies Used)",
  techList: [
    "Next.js 16",
    "TypeScript",
    "React 19",
    "Tailwind CSS",
    "Prisma ORM",
    "PostgreSQL",
    "Redis",
    "Docker",
    "PDFKit",
    "Chart.js"
  ]
};

const alMuallimDetails_en = {
  overviewTitle: "Overview & Vision",
  overview: [
    "Al-Mu'allim OS is an enterprise-grade multi-tenant madrasa operating system architected from the ground up by Sakil Ahammed for Bangladeshi Qawmi, Hifz, and Aliya institutional networks.",
    "Engineered to replace vulnerable manual ledgers, it combines strict Shariah-compliant financial governance, Quran memorization heatmaps, and digital campus perimeter security into a unified institutional core."
  ],
  problemTitle: "The Problem",
  problem: "Islamic educational institutions manage thousands of residential students under strict theological mandates. Off-the-shelf ERPs fail to preserve the legal isolation between General administrative funds and Zakat/Lillah welfare assets, creating Shariah non-compliance risks. Moreover, tracking progress across 30 Quranic paras and enforcing student safety during campus exits historically suffered from manual paperwork vulnerabilities.",
  solutionTitle: "The Solution",
  solution: "Engineered a cryptographic dual-fund double-entry ledger that guarantees zero leakage between operating revenue and Zakat trust funds. Built an intelligent 30-Para Hifz retention heatmap with memory decay alerts, an OTP-secured campus gatepass terminal, and automated BANBEIS regulatory survey census reporting.",
  systemsTitle: "Core Engineering Systems",
  systems: [
    {
      num: "01",
      title: "30-Para Quran Hifz Engine & Retention Heatmap",
      sub: "Memory Decay Analytics & Progression Tracking",
      desc: "Visual analytics platform tracking Sabak (daily recitation), Sabki (recent memory), and Amokhta (cumulative retention).",
      points: [
        "Surah & Ruku level memory decay alerts",
        "Muhtamim oversight dashboard with daily audits",
        "Predictive completion trajectory forecasting"
      ]
    },
    {
      num: "02",
      title: "Shariah Dual-Fund Double-Entry Ledger",
      sub: "Theological Fund Isolation & Financial Integrity",
      desc: "Strictly bifurcated financial pipeline ensuring Zakat and Lillah contributions cannot cross-contaminate general operating expenses.",
      points: [
        "Cryptographic isolation of Zakat/Lillah welfare pools",
        "Automated double-entry journals, vouchers, and cashbooks",
        "One-click balance sheet and annual audit generator"
      ]
    },
    {
      num: "03",
      title: "Campus Gatepass Security Terminal",
      sub: "Server-Side OTP Verification & Perimeter Control",
      desc: "Residential campus exit terminal requiring real-time SMS one-time password verification from registered guardians.",
      points: [
        "Server-side OTP generation with 3-attempt lockout",
        "National ID (NID) and digital signature backup for emergency exits",
        "Guard console with instant identity confirmation"
      ]
    },
    {
      num: "04",
      title: "Dual-Board Examination & Sanad Generator",
      sub: "Unified Academic Evaluation for Befaq & NCTB",
      desc: "Harmonized grading engine accommodating both Qawmi (Befaqul Madaris) and Aliya (NCTB) grading conventions.",
      points: [
        "Mumtaz, Jayyid Jiddan, and letter-grade support",
        "Automated admit card and transcript generator",
        "Bilingual Arabic-Bengali Sanad (graduation certificate) printer"
      ]
    },
    {
      num: "05",
      title: "BANBEIS Regulatory Census & Audit Reporting",
      sub: "National Educational Data Compliance",
      desc: "Automated exporter producing official spreadsheets and PDFs compliant with Bangladesh Bureau of Educational Information and Statistics.",
      points: [
        "Direct formatting for annual ministry surveys",
        "Teacher-student ratio analytics and quota distribution",
        "Full compliance with Bangladesh PDPA 2026 data privacy"
      ]
    },
    {
      num: "06",
      title: "High-Availability Multi-Tenant Architecture",
      sub: "Zero-Trust Security & Resilient Cloud Infrastructure",
      desc: "Multi-tenant cloud architecture providing isolated database schemas for hundreds of participating institutions.",
      points: [
        "Argon2id password hashing and role-based policy enforcement",
        "Tenant-level schema isolation and encrypted storage",
        "Automated cloud backup and tested disaster recovery pipeline"
      ]
    }
  ],
  techTitle: "Technologies Used",
  techList: [
    "Next.js 16",
    "TypeScript",
    "React 19",
    "Tailwind CSS",
    "Prisma ORM",
    "PostgreSQL",
    "Redis",
    "Docker",
    "PDFKit",
    "Chart.js"
  ]
};

/* ==========================================================================
   4. COFFEE HOUSE (কফি হাউজ) - DETAILED ARCHITECTURE
   ========================================================================== */
const coffeeHouseDetails_bn = {
  overviewTitle: "পরিচিতি ও ভিশন (Overview & Vision)",
  overview: [
    "কফি হাউজ (Coffee House) হলো একটি প্রিমিয়াম ক্যাফে ও কফি শপের জন্য শাকিল আহাম্মেদ দ্বারা ডিজাইন ও ডেভেলপ করা একটি আধুনিক, নান্দনিক ও রেসপন্সিভ ডিজিটাল প্ল্যাটফর্ম।",
    "ক্যাফের উষ্ণ পরিবেশ, খাঁটি কফি বিনের সোর্সিং এবং স্পেশালিটি ব্রিউয়িং প্রসেসের গল্প তুলে ধরে কফিপ্রেমীদের জন্য একটি আকর্ষণীয় ডিজিটাল শোকেস গড়ে তোলাই এই প্রজেক্টের ভিশন।"
  ],
  problemTitle: "বাস্তব সমস্যা (The Problem)",
  problem: "অনেক ঐতিহ্যবাহী ক্যাফে ও রেস্তোরাঁর ডিজিটাল উপস্থিতির অভাব থাকে অথবা তাদের ওয়েবসাইটগুলো মোবাইল ডিভাইসে ধীরগতির ও ভারী ফ্রেমওয়ার্কে জটিল হয়ে পড়ে। ফলে গ্রাহকরা মেন্যু, আউটলেটের সঠিক অবস্থান বা নতুন কোনো সিজনাল আইটেম সহজে জানতে পারেন না।",
  solutionTitle: "প্রকৌশলগত সমাধান (The Solution)",
  solution: "সেমান্টিক HTML5, মডার্ন CSS3 ভ্যারিয়েবল এবং পিওর ES6+ জাভাস্ক্রিপ্ট ব্যবহার করে একটি জিরো-ডিপেন্ডেন্সি, আল্ট্রা-ফাস্ট এবং ১০০% রেসপন্সিভ ওয়েবসাইট তৈরি করা হয়েছে। এতে রয়েছে স্লাইড-আউট মোবাইল মেন্যু, ক্যাটাগরি-ভিত্তিক কফি মেন্যু ফিল্টার, অ্যাম্বিয়েন্স গ্যালারি এবং আউটলেট লোকেটার।",
  systemsTitle: "মূল প্রযুক্তিগত কাঠামো (Core Engineering Systems)",
  systems: [
    {
      num: "01",
      title: "আর্টফুল রেসপন্সিভ UI/UX ও ফ্লুইড টাইপোগ্রাফি",
      sub: "Artisan Aesthetic & Fluid Layouts",
      desc: "কফির উষ্ণ ব্রাউন প্যালেট, মডার্ন টাইপোগ্রাফি এবং সিএসএস গ্রিড ও ফ্লেক্সবক্স দিয়ে নির্মিত নান্দনিক ইউজার ইন্টারফেস।",
      points: [
        "ওয়ার্ম কফি টোন কালার প্যালেট ও মিনিমাল ডিজাইন",
        "মোবাইল, ট্যাবলেট ও ডেস্কটপের জন্য ফ্লুইড স্কেলিং",
        "রেটিনা ডিসপ্লে অপ্টিমাইজড হাই-রেজ্যুলেশন গ্রাফিক্স"
      ]
    },
    {
      num: "02",
      title: "ইন্টারেক্টিভ কফি ও স্ন্যাক্স মেন্যু শোকেস",
      sub: "Dynamic Filterable Coffee Menu",
      desc: "এসপ্রেসো, কোল্ড ব্রিউ, স্পেশালিটি রোস্ট এবং ফ্রেশ বেকারির জন্য সুন্দরভাবে ক্যাটাগরাইজড ডিজিটাল মেন্যু।",
      points: [
        "এসপ্রেসো, ল্যাটে, ক্যাপুচিনো ও কোল্ড ড্রিঙ্কস ক্যাটাগরি",
        "উপাদান ও স্বাদের বিস্তারিত বর্ণনা সহ প্রাইসিং ট্যাগ",
        "ইন্টারঅ্যাক্টিভ বাটন ও হোভার মাইক্রো-ইন্টারঅ্যাকশন"
      ]
    },
    {
      num: "03",
      title: "হাই-রেজ্যুলেশন অ্যাম্বিয়েন্স ও রোস্টিং গ্যালারি",
      sub: "Visual Coffee Craftsmanship & Ambiance",
      desc: "কফি বিন নির্বাচন, বারিস্টা ব্রিউয়িং আর্ট এবং ক্যাফের মনোরম পরিবেশের হাই-রেজ্যুলেশন ফটোগ্রাফিক শোকেস।",
      points: [
        "কফি তৈরির শিল্প ও রোস্টিং প্রক্রিয়ার ভিজ্যুয়াল স্টোরিটেলিং",
        "ক্যাফের নান্দনিক অভ্যন্তরীণ সাজসজ্জা উপস্থাপন",
        "ফাস্ট-লোডিং অপ্টিমাইজড ইমেজ গ্রিড"
      ]
    },
    {
      num: "04",
      title: "স্মার্ট মোবাইল নেভিগেশন ও ড্রয়ার",
      sub: "Frictionless Responsive Mobile Experience",
      desc: "মোবাইল ব্যবহারকারীদের জন্য মসৃণ হ্যামবার্গার ড্রয়ার, ওয়ান-টাচ ক্লোজ এবং কি-বোর্ড অ্যাক্সেসিবিলিটি।",
      points: [
        "স্মুথ সিএসএস ট্রানজিশন সহ স্লাইড-ইন নেভিগেশন",
        "স্মুথ স্ক্রোল অ্যাঙ্কর জাম্পিং ও সেকশন ট্র্যাকিং",
        "সকল স্ক্রিন সাইজে নির্ভুল লেআউট রেন্ডারিং"
      ]
    },
    {
      num: "05",
      title: "আউটলেট লোকেশন, সময়সূচি ও কন্টাক্ট মডিউল",
      sub: "Location Directory, Operating Hours & Form",
      desc: "গ্রাহকদের জন্য ক্যাফের সঠিক ঠিকানা, খোলার সময়সূচি এবং টেবিল বুকিং বা ইনকোয়ারি পাঠানোর ফর্ম।",
      points: [
        "সপ্তাহের দিন অনুযায়ী বিজনেস আওয়ার্স ডিসপ্লে",
        "আউটলেটের সুনির্দিষ্ট লোকেশন ও ডিরেকশন গাইড",
        "ভ্যালিডেশন সহ ইন্টারেক্টিভ কন্টাক্ট ও ফিডব্যাক ফর্ম"
      ]
    },
    {
      num: "06",
      title: "জিরো-ডিপেন্ডেন্সি পারফরম্যান্স আর্কিটেকচার",
      sub: "100/100 Lighthouse Performance & Edge CDN",
      desc: "কোনো ভারী ফ্রেমওয়ার্ক বা অপ্রয়োজনীয় প্লাগইন ছাড়াই পিওর ভ্যানিলা কোডে নির্মিত আল্ট্রা-লাইটওয়েট সাইট।",
      points: [
        "গুগল বাতিঘর (Lighthouse) ১০০/১০০ পারফরম্যান্স স্কোর",
        "ইনস্ট্যান্ট সাব-সেকেন্ড পেজ লোডিং স্পিড",
        "গিটহাব পেজেস ও এজ সিডিএন-এ হাই-স্পিড গ্লোবাল ডেপ্লয়মেন্ট"
      ]
    }
  ],
  techTitle: "ব্যবহৃত প্রযুক্তি (Technologies Used)",
  techList: [
    "HTML5 (Semantic)",
    "CSS3 (Custom Properties & Grid)",
    "JavaScript (ES6+)",
    "GitHub Pages",
    "Responsive Web Design"
  ]
};

const coffeeHouseDetails_en = {
  overviewTitle: "Overview & Vision",
  overview: [
    "Coffee House is an artisanal digital storefront designed and developed from the ground up by Sakil Ahammed for a premium boutique coffee café and roastery.",
    "Engineered to communicate brand craftsmanship, bean sourcing provenance, and warm hospitality, it delivers an engaging digital window into the modern coffee house experience."
  ],
  problemTitle: "The Problem",
  problem: "Many boutique cafés rely on clunky, template-bloated CMS platforms that load sluggishly on mobile networks and fail to convey the sensory warmth and hospitality of an artisanal coffee shop.",
  solutionTitle: "The Solution",
  solution: "Architected an ultra-fast, zero-dependency web experience utilizing semantic HTML5, modern CSS3 variables, fluid layouts, and modular ES6+ JavaScript. Features smooth responsive drawer navigation, categorized specialty brew menus, ambiance showcases, and direct outlet contact capabilities.",
  systemsTitle: "Core Engineering Systems",
  systems: [
    {
      num: "01",
      title: "Artisan Aesthetic & Fluid Responsive UI",
      sub: "Warm Coffee-Toned System & Fluid Scalability",
      desc: "Handcrafted coffee aesthetic blending earthy warm palettes, elegant typography, and CSS Grid layout architecture.",
      points: [
        "Artisan coffee-toned color tokens and minimal styling",
        "Fluid responsive scaling across mobile, tablet, and desktop",
        "Retina display optimized imagery and iconography"
      ]
    },
    {
      num: "02",
      title: "Interactive Specialty Coffee Menu",
      sub: "Dynamic Catalog & Ingredient Profiles",
      desc: "Structured, beautifully organized menu covering signature espresso roasts, pour-overs, cold brews, and fresh bakery selections.",
      points: [
        "Espresso, pour-over, and iced beverage categorization",
        "Tasting notes, ingredient origins, and pricing tags",
        "Micro-interactions and hover elevations on card items"
      ]
    },
    {
      num: "03",
      title: "High-Definition Ambiance Gallery",
      sub: "Craftsmanship & Atmospheric Visual Showcase",
      desc: "Curated high-resolution photo gallery showcasing barista pour techniques, roasting craftsmanship, and inviting café interiors.",
      points: [
        "Photographic storytelling of the artisanal brewing journey",
        "Warm interior lighting and communal café atmosphere",
        "Fast-loading web-optimized image assets"
      ]
    },
    {
      num: "04",
      title: "Lightweight Mobile Navigation & Drawer",
      sub: "Frictionless Responsive User Experience",
      desc: "Intuitive slide-out mobile drawer with smooth CSS transformations and accessible keyboard focus navigation.",
      points: [
        "Smooth slide-in mobile navigation menu",
        "Smooth anchor scrolling with active section indicators",
        "100% responsive fluid adaptation across all viewport sizes"
      ]
    },
    {
      num: "05",
      title: "Multi-Outlet Directory & Reservation Inquiry",
      sub: "Branch Locator, Operating Hours & Contact Form",
      desc: "Comprehensive outlet directory featuring business hours, branch location directions, and quick table inquiry forms.",
      points: [
        "Day-by-day operating schedules and peak hour badges",
        "Direct branch coordinates and landmark navigation notes",
        "Client-side validated reservation and inquiry form"
      ]
    },
    {
      num: "06",
      title: "Zero-Dependency Performance Engineering",
      sub: "100/100 Lighthouse Score & Edge CDN",
      desc: "Pure Vanilla HTML5/CSS3/JavaScript codebase delivering instantaneous load times without runtime overhead.",
      points: [
        "Perfect 100/100 Google Lighthouse performance score",
        "Sub-second initial paint on 3G and 4G networks",
        "Deployed globally on GitHub Pages Edge CDN"
      ]
    }
  ],
  techTitle: "Technologies Used",
  techList: [
    "HTML5 (Semantic)",
    "CSS3 (Custom Properties & Grid)",
    "JavaScript (ES6+)",
    "GitHub Pages",
    "Responsive Web Design"
  ]
};


/* ==========================================================================
   5. SS IQRA PURE FOOD (এস এস ইকরা পিওর ফুড) - DETAILED ARCHITECTURE
   ========================================================================== */
const ssIqraDetails_bn = {
  overviewTitle: "পরিচিতি ও ভিশন (Overview & Vision)",
  overview: [
    "এস এস ইকরা পিওর ফুড (SS Iqra Pure Food) হলো সুন্দরবনের খাঁটি মধু ও প্রিমিয়াম ড্রাই ফ্রুটসের সমন্বয়ে তৈরি ১ কেজি মেগা ফ্যামিলি জার হানি-নাট এবং সম্পূর্ণ স্বয়ংক্রিয় ক্লাউড-অপারেশনাল ই-কমার্স সিস্টেম। এটি শাকিল আহাম্মেদ দ্বারা ডিজাইন ও ডেভেলপ করা হয়েছে।",
    "প্রচলিত জটিল ই-কমার্সের বিশাল সার্ভার খরচ ও অতিরিক্ত জটিলতা দূর করে সম্পূর্ণ জিরো-হোস্টিং কস্টে গিটহাব পেজেস, পাইথন ব্যাকগ্রাউন্ড ডেমন, টেলিগ্রাম বট এবং স্বয়ংক্রিয় গুগল শিট ও সিএসভি লেজারের মাধ্যমে একটি সম্পূর্ণ স্বয়ংসম্পূর্ণ আধুনিক ব্যবসায়িক অপারেশনাল পাইপলাইন পরিচালনা করাই এর মূল লক্ষ্য।"
  ],
  problemTitle: "বাস্তব সমস্যা (The Problem)",
  problem: "ছোট ও মাঝারি খাদ্য উদ্যোক্তাদের ক্ষেত্রে প্রচলিত ই-কমার্স শপগুলোতে ব্যয়বহুল হোস্টিং খরচ, জটিল ডাটাবেজ মেইনটেন্যান্স এবং অর্ডার আসার পর তাৎক্ষণিক নোটিফিকেশন না পাওয়ার কারণে কাস্টমার সার্ভিস ব্যাহত হয়। মেসেঞ্জারে ম্যানুয়াল অর্ডার নেওয়ার ফলে ঠিকানা ভুল হওয়া, ডেলিভারি ট্র্যাকিং জটিলতা এবং কুরিয়ার বুকিংয়ে প্রচুর সময় নষ্ট হয়।",
  solutionTitle: "প্রকৌশলগত সমাধান (The Solution)",
  solution: "লাইভ ফ্রন্টএন্ড ওয়েব অর্ডার পোর্টাল (গিটহাব পেজেসে আজীবন ফ্রি), পাইথন চালিত টেলিগ্রাম অর্ডার প্রসেসর বট (@ssiqrapurefood_bot) যা সাউন্ড অ্যালার্ট সহ তাৎক্ষণিক নোটিফিকেশন পাঠায়, ১-ক্লিক হোয়াটসঅ্যাপ কাস্টমার কল ভেরিফিকেশন, স্টিডফাস্ট কুরিয়ার বুকিং স্লিপ জেনারেশন এবং স্বয়ংক্রিয় সিএসভি কাস্টমার অ্যাকাউন্টিং লেজার।",
  systemsTitle: "মূল প্রযুক্তিগত কাঠামো (Core Engineering Systems)",
  systems: [
    {
      num: "01",
      title: "ইনস্ট্যান্ট জিরো-ল্যাটেন্সি ওয়েব চেকআউট",
      sub: "Zero-Friction Client-Side Order Portal",
      desc: "মোবাইল ব্রাউজারে দ্রুততম সময়ে লোড হওয়া ৩-ফিল্ড চেকআউট ফর্ম, যেখানে কোনো সাইন-আপ ছাড়াই অর্ডার করা যায়।",
      points: [
        "ঢাকা (৳৮০) ও ঢাকার বাইরে (৳১৫০) স্বয়ংক্রিয় ডেলিভারি চার্জ ক্যালকুলেশন",
        "ডাইনামিক কার্ট কোয়ান্টিটি ও অফার প্রমোশনাল ডিসকাউন্ট ইঞ্জিন",
        "অর্ডার সাবমিটের সাথে সাথে কাস্টমারের স্ক্রিনে ডিজিটাল ইনভয়েস স্লিপ"
      ]
    },
    {
      num: "02",
      title: "টেলিগ্রাম অর্ডার ম্যানেজার ইঞ্জিন (Python Daemon)",
      sub: "24/7 Automated Notification & Dispatch Bot",
      desc: "পাইথন ৩.১২ দিয়ে নির্মিত ব্যাকগ্রাউন্ড ডেমন বট যা প্রতিটি অর্ডার আসার ১ সেকেন্ডের মধ্যে সাউন্ড সহ অ্যাডমিনের ফোনে অ্যালার্ট পাঠায়।",
      points: [
        "অর্ডারের সম্পূর্ণ বিবরণ সহ রিয়েল-টাইম পুশ নোটিফিকেশন",
        "ইনলাইন বাটন: ১-ক্লিকে কাস্টমারের সাথে সরাসরি WhatsApp চ্যাট ওপেন",
        "অর্ডার স্ট্যাটাস ট্র্যাকিং ও অ্যাডমিন কনফার্মেশন ট্র্রিগার"
      ]
    },
    {
      num: "03",
      title: "স্টিডফাস্ট কুরিয়ার এপিআই বুকিং স্লিপ",
      sub: "Steadfast Courier Integration & Waybill Pipeline",
      desc: "অর্ডার নিশ্চিত হওয়ার সাথে সাথে কুরিয়ার পার্সেল বুকিংয়ের জন্য প্রয়োজনীয় ডাটা স্বয়ংক্রিয়ভাবে প্রস্তুত করে দেয়।",
      points: [
        "কুরিয়ার বুকিং ফ্রেন্ডলি ডেটা এক্সট্রাকশন ও প্রিভিউ",
        "ডেলিভারি ট্র্যাকিং কোড ও ট্র্যাকিং স্ট্যাটাস ম্যাপিং",
        "ক্যাশ অন ডেলিভারি (COD) অ্যামাউন্ট ও চার্জ ভ্যালিডেশন"
      ]
    },
    {
      num: "04",
      title: "স্বয়ংক্রিয় সিএসভি ও ক্লাউড লেজার",
      sub: "Immutable Customer Accounting & CSV Database",
      desc: "প্রতিটি সফল অর্ডারের ইনভয়েস আইডি, তারিখ, কাস্টমার তথ্য এবং পেমেন্ট স্ট্যাটাস স্বয়ংক্রিয়ভাবে লেজারে রেকর্ড থাকে।",
      points: [
        "02_Customer_Orders_Log.csv স্বয়ংক্রিয় রিয়েল-টাইম ডেটা পারসিস্টেন্স",
        "গুগল শিট ও গুগল ড্রাইভ ব্যাকআপ সিনক্রোনাইজেশন স্ক্রিপ্ট",
        "দৈনিক ও মাসিক সেলস রেভিনিউ হিসাব এবং অডিট-রেডি এক্সপোর্ট"
      ]
    },
    {
      num: "05",
      title: "ব্র্যান্ডিং, সোশ্যাল মিডিয়া ও কন্টেন্ট ইঞ্জিন",
      sub: "End-to-End Visual Brand Architecture",
      desc: "অফিসিয়াল জার স্টিকার, ফেসবুক কভার ব্যানার, সোশ্যাল মিডিয়া পোস্ট টেমপ্লেট এবং ৩০ দিনের অটোমেটেড কন্টেন্ট ক্যালেন্ডার।",
      points: [
        "১ কেজি মেগা ফ্যামিলি জার প্রিমিয়াম প্যাকেজিং ডিজাইন",
        "৩০ দিনের সম্পূর্ণ সেলস ও এনগেজমেন্ট কন্টেন্ট প্ল্যান",
        "চ্যাটবট অটোমেটেড মেসেজিং ও এফএকিউ রেসপন্স স্ক্রিপ্ট"
      ]
    },
    {
      num: "06",
      title: "জিরো-কস্ট ইনফিনিট ক্লাউড হোস্টিং",
      sub: "Zero Infrastructure Cost & Serverless Resilience",
      desc: "কোনো মাসিক হোস্টিং ফি বা সার্ভার চার্জ ছাড়াই আজীবন নিরবচ্ছিন্নভাবে চলার মতো আর্কিটেকচার।",
      points: [
        "গিটহাব পেজেস ও এজ সিডিএন-এ গ্লোবাল হাই-স্পিড ডেপ্লয়মেন্ট",
        "সিওআরএস (CORS) সিকিউর ক্লায়েন্ট-টু-টেলিগ্রাম সরাসরি এপিআই সংযোগ",
        "৯৯.৯৯% আপটাইম সহ সম্পূর্ণ ফল্ট-টলারেন্ট আর্কিটেকচার"
      ]
    }
  ],
  techTitle: "ব্যবহৃত প্রযুক্তি (Technologies Used)",
  techList: [
    "Python 3.12",
    "Telegram Bot API",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Google Apps Script",
    "CSV Data Engine",
    "GitHub Pages"
  ]
};

const ssIqraDetails_en = {
  overviewTitle: "Overview & Vision",
  overview: [
    "SS Iqra Pure Food is an end-to-end automated e-commerce and operational workflow system engineered by Sakil Ahammed for a premium 1kg Mega Family Jar Honey-Nut brand combining pure Sundarbans honey with premium dry fruits and nuts.",
    "Architected to eliminate bloated monthly hosting fees and server overhead, it couples a high-speed GitHub Pages frontend with a 24/7 Python Telegram daemon, direct WhatsApp customer verification, and an automated accounting ledger for frictionless business operations."
  ],
  problemTitle: "The Problem",
  problem: "Small and medium food enterprises frequently struggle with costly cloud hosting fees, complex server maintenance, and delayed order notifications that damage customer retention. Taking manual orders over Facebook Messenger leads to address typos, lost parcels, and tedious courier booking overhead.",
  solutionTitle: "The Solution",
  solution: "Engineered a zero-cost, high-reliability architecture: a lightning-fast responsive web order portal hosted on GitHub Pages, an automated 24/7 Python Telegram daemon (@ssiqrapurefood_bot) delivering audible push alerts, 1-click WhatsApp customer verification, Steadfast Courier dispatch integration, and an immutable CSV accounting ledger.",
  systemsTitle: "Core Engineering Systems",
  systems: [
    {
      num: "01",
      title: "Instant Zero-Latency Web Checkout",
      sub: "Zero-Friction Client-Side Order Portal",
      desc: "High-converting 3-field order portal optimized for mobile networks with sub-3s initial load and zero registration barriers.",
      points: [
        "Dynamic delivery calculation (Inside Dhaka ৳80, Outside Dhaka ৳150)",
        "Interactive quantity toggles and real-time discount computation",
        "Instant digital invoice slip generated in-browser upon order submission"
      ]
    },
    {
      num: "02",
      title: "Python Telegram Order Daemon",
      sub: "24/7 Automated Notification & Dispatch Bot",
      desc: "Python 3.12 background service streaming live order events directly to admin mobile devices with audible chimes.",
      points: [
        "Full customer and order payload dispatched in under 1 second",
        "Inline Action: 1-click WhatsApp chat launch with pre-filled greeting",
        "Order state confirmation and ledger synchronization triggers"
      ]
    },
    {
      num: "03",
      title: "Steadfast Courier Booking Slip Pipeline",
      sub: "Logistics Automation & Dispatch Integration",
      desc: "Automatically transforms incoming order data into Steadfast Courier booking formats for express parcel dispatch.",
      points: [
        "Standardized shipping label and receiver address parser",
        "Consignment tracking ID mapping and tracking history",
        "Cash-on-Delivery (COD) reconciliation and delivery validation"
      ]
    },
    {
      num: "04",
      title: "Automated CSV & Cloud Accounting Ledger",
      sub: "Immutable Customer Accounting & CSV Database",
      desc: "Persists every confirmed order with invoice ID, customer timestamp, items, and net revenue into structured data logs.",
      points: [
        "Real-time writeback to 02_Customer_Orders_Log.csv ledger",
        "Google Apps Script bridge syncing rows to cloud spreadsheets",
        "Daily and monthly financial summaries ready for operational audit"
      ]
    },
    {
      num: "05",
      title: "Brand System & Content Engine",
      sub: "End-to-End Visual Brand Architecture",
      desc: "Complete visual identity encompassing jar labels, official social media banners, and an automated 30-day marketing plan.",
      points: [
        "1kg Mega Family Jar premium packaging and die-cut sticker design",
        "30-day viral content schedule and educational health posts",
        "Automated messenger FAQ scripts and customer support workflows"
      ]
    },
    {
      num: "06",
      title: "Zero-Cost Serverless Resilience",
      sub: "Zero Infrastructure Cost & Serverless Resilience",
      desc: "Production-ready enterprise workflow operating entirely with zero monthly infrastructure or hosting expenditures.",
      points: [
        "Edge-cached global delivery via GitHub Pages and CDN",
        "Secure CORS API connection linking client forms to Telegram endpoints",
        "Fault-tolerant, zero-maintenance operational pipeline"
      ]
    }
  ],
  techTitle: "Technologies Used",
  techList: [
    "Python 3.12",
    "Telegram Bot API",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Google Apps Script",
    "CSV Data Engine",
    "GitHub Pages"
  ]
};

export const projects = [
  {
    title: "Unnoto Khabar",
    can: "images/projects/UnnotoKhabar/UnnotoKhabarCan.webp",
    images: [
      { src: "images/projects/UnnotoKhabar/unnoto_banner.webp", alt: "উন্নত খাবার - সুস্থ জীবনের সমাহার" },
      { src: "images/projects/UnnotoKhabar/1.webp", alt: "অর্গানিক ফুড ক্যাটালগ ও প্রিমিয়াম প্যাকিং" },
      { src: "images/projects/UnnotoKhabar/2.webp", alt: "১-ক্লিক এক্সপ্রেস চেকআউট" },
      { src: "images/projects/UnnotoKhabar/3.webp", alt: "লাইভ কুরিয়ার ট্র্যাকিং" },
    ],
    description: {
      en: "Unnoto Khabar is a full-stack, enterprise-grade organic food e-commerce platform built with Next.js 16, TypeScript, Tailwind CSS, Prisma, and PostgreSQL. Features 1-click express checkout, live order tracking, and dynamic district delivery calculations.",
      es: "Unnoto Khabar es una plataforma de comercio electrónico orgánica premium construida con Next.js 16, TypeScript, Tailwind CSS, Prisma y PostgreSQL.",
      bn: "উন্নত খাবার (Unnoto Khabar) - সুস্থ জীবনের জন্য শতভাগ খাঁটি, প্রাকৃতিক ও নির্ভেজাল খাদ্যের বিশ্বস্ত অনলাইন শপ। নেক্সট.জেএস ১৬, টাইপস্ক্রিপ্ট, প্রিজমা এবং পোস্টগ্রেসকিউএল দিয়ে নির্মিত একটি পূর্ণাঙ্গ আধুনিক ই-কমার্স প্ল্যাটফর্ম।",
    },
    detailedDescription: {
      bn: unnotoDetails_bn,
      en: unnotoDetails_en,
      es: unnotoDetails_en,
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
    detailedDescription: {
      bn: tutorbariDetails_bn,
      en: tutorbariDetails_en,
      es: tutorbariDetails_en,
    },
    tech: [SiNextdotjs, SiTypescript, SiReact, SiTailwindcss, SiPostgresql, SiPrisma, SiRedis, SiDocker],
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
    detailedDescription: {
      bn: alMuallimDetails_bn,
      en: alMuallimDetails_en,
      es: alMuallimDetails_en,
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
    title: "Coffee House",
    can: "images/projects/CoffeeHouse/CoffeeHouseCan.webp",
    images: [
      { src: "images/projects/CoffeeHouse/1.webp", alt: "Coffee House - Fresh Coffee & Beautiful Moments Hero" },
      { src: "images/projects/CoffeeHouse/2.webp", alt: "Interactive Coffee Menu, Espresso & Cold Brews" },
      { src: "images/projects/CoffeeHouse/3.webp", alt: "Ambiance & Brewing Process Gallery Showcase" },
      { src: "images/projects/CoffeeHouse/4.webp", alt: "About Coffee House, Story & Outlets Contact" },
    ],
    description: {
      en: "Coffee House is a clean, modern, and responsive website crafted for a premium coffee shop and café. Features smooth navigation, interactive coffee selections (espresso, artisan brews, snacks), a visual ambiance gallery, and an outlet locator with contact integrations.",
      es: "Coffee House es un sitio web limpio, moderno y adaptable diseñado para una cafetería premium con navegación fluida, menú interactivo y galería de ambiente.",
      bn: "কফি হাউজ (Coffee House) - একটি প্রিমিয়াম ক্যাফে ও কফি শপের জন্য শাকিল আহাম্মেদ দ্বারা নির্মিত আধুনিক, ক্লিন ও ফুল-রেসপন্সিভ ওয়েবসাইট। এতে রয়েছে ইন্টারঅ্যাক্টিভ কফি মেন্যু, কোল্ড ব্রিউ ও স্ন্যাক্স ক্যাটালগ, নান্দনিক অ্যাম্বিয়েন্স গ্যালারি এবং আউটলেট কন্টাক্ট সিস্টেম।",
    },
    detailedDescription: {
      bn: coffeeHouseDetails_bn,
      en: coffeeHouseDetails_en,
      es: coffeeHouseDetails_en,
    },
    tech: [SiHtml5, SiCss3, SiJavascript],
    features: {
      en: [
        "Responsive Navigation with smooth mobile menu and fast-loading transitions.",
        "Captivating Hero & Story section highlighting fresh coffee and handcrafted blends.",
        "Interactive Menu displaying specialized espresso, cold brews, and artisan snacks.",
        "Visual Ambiance Gallery showcasing café atmosphere and brewing craftsmanship.",
        "Location details, outlet hours, reservation inquiry, and contact form.",
      ],
      es: [
        "Navegación adaptable con menú móvil fluido y transiciones rápidas.",
        "Sección Hero y de historia que destaca café fresco y mezclas artesanales.",
        "Menú interactivo con espresso, cold brew y aperitivos exclusivos.",
        "Galería visual que muestra el ambiente acogedor y el arte del barismo.",
        "Detalles de ubicación, horarios de sucursales y formulario de contacto.",
      ],
      bn: [
        "মসৃণ মোবাইল নেভিগেশন ও ফাস্ট-লোডিং রেসপন্সিভ ডিজাইন।",
        "প্রিমিয়াম কফি ব্লেন্ড ও ফ্রেশ ব্রিউ উপস্থাপনায় আকর্ষণীয় হিরো সেকশন।",
        "ইন্টারঅ্যাক্টিভ মেন্যুতে এসপ্রেসো, কোল্ড ব্রিউ এবং স্পেশাল স্ন্যাক্স কালেকশন।",
        "ক্যাফের নান্দনিক পরিবেশ ও কফি তৈরির গল্প নিয়ে ভিজ্যুয়াল গ্যালারি।",
        "আউটলেটের ঠিকানা, খোলার সময়সূচি এবং সরাসরি কন্টাক্ট ও ইনকোয়ারি ফর্ম।",
      ],
    },
    date: { en: "November 2026", es: "Noviembre 2026", bn: "নভেম্বর ২০২৬" },
    github: "https://github.com/sakilahammed-dev/coffee-house",
    homepage: "https://sakilahammed-dev.github.io/coffee-house/",
  },

  {
    title: "SS Iqra Pure Food",
    can: "images/projects/SSIqraPureFood/SSIqraCan.webp",
    images: [
      { src: "images/projects/SSIqraPureFood/1.webp", alt: "SS Iqra Pure Food - 1-Click Live Web Order Portal" },
      { src: "images/projects/SSIqraPureFood/2.webp", alt: "Premium Honey-Nut Mega Family Jar Product Showcase" },
      { src: "images/projects/SSIqraPureFood/3.webp", alt: "100% Pure Sundarbans Raw Honey & Nutrition Profile" },
      { src: "images/projects/SSIqraPureFood/4.webp", alt: "Quality Assurance, Packaging & Customer Trust" },
    ],
    description: {
      en: "SS Iqra Pure Food is an end-to-end automated e-commerce and operational workflow system engineered by Sakil Ahammed for a premium 1kg Mega Family Jar Honey-Nut brand. Combines a high-speed GitHub Pages order portal with a 24/7 Python Telegram bot daemon, 1-click WhatsApp customer verification, and an automated CSV/Sheets accounting ledger.",
      es: "SS Iqra Pure Food es un sistema de comercio electrónico y flujo de trabajo operativo automatizado de extremo a extremo diseñado por Sakil Ahammed con portal de pedidos web, bot de Telegram en Python y libro contable automatizado.",
      bn: "এস এস ইকরা পিওর ফুড (SS Iqra Pure Food) - সুন্দরবনের খাঁটি মধু ও প্রিমিয়াম ড্রাই ফ্রুটস হানি-নাটের জন্য শাকিল আহাম্মেদ দ্বারা নির্মিত সম্পূর্ণ স্বয়ংক্রিয় ক্লাউড-অপারেশনাল ই-কমার্স সিস্টেম। এতে রয়েছে হাই-স্পিড ওয়েব অর্ডার পোর্টাল, ২৪/৭ পাইথন টেলিগ্রাম বট অ্যালার্ট, ১-ক্লিক হোয়াটসঅ্যাপ ভেরিফিকেশন এবং স্বয়ংক্রিয় কাস্টমার একাউন্টিং লেজার।",
    },
    detailedDescription: {
      bn: ssIqraDetails_bn,
      en: ssIqraDetails_en,
      es: ssIqraDetails_en,
    },
    tech: [SiPython, SiTelegram, SiHtml5, SiCss3, SiJavascript, SiGooglesheets],
    features: {
      en: [
        "1-Click high-converting web order portal with dynamic district courier rates.",
        "24/7 Python Telegram daemon delivering instant audible order push notifications.",
        "1-Click direct WhatsApp customer verification and confirmation modal.",
        "Steadfast Courier API booking data generator and logistics slip pipeline.",
        "Automated accounting ledger persisting orders to CSV and Google Sheets.",
      ],
      es: [
        "Portal de pedidos web de alta conversión con cálculo dinámico de envío.",
        "Demonio de Telegram en Python 24/7 con notificaciones push sonoras instantáneas.",
        "Verificación de clientes por WhatsApp con un solo clic.",
        "Generador de boletas de envío para Steadfast Courier.",
        "Libro contable automatizado en CSV y Google Sheets.",
      ],
      bn: [
        "ডাইনামিক ডেলিভারি চার্জ ক্যালকুলেশন সহ ১-ক্লিক ফাস্ট ওয়েব অর্ডার পোর্টাল।",
        "অর্ডার আসার সাথে সাথে সাউন্ড অ্যালার্ট সহ ২৪/৭ পাইথন টেলিগ্রাম বট পুশ নোটিফিকেশন।",
        "১-ক্লিকে কাস্টমারের সাথে সরাসরি হোয়াটসঅ্যাপ কল ও চ্যাট ভেরিফিকেশন।",
        "স্টিডফাস্ট কুরিয়ার পার্সেল বুকিং স্লিপ ও ট্র্যাকিং কোড জেনারেশন।",
        "স্বয়ংক্রিয় সিএসভি এবং গুগল শিট ক্লাউড অ্যাকাউন্টিং লেজার।",
      ],
    },
    date: { en: "November 2026", es: "Noviembre 2026", bn: "নভেম্বর ২০২৬" },
    github: "https://github.com/sakilahammed-dev/ss-iqra-pure-food",
    homepage: "https://sakilahammed-dev.github.io/ss-iqra-pure-food/",
  },
];
