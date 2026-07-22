"use client";

import { Section } from "@/components/ui/section";
import { RevealGroup, revealItem } from "@/components/ui/reveal";
import { motion } from "framer-motion";
import { publications, honours } from "@/lib/data";
import { Award, FileText, Shield } from "lucide-react";

const pubIcon = {
  Patent: Shield,
  Journal: FileText,
};

export function Recognition() {
  return (
    <Section id="recognition" index="05" title="Patents & Recognition">
      <div className="grid gap-14 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 text-xs font-mono uppercase tracking-wider text-muted">
            Patents & Publications
          </h3>
          <RevealGroup className="space-y-4" stagger={0.08}>
            {publications.map((pub) => {
              const Icon = pubIcon[pub.type as keyof typeof pubIcon];
              return (
                <motion.div
                  key={pub.title}
                  variants={revealItem}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-surface/60 p-5"
                >
                  <div className="mt-0.5 rounded-lg bg-accent/10 p-2 text-accent">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{pub.title}</p>
                    <p className="mt-1 font-mono text-xs text-muted">{pub.meta}</p>
                  </div>
                </motion.div>
              );
            })}
          </RevealGroup>
        </div>

        <div>
          <h3 className="mb-6 text-xs font-mono uppercase tracking-wider text-muted">
            Honours & Awards
          </h3>
          <RevealGroup className="space-y-4" stagger={0.08}>
            {honours.map((h) => (
              <motion.div
                key={h.title}
                variants={revealItem}
                className="flex items-start gap-4 rounded-2xl border border-border bg-surface/60 p-5"
              >
                <div className="mt-0.5 rounded-lg bg-accent-2/10 p-2 text-accent-2">
                  <Award size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {h.title} <span className="font-normal text-muted">· {h.org}</span>
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{h.description}</p>
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </Section>
  );
}
