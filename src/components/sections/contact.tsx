"use client";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" index="06" title="Get In Touch">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/60 px-8 py-16 text-center sm:px-16">
          <motion.div
            className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/25 blur-[100px]"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative">
            <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s build something <span className="text-gradient">intelligent.</span>
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Open to AI engineering opportunities, collaborations, and international
              relocation.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_-8px_var(--accent)] transition-transform hover:scale-105"
              >
                <Mail size={16} />
                {profile.email}
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Download size={16} />
                Resume
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
              >
                <Github size={16} /> GitHub <ArrowUpRight size={12} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
              >
                <Linkedin size={16} /> LinkedIn <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
