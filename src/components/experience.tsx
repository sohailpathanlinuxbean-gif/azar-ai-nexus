import { SectionHeading } from "./about";

// PLACEHOLDER experience
const timeline = [
  {
    period: "2024 — Present",
    role: "Freelance AI/ML Engineer",
    org: "Independent",
    desc: "Building GenAI, RAG, and agentic systems for startups and enterprises across healthcare, retail, and SaaS.",
  },
  {
    period: "2023 — 2024",
    role: "Senior ML Engineer",
    org: "Confidential Client",
    desc: "Led development of a multi-agent LLM platform with vector search, tool use, and evaluation pipelines.",
  },
  {
    period: "2022 — 2023",
    role: "Computer Vision Engineer",
    org: "Health-tech Startup",
    desc: "Shipped on-device object detection models for clinical workflow automation.",
  },
  {
    period: "2020 — 2022",
    role: "ML Engineer",
    org: "AI Consultancy",
    desc: "Delivered end-to-end ML products — recommender systems, RL agents, and forecasting models.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="A timeline of building."
          subtitle="Milestones from consultancy work, in-house roles, and independent projects."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyan/60 via-violet/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <ul className="space-y-10">
            {timeline.map((t, i) => (
              <li
                key={t.period}
                className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                }`}
              >
                <span className="absolute left-4 top-2 z-10 flex h-3 w-3 -translate-x-1/2 md:left-1/2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan/60 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan shadow-[0_0_16px_oklch(0.82_0.18_210)]" />
                </span>

                <div
                  className={`glass-card glass-card-hover ml-10 md:ml-0 p-6 ${
                    i % 2 === 0 ? "md:mr-8 md:text-right" : "md:ml-8"
                  }`}
                >
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan">
                    {t.period}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold">{t.role}</h3>
                  <div className="text-sm text-muted-foreground">{t.org}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
