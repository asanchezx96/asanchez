/* ─ Navigation ─ */
export const NAV = [
  { label: "Inicio", path: "/" },
  { label: "Sobre mí", path: "/about" },
  { label: "Habilidades", path: "/skills" },
  { label: "Experiencia", path: "/experience" },
  { label: "Proyectos", path: "/projects" },
  { label: "Contacto", path: "/contact" },
];

/* ─ Skills ─ */
export const SKILLS: { label: string; items: string[] }[] = [
  {
    label: "Lenguajes",
    items: [
      "PHP",
      "JavaScript",
      "TypeScript",
      "C#",
      "Visual Basic",
      "Python",
      "Dart",
      "Rust",
      "GDScript",
      "SQL",
      "CSS",
      "HTML5",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "Angular",
      "Quasar",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Bootstrap",
      "Vuetify",
      "Material UI",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      ".NET",
      "FastAPI",
      "Socket.IO",
      "Passport",
      "JWT / OAuth 2.0",
      "BullMQ",
    ],
  },
  {
    label: "Móvil & Escritorio",
    items: [
      "Flutter",
      "Riverpod",
      "Ionic",
      "PWA",
      "Tauri",
      "Godot",
      "Phaser",
      "Three.js",
    ],
  },
  {
    label: "Librerías Frontend",
    items: [
      "TanStack Query",
      "TanStack Table",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Recharts",
      "ECharts",
      "ApexCharts",
      "Chart.js",
      "Leaflet",
      "Mapbox",
      "Framer Motion",
      "i18next",
    ],
  },
  {
    label: "Bases de datos & ORMs",
    items: [
      "MySQL",
      "MariaDB",
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Firebird",
      "Redis",
      "Sequelize",
      "Prisma",
      "Mongoose",
      "TypeORM",
    ],
  },
  {
    label: "Control de versiones",
    items: [
      "GitHub",
      "GitLab",
    ],
  },
  {
    label: "Dev Tools",
    items: [
      "Git",
      "Docker",
      "Docker Compose",
      "Postman",
      "VS Code",
      "Linux / Bash",
    ],
  },
  {
    label: "Servicios & Integraciones",
    items: [
      "Firebase / FCM",
      "Cloudinary",
      "Stripe",
      "AWS S3",
      "Google Cloud",
      "Vertex AI",
      "Gemini",
      "OpenAI",
      "Claude API",
      "WhatsApp (Baileys)",
      "Nodemailer / SMTP",
    ],
  },
  {
    label: "Reportes & Documentos",
    items: [
      "ExcelJS",
      "SheetJS",
      "PhpSpreadsheet",
      "jsPDF",
      "PDFKit",
      "Dompdf",
      "Puppeteer",
    ],
  },
  {
    label: "Testing & Calidad",
    items: [
      "Jest",
      "Vitest",
      "ESLint",
      "Prettier",
    ],
  },
  {
    label: "Despliegue & APIs",
    items: [
      "GitHub Actions",
      "Vercel",
      "Hostinger",
      "IIS",
      "cPanel",
      "PM2",
      "Nginx",
      "SSH",
      "REST APIs",
      "WebSockets",
      "Swagger / OpenAPI",
      "GitHub Webhooks",
    ],
  },
  {
    label: "Diseño & Marketing",
    items: [
      "Photoshop",
      "Figma",
      "Diseño Gráfico",
      "UI / UX",
      "Marketing Digital",
      "SEO",
    ],
  },
  {
    label: "Habilidades",
    items: [
      "Soporte Técnico",
      "Liderazgo de Equipos",
      "Gestión de Proyectos",
      "Análisis de Requerimientos",
      "Metodologías Ágiles",
      "Documentación Técnica",
    ],
  },
];

/** Tecnologías principales, destacadas arriba en la pestaña Stack. */
export const FEATURED_SKILLS = ["TypeScript", "React", "Node.js", "NestJS", "Next.js", "Tailwind CSS", "MySQL", "PostgreSQL", "C#", "Flutter"];

