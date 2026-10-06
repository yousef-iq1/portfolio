const projects = [
  {
    id: "serpapi",
    title: "Arabic Search Context Lab",
    kind: "API product & developer education",
    description:
      "An independent SerpApi developer proof showing how the same Arabic search intent changes across Baghdad, Riyadh, Cairo and Casablanca, with public source, technical guidance and localization notes.",
    tech: ["Next.js", "React", "TypeScript", "SerpApi", "REST API", "RTL/LTR"],
    liveUrl: "https://arabic-search-context-lab-prod.onrender.com",
    sourceUrl: "https://github.com/yousef-iq1/arabic-search-context-lab",
    proofUrl: "https://arabic-search-context-lab-prod.onrender.com/proof",
    walkthroughUrl: "https://arabic-search-context-lab-prod.onrender.com/walkthrough",
  },
  {
    id: "seen",
    title: "Seen It",
    kind: "Movie discovery",
    description:
      "A bilingual movie and TV discovery app that learns what you like and turns it into personal recommendations.",
    tech: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion", "Zustand", "PWA"],
    liveUrl: "https://seen-it-zae7.onrender.com",
    sourceUrl: "https://github.com/yousef-iq1/Seen-it",
    proofUrl: null,
    walkthroughUrl: null,
  },
  {
    id: "blog",
    title: "Yousef's Blog",
    kind: "Writing & publishing",
    description:
      "A personal publishing space built for writing, translating and managing stories without losing the feeling of a real blog.",
    tech: ["React", "TypeScript", "Vite", "Express", "PostgreSQL", "Supabase", "Passport", "TanStack Query", "Tailwind CSS"],
    liveUrl: "https://multilingual-cms-prod.onrender.com",
    sourceUrl: "https://github.com/yousef-iq1/multilingual-cms",
    proofUrl: null,
    walkthroughUrl: null,
  },
  {
    id: "market",
    title: "IQD Market Tracker",
    kind: "Exchange rates & data",
    description:
      "A focused dashboard for following the Iraqi dinar, exploring price history and converting between IQD and USD.",
    tech: ["React", "TypeScript", "Express", "REST API", "TanStack Query", "Recharts", "Tailwind CSS", "Zod"],
    liveUrl: "https://iqd-market-tracker-g192.onrender.com",
    sourceUrl: "https://github.com/yousef-iq1/iqd-market-tracker",
    proofUrl: null,
    walkthroughUrl: null,
  },
]

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M6 14 14 6M8 6h6v6" />
    </svg>
  )
}

function GitHubMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 19c-4 1.5-4-2-6-2m12 4v-3.9c0-1 .1-1.4-.5-2 2.8-.3 5.7-1.4 5.7-6.2 0-1.4-.5-2.5-1.3-3.4.1-.3.6-1.6-.1-3.3 0 0-1.1-.3-3.5 1.3A12 12 0 0 0 12 3a12 12 0 0 0-3.2.4C6.4 1.8 5.3 2.1 5.3 2.1c-.7 1.7-.2 3-.1 3.3C4.4 6.4 4 7.6 4 8.9c0 4.8 2.9 5.9 5.7 6.2-.4.4-.7.9-.8 1.8V21" />
    </svg>
  )
}

