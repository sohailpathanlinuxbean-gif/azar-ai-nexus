import { Quote } from "lucide-react";
import { SectionHeading } from "./about";

const testimonials = [
  {
    quote:
      "Azar delivered our RAG platform in weeks, not months. The evaluation pipeline he built saved us from shipping a broken assistant.",
    name: "Placeholder Client",
    role: "CTO, HealthTech Startup",
  },
  {
    quote:
      "One of the few AI engineers I've worked with who thinks in systems, not demos. Our agent went straight to production.",
    name: "Placeholder Client",
    role: "Founder, SaaS Agency",
  },
  {
    quote:
      "Rare combo of ML depth and shipping speed. Our vision pipeline runs on-device and just works.",
    name: "Placeholder Client",
    role: "Product Lead, Retail AI",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say."
          subtitle="A few kind words from teams I've built with."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="glass-card glass-card-hover p-6 flex flex-col">
              <Quote className="text-cyan" size={28} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 border-t border-white/10 pt-4">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-center text-xs italic text-muted-foreground/60">
          [Placeholder testimonials — replace with real client quotes.]
        </p>
      </div>
    </section>
  );
}