/** En cuántos proyectos (de 40 revisados en C:\proyectos y Desktop\ideas) aparece cada tecnología. */
export const SKILL_USAGE: Record<string, number> = {
  "GitHub Actions": 5,
  "TypeScript": 30,
  "CSS": 30,
  "HTML5": 24,
  "JavaScript": 23,
  "React": 23,
  "Tailwind CSS": 23,
  "Node.js": 23,
  "Express": 21,
  "Vite": 20,
  "JWT / OAuth 2.0": 20,
  "Nodemailer / SMTP": 19,
  "SQL": 18,
  "Zod": 17,
  "ESLint": 17,
  "Cloudinary": 13,
  "SheetJS": 13,
  "shadcn/ui": 12,
  "Zustand": 12,
  "React Hook Form": 11,
  "Sequelize": 11,
  "Jest": 11,
  "Prettier": 11,
  "Python": 9,
  "Recharts": 9,
  "MySQL": 9,
  "WebSockets": 9,
  "ECharts": 8,
  "PostgreSQL": 8,
  "ExcelJS": 8,
  "Swagger / OpenAPI": 8,
  "NestJS": 7,
  "Socket.IO": 7,
  "jsPDF": 7,
  "Next.js": 6,
  "Passport": 6,
  "TanStack Query": 6,
  "Framer Motion": 6,
  "i18next": 6,
  "MongoDB": 6,
  "Prisma": 6,
  "Mongoose": 6,
  "TanStack Table": 5,
  "ApexCharts": 5,
  "Puppeteer": 5,
  "Vitest": 5,
  "Docker": 5,
  "Docker Compose": 5,
  "Nginx": 5,
  "Vue.js": 4,
  "Bootstrap": 4,
  "Redis": 4,
  "Google Cloud": 4,
  "PHP": 3,
  "Rust": 3,
  "Angular": 3,
  "FastAPI": 3,
  "BullMQ": 3,
  "PWA": 3,
  "SQLite": 3,
  "Gemini": 3,
  "Dart": 2,
  "Flutter": 2,
  "Tauri": 2,
  "Chart.js": 2,
  "Leaflet": 2,
  "Mapbox": 2,
  "SQL Server": 2,
  "Firebase / FCM": 2,
  "Stripe": 2,
  "OpenAI": 2,
  "PhpSpreadsheet": 2,
  "PDFKit": 2,
  "Dompdf": 2,
  "GDScript": 1,
  "Quasar": 1,
  "Vuetify": 1,
  "Riverpod": 1,
  "Godot": 1,
  "Phaser": 1,
  "Three.js": 1,
  "MariaDB": 1,
  "Firebird": 1,
  "TypeORM": 1,
  "AWS S3": 1,
  "Vertex AI": 1,
  "Claude API": 1,
  "WhatsApp (Baileys)": 1,
};

