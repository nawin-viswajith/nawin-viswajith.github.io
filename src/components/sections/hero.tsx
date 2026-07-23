"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { profile, stats } from "@/lib/data";
import { AnimatedNumber } from "@/components/ui/animated-number";

const words = ["Agentic AI", "Enterprise RAG", "FastAPI", "Azure OpenAI"];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs text-muted backdrop-blur"
      >
        <Sparkles size={13} className="text-accent" />
        AI & Machine Learning Engineer @ Prodapt
        <span className="h-1 w-1 rounded-full bg-border" />
        {profile.location} · Open to International Relocation
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
      >
        I&apos;m {profile.name.split(" ")[0]}
        <span className="text-accent">.</span>
        <br />
        <span className="text-gradient">I build enterprise AI that works in production.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-6 max-w-2xl text-balance text-base text-muted sm:text-lg"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6 flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-muted"
      >
        {words.map((w, i) => (
          <span key={w} className="flex items-center gap-3">
            <span className="text-accent-2">{w}</span>
            {i < words.length - 1 && <span className="h-1 w-1 rounded-full bg-border" />}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_-8px_var(--accent)] transition-transform hover:scale-105"
        >
          View my work
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Resume
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="mt-3 text-xs text-muted"
      >
        Resume · Updated July 2026
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1">
            <span className="text-2xl font-semibold text-foreground sm:text-3xl">
              <AnimatedNumber value={s.value} />
            </span>
            <span className="text-center text-xs text-muted">{s.label}</span>
          </div>
        ))}
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 text-muted hover:text-accent transition-colors"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
