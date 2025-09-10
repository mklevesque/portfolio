import React, { useState } from "react";

/* =====================================================
   Multilingual Portfolio — FR / EN switch without mixups
   ===================================================== */

// ---- Static personal data (language-agnostic) ----
const PERSON = {
  name: "Michael LEVESQUE",
  title: {
    fr: "Data Engineer • BI Developer • Data Analyst",
    en: "Data Engineer • BI Developer • Data Analyst",
  },
  location: {
    fr: "Toulouse, France — Ouvert à la mobilité",
    en: "Toulouse, France — Open to mobility",
  },
  email: "mxchaellevesque@gmail.com",
  phone: "06 12 47 47 02",
  linkedin: "https://www.linkedin.com/in/mxchaellevesque/",
  photo: `${import.meta.env.BASE_URL}michael.jpg`,
  resumeFr: `${import.meta.env.BASE_URL}docs/FR - Data Analyst.pdf`,
  resumeEn: `${import.meta.env.BASE_URL}docs/EN - Data Analyst.pdf`,
};

// ---- All copy is strictly separated by language ----
const COPY = {
  fr: {
    nav: { home: "Accueil", projects: "Projets", experience: "Expériences", skills: "Compétences", education: "Formations", about: "À propos", contact: "Contact" },
    actions: { cvFr: "CV (FR)", cvEn: "CV (EN)", linkedin: "LinkedIn", email: "Email", download: "Télécharger le portfolio (PDF)" },
    hero: "Passionné par la data, je conçois des pipelines ETL & des solutions BI fiables, automatisées et orientées décision.",
    about:
      "Je transforme les données en leviers de performance. Formé en Data Engineering (RNCP 7) et passé par Orange (Datafactory), je travaille sur la fiabilité des sources, l’automatisation des flux et la lisibilité des KPI côté métier. J’aime comprendre un besoin, modéliser proprement, industrialiser (tests, CI/CD simple) et livrer un produit data utilisé.",
    contact:
      "Disponible rapidement • Toulouse/France/Europe • Data Engineer / BI Developer / Data Analyst. Parlons de vos besoins data — j’apporte des pipelines fiables, des KPI lisibles et des livrables utilisés.",
    sections: { projects: "Études de cas", keySkills: "Compétences clés", canDo: "Ce que je sais faire concrètement" },
  },
  en: {
    nav: { home: "Home", projects: "Projects", experience: "Experience", skills: "Skills", education: "Education", about: "About", contact: "Contact" },
    actions: { cvFr: "Resume (FR)", cvEn: "Resume (EN)", linkedin: "LinkedIn", email: "Email", download: "Download portfolio (PDF)" },
    hero: "Passionate about data, I design reliable ETL pipelines and BI solutions that are automated and decision‑oriented.",
    about:
      "I turn data into a performance lever. With a Data Engineering background (RNCP 7) and experience at Orange (Datafactory), I focus on data reliability, process automation, and KPI readability for business teams. I like to understand needs, model cleanly, industrialize (tests, simple CI/CD), and ship a data product that gets used.",
    contact:
      "Available soon • Toulouse/France/Europe • Data Engineer / BI Developer / Data Analyst. Let’s discuss your data needs — I deliver reliable pipelines, clear KPIs, and actionable deliverables.",
    sections: { projects: "Case Studies", keySkills: "Key Skills", canDo: "What I can do" },
  },
};

// ---- Localized skills ----
const SKILLS = {
  fr: {
    engineering: ["ETL", "Spark", "Kafka", "GCP", "BigQuery", "SQL Server", "PostgreSQL"],
    programming: ["Python (pandas, matplotlib)", "SQL", "NoSQL"],
    bi: ["Power BI", "DAX", "MDX", "Dash", "Excel"],
    methods: ["Modélisation", "Qualité des données", "Tests", "Déploiement"],
    languages: ["Français (natif)", "Anglais (B2 — pro)", "Allemand (B1)"],
  },
  en: {
    engineering: ["ETL", "Spark", "Kafka", "GCP", "BigQuery", "SQL Server", "PostgreSQL"],
    programming: ["Python (pandas, matplotlib)", "SQL", "NoSQL"],
    bi: ["Power BI", "DAX", "MDX", "Dash", "Excel"],
    methods: ["Data modeling", "Data quality", "Testing", "Deployment"],
    languages: ["French (native)", "English (B2 — professional)", "German (B1)"],
  },
};

