import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <div ref={ref} className="font-display text-4xl sm:text-5xl font-bold text-gradient">
      {val}
      {suffix}
    </div>
  );
}

export function About() {
  const stats = [
    { label: "Years experience", to: 5, suffix: "+" },
    { label: "Projects delivered", to: 40, suffix: "+" },
    { label: "Technologies mastered", to: 25, suffix: "+" },
    { label: "Happy clients", to: 20, suffix: "+" },
  ];

  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="About" title="Engineering intelligence, end to end." />

        <div className="mt-14 grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a freelance <span className="text-foreground font-medium">AI/ML engineer</span>{" "}
              helping startups, agencies, and enterprises turn ambitious ideas into production
              AI systems. My focus is the full stack of modern AI — from LLM & RAG architectures
              and agentic workflows to computer vision and reinforcement learning.
            </p>
            <p>
              I care about shipping. That means clean pipelines, evaluated models, thoughtful
              prompts, and infrastructure that scales — not demos. Whether you need a chatbot
              that actually understands your docs or a vision system that runs on-device, I
              build it end to end.
            </p>
            {/* PLACEHOLDER: Replace with your real bio */}
            <p className="text-sm italic text-muted-foreground/70">
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="glass-card glass-card-hover p-6 text-center">
                <Counter to={s.to} suffix={s.suffix} />
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan">
        <span className="h-px w-8 bg-cyan/60" />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
