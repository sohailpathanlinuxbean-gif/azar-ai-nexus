import { Quote } from "lucide-react";
import { SectionHeading } from "./about";

const testimonials = [
  {
    quote:
      "Aazar was very professional and quick to understand the problem. He delivered ahead of time with perfection. I will highly recommend Aazar for RL/ML/Stochastic Processes-related jobs. He has sound theoretical understanding and great coding skills.",
    name: "Client Review",
    role: "RL / ML / Stochastic Processes Project",
  },
  {
    quote:
      "Aazar is a genuine and hard worker. He worked on a Python project for our client. Definitely recommend. Wishing him all the best for future assignments.",
    name: "Client Review",
    role: "Python Development Project",
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

        <div className="mt-14 grid gap-6 md:grid-cols-2">
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
      </div>
    </section>
  );
}