// ---- Localized experiences ----
const EXPERIENCES = {
  fr: [
    {
      role: "Data Analyst / Data Engineer (Alternance)",
      company: "Orange UCI PRM — Datafactory (Performance Expérience Client)",
      location: "Marseille, France",
      dates: "Oct. 2022 – Oct. 2024",
      bullets: [
        "Conçu & automatisé un pipeline décisionnel Power BI (cubes, GCP, SQL Server) fournissant des KPI fiables en temps réel.",
        "Migré plusieurs rapports Qlik vers Power BI, supprimant les traitements manuels.",
        "Développé 10+ dashboards Power BI pour le suivi de performance.",
        "Implémenté un scoring zones pour prioriser les actions sur les secteurs clés.",
        "Collaboration transverse avec les équipes Data/IT à l’échelle nationale.",
      ],
    },
    {
      role: "Data Analyst (Stage)",
      company: "Orange CI",
      location: "Abidjan, Côte d’Ivoire",
      dates: "Mai 2022 – Sept. 2022",
      bullets: [
        "Extractions quotidiennes (SQL) et traitements Python/pandas pour alimenter les analyses.",
        "Dashboards Power BI stratégiques améliorant la visibilité des projets.",
        "Application Python/Dash avec vues analytiques & cartes pour suivre les zones Orange.",
      ],
    },
    {
      role: "Développeur Web & BDD (Stage)",
      company: "Occiweb Radio",
      location: "Toulouse, France",
      dates: "Juin 2021 – Août 2021",
      bullets: [
        "Refonte complète du site (responsive, UX améliorée).",
        "Restructuration base de données pour des performances accrues.",
      ],
    },
  ],
  en: [
    {
      role: "Data Analyst / Data Engineer (Apprenticeship)",
      company: "Orange UCI PRM — Datafactory (Customer Experience Performance)",
      location: "Marseille, France",
      dates: "Oct. 2022 – Oct. 2024",
      bullets: [
        "Designed & automated a Power BI data pipeline (cubes, GCP, SQL Server) delivering reliable real‑time KPIs.",
        "Migrated several Qlik reports to Power BI, removing manual steps.",
        "Built 10+ Power BI dashboards for performance tracking.",
        "Implemented a zone scoring system to prioritize key areas.",
        "Worked cross‑functionally with Data/IT teams nationwide.",
      ],
    },
    {
      role: "Data Analyst (Internship)",
      company: "Orange CI",
      location: "Abidjan, Côte d’Ivoire",
      dates: "May 2022 – Sept. 2022",
      bullets: [
        "Daily SQL extractions with Python/pandas processing for analytics.",
        "Strategic Power BI dashboards improving project visibility.",
        "Python/Dash app with analytical and map views to track Orange coverage zones.",
      ],
    },
    {
      role: "Web & Database Developer (Internship)",
      company: "Occiweb Radio",
      location: "Toulouse, France",
      dates: "Jun. 2021 – Aug. 2021",
      bullets: [
        "Full website redesign (responsive, improved UX).",
        "Database restructuring for better performance and reliability.",
      ],
    },
  ],
};

