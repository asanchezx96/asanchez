import { useLang, type Lang } from "@/stores/useLang";
import { EXPERIENCE, PROJECTS, PROJECT_CATEGORIES, SKILLS } from "./portfolio";

/* ─ Textos de la interfaz ─ */
export const UI = {
  es: {
    pageTitle: "Alexis Sánchez Vázquez — Desarrollador Full Stack",
    location: "Ciudad del Carmen, Campeche",
    role: "Senior SWE",
    headline: ["Desarrollador ", "full-stack", " con visión de producto. Arquitecturas escalables y código limpio."],
    bio: "Desarrollo software desde pequeños proyectos hasta sistemas empresariales. Me especializo en aplicaciones web full-stack y móviles híbridas.",
    statYears: "Años Exp.",
    statCompanies: "Empresas",
    statTechs: "Techs",
    tabExperience: "Experiencia",
    tabProjects: "Proyectos",
    tabStack: "Stack",
    techStack: "Tecnologías",
    links: "Repositorios y enlaces",
    visitSite: "Visitar sitio",
    featured: "Principales",
    usedIn: "Proyectos donde se usa",
    workOnly: "Laboral",
    themeLight: "Cambiar a modo claro",
    themeDark: "Cambiar a modo oscuro",
    switchLang: "Switch to English",
  },
  en: {
    pageTitle: "Alexis Sánchez Vázquez — Full Stack Developer",
    location: "Ciudad del Carmen, Campeche, MX",
    role: "Senior SWE",
    headline: ["", "Full-stack", " developer with a product mindset. Scalable architectures and clean code."],
    bio: "I build software ranging from small projects to enterprise systems, specializing in full-stack web and hybrid mobile applications.",
    statYears: "Years Exp.",
    statCompanies: "Companies",
    statTechs: "Techs",
    tabExperience: "Experience",
    tabProjects: "Projects",
    tabStack: "Stack",
    techStack: "Tech Stack",
    links: "Sources & Links",
    visitSite: "Visit site",
    featured: "Featured",
    usedIn: "Projects using it",
    workOnly: "Work",
    themeLight: "Switch to light mode",
    themeDark: "Switch to dark mode",
    switchLang: "Cambiar a español",
  },
} satisfies Record<Lang, Record<string, string | string[]>>;

/* ─ Traducciones del contenido (el español vive en portfolio.ts) ─ */
const MONTHS_EN: Record<string, string> = {
  Ene: "Jan", Abr: "Apr", Ago: "Aug", Dic: "Dec", Actualidad: "Present",
};
const translateDate = (d: string) => d.replace(/[A-Za-zÁ-ú]+/g, (w) => MONTHS_EN[w] ?? w);

const EXPERIENCE_EN: Record<number, { role: string; mode: string; activities: string[] }> = {
  7: {
    role: "Web Developer",
    mode: "Freelance · Remote",
    activities: [
      "Designed and built the corporate website",
      "Bilingual version (ES / EN) with light and dark modes",
      "Deployment and production release",
    ],
  },
  1: {
    role: "Senior Developer",
    mode: "Remote · Part time",
    activities: [
      "Senior-level software development",
      "Technical consulting on enterprise projects",
      "System architecture and code review",
    ],
  },
  2: {
    role: "Software Engineer",
    mode: "On-site",
    activities: [
      "Custom software development for industrial processes",
      "Database analysis and administration",
      "Software architecture design",
    ],
  },
  3: {
    role: "Lead Developer & Project Manager",
    mode: "Remote",
    activities: [
      "Built applications for drilling companies using ReactJS and .NET",
      "Led the development team",
      "Graphic design and technical support",
    ],
  },
  4: {
    role: "Software Developer",
    mode: "On-site",
    activities: [
      "Software for crane fleet and maintenance management",
      "Graphic design and branding",
      "Front-end development",
    ],
  },
  5: {
    role: "IT Assistant",
    mode: "On-site",
    activities: [
      "Systems development",
      "Technical support and network installation",
      "Graphic design and digital marketing",
    ],
  },
  6: {
    role: "Mobile Developer",
    mode: "On-site · Part time",
    activities: [
      "Mobile app development with Ionic 4",
      "Field data capture for pipeline maintenance",
    ],
  },
};

