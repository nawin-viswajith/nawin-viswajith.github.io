import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Background } from "@/components/background";
import { BrandMark } from "@/components/brand-mark";

export default function NotFound() {
  return (
    <>
      <Background />
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <BrandMark size={40} className="mb-8 text-accent" />
        <p className="font-mono text-sm text-accent-2">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Lost<span className="text-accent">?</span>
        </h1>
        <p className="mt-3 max-w-sm text-muted">
          This route doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_-8px_var(--accent)] transition-transform hover:scale-105"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </main>
    </>
  );
}
