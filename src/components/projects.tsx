import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./about";

type Project = {
  title: string;
  description: string;
  category: string;
  tech: string[];
};

const projects: Project[] = [
  {
    title: "Global Trade Data Analytics Platform",
    description:
      "Enterprise analytics platform that turns natural-language business questions into OpenSearch queries over millions of trade records, returning KPIs, time-series, pivot reports, and dashboard-ready visualizations.",
    category: "GenAI · Analytics",
    tech: ["Python", "FastAPI", "OpenSearch", "MSSQL", "LLMs", "Docker", "Azure"],
  },
  {
    title: "CS Reporting Application — ERP Platform",
    description:
      "Large-scale full-stack reporting dashboard for an ERP ecosystem. Built scalable microservices, REST APIs, and optimized backend logic for report generation, aggregation, and dashboard visualizations over enterprise datasets.",
    category: "Backend · Microservices",
    tech: ["Python", "Django", "DRF", "FastAPI", "SQL", "Docker", "Azure"],
  },
  {
    title: "AI & Deep Learning — Subject Matter Expert",
    description:
      "Mentored learners on Deep Learning and Transformer architectures — CNNs, RNNs, LSTMs, attention, self-attention, encoder-decoder — and guided practical NLP and Computer Vision projects in PyTorch.",
    category: "AI Mentoring · Deep Learning",
    tech: ["PyTorch", "Transformers", "LLMs", "NLP", "Computer Vision"],
  },
  {
    title: "Delivery Route Optimization with RL",
    description:
      "Modeled delivery operations as Markov Decision Processes and built simulation environments to solve route planning via Value Iteration and Q-Value Iteration, comparing policy effectiveness and convergence.",
    category: "Reinforcement Learning",
    tech: ["Python", "RL", "MDP", "Value Iteration", "Simulation"],
  },
  {
    title: "Queue Admission Control with RL",
    description:
      "Solved a queue admission control problem using discrete and continuous MDPs, dynamic programming, and function approximation with deep neural networks — implementing Policy Iteration, Value Iteration, Q-Learning, and SARSA.",
    category: "Reinforcement Learning",
    tech: ["Python", "PyTorch", "MDP", "Q-Learning", "SARSA", "DNN"],
  },
  {
    title: "Maximum Likelihood Estimation Optimization",
    description:
      "Optimized computationally intensive MLE algorithms for massive datasets with custom low-level PyTorch ops and C-Python extensions, delivering CPU- and GPU-optimized implementations with major throughput gains.",
    category: "HPC · Numerical Optimization",
    tech: ["Python", "PyTorch", "C Extensions", "CUDA", "HPC"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects & case studies."
          subtitle="A snapshot of AI and backend systems I've built — spanning GenAI analytics, RL, deep learning, and enterprise microservices."
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
      </div>
    </section>
  );
}
