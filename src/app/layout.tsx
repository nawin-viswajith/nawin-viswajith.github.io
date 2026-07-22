import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nawin Viswajith B — AI & Machine Learning Engineer",
  description:
    "Portfolio of Nawin Viswajith B — AI & Machine Learning Engineer building production Generative AI systems, multi-agent orchestration, and RAG pipelines.",
  metadataBase: new URL("https://nawin-viswajith.github.io"),
  openGraph: {
    title: "Nawin Viswajith B — AI & Machine Learning Engineer",
    description:
      "Portfolio of Nawin Viswajith B — AI & Machine Learning Engineer building production Generative AI systems, multi-agent orchestration, and RAG pipelines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