const PROJECTS_EN: Record<number, { type: string; description: string }> = {
  1: {
    type: "Game / Full Stack",
    description:
      "MMORPG in development with a persistent world, real-time combat, a player-driven economy and an expansive narrative. Distributed architecture with a dedicated game server and a web/desktop client.",
  },
  2: {
    type: "Game / Multiplayer",
    description:
      "Turn-based multiplayer tactics game set in Necrosis Evolutiva: squads of A.S.T.R.A. operatives (soldier, riot officer, firefighter and medic) combine their abilities to survive hordes and hostile dimensions. The server is authoritative: it validates every move and shot, and clients only render the game state in real time.",
  },
  3: {
    type: "SaaS / Backups",
    description:
      "Agent for Windows, macOS and Linux that watches the folders you choose and keeps dated copies of whatever changes, so you can open or recover them from another computer. It detects Git repositories, shows activity in real time and lets you restore a project exactly as you left it — documents, designs, photos or code.",
  },
  4: {
    type: "Dev Tool / GCP",
    description:
      "Desktop/web tool that centralizes Google Cloud Platform (GCP) credential management without touching the terminal. Sign in with GCP accounts, pick projects, manage service accounts, generate tokens and run operations from an intuitive UI — removing the day-to-day friction of the gcloud CLI.",
  },
  6: {
    type: "SaaS / Dev Tool",
    description:
      "Secure environment-variable manager with a zero-knowledge architecture: variables are encrypted on the client before reaching the server, so no one else can read them. Supports a full organization hierarchy — companies, teams with their own roles, projects and team-to-project assignments. Each member only sees the variables their role allows. Built for teams juggling multiple environments (dev, staging, prod) without exposing sensitive credentials.",
  },
  8: {
    type: "Productivity / SaaS",
    description: "Task and workflow management platform for development and business teams.",
  },
  9: {
    type: "Dev Tool / NPM Package",
    description: "NPM package for managing database migrations simply and programmatically.",
  },
  11: {
    type: "SaaS / Events",
    description:
      "Platform to create and manage social events (weddings, quinceañeras, birthdays, galas): digital invitations with countdown, map, schedule and RSVP; bulk, personalized WhatsApp delivery; and printable QR cards in standard print sizes. Includes a design editor with live preview, a free-form block builder and guest, pass and table management.",
  },
  12: {
    type: "Corporate Website",
    description:
      "Corporate site for MOVA Oil & Gas Services, a technical integrator for the energy and industrial sectors. Presents its service lines (consulting and project management, design and fabrication), working model and contact, with an industrial design, light/dark mode, bilingual version (ES / EN) and on-demand page loading.",
  },
  13: {
    type: "Identity / SSO",
    description:
      "Single entry point for HCO's systems: centralized sign-on (SSO) with RS256 JWT tokens, global session with cascading sign-out, per-system roles and a permission matrix by module and action. Manages users, their scope by company, contract and project, and the registry of satellite apps (Databoard, GRISK), which validate access with a dedicated client package. In development, not yet in production.",
  },
  7: {
    type: "Dashboard / Business Intelligence",
    description:
      "Enterprise dashboard for HCO Consultoría y Servicios: real-time KPI visualization, report management, operational data analysis and a centralized admin panel.",
  },
  5: {
    type: "ERP / Human Resources",
    description:
      "End-to-end HR management system: payroll, attendance tracking, digital employee records, performance reviews and real-time management reports.",
  },
  14: {
    type: "Mobile App / Messaging",
    description:
      "Internal messaging and collaboration app for CICSA staff: corporate sign-in, one-to-one and group chats, channels and messages linked to business processes. Works offline with a local database, push notifications and encryption of messages at rest.",
  },
  15: {
    type: "Web System / Operations",
    description:
      "Activity matrix by employee, department, standard (OGP, ISO 9001, ISO 45001) and frequency, with status tracking (in progress, completed, overdue) and a monthly completed-activities board filterable by year, base and employee.",
  },
  16: {
    type: "Web System + PWA",
    description:
      "Planning and supervision of tractor-trailer trips: routes with checkpoints, estimated vs. actual arrival and departure times, travel times and rest stops. Includes administration, CMC, logistics, sales, reporting, maintenance and quality modules, plus a PWA where drivers confirm trips and review their history.",
  },
  18: {
    type: "PWA / Maintenance",
    description:
      "PWA for preventive crane maintenance: hour-meter logging per vehicle, each unit's status relative to its next service and a traffic-light view of confirmed maintenance.",
  },
  20: {
    type: "Web System + PWA",
    description:
      "Administration and scoring of psychosocial risk questionnaires: a PWA for workers to answer in the field and a web panel with overall results by category, domain and organizational environment, risk charts, evidence and recommendations.",
  },
  21: {
    type: "Web System / Industrial Risk",
    description:
      "Risk management for drilling rigs: equipment registry, hazard identification, barrier and recommendation management, change control and a dashboard of barrier condition and status filterable by zone, management unit, work center, well and facility.",
  },
  22: {
    type: "Web System / Occupational Health",
    description:
      "Management and automation of the Health Risk Atlas: projects, users, roles, catalogs, specialists and templates; psychosocial risk results by project; a portal for external users to answer questionnaires and an offline version that records field questionnaires and syncs them once connectivity returns.",
  },
};

