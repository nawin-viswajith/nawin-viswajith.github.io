"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

function parseValue(raw: string) {
  const match = raw.match(/^(\$?)([\d.]+)(\+|%)?$/);
  if (!match) return null;
  const [, prefix, numberPart, suffix] = match;
  return {
    prefix,
    target: parseFloat(numberPart),
    decimals: numberPart.includes(".") ? numberPart.split(".")[1].length : 0,
    suffix: suffix ?? "",
  };
}

export function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const parsed = parseValue(value);

  useEffect(() => {
    if (!isInView || !parsed || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, parsed.target, {
      duration: 1.4,
      ease: [0.21, 0.47, 0.32, 0.98],
      onUpdate(latest) {
        node.textContent = `${parsed.prefix}${latest.toFixed(parsed.decimals)}${parsed.suffix}`;
      },
    });
    return () => controls.stop();
  }, [isInView, parsed]);

  if (!parsed) return <span ref={ref}>{value}</span>;

  return <span ref={ref}>{`${parsed.prefix}0${parsed.suffix}`}</span>;
}
