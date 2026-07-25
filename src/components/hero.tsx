import { ArrowRight, Mail } from "lucide-react";
import { NeuralBackground } from "./neural-background";
import { Typewriter } from "./typewriter";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <NeuralBackground />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            Available for freelance projects
          </div>

          <h1
            className="mt-8 font-display text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Azar <span className="text-gradient">Shaikh</span>
          </h1>

          <div
            className="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            <span className="text-muted-foreground">AI & ML Engineer </span>
            <br className="sm:hidden" />
            <span className="inline-block min-h-[1.2em]">
              — <Typewriter
                words={[
                  "GenAI Solutions",
                  "LLM & RAG Systems",
                  "Reinforcement Learning",
                  "Computer Vision",
                ]}
              />
            </span>
          </div>

          <p
            className="mx-auto mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            I design and ship intelligent systems end-to-end — from GenAI and agentic pipelines
            to production ML — helping teams turn ideas into real, working AI.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            <a href="#projects" className="btn-primary-glow inline-flex items-center gap-2">
              View Work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost-glow inline-flex items-center gap-2">
              <Mail size={16} /> Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0a0e1a]" />
    </section>
  );
}
