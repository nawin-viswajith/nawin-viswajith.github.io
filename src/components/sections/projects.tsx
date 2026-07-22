"use client";

import { Section } from "@/components/ui/section";
import { RevealGroup, revealItem } from "@/components/ui/reveal";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ArrowUpRight, Github, Globe } from "lucide-react";

const linkIcon = {
  website: Globe,
  github: Github,
};

export function Projects() {
  return (
    <Section id="projects" index="03" title="Selected Projects">
      <RevealGroup className="grid gap-6 md:grid-cols-2" stagger={0.12}>
        {projects.map((p) => (
          <motion.div
            key={p.name}
            variants={revealItem}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`card-glow group relative flex flex-col rounded-2xl border border-border bg-surface/60 p-7 ${
              p.featured ? "md:col-span-1" : ""
            }`}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{p.name}</h3>
                <p className="mt-0.5 font-mono text-xs text-accent-2">{p.subtitle}</p>
                {p.metric && (
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {p.metric}
                  </span>
                )}
              </div>
              {p.links.length > 0 && (
                <div className="flex shrink-0 gap-2">
                  {p.links.map((link) => {
                    const Icon = linkIcon[link.type as keyof typeof linkIcon] ?? ArrowUpRight;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        title={link.label}
                        className="rounded-full border border-border p-2 text-muted transition-colors hover:border-accent hover:text-accent"
                        aria-label={link.label}
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <p className="mb-6 text-sm leading-relaxed text-muted">{p.description}</p>

            <div className="mt-auto flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-background/40 px-3 py-1 font-mono text-[11px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </RevealGroup>
    </Section>
  );
}