const CATEGORIES_EN: Record<string, string> = {
  personal: "Personal",
  freelance: "Freelance",
  empresarial: "Enterprise",
};

/** Etiquetas de categoría y habilidades en español → inglés. Lo que no aparece aquí se muestra igual. */
const SKILL_TEXT_EN: Record<string, string> = {
  "Lenguajes": "Languages",
  "Móvil & Escritorio": "Mobile & Desktop",
  "Librerías Frontend": "Frontend Libraries",
  "Bases de datos & ORMs": "Databases & ORMs",
  "Control de versiones": "Version Control",
  "Servicios & Integraciones": "Services & Integrations",
  "Reportes & Documentos": "Reports & Documents",
  "Testing & Calidad": "Testing & Quality",
  "Despliegue & APIs": "Deployment & APIs",
  "Diseño & Marketing": "Design & Marketing",
  "Habilidades": "Soft Skills",
  "Diseño Gráfico": "Graphic Design",
  "Marketing Digital": "Digital Marketing",
  "Soporte Técnico": "Technical Support",
  "Liderazgo de Equipos": "Team Leadership",
  "Gestión de Proyectos": "Project Management",
  "Análisis de Requerimientos": "Requirements Analysis",
  "Metodologías Ágiles": "Agile Methodologies",
  "Documentación Técnica": "Technical Documentation",
};

/** Datos del portafolio en el idioma activo. Los `id` y nombres de skills no cambian. */
export function usePortfolio() {
  const lang = useLang((s) => s.lang);
  const en = lang === "en";

  return {
    lang,
    t: UI[lang],
    skillText: (s: string) => (en ? SKILL_TEXT_EN[s] ?? s : s),
    experience: en
      ? EXPERIENCE.map((e) => ({ ...e, date: translateDate(e.date), ...EXPERIENCE_EN[e.id] }))
      : EXPERIENCE,
    projects: en ? PROJECTS.map((p) => ({ ...p, ...PROJECTS_EN[p.id] })) : PROJECTS,
    categories: en
      ? PROJECT_CATEGORIES.map((c) => ({ ...c, label: CATEGORIES_EN[c.id] ?? c.label }))
      : PROJECT_CATEGORIES,
    skills: SKILLS,
  };
}