// ---- Localized projects (case studies, no numbers/images yet) ----
const PROJECTS = {
  fr: [
    {
      name: "Executive KPI Pipeline",
      year: "2024",
      stack: ["Power BI", "GCP", "SQL Server", "Data Gateway"],
      desc: "Reporting exécutif manuel → pipeline automatisé et sécurisé. Rafraîchissements planifiés, validation des sources.",
      impact: ["Accès aux KPI en temps réel", "Processus de reporting fiabilisé", "Adoption par les équipes métier"],
      link: "#",
    },
    {
      name: "Migration Qlik → Power BI",
      year: "2023",
      stack: ["Power BI", "DAX", "SQL"],
      desc: "Refonte de rapports, DAX propre, gouvernance des datasets, rafraîchissements automatisés.",
      impact: ["Suppression des manipulations manuelles", "Amélioration de la fiabilité des indicateurs", "Maintenance simplifiée"],
      link: "#",
    },
    {
      name: "Geo Analytics Dashboard",
      year: "2022",
      stack: ["Python", "Dash", "pandas", "Leaflet"],
      desc: "SQL + pandas quotidiens, vues cartographiques pour suivre et prioriser les zones.",
      impact: ["Meilleure visibilité terrain", "Priorisation plus rapide des actions"],
      link: "#",
    },
  ],
  en: [
    {
      name: "Executive KPI Pipeline",
      year: "2024",
      stack: ["Power BI", "GCP", "SQL Server", "Data Gateway"],
      desc: "Manual executive reporting → automated and secure pipeline. Scheduled refresh, source validation.",
      impact: ["Real‑time KPI access", "More reliable reporting process", "Adopted by business teams"],
      link: "#",
    },
    {
      name: "Qlik → Power BI Migration",
      year: "2023",
      stack: ["Power BI", "DAX", "SQL"],
      desc: "Report redesign, clean DAX, dataset governance, automated refreshes.",
      impact: ["No more manual manipulation", "Improved indicator reliability", "Simplified maintenance"],
      link: "#",
    },
    {
      name: "Geo Analytics Dashboard",
      year: "2022",
      stack: ["Python", "Dash", "pandas", "Leaflet"],
      desc: "Daily SQL + pandas, map views to monitor and prioritize zones.",
      impact: ["Better field visibility", "Faster prioritization"],
      link: "#",
    },
  ],
};

// ---- Localized education ----
const EDUCATION = {
  fr: [
    { title: "Master Data Engineering (RNCP niveau 7)", org: "YNOV, Aix-en-Provence", dates: "2022 – 2024", tags: ["Spark", "Kafka", "ETL", "Power BI", "Dash", "Machine Learning"] },
    { title: "Titre RNCP 35078 – Expert en Informatique & Systèmes d’Information (niveau 7)", org: "Certification professionnelle reconnue par l’État", dates: "2024", tags: [] },
    { title: "Bachelor Data & IA", org: "YNOV, Toulouse", dates: "2019 – 2022", tags: ["Python", "SQL", "Analyse de données", "Modélisation", "IA"] },
    { title: "EPITECH – 1ere année de cycle Informatique", org: "Toulouse", dates: "2018 – 2019", tags: ["C", "Algorithmique", "Bases IT"] },
  ],
  en: [
    { title: "Master’s Degree in Data Engineering (RNCP Level 7)", org: "YNOV, Aix-en-Provence", dates: "2022 – 2024", tags: ["Spark", "Kafka", "ETL", "Power BI", "Dash", "Machine Learning"] },
    { title: "RNCP Title 35078 – Expert in Computer Science & Information Systems (Level 7)", org: "State‑recognized professional certification", dates: "2024", tags: [] },
    { title: "Bachelor’s Degree in Data & AI", org: "YNOV, Toulouse", dates: "2019 – 2022", tags: ["Python", "SQL", "Data Analysis", "Modeling", "AI"] },
    { title: "EPITECH – 1st Year of Computer Science Program", org: "Toulouse", dates: "2018 – 2019", tags: ["C", "Algorithms", "IT basics"] },
  ],
};

/* ===================== UI helpers ===================== */
const Container = ({ children }) => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="py-12 sm:py-16">
    <Container>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">{title}</h2>
      {children}
    </Container>
  </section>
);

