"use client";

import { Section } from "@/components/ui/section";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal";
import { motion } from "framer-motion";
import { about, education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-14 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-5">
          {about.summary.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed text-muted sm:text-lg">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-border bg-surface/50 p-5">
              <GraduationCap size={20} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium text-foreground">{education.degree}</p>
                <p className="text-sm text-muted">
                  {education.school} · {education.gpa}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <RevealGroup className="lg:col-span-2 grid gap-4" stagger={0.12}>
          {about.highlights.map((h) => (
            <motion.div
              key={h.title}
              variants={revealItem}
              className="card-glow rounded-2xl border border-border bg-surface/60 p-6 transition-transform hover:-translate-y-1"
            >
              <h3 className="mb-2 text-sm font-semibold text-foreground">{h.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{h.description}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
