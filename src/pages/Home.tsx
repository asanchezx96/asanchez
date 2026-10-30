import { useState, useEffect } from "react";
import { Mail, MapPin, Github, Linkedin, ExternalLink, GitBranch, ChevronRight, ChevronLeft, Cpu, Code2, Briefcase, X, Sun, Moon, Languages } from "lucide-react";
import { FEATURED_SKILLS, SKILL_USAGE, type ProjectItem } from "@/data/portfolio";
import { usePortfolio } from "@/data/i18n";
import { useTheme } from "@/stores/useTheme";
import { useLang } from "@/stores/useLang";
import img from "../assets/yo.png";

const _projImages = import.meta.glob(
  "../assets/projects/**/*.{png,jpg,jpeg,webp,gif,svg}",
  { eager: true }
) as Record<string, { default: string }>;

function getProjectImages(folder: string): string[] {
  if (!folder) return [];
  return Object.entries(_projImages)
    .filter(([path]) => path.includes(`/projects/${folder}/`))
    .map(([, mod]) => (mod as any).default as string);
}

function ProjectDetailPane({ project }: { project: ProjectItem }) {
  const { t } = usePortfolio();
  const [imgIdx, setImgIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const images = getProjectImages(project.folder ?? "");

  useEffect(() => {
    if (!isFullscreen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullscreen(false);
      if (e.key === 'ArrowRight' && images.length > 1) setImgIdx(i => (i + 1) % images.length);
      if (e.key === 'ArrowLeft' && images.length > 1) setImgIdx(i => (i - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, images.length]);

  return (
    <>
      <div className="w-full lg:w-2/3 p-5 md:p-8 lg:px-12 lg:py-10 flex justify-center bg-base lg:overflow-y-auto no-scrollbar">
        <div className="w-full max-w-2xl flex flex-col lg:h-full justify-start">

          {/* Header */}
          <div className="shrink-0">
            <h2 className="text-2xl md:text-3xl text-ink font-semibold tracking-tight lg:truncate">{project.name}</h2>
            <div className="text-brand text-[10px] font-mono uppercase tracking-widest mb-3 mt-1 pb-3 border-b border-line">
              {project.type}
              {project.company && <span className="text-ink-3"> // {project.company}</span>}
            </div>
          </div>

          {/* Image Viewer (Center, Flexible) */}
          {images.length > 0 && (
            <div className="shrink min-h-0 flex flex-col gap-2 mt-1 mb-4">
              <div
                className="w-full shrink min-h-0 max-h-[260px] md:max-h-[300px] xl:max-h-[380px] bg-panel border border-line rounded-md relative flex items-center justify-center p-2 group overflow-hidden cursor-pointer"
                onClick={() => setIsFullscreen(true)}
              >
                 <img src={images[imgIdx]} alt={project.name} className="max-w-full max-h-full object-contain group-hover:opacity-80 transition-opacity" />

                 {images.length > 1 && (
                   <>
                     <button
                       onClick={(e) => { e.stopPropagation(); setImgIdx((i) => (i - 1 + images.length) % images.length); }}
                       className="absolute left-3 top-1/2 -translate-y-1/2 bg-surface/90 p-1.5 border border-line text-ink lg:opacity-0 group-hover:opacity-100 transition-opacity hover:border-brand"
                     >
                       <ChevronLeft size={16} />
                     </button>
                     <button
                       onClick={(e) => { e.stopPropagation(); setImgIdx((i) => (i + 1) % images.length); }}
                       className="absolute right-3 top-1/2 -translate-y-1/2 bg-surface/90 p-1.5 border border-line text-ink lg:opacity-0 group-hover:opacity-100 transition-opacity hover:border-brand"
                     >
                       <ChevronRight size={16} />
                     </button>
                   </>
                 )}
              </div>
              {/* Dots / Status */}
              {images.length > 1 && (
                <div className="flex items-center justify-between px-1 shrink-0">
                  <div className="text-[9px] font-mono text-ink-3 uppercase tracking-widest">
                    IMG {imgIdx + 1} // {images.length}
                  </div>
                  <div className="flex gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setImgIdx(i)}
                        className={`w-1.5 h-1.5 border transition-colors ${imgIdx === i ? 'bg-brand border-brand' : 'bg-transparent border-line-2 hover:border-ink-3'}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Text Details (Bottom) */}
          <div className="shrink-0 mt-2">
            <p className="text-ink-2 text-sm mb-5 leading-relaxed lg:line-clamp-3">
              {project.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="overflow-hidden">
                <h3 className="text-[9px] font-mono uppercase text-ink-3 tracking-widest mb-3">{t.techStack}</h3>
                <div className="flex flex-col gap-1.5">
                  {project.tech.slice(0, 4).map(tech => (
                    <div key={tech} className="flex items-center gap-3 text-xs text-ink-2 truncate">
                      <div className="w-1 h-1 bg-brand/60 shrink-0"></div> {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden">
                <h3 className="text-[9px] font-mono uppercase text-ink-3 tracking-widest mb-3">{t.links}</h3>
                <div className="flex flex-col gap-2.5">
                  {project.repos.map(r => (
                    <a key={r.label} href={r.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs text-ink-2 hover:text-brand transition-colors w-fit group truncate max-w-full">
                      <GitBranch size={14} className="text-ink-3 group-hover:text-brand shrink-0" /> <span className="truncate">{r.label}</span>
                    </a>
                  ))}
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs text-ink-2 hover:text-ink transition-colors w-fit group mt-1 truncate max-w-full">
                      <ExternalLink size={14} className="text-ink-3 group-hover:text-brand shrink-0" /> <span className="truncate">{t.visitSite}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX */}
      {isFullscreen && images.length > 0 && (
        <div
          className="fixed inset-0 z-50 bg-overlay/90 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-200 backdrop-blur-sm"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            className="absolute top-3 right-3 md:top-6 md:right-6 text-white/60 hover:text-white transition-colors p-2"
            onClick={() => setIsFullscreen(false)}
          >
            <X size={24} />
          </button>

          <img
            src={images[imgIdx]}
            alt={project.name}
            className="max-w-full max-h-full object-contain border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); setImgIdx((i) => (i - 1 + images.length) % images.length); }}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-black/60 p-2 md:p-3 border border-white/15 text-white/70 hover:text-white hover:border-brand transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setImgIdx((i) => (i + 1) % images.length); }}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-black/60 p-2 md:p-3 border border-white/15 text-white/70 hover:text-white hover:border-brand transition-colors"
              >
                <ChevronRight size={24} />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/70 uppercase tracking-widest bg-black/60 px-4 py-2 border border-white/15">
                {imgIdx + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

/** Agrupa proyectos por empresa conservando el orden en que aparecen. */
function groupByCompany(projects: ProjectItem[]): [string | undefined, ProjectItem[]][] {
  const groups = new Map<string | undefined, ProjectItem[]>();
  for (const p of projects) groups.set(p.company, [...(groups.get(p.company) ?? []), p]);
  return [...groups.entries()];
}

const topLink = "flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-ink-2 hover:text-ink transition-colors group";
const topIcon = "text-ink-3 group-hover:text-brand transition-colors";
const toggleBtn = "flex items-center gap-1.5 h-7 px-2.5 border border-line rounded-md text-[10px] font-mono uppercase tracking-widest text-ink-2 hover:text-ink hover:border-brand transition-colors";

export default function Home() {
  const { t, lang, experience, projects, categories, skills, skillText } = usePortfolio();
  const { dark, toggle: toggleTheme } = useTheme();
  const toggleLang = useLang((s) => s.toggle);
  const [activeTab, setActiveTab] = useState("experience");
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const activeProject = projects.find(p => p.id === activeProjectId) ?? projects[0];

  const tabs = [
    { id: "experience", label: t.tabExperience, icon: <Briefcase size={14} /> },
    { id: "projects", label: t.tabProjects, icon: <Code2 size={14} /> },
    { id: "skills", label: t.tabStack, icon: <Cpu size={14} /> },
  ];

  return (
    <div className="min-h-[100dvh] md:h-screen w-full bg-base text-ink-2 font-sans flex flex-col md:overflow-hidden">

      {/* Topbar (Contact Links + toggles) */}
      <header className="h-11 border-b border-line bg-surface flex items-center justify-between gap-3 px-4 md:px-6 shrink-0">
        <div className="flex items-center gap-4 md:gap-6">
          <a href="mailto:alex_180796@hotmail.com" className={topLink}>
            <Mail size={14} className={topIcon} /> <span className="hidden lg:inline">alex_180796</span>
          </a>
          <a href="https://github.com/asanchezx96" target="_blank" rel="noreferrer" className={topLink}>
            <Github size={14} className={topIcon} /> <span className="hidden lg:inline">asanchezx96</span>
          </a>
          <a href="https://www.linkedin.com/in/asanchezx96/" target="_blank" rel="noreferrer" className={topLink}>
            <Linkedin size={14} className={topIcon} /> <span className="hidden lg:inline">asanchezx96</span>
          </a>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-ink-3 hidden md:flex">
            <MapPin size={12} /> {t.location}
          </div>
          <button onClick={toggleLang} className={toggleBtn} title={t.switchLang} aria-label={t.switchLang}>
            <Languages size={12} />
            <span className={lang === "es" ? "text-brand" : ""}>ES</span>
            <span className="text-ink-3">/</span>
            <span className={lang === "en" ? "text-brand" : ""}>EN</span>
          </button>
          <button
            onClick={toggleTheme}
            className={toggleBtn}
            title={dark ? t.themeLight : t.themeDark}
            aria-label={dark ? t.themeLight : t.themeDark}
          >
            {dark ? <Sun size={13} /> : <Moon size={13} />}
          </button>
        </div>
      </header>

      <div className="flex flex-col md:flex-row flex-1 md:overflow-hidden">
        {/* Sidebar (Fixed Width; perfil compacto arriba en móvil) */}
        <aside className="w-full md:w-64 xl:w-72 border-b md:border-b-0 md:border-r border-line bg-surface flex flex-col shrink-0 md:overflow-hidden">
          {/* Profile */}
          <div className="md:border-b border-line flex flex-col shrink-0">
            <div className="hidden md:block w-full aspect-[4/3] overflow-hidden border-b border-line">
              <img src={img} alt="Alexis R. Sánchez" className="w-full h-full object-cover object-[center_30%]" />
            </div>
            <div className="px-5 pt-5 md:p-6 flex items-center gap-4">
              <img src={img} alt="Alexis R. Sánchez" className="md:hidden w-16 h-16 rounded-full object-cover object-[center_30%] border border-line shrink-0" />
              <div>
                <h1 className="text-ink font-semibold text-base tracking-wide uppercase">Alexis Sánchez</h1>
                <h2 className="text-brand text-[10px] font-mono uppercase tracking-widest mt-1">{t.role}</h2>
              </div>
            </div>
          </div>

          {/* Overview Info */}
          <div className="p-5 md:p-6 flex flex-col flex-1 min-h-0 gap-5 md:gap-0">
            <div className="flex flex-col gap-3">
              <h3 className="text-ink text-sm md:text-xs font-medium leading-relaxed">
                {t.headline[0]}<span className="text-brand">{t.headline[1]}</span>{t.headline[2]}
              </h3>
              <p className="text-ink-2 text-xs md:text-[11px] leading-relaxed md:line-clamp-4">
                {t.bio}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 md:pt-5 md:mt-auto border-t border-line shrink-0">
              <div>
                <div className="text-ink font-mono text-lg">6+</div>
                <div className="text-[8px] text-ink-3 uppercase tracking-widest mt-1">{t.statYears}</div>
              </div>
              <div>
                <div className="text-ink font-mono text-lg">{new Set(experience.map(e => e.company)).size}</div>
                <div className="text-[8px] text-ink-3 uppercase tracking-widest mt-1">{t.statCompanies}</div>
              </div>
              <div>
                <div className="text-ink font-mono text-lg">10+</div>
                <div className="text-[8px] text-ink-3 uppercase tracking-widest mt-1">{t.statTechs}</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col md:overflow-hidden bg-base">

          {/* Horizontal Tabs */}
          <nav className="sticky top-0 z-30 md:static h-12 border-b border-line bg-surface/95 backdrop-blur md:bg-surface flex items-center shrink-0 px-1 md:px-4 overflow-x-auto no-scrollbar">
            {tabs.map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-1 md:flex-none justify-center items-center gap-2 h-full px-3 md:px-6 text-[11px] md:text-xs font-semibold uppercase tracking-[0.1em] md:tracking-[0.15em] whitespace-nowrap transition-colors relative ${
                    isActive
                      ? 'text-ink'
                      : 'text-ink-3 hover:text-ink-2'
                  }`}
                >
                  <span className={isActive ? 'text-brand' : 'text-ink-3'}>{tab.icon}</span>
                  {tab.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* EXPERIENCE */}
          {activeTab === "experience" && (
            <div className="md:h-full py-5 md:py-3 2xl:py-5 px-5 md:px-8 lg:px-10 md:overflow-y-auto no-scrollbar">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-8 w-full">
                {experience.map((e, index) => (
                  <div key={e.id} className="relative flex flex-col border-l border-line pl-5">
                    {/* Tiny active marker for most recent */}
                    {index === 0 && (
                      <div className="absolute -left-[2px] top-0 w-[3px] h-4 bg-brand"></div>
                    )}
                    <span className="text-brand text-[10px] font-mono tracking-widest uppercase mb-1.5">{e.date}</span>
                    <h3 className="text-ink text-base font-semibold truncate" title={e.company}>{e.company}</h3>
                    <h4 className="text-ink-3 text-sm mb-3 truncate">{e.role}</h4>

                    <div className="flex flex-col gap-1.5 mb-4 flex-1">
                      {e.activities.slice(0, 2).map((a, i) => (
                         <div key={i} className="text-ink-2 text-xs leading-snug flex gap-2 line-clamp-2">
                           <ChevronRight size={14} className="text-brand/50 shrink-0 mt-[2px]" />
                           <span className="truncate whitespace-normal line-clamp-2">{a}</span>
                         </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {e.tech.slice(0, 4).map(tech => (
                        <span key={tech} className="text-[10px] font-mono tracking-wider uppercase text-ink-2 bg-panel border border-line rounded px-2 py-0.5">{tech}</span>
                      ))}
                      {e.tech.length > 4 && (
                        <span className="text-[10px] font-mono tracking-wider uppercase text-ink-3 bg-surface border border-line rounded px-2 py-0.5">+{e.tech.length - 4}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PROJECTS (Master-Detail) */}
          {activeTab === "projects" && (
            <div className="flex flex-col lg:flex-row md:h-full w-full md:overflow-y-auto lg:overflow-hidden no-scrollbar">
              {/* Project List */}
              <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-line bg-surface flex flex-col shrink-0 lg:overflow-y-auto no-scrollbar">
                {/* Category selector */}
                <div className="lg:sticky top-0 z-20 grid grid-cols-3 shrink-0 bg-surface border-b border-line">
                  {categories.map(cat => {
                    const isActive = activeProject.category === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveProjectId(projects.find(p => p.category === cat.id)?.id ?? activeProject.id)}
                        className={`relative py-3.5 text-[11px] 2xl:text-[13px] font-mono uppercase tracking-widest transition-colors ${
                          isActive ? 'text-ink' : 'text-ink-3 hover:text-ink-2'
                        }`}
                      >
                        {cat.label}
                        <span className={`ml-1.5 ${isActive ? 'text-brand' : 'text-ink-3'}`}>
                          {projects.filter(p => p.category === cat.id).length}
                        </span>
                        {isActive && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand"></div>}
                      </button>
                    );
                  })}
                </div>
                {/* Móvil: tira horizontal de proyectos de la categoría */}
                <div className="lg:hidden flex gap-2 overflow-x-auto no-scrollbar px-4 py-3">
                  {projects.filter(p => p.category === activeProject.category).map(p => (
                    <button
                      key={p.id}
                      onClick={() => setActiveProjectId(p.id)}
                      className={`shrink-0 px-3 py-2 rounded-md border text-xs font-semibold whitespace-nowrap transition-colors ${
                        activeProject.id === p.id
                          ? 'border-brand bg-brand/10 text-ink'
                          : 'border-line text-ink-2'
                      }`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
                {/* Projects of the active category, grouped by company */}
                <div className="hidden lg:block">
                {groupByCompany(projects.filter(p => p.category === activeProject.category)).map(([company, items]) => {
                  return (
                    <div key={company ?? "none"} className="shrink-0">
                      {company && (
                        <div className="flex items-center justify-between px-6 py-2.5 bg-panel border-b border-line text-[9px] font-mono uppercase tracking-widest text-brand">
                          <span className="truncate">{company}</span>
                          <span className="text-ink-3">{items.length}</span>
                        </div>
                      )}
                      {items.map(p => (
                        <button
                          key={p.id}
                          onClick={() => setActiveProjectId(p.id)}
                          className={`w-full text-left px-6 py-5 shrink-0 flex flex-col justify-center relative group border-b border-line transition-colors ${
                            activeProject.id === p.id
                              ? 'bg-brand/10'
                              : 'hover:bg-panel'
                          }`}
                        >
                          {activeProject.id === p.id && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand"></div>
                          )}
                          <span className={`text-sm font-semibold truncate w-full ${activeProject.id === p.id ? 'text-ink' : 'text-ink-2 group-hover:text-ink'}`}>{p.name}</span>
                          <span className="text-ink-3 font-mono text-[9px] uppercase tracking-widest truncate w-full mt-0.5">{p.type}</span>
                        </button>
                      ))}
                    </div>
                  );
                })}
                </div>
              </div>
              {/* Project Detail */}
              <ProjectDetailPane key={activeProject.id} project={activeProject} />
            </div>
          )}

          {/* STACK / SKILLS */}
          {activeTab === "skills" && (
            <div className="md:h-full py-5 md:py-3 2xl:py-4 px-5 md:px-8 lg:px-10 md:overflow-y-auto no-scrollbar bg-base">
              {/* Destacados */}
              <div className="mb-4 2xl:mb-6">
                <div className="flex items-baseline justify-between mb-2 pb-1.5 border-b border-line">
                  <h3 className="text-brand text-[10px] 2xl:text-xs font-mono uppercase tracking-[0.2em]">{t.featured}</h3>
                  <span className="text-ink-3 text-[10px] 2xl:text-xs font-mono uppercase tracking-widest">{t.usedIn}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {FEATURED_SKILLS.map(name => (
                    <div key={name} className="flex-1 flex items-baseline justify-between gap-2 2xl:gap-3 bg-surface border border-line rounded-md px-2 py-1.5 2xl:px-3 2xl:py-2 hover:border-brand transition-colors cursor-default">
                      <span className="text-ink text-[13px] 2xl:text-base font-semibold whitespace-nowrap">{name}</span>
                      {/* Sin conteo: tecnología de empleos anteriores cuyo código no está en el equipo */}
                      <span className="text-brand font-mono text-[11px] 2xl:text-sm shrink-0">{SKILL_USAGE[name] ?? t.workOnly}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resto por categoría, ordenado por uso. Columnas tipo mosaico: cada categoría ocupa solo su alto */}
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 gap-x-6 w-full">
                {skills.map(s => (
                  <div key={s.label} className="break-inside-avoid mb-2 2xl:mb-3 flex flex-col overflow-hidden">
                    <h3 className="text-brand text-[10px] 2xl:text-xs font-mono uppercase tracking-[0.2em] mb-1.5 pb-1 2xl:mb-2 2xl:pb-1.5 border-b border-line">{skillText(s.label)}</h3>
                    <div className="flex flex-wrap gap-1">
                      {s.items
                        .filter(i => !FEATURED_SKILLS.includes(i))
                        .sort((a, b) => (SKILL_USAGE[b] ?? 0) - (SKILL_USAGE[a] ?? 0))
                        .map(i => (
                        <div key={i} className="flex items-baseline gap-1.5 text-ink-2 text-xs 2xl:text-[15px] leading-tight bg-surface border border-line rounded px-1.5 py-0.5 2xl:px-2 2xl:py-[3px] hover:text-ink hover:border-line-2 transition-colors cursor-default">
                          {skillText(i)}
                          {SKILL_USAGE[i] !== undefined && (
                            <span className="text-ink-3 font-mono text-[10px] 2xl:text-xs">{SKILL_USAGE[i]}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
