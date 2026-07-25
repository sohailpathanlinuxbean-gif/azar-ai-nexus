import {
  Brain,
  Cpu,
  Eye,
  Database,
  Server,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./about";

type Group = {
  icon: LucideIcon;
  title: string;
  color: "cyan" | "violet";
  items: string[];
};

const groups: Group[] = [
  {
    icon: Brain,
    title: "GenAI & LLMs",
    color: "cyan",
    items: ["OpenAI", "LangChain", "RAG", "Agentic AI", "MCP", "Prompt Engineering"],
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    color: "violet",
    items: ["Reinforcement Learning", "CNN", "Scikit-learn", "TensorFlow", "PyTorch"],
  },
  {
    icon: Eye,
    title: "Computer Vision",
    color: "cyan",
    items: ["OpenCV", "Image Classification", "Object Detection"],
  },
  {
    icon: Database,
    title: "Vector Databases",
    color: "violet",
    items: ["Pinecone", "ChromaDB", "Weaviate"],
  },
  {
    icon: Server,
    title: "Backend & Deployment",
    color: "cyan",
    items: ["Python", "FastAPI", "Django", "Streamlit", "Docker", "AWS"],
  },
  {
    icon: Workflow,
    title: "Automation",
    color: "violet",
    items: ["n8n", "Make.com", "Web Scraping"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A full-stack AI toolkit."
          subtitle="From foundation models and agents to vector search and deployment — the layers I actually ship in production."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => {
            const Icon = g.icon;
            const accent = g.color === "cyan" ? "text-cyan" : "text-violet";
            const glow =
              g.color === "cyan"
                ? "group-hover:shadow-[0_0_40px_oklch(0.82_0.18_210/0.35)]"
                : "group-hover:shadow-[0_0_40px_oklch(0.65_0.25_300/0.35)]";
            return (
              <div
                key={g.title}
                className="group glass-card glass-card-hover p-6 relative overflow-hidden"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{
                    background:
                      g.color === "cyan"
                        ? "radial-gradient(circle, oklch(0.82 0.18 210), transparent 70%)"
                        : "radial-gradient(circle, oklch(0.65 0.25 300), transparent 70%)",
                  }}
                />
                <div className="relative">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl glass ${accent} ${glow} transition-all`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold">{g.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-cyan/40 hover:text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
