"use client";

import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />

      <motion.div
        className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-[120px]"
        animate={{
          x: [0, 60, -20, 0],
          y: [0, 40, 80, 0],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/5 h-[28rem] w-[28rem] rounded-full bg-accent-2/15 blur-[120px]"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 60, -30, 0],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-accent-3/10 blur-[120px]"
        animate={{
          x: [0, 40, -60, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="noise absolute inset-0" />
    </div>
  );
}
