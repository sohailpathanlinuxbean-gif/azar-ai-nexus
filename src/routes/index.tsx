import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";

import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Azar Shaikh — AI & ML Engineer | LLMs, RAG, Agentic AI, Computer Vision" },
      {
        name: "description",
        content:
          "Freelance AI/ML engineer building GenAI, LLM & RAG systems, agentic AI, reinforcement learning, and computer vision products end-to-end.",
      },
      { property: "og:title", content: "Azar Shaikh — AI & ML Engineer" },
      {
        property: "og:description",
        content:
          "Freelance AI/ML engineer specializing in LLMs, RAG, Agentic AI, RL, and Computer Vision.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-[#0a0e1a] text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