/* ─ Experience ─ */
export interface ExperienceItem {
  id: number;
  date: string;
  company: string;
  role: string;
  mode: string;
  location: string;
  activities: string[];
  tech: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 7,
    date: "Ago 2026 – Sep 2026",
    company: "MOVA Energía",
    role: "Desarrollador Web",
    mode: "Freelance · Remoto",
    location: "Ciudad del Carmen, Campeche",
    activities: [
      "Diseño y desarrollo del sitio web corporativo",
      "Versión bilingüe (ES / EN) con modo claro y oscuro",
      "Despliegue y puesta en producción",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    id: 1,
    date: "Ago 2025 – Ene 2026",
    company: "HCO Consultoría y Servicios",
    role: "Desarrollador Sénior",
    mode: "Remoto · Part time",
    location: "Ciudad del Carmen, Campeche",
    activities: [
      "Desarrollo de soluciones de software a nivel senior",
      "Consultoría técnica en proyectos empresariales",
      "Revisión y arquitectura de sistemas",
    ],
    tech: ["React", "JavaScript", "C#", "MySQL"],
  },
  {
    id: 2,
    date: "May 2024 – Actualidad",
    company: "Corporativo Industrial y Comercial S.A. de C.V.",
    role: "Ingeniero de Software",
    mode: "Presencial",
    location: "Ciudad del Carmen, Campeche",
    activities: [
      "Desarrollo de software a medida para procesos industriales",
      "Análisis y administración de bases de datos",
      "Diseño de arquitectura de software",
    ],
    tech: ["C#", "SQL Server", "React", "MySQL"],
  },
  {
    id: 3,
    date: "Jul 2020 – May 2024",
    company: "LarissaMX",
    role: "Desarrollador Jefe de Proyectos",
    mode: "Remoto",
    location: "Carmen, Campeche",
    activities: [
      "Desarrollo de aplicaciones para empresas de perforación usando ReactJs y .NET",
      "Liderazgo del equipo de desarrollo",
      "Diseño gráfico y soporte técnico",
    ],
    tech: ["React", "C#", "PHP", "MySQL", "Vue.js", "SQL Server", "Photoshop"],
  },
  {
    id: 4,
    date: "Oct 2021 – Ene 2024",
    company: "Grúas Móviles del Golfo",
    role: "Desarrollador de Software",
    mode: "Presencial",
    location: "Carmen, Campeche",
    activities: [
      "Desarrollo de software para gestión de grúas y mantenimiento",
      "Diseño gráfico y branding",
      "Desarrollo front end",
    ],
    tech: ["PHP", "MySQL", "Vue.js", "Photoshop"],
  },
  {
    id: 5,
    date: "Nov 2020 – Oct 2021",
    company: "CIMAR SC",
    role: "Auxiliar de TI",
    mode: "Presencial",
    location: "Carmen, Campeche",
    activities: [
      "Desarrollo de sistemas",
      "Soporte técnico e instalación de redes",
      "Diseño gráfico y marketing digital",
    ],
    tech: ["PHP", "MySQL", "C#", "Photoshop"],
  },
  {
    id: 6,
    date: "Ene 2019 – Feb 2020",
    company: "2MJ Consultoría en Informática",
    role: "Desarrollador Móvil",
    mode: "Presencial · Part time",
    location: "México",
    activities: [
      "Desarrollo de aplicaciones móviles con Ionic 4",
      "Captura de información sobre mantenimientos de tuberías",
    ],
    tech: ["Ionic", "Angular", "C#", "MySQL", "SQL Server"],
  },
];

/* ─ Projects ─ */
export interface RepoLink {
  label: string;
  url: string;
}

export type ProjectCategory = "personal" | "freelance" | "empresarial";

export const PROJECT_CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: "personal", label: "Personales" },
  { id: "freelance", label: "Freelance" },
  { id: "empresarial", label: "Empresariales" },
];

export interface ProjectItem {
  id: number;
  name: string;
  type: string;
  category: ProjectCategory;
  company?: string;
  description: string;
  tech: string[];
  repos: RepoLink[];
  url?: string;
  folder?: string;
}

