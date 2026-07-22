import { Background } from "@/components/background";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Recognition } from "@/components/sections/recognition";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