const Card = ({ children }) => (
  <div className="rounded-2xl border p-6 bg-white/70 shadow-sm hover:shadow transition dark:bg-white/5">{children}</div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm mb-2 mr-2">{children}</span>
);

/* ===================== Page ===================== */
export default function Portfolio() {
  const [lang, setLang] = useState("fr"); // 'fr' or 'en'
  const t = COPY[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 dark:from-slate-950 dark:to-slate-900 dark:text-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-slate-900/60 border-b">
        <Container>
          <nav className="flex items-center justify-between h-14">
            <a href="#home" className="font-semibold">{PERSON.name}</a>
            <div className="hidden sm:flex gap-6 text-sm">
              <a href="#projects" className="hover:underline">{t.nav.projects}</a>
              <a href="#experience" className="hover:underline">{t.nav.experience}</a>
              <a href="#skills" className="hover:underline">{t.nav.skills}</a>
              <a href="#education" className="hover:underline">{t.nav.education}</a>
              <a href="#contact" className="hover:underline">{t.nav.contact}</a>
            </div>
            <button onClick={() => setLang(lang === "fr" ? "en" : "fr")} className="text-xs border px-3 py-1 rounded-xl hover:shadow-sm">
              {lang === "fr" ? "EN" : "FR"}
            </button>
          </nav>
        </Container>
      </header>

      {/* Hero */}
        <section id="home" className="pt-10 sm:pt-14 pb-8">
        <Container>
            <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Colonne gauche : photo */}
            <div className="md:col-span-1 flex justify-center">
                <div className="relative">
                <img
                    src={PERSON.photo}
                    alt={PERSON.name}
                    className="w-48 h-48 rounded-full object-cover border-4 border-slate-200 shadow-xl dark:border-slate-700"
                />
                </div>
            </div>

            {/* Colonne droite : texte + boutons */}
            <div className="md:col-span-2">
                <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                {PERSON.title[lang]}
                </h1>
                <p className="mt-3 text-slate-600 dark:text-slate-300">
                {COPY[lang].hero}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                    href={PERSON.resumeFr}
                    className="rounded-xl border px-4 py-2 text-sm hover:shadow-sm"
                    download
                >
                    {COPY[lang].actions.cvFr}
                </a>
                <a
                    href={PERSON.resumeEn}
                    className="rounded-xl border px-4 py-2 text-sm hover:shadow-sm"
                    download
                >
                    {COPY[lang].actions.cvEn}
                </a>
                <a
                    href={PERSON.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border px-4 py-2 text-sm hover:shadow-sm"
                >
                    {COPY[lang].actions.linkedin}
                </a>
                </div>

                <div className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                <p>{PERSON.location[lang]}</p>
                <p>{PERSON.email} · {PERSON.phone}</p><br />
                </div>

                <Card className="mt-6">
                <h3 className="font-semibold mb-2">
                    {COPY[lang].sections.keySkills}
                </h3>
                <div className="flex flex-wrap">
                    {SKILLS[lang].engineering.slice(0, 6).map((s) => (
                    <Pill key={s}>{s}</Pill>
                    ))}
                </div>
                </Card>
            </div>
            </div>
        </Container>
        </section>


      {/* About */}
      <Section id="about" title={COPY[lang].nav.about}>
        <Card>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{COPY[lang].about}</p>
        </Card>
      </Section>

      {/* Projects / Case Studies */}
      <Section id="projects" title={COPY[lang].sections.projects}>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS[lang].map((p) => (
            <Card key={p.name + lang}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <span className="text-sm opacity-70">{p.year}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
              {p.impact && p.impact.length > 0 && (
                <ul className="mt-3 list-disc pl-5 text-sm">
                  {p.impact.map((it) => <li key={it}>{it}</li>)}
                </ul>
              )}
              <div className="mt-3 flex flex-wrap">
                {p.stack.map((tkn) => <Pill key={tkn}>{tkn}</Pill>)}
              </div>
              {p.link && p.link !== "#" && (
                <a href={p.link} className="mt-4 inline-block text-sm underline">{lang === "fr" ? "Voir le projet" : "View project"}</a>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title={COPY[lang].nav.experience}>
        <div className="space-y-6">
          {EXPERIENCES[lang].map((exp) => (
            <Card key={exp.role + exp.company}>
              <div className="md:flex md:items-baseline md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-sm opacity-80">{exp.company}</p>
                </div>
                <div className="text-sm opacity-80">{exp.location} • {exp.dates}</div>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title={COPY[lang].nav.skills}>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-semibold mb-2">{lang === "fr" ? "Data Engineering & ETL" : "Data Engineering & ETL"}</h3>
            <div className="flex flex-wrap">{SKILLS[lang].engineering.map((s) => <Pill key={s}>{s}</Pill>)}</div>
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">{lang === "fr" ? "BI & Visualisation" : "BI & Visualization"}</h3>
            <div className="flex flex-wrap">{SKILLS[lang].bi.map((s) => <Pill key={s}>{s}</Pill>)}</div>
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">{lang === "fr" ? "Programmation" : "Programming"}</h3>
            <div className="flex flex-wrap">{SKILLS[lang].programming.map((s) => <Pill key={s}>{s}</Pill>)}</div>
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">{lang === "fr" ? "Méthodologie & Langues" : "Methods & Languages"}</h3>
            <div className="flex flex-wrap mb-2">{SKILLS[lang].methods.map((s) => <Pill key={s}>{s}</Pill>)}</div>
            <div className="flex flex-wrap">{SKILLS[lang].languages.map((s) => <Pill key={s}>{s}</Pill>)}</div>
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">{COPY[lang].sections.canDo}</h3>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {lang === "fr" ? (
                <>
                  <li>Concevoir des <strong>pipelines ETL</strong> (ingestion, modélisation, refresh, monitoring).</li>
                  <li>Modéliser des <strong>datasets BI</strong> (étoile, DAX propre, mesures KPI).</li>
                  <li>Mettre en place des <strong>rafraîchissements automatisés</strong> et des <strong>règles de sécurité</strong>.</li>
                  <li>Construire des <strong>dashboards décisionnels</strong> adoptés par les métiers.</li>
                </>
              ) : (
                <>
                  <li>Design <strong>ETL pipelines</strong> (ingestion, modeling, refresh, monitoring).</li>
                  <li>Model clean <strong>BI datasets</strong> (star schema, robust DAX, KPI measures).</li>
                  <li>Set up <strong>automated refresh</strong> and <strong>security rules</strong>.</li>
                  <li>Build <strong>decision‑making dashboards</strong> adopted by business teams.</li>
                </>
              )}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title={COPY[lang].nav.education}>
        <div className="space-y-4">
          {EDUCATION[lang].map((e) => (
            <Card key={e.title}>
              <div className="md:flex md:items-baseline md:justify-between">
                <div>
                  <h3 className="font-semibold">{e.title}</h3>
                  <p className="text-sm opacity-80">{e.org}</p>
                </div>
                <div className="text-sm opacity-80">{e.dates}</div>
              </div>
              {e.tags?.length > 0 && (
                <div className="mt-2 flex flex-wrap">{e.tags.map((t) => <Pill key={t}>{t}</Pill>)}</div>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title={COPY[lang].nav.contact}>
        <Card>
          <p className="text-slate-600 dark:text-slate-300 text-sm">{COPY[lang].contact}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a href={`mailto:${PERSON.email}`} className="rounded-xl border px-4 py-2 text-sm hover:shadow-sm">{t.actions.email}</a>
            <a href={PERSON.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border px-4 py-2 text-sm hover:shadow-sm">{t.actions.linkedin}</a>
          </div>
        </Card>
      </Section>

      <footer className="pb-10">
        <Container>
          <p className="text-xs opacity-70">© {new Date().getFullYear()} {PERSON.name}. Built with React & Tailwind.</p>
        </Container>
      </footer>
    </div>
  );
}
