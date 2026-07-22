"use client";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[7px]" />

        <div className="space-y-14">
          {experience.map((job, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="relative pl-10">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-background"
                />

                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {job.role} <span className="text-muted font-normal">· {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-accent-2 whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                <p className="mb-4 text-xs text-muted">{job.location}</p>

                <ul className="space-y-2.5">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
