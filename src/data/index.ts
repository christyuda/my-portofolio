export const navItems = [
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "Timeline", link: "#timeline" },
    { name: "Contact", link: "#contact" },
  ];

  export const gridItems = [
    {
      id: 1,
      title: "I turn ideas into meaningful interfaces, with strong communication & collaboration.",
      description: "Design. Build. Communicate. Deliver.",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] ",
      imgClassName: "w-full h-120", // Gambar ukuran tetap
      titleClassName: "justify-end",
      img: "/mee.png",
      spareImg: "",
    },
    {
      id: 2,
      title: "",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "w-full h-full object-cover object-[center_2%]",
      titleClassName: "justify-start",
      img: "/assets/images/my-photo.png",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "There is tech stack I can use",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    
  
    {
      id: 5,
      title: "Project Mobile and Website",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/fluttercode.png",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];

export const caseStudies = [
  {
    title: "TheTecut Barbershop",
    problem:
      "Barbershop needed a digital presence to show services, pricing, and booking flow in one clear experience.",
    role: "Fullstack Engineer",
    solution:
      "Built and delivered a barbershop website focused on service discovery, clean UI, and responsive access across devices.",
    impact: [
      "Improved online visibility for services and brand.",
      "Made customer information access faster and clearer.",
      "Created a stronger digital touchpoint for new visitors.",
    ],
    stack: ["Next.js", "Tailwind CSS", "Frontend"],
    link: "#",
  },
  {
    title: "Yogyakomtek Landing Pages",
    problem:
      "Campaign pages needed to communicate event and promotion information quickly with a modern and lightweight page structure.",
    role: "Frontend Engineer",
    solution:
      "Designed and developed landing pages with clear section flow, strong visual hierarchy, and performance-focused frontend delivery.",
    impact: [
      "Faster campaign publishing and iteration.",
      "Better readability of promo and event information.",
      "Improved user experience on desktop and mobile.",
    ],
    stack: ["Next.js", "Tailwind CSS", "Landing Page"],
    link: "#",
  },
  {
    title: "Pospay Agen (Mobile App)",
    problem:
      "Agents needed a mobile workflow for service operations with map support and delivery tracking.",
    role: "Mobile Engineer",
    solution:
      "Developed Flutter app integrated with HERE Maps and tracking features tailored for field usage.",
    impact: [
      "Field process became easier to run from mobile.",
      "Better visibility for delivery and route activity.",
      "Improved day-to-day operational speed for agents.",
    ],
    stack: ["Flutter", "HERE Maps", "Mobile UI"],
    link: "https://github.com/christianyuda/pospay-agen",
  },
  {
    title: "MyTelkomsel PosAja Kurir (Frontend)",
    problem:
      "Courier flow in-app required a focused frontend experience for faster task handling and clearer shipment interaction.",
    role: "Frontend Engineer",
    solution:
      "Implemented courier-facing frontend modules with reusable UI components and responsive interaction patterns.",
    impact: [
      "Simplified courier task navigation in app workflow.",
      "Improved consistency across courier-facing screens.",
      "Faster frontend delivery through reusable components.",
    ],
    stack: ["Flutter", "Frontend", "Mobile UI"],
    link: "#",
  },
];

export const nowHighlights = [
  {
    title: "Building",
    description:
      "Production-ready web and mobile features with focus on performance, clean UX, and maintainable architecture.",
  },
  {
    title: "Learning",
    description:
      "Deeper system design for scalable backend services, container workflows, and observability practices.",
  },
  {
    title: "Open For",
    description:
      "Freelance and full-time roles in Software Engineering, especially product-focused teams with fast iteration.",
  },
];

export const timelineEvents = [
  {
    period: "2024 - Present",
    title: "Software Engineer",
    subtitle: "Web and mobile product delivery",
    detail:
      "Built and shipped apps using Flutter, Next.js, and Node.js with collaboration across product and ops teams.",
  },
  {
    period: "2023 - 2024",
    title: "DevOps and Fullstack Projects",
    subtitle: "Deployment, integration, and platform work",
    detail:
      "Handled Dockerization, server setup, and API integration while delivering internal and public-facing systems.",
  },
  {
    period: "2022 - 2023",
    title: "Project and Capstone Development",
    subtitle: "Hands-on learning through real products",
    detail:
      "Delivered multiple university and independent projects, from frontend systems to end-to-end mobile apps.",
  },
];


  export const projects = [
  {
    title: "TheTecut Barbershop",
    description:
      "A barbershop website focused on clean service presentation, responsive layout, and clear booking flow for customers.",
    link: "#",
  },
  {
    title: "Yogyakomtek Landing Pages",
    description:
      "A set of campaign landing pages designed for faster publishing and clear event information with responsive web experience.",
    link: "https://yogyakomtek.net/",
  },
  {
    title: "Pospay Agen (Mobile App)",
    description:
      "A Flutter-based mobile app for agent services with integrated HERE Maps and delivery tracking.",
    link: "https://github.com/christianyuda/pospay-agen", // ganti kalau punya link live atau repo
  },
  {
    title: "MyTelkomsel PosAja Kurir (Frontend)",
    description:
      "Frontend implementation for courier workflow, built to improve task flow clarity and consistency across courier-facing screens.",
    link: "#",
  },
  
  
  {
    title: "NDE - Nota Dinas Elektronik (Mobile App)",
    description:
      "A full mobile application built using Flutter and Firebase for managing electronic internal memos within the organization.",
    link: "#", // tambahkan jika ada repo/demo
  },
  
  {
    title: "Website Posdigi (DevOps)",
    description:
      "As a DevOps engineer, I handled server provisioning, Docker containerization, and Nginx reverse proxy setup for a Next.js + Tailwind-based Landing Posdigi.",
    link: "https://posdigi.co.id", // tambahkan jika ada URL demo/hosting
  },
  
  {
    title: "Minutes of Meeting (Fullstack)",
    description:
      "A web-based application for managing meeting minutes, built using Flutter Web as the frontend and Lumen (Laravel) as the backend API.",
    link: "https://backoffice.posfin.id/", // isi dengan demo atau repo jika ada
  },
  {
    title: "NFT Cendrawasih",
    description:
      "An NFT showcase and management platform built using Flutter for the frontend and Lumen (Laravel) for the backend.",
    link: "https://nft.posfin.id/", // ganti dengan link GitHub/demo jika ada
  },
  
  {
    title: "Hospital Nanjing (Fullstack)",
    description:
      "A full-stack hospital system built with Node.js (backend) and Flutter (mobile) using MongoDB as the database.",
    link: "#", // ganti kalau ada demo atau GitHub repo
  },
  {
    title: "Mental Health Care App – Altera Academy",
    description:
      "A capstone Flutter project developed at Altera Academy, focused on mental health care features such as journaling, mood tracking, and mental wellness support.",
    link: "#", // tambahkan link repo/demo kalau ada
  },
  
  {
    title: "Sistem Perkoma (Fullstack)",
    description:
      "A web application for managing Perkoma church community members, built using Node.js for the backend and Vanilla JavaScript on the frontend.",
    link: "#", // isi link jika ada
  },
  {
    title: "PPDB System – SMK 03 OKU (Frontend Only)",
    description:
      "A web-based student admission system for SMK 03 OKU, developed using Vanilla JavaScript to handle registration workflows and data processing.",
    link: "https://portal.smkn3oku.sch.id/", // tambahkan jika ada link demo atau repo
  },

  {
    title: "Dating App – Flutter + Firebase + GetX (Mobile App)",
    description:
      "A personal project for a dating application built using Flutter with Firebase as backend and GetX for state management and navigation.",
    link: "#", // ganti kalau ada repo/demo
  },

  {
    title: "Netflix UI Clone (Mobile App)",
    description:
      "A front-end clone of Netflix's user interface, focusing on responsive layout and design accuracy using Flutter.",
    link: "#", // tambahkan jika ada link repo
  },
  {
    title: "Pregnancy Tracking App (Mobile App)",
    description:
      "A mobile application built with Flutter to help track pregnancy progress, offering features like weekly updates, reminders, and health tips.",
    link: "#", // tambahkan link repo jika ada
  },
  {
    title: "HRIS Management System – ULBI (Frontend Only)",
    description:
      "A frontend-only web application designed for managing Human Resource operations, developed as part of a university project using modern UI best practices.",
    link: "#",
  },

  {
    title: "SIMPELBI – ULBI",
    description:
      "Frontend interface for an internal quality assurance system, built as a university project to support academic evaluation and reporting processes.",
    link: "https://euis.ulbi.ac.id/homesimpelbi/",
  },

  {
    title: "Library Management System",
    description:
      "A desktop application built with C# for managing library books, members, borrowing, and returns. Includes CRUD operations and search functionality.",
    link: "#", // tambahkan kalau ada repo atau demo
  },
  
  
  
  
  
  
  

  ];
  
