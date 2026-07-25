import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./about";

type Project = {
  title: string;
  description: string;
  category: string;
  tech: string[];
};

// PLACEHOLDER projects — replace with your real projects
const projects: Project[] = [
  {
    title: "MediRAG — Clinical Q&A Assistant",
    description:
      "RAG-powered assistant for clinicians to query medical literature with cited answers, hybrid search, and guardrails.",
    category: "RAG Systems",
    tech: ["LangChain", "Pinecone", "OpenAI", "FastAPI"],
  },
  {
    title: "AgentDesk — Autonomous Support Agent",
    description:
      "Multi-tool agentic system that triages tickets, queries internal APIs, and drafts responses with human-in-the-loop.",
    category: "AI Chatbots",
    tech: ["Agentic AI", "MCP", "LangGraph", "Postgres"],
  },
  {
    title: "VisionCount — Retail Analytics",
    description:
      "Real-time object detection pipeline for footfall & shelf analytics, running on-device with edge inference.",
    category: "Computer Vision Apps",
    tech: ["YOLOv8", "OpenCV", "PyTorch", "Docker"],
  },
  {
    title: "PatientFlow Automator",
    description:
      "Automated intake & scheduling workflow for a healthcare provider, cutting admin time by 60%.",
    category: "Health Sector Automation",
    tech: ["n8n", "FastAPI", "OpenAI", "Twilio"],
  },
  {
    title: "ChurnRL — RL Retention Engine",
    description:
      "Reinforcement learning agent optimizing next-best-action for subscription retention across cohorts.",
    category: "ML Models",
    tech: ["PyTorch", "Ray RLlib", "AWS", "MLflow"],
  },
  {
    title: "DocuMind — Enterprise Knowledge",
    description:
      "Private ChatGPT over 100k internal docs with role-based access, source citations, and Slack integration.",
    category: "RAG Systems",
    tech: ["ChromaDB", "LangChain", "Django", "React"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects & case studies."
          subtitle="A snapshot of AI systems I've built for clients across chatbots, RAG, computer vision, and healthcare automation."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href="#contact"
              className="group glass-card glass-card-hover relative flex flex-col p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan">
                  {p.category}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan"
                />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-5 text-xs font-medium text-cyan opacity-0 transition-opacity group-hover:opacity-100">
                View Details →
              </span>
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-xs italic text-muted-foreground/60">
          [Placeholder projects — replace with your real work.]
        </p>
      </div>
    </section>
  );
}
