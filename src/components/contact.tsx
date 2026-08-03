import { Github, Linkedin, Mail, Briefcase } from "lucide-react";
import { SectionHeading } from "./about";

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something intelligent."
          subtitle="Open for freelance projects, consulting, and long-term collaborations. Reach out — I usually reply within a day."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <div className="glass-card p-6">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan">
              Currently
            </div>
            <p className="mt-2 text-lg font-semibold">
              Open for freelance projects — let's build something intelligent together.
            </p>
          </div>

          <div className="md:col-span-2 space-y-3">
            {[
              { icon: Mail, label: "aazarshaikh77@gmail.com", href: "mailto:aazarshaikh77@gmail.com" },
              { icon: Linkedin, label: "linkedin.com/in/aazar-shaikh", href: "https://www.linkedin.com/in/aazar-shaikh" },
              // { icon: Github, label: "github.com/aazar", href: "#" },
              // { icon: Briefcase, label: "Upwork / Fiverr", href: "#" },
            ].map((s) => {
              const Icon = s.icon;
              const isExternal = s.href.startsWith("http");
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 glass-card glass-card-hover px-4 py-3"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-cyan transition-colors group-hover:bg-cyan/10">
                    <Icon size={16} />
                  </span>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {s.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

