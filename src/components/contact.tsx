import { useState } from "react";
import { Github, Linkedin, Mail, Send, Briefcase } from "lucide-react";
import { SectionHeading } from "./about";

export function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");
    // PLACEHOLDER: wire up to your backend / email service
    setTimeout(() => setState("sent"), 900);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something intelligent."
          subtitle="Open for freelance projects, consulting, and long-term collaborations. Drop a message — I usually reply within a day."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2 space-y-6">
            <div className="glass-card p-6">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan">
                Currently
              </div>
              <p className="mt-2 text-lg font-semibold">
                Open for freelance projects — let's build something intelligent together.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { icon: Mail, label: "azar@example.com", href: "mailto:azar@example.com" },
                { icon: Linkedin, label: "linkedin.com/in/azar", href: "#" },
                { icon: Github, label: "github.com/azar", href: "#" },
                { icon: Briefcase, label: "Upwork / Fiverr", href: "#" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
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

          <form
            onSubmit={onSubmit}
            className="md:col-span-3 glass-card p-6 sm:p-8 space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" />
            </div>
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project…"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-cyan/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan/20"
              />
            </div>
            <button
              type="submit"
              disabled={state !== "idle"}
              className="btn-primary-glow inline-flex items-center gap-2 disabled:opacity-70"
            >
              {state === "sent" ? "Message sent ✓" : state === "sending" ? "Sending…" : (
                <>Send message <Send size={16} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-cyan/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan/20"
      />
    </div>
  );
}
