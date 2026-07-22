"use client";

import { motion } from "framer-motion";

const stack = ["Python", "FastAPI", "LangGraph", "Azure OpenAI", "PyTorch", "React"];

export function TechStrip() {
  return (
    <div className="relative border-y border-border bg-surface/30 py-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-6 text-center"
      >
        {stack.map((tech, i) => (
          <span key={tech} className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-wide text-muted">{tech}</span>
            {i < stack.length - 1 && <span className="h-1 w-1 rounded-full bg-border" />}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