function ProjectVisual({ id }: { id: string }) {
  if (id === "serpapi") {
    return (
      <div className="visual visual-serpapi" aria-hidden="true">
        <div className="serpapi-orbit serpapi-orbit-one" />
        <div className="serpapi-orbit serpapi-orbit-two" />
        <div className="context-console">
          <div className="context-console-top">
            <span>Arabic Search Context</span>
            <i>API</i>
          </div>
          <div className="context-query">أفضل أدوات الذكاء الاصطناعي للمبرمجين</div>
          <div className="context-cities">
            <span>Baghdad <b>IQ</b></span>
            <span>Riyadh <b>SA</b></span>
            <span>Cairo <b>EG</b></span>
            <span>Casablanca <b>MA</b></span>
          </div>
          <div className="context-code">
            <span><em>location</em> city origin</span>
            <span><em>gl</em> country bias</span>
            <span><em>hl</em> interface locale</span>
          </div>
        </div>
        <div className="context-chip context-chip-one">ar-iq</div>
        <div className="context-chip context-chip-two">async + archive</div>
      </div>
    )
  }

  if (id === "seen") {
    return (
      <div className="visual visual-seen" aria-hidden="true">
        <div className="seen-halo seen-halo-one" />
        <div className="seen-halo seen-halo-two" />
        <div className="seen-phone">
          <div className="seen-top">
            <span>Seen It</span>
            <i />
          </div>
          <div className="movie-card movie-card-back" />
          <div className="movie-card movie-card-main">
            <div className="movie-art">
              <span className="movie-moon" />
              <span className="movie-horizon" />
            </div>
            <div className="movie-meta">
              <strong>Tonight?</strong>
              <span>Find your next watch</span>
            </div>
          </div>
          <div className="seen-actions">
            <span>×</span>
            <span className="seen-action-main">♥</span>
            <span>↟</span>
          </div>
        </div>
        <div className="seen-chip chip-left">Not for me</div>
        <div className="seen-chip chip-right">Love it</div>
      </div>
    )
  }

  if (id === "blog") {
    return (
      <div className="visual visual-blog" aria-hidden="true">
        <div className="blog-orbit blog-orbit-one" />
        <div className="blog-orbit blog-orbit-two" />
        <div className="blog-sheet">
          <div className="blog-nav">
            <strong>Yousef's Blog</strong>
            <span>•••</span>
          </div>
          <div className="blog-photo">
            <span />
          </div>
          <div className="blog-copy">
            <i />
            <i />
            <i className="short" />
          </div>
          <div className="blog-footer">
            <span>Read</span>
            <span>↗</span>
          </div>
        </div>
        <div className="blog-note">personal notes ✦</div>
      </div>
    )
  }

  return (
    <div className="visual visual-market" aria-hidden="true">
      <div className="market-dot market-dot-one" />
      <div className="market-dot market-dot-two" />
      <div className="market-panel">
        <div className="market-label">
          <span>IQD / USD</span>
          <i>LIVE</i>
        </div>
        <strong>148,250</strong>
        <span className="market-unit">IQD per $100</span>
        <svg className="market-chart" viewBox="0 0 320 96" preserveAspectRatio="none">
          <path className="chart-fill" d="M0 77 C28 74 40 49 66 55 C94 62 107 31 134 39 C162 48 183 19 210 28 C239 38 254 16 280 23 C296 26 307 16 320 11 L320 96 L0 96 Z" />
          <path className="chart-line" d="M0 77 C28 74 40 49 66 55 C94 62 107 31 134 39 C162 48 183 19 210 28 C239 38 254 16 280 23 C296 26 307 16 320 11" />
        </svg>
        <div className="market-tabs">
          <span>1D</span>
          <span>1M</span>
          <span>6M</span>
          <span className="active">1Y</span>
        </div>
      </div>
      <div className="market-mini">
        <span>1 USD</span>
        <strong>≈ 1,482 IQD</strong>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="name" href="#work">Yousef Ali</a>
        <nav aria-label="Contact links">
          <a href="mailto:yousef.ali.iq@outlook.com">Email <Arrow /></a>
          <a href="https://github.com/yousef-iq1" target="_blank" rel="noreferrer">
            GitHub <Arrow />
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">I build bilingual, API-driven products and make complex product behavior easier to understand.</h1>
          <p>Selected work across search, data, media, and publishing.</p>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <span className="hero-card hero-card-one" />
          <span className="hero-card hero-card-two" />
          <span className="hero-card hero-card-three">
            <i>&lt;/&gt;</i>
          </span>
        </div>
      </section>

      <section className="work" id="work" aria-label="Selected projects">
        {projects.map((project, index) => (
          <article key={project.title} className={`project project-${project.id}`}>
            <div className="project-stage">
              <div className="project-stage-label">
                <span>0{index + 1}</span>
                <span>{project.kind}</span>
              </div>
              <ProjectVisual id={project.id} />
            </div>

            <div className="project-info">
              <div className="project-copy">
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="tech-list" aria-label={`Technologies used for ${project.title}`}>
                  {project.tech.map((item) => (
                    <span className="tech-tag" key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                <a className="project-live" href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live Website <Arrow />
                </a>
                {project.proofUrl ? (
                  <a className="project-code" href={project.proofUrl} target="_blank" rel="noreferrer">
                    Proof Pack <Arrow />
                  </a>
                ) : null}
                {project.walkthroughUrl ? (
                  <a className="project-code project-watch" href={project.walkthroughUrl} target="_blank" rel="noreferrer">
                    Watch 1:29 <Arrow />
                  </a>
                ) : null}
                {project.sourceUrl ? (
                  <a className="project-code" href={project.sourceUrl} target="_blank" rel="noreferrer">
                    <GitHubMark /> Code on GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