export const PROJECTS: ProjectItem[] = [
  /* Personales */
  {
    id: 1,
    name: "Arcan MMORPG",
    folder: "arcan-mmorpg",
    type: "Game / Full Stack",
    category: "personal",
    description:
      "MMORPG en desarrollo con mundo persistente, sistema de combate en tiempo real, economía de jugadores y narrativa expansiva. Arquitectura distribuida con servidor de juego dedicado y cliente web/desktop.",
    tech: ["TypeScript", "React", "C#", ".NET", "MySQL", "WebSockets"],
    repos: [
      {
        label: "arcan-client",
        url: "https://github.com/asanchezx96/arcan-client",
      },
      {
        label: "arcan-server",
        url: "https://github.com/asanchezx96/arcan-server",
      },
      {
        label: "arcan-shared",
        url: "https://github.com/asanchezx96/arcan-shared",
      },
    ],
  },  {
    id: 2,
    name: "StrikePoint",
    folder: "strikepoint",
    type: "Game / Multijugador",
    category: "personal",
    description:
      "Juego táctico multijugador por turnos ambientado en Necrosis Evolutiva: escuadras de operativos A.S.T.R.A. (soldado, antimotín, bombero y médico) que combinan sus habilidades para sobrevivir a hordas y dimensiones hostiles. El servidor es autoritativo: valida cada movimiento y disparo, y los clientes solo reproducen el estado del juego en tiempo real.",
    tech: ["React", "Phaser", "Node.js", "Socket.IO", "TypeScript", "MySQL"],
    url: "https://game.arcandevs.com",
    repos: [
      {
        label: "strike-point-frontend",
        url: "https://github.com/asanchezx96/strike-point-frontend",
      },
      {
        label: "strike-point-backend",
        url: "https://github.com/asanchezx96/strike-point-backend",
      },
    ],
  },
  {
    id: 3,
    name: "Guardian",
    folder: "guardian",
    type: "SaaS / Respaldos",
    category: "personal",
    description:
      "Agente para Windows, macOS y Linux que vigila las carpetas que elijas y guarda copias con fecha de lo que cambia, para abrirlas o recuperarlas desde otra computadora. Detecta repositorios Git, muestra la actividad en tiempo real y permite restaurar un proyecto exactamente como lo dejaste, ya sean documentos, diseños, fotos o código.",
    tech: ["Vue.js", "TypeScript", "C#", ".NET", "SQL Server", "WebSockets"],
    url: "https://guardian.arcandevs.com",
    repos: [
      {
        label: "guardspace-web",
        url: "https://github.com/asanchezx96/guardspace-web",
      },
      {
        label: "guardspace-api",
        url: "https://github.com/asanchezx96/guardspace-api",
      },
      {
        label: "guardspace-mobile",
        url: "https://github.com/asanchezx96/guardspace-mobile",
      },
    ],
  },  {
    id: 4,
    name: "IA Agent Console",
    folder: "ia-agent-console",
    type: "Dev Tool / GCP",
    category: "personal",
    description:
      "Herramienta de escritorio/web que centraliza la gestión de credenciales de Google Cloud Platform (GCP) sin necesidad de usar la terminal. Permite autenticarse con cuentas de GCP, seleccionar proyectos, gestionar service accounts, generar tokens y ejecutar operaciones directamente desde una interfaz gráfica intuitiva — eliminando la fricción del flujo de trabajo con gcloud CLI en el día a día.",
    tech: ["React", "TypeScript", "Python", "FastAPI", "GCP", "OAuth 2.0"],
    url: "https://github.com/asanchezx96/ia.agent.console",
    repos: [
      {
        label: "ia.agent.console",
        url: "https://github.com/asanchezx96/ia.agent.console",
      },
      {
        label: "ia-agent-core",
        url: "https://github.com/asanchezx96/ia-agent-core",
      },
    ],
  },  {
    id: 6,
    name: "SavEnv",
    folder: "savenv",
    type: "SaaS / Dev Tool",
    category: "personal",
    description:
      "Plataforma segura de gestión de variables de entorno con arquitectura zero-knowledge: las variables se encriptan en el cliente antes de llegar al servidor, por lo que nadie más puede leerlas. Soporta jerarquía completa de organizaciones: compañías, equipos con roles independientes, proyectos y asignación de equipos a proyectos. Cada miembro accede únicamente a las variables que le corresponden según su rol. Ideal para equipos que trabajan con múltiples entornos (dev, staging, prod) sin exponer credenciales sensibles.",
    tech: [
      "Vue.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "AES-256",
    ],
    url: "https://savenv.arcandevs.com",
    repos: [
      { label: "savenv-web", url: "https://github.com/asanchezx96/savenv-web" },
      { label: "savenv-api", url: "https://github.com/asanchezx96/savenv-api" },
      {
        label: "savenv-reports",
        url: "https://github.com/asanchezx96/savenv-reports",
      },
    ],
  },  {
    id: 8,
    name: "Taskflow",
    folder: "taskflow",
    type: "Productivity / SaaS",
    category: "personal",
    description:
      "Plataforma de gestión de tareas y flujos de trabajo orientada a equipos de desarrollo y negocios.",
    tech: ["React", "TypeScript", "Node.js", "MySQL"],
    url: "https://taskflow.arcandevs.com",
    repos: [
      {
        label: "taskflow-web",
        url: "https://github.com/asanchezx96/taskflow-web",
      }
    ],
  },  {
    id: 9,
    name: "Schema Migrates",
    folder: "schema-migrates",
    type: "Dev Tool / NPM Package",
    category: "personal",
    description:
      "Paquete de NPM para gestionar migraciones de bases de datos de forma sencilla y programática.",
    tech: ["Node.js", "TypeScript", "NPM"],
    url: "https://www.npmjs.com/package/schema-migrates",
    repos: [
      {
        label: "schema-migrates",
        url: "https://www.npmjs.com/package/schema-migrates",
      }
    ],
  },  {
    id: 11,
    name: "Event Assist",
    folder: "event-assist",
    type: "SaaS / Eventos",
    category: "personal",
    description:
      "Plataforma para crear y gestionar eventos sociales (bodas, XV años, cumpleaños, galas): invitaciones digitales con cuenta regresiva, mapa, itinerario y confirmación de asistencia (RSVP), envío masivo y personalizado por WhatsApp, y tarjetas imprimibles con código QR en distintos tamaños de imprenta. Incluye editor de diseño con vista previa en vivo, constructor libre por bloques y control de invitados, pases y mesas.",
    tech: ["React", "TypeScript", "Node.js", "MariaDB", "Express", "Tailwind CSS", "Sequelize"],
    url: "https://event-os.arcandevs.com/login",
    repos: [
      {
        label: "eventassist-frontend",
        url: "https://github.com/asanchezx96/eventassist-frontend",
      },
      {
        label: "eventassist.backend",
        url: "https://github.com/asanchezx96/eventassist.backend",
      },
    ],
  },
  /* Freelance */
  {
    id: 12,
    name: "MOVA Energía",
    folder: "mova",
    type: "Sitio Web Corporativo",
    category: "freelance",
    company: "MOVA Energía",
    description:
      "Sitio corporativo para MOVA Oil & Gas Services, integrador técnico del sector energético e industrial. Presenta sus líneas de servicio (consultoría y dirección de proyectos, diseño y fabricación), modelo de trabajo y contacto, con diseño industrial, modo claro/oscuro, versión bilingüe (ES / EN) y carga de páginas bajo demanda.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Router", "i18next"],
    url: "https://movaenergia.com/",
    repos: [],
  },  {
    id: 13,
    name: "HCO Suite",
    folder: "hco-suite",
    type: "Identidad / SSO",
    category: "freelance",
    company: "HCO",
    description:
      "Punto de entrada único para los sistemas de HCO: inicio de sesión centralizado (SSO) con tokens JWT RS256, sesión global con cierre en cascada, roles por sistema y matriz de permisos por módulo y acción. Administra usuarios, su alcance por empresa, contrato y proyecto, y el registro de las aplicaciones satélite (Databoard, GRISK), que validan el acceso con un paquete cliente propio. En desarrollo, aún no está en producción.",
    tech: ["Angular", "TypeScript", "Node.js", "MySQL", "Express", "Bootstrap", "Sequelize", "JWT"],
    repos: [],
  },  {
    id: 7,
    name: "HCO Databoard",
    folder: "hco-databoard",
    type: "Dashboard / Business Intelligence",
    category: "freelance",
    company: "HCO",
    description:
      "Dashboard empresarial para HCO Consultoría y Servicios: visualización de KPIs en tiempo real, gestión de reportes, análisis de datos operativos y panel administrativo centralizado.",
    tech: ["React", "JavaScript", "C#", "MySQL"],
    url: "https://hco-databoard.com/",
    repos: [
      {
        label: "hco-databoard",
        url: "https://github.com/asanchezx96/hco-databoard",
      },
      {
        label: "hco-databoard-api",
        url: "https://github.com/asanchezx96/hco-databoard-api",
      },
    ],
  },  {
    id: 5,
    name: "IntPro RH",
    folder: "intpro-rh",
    type: "ERP / Recursos Humanos",
    category: "freelance",
    company: "IntPro360",
    description:
      "Sistema integral de gestión de recursos humanos: nómina, control de asistencia, expedientes digitales, evaluaciones de desempeño y reportes gerenciales en tiempo real.",
    tech: ["React", "C#", ".NET", "SQL Server", "TypeScript"],
    url: "https://test-intpro.arcandevs.com",
    repos: [
      {
        label: "intpro-rh-web",
        url: "https://github.com/asanchezx96/intpro-rh-web",
      },
      {
        label: "intpro-rh-api",
        url: "https://github.com/asanchezx96/intpro-rh-api",
      },
      {
        label: "intpro-rh-mobile",
        url: "https://github.com/asanchezx96/intpro-rh-mobile",
      },
    ],
  },
  /* Empresariales */
  {
    id: 14,
    name: "Jibby Chat",
    folder: "jibby-chat",
    type: "App Móvil / Mensajería",
    category: "empresarial",
    company: "CICSA",
    description:
      "App móvil de mensajería interna y colaboración para el personal de CICSA: inicio de sesión corporativo, chats individuales y de grupo, canales y mensajes vinculados a procesos de negocio. Funciona sin conexión con base de datos local, notificaciones push y cifrado de mensajes en reposo.",
    tech: ["Flutter", "Dart", "NestJS", "MongoDB", "Socket.IO", "SQLite"],
    repos: [],
  },
  {
    id: 15,
    name: "Control de Actividades",
    folder: "gmg-control-actividades",
    type: "Sistema Web / Operaciones",
    category: "empresarial",
    company: "Grúas Móviles del Golfo",
    description:
      "Matriz de actividades por empleado, departamento, normatividad (OGP, ISO 9001, ISO 45001) y periodicidad, con seguimiento de estatus (en proceso, finalizada, vencida) y tablero de actividades realizadas por mes con filtros por año, base y empleado.",
    tech: ["Vue.js", "Vuetify", "PHP", "MySQL"],
    repos: [],
  },
  {
    id: 16,
    name: "Gerenciamiento de Viaje",
    folder: "gmg-gerenciamiento-viaje",
    type: "Sistema Web + App PWA",
    category: "empresarial",
    company: "Grúas Móviles del Golfo",
    description:
      "Planeación y supervisión de los viajes de tractocamiones: rutas con checkpoints, horas estimadas contra reales de llegada y salida, tiempos de recorrido y descansos. Incluye módulos de administración, CMC, logística, ventas, reportes, mantenimiento y calidad, y una app PWA donde el operador confirma sus viajes y consulta su historial.",
    tech: ["Vue.js", "Vuetify", "PHP", "MySQL", "PWA"],
    repos: [],
  },

  {
    id: 18,
    name: "Mantenimiento de Grúas",
    folder: "gmg-mantenimiento-gruas",
    type: "App PWA / Mantenimiento",
    category: "empresarial",
    company: "Grúas Móviles del Golfo",
    description:
      "App PWA para el control del mantenimiento preventivo de grúas: registro de horómetros por vehículo, estado de cada unidad respecto a su próximo servicio y semáforo de mantenimientos confirmados.",
    tech: ["Vue.js", "PWA", "PHP", "MySQL"],
    repos: [],
  },

  {
    id: 20,
    name: "Análisis de Riesgo Psicosocial",
    folder: "larissa-psicosocial",
    type: "Sistema Web + App PWA",
    category: "empresarial",
    company: "LarissaMX",
    description:
      "Aplicación y evaluación de cuestionarios de factores de riesgo psicosocial: app PWA para que los trabajadores respondan en campo y panel web con resultados globales, por categoría, dominio y entorno organizacional, gráficas de riesgo, evidencias y recomendaciones.",
    tech: ["React", "C#", ".NET", "SQL Server", "PWA"],
    repos: [],
  },
  {
    id: 21,
    name: "GREP",
    folder: "larissa-grep",
    type: "Sistema Web / Riesgo Industrial",
    category: "empresarial",
    company: "LarissaMX",
    description:
      "Gestión de Riesgo en Equipos de Perforación: registro de equipos, identificación de peligros, administración de barreras y recomendaciones, control de cambios y tablero con la condición y estatus de barreras filtrado por zona, gerencia, centro de trabajo, pozo e instalación.",
    tech: ["React", "C#", ".NET", "SQL Server"],
    repos: [],
  },
  {
    id: 22,
    name: "ARS — Atlas de Riesgo a la Salud",
    folder: "larissa-ars",
    type: "Sistema Web / Salud Ocupacional",
    category: "empresarial",
    company: "LarissaMX",
    description:
      "Gestión y automatización del Atlas de Riesgo a la Salud: proyectos, usuarios, roles, catálogos, especialistas y plantillas; resultados de riesgo psicosocial por proyecto; portal para que usuarios externos respondan cuestionarios y una versión sin conexión que registra cuestionarios en campo y los sincroniza al recuperar internet.",
    tech: ["React", "C#", ".NET", "SQL Server"],
    repos: [],
  },
];
