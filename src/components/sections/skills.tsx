"use client";

import { Section } from "@/components/ui/section";
import { RevealGroup, revealItem } from "@/components/ui/reveal";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills" index="04" title="Skills & Tools">
      <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {skills.map((group) => (
          <motion.div
            key={group.category}
            variants={revealItem}
            className="rounded-2xl border border-border bg-surface/60 p-6"
          >
            <h3 className="mb-4 text-sm font-semibold text-accent-2">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent hover:text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </RevealGroup>
    </Section>
  );
}
