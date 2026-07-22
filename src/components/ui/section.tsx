import { ReactNode } from "react";

export function Section({
  id,
  index,
  title,
  children,
  className = "",
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index={index} title={title} />
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-14 flex items-center gap-4">
      <span className="section-heading-number font-mono text-sm text-accent">
        {index}
      </span>
      <div className="h-px flex-1 max-w-10 bg-border" />
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight whitespace-nowrap">
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
