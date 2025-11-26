import { Hero } from "@/components/sections/Hero";
import { DeveloperSnapshot } from "@/components/sections/DeveloperSnapshot";
import { CodingActivity } from "@/components/sections/CodingActivity";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Header } from "@/components/layout/Header";
import { Terminal } from "@/components/features/Terminal";

import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen relative selection:bg-white/20">
      <Header />
      <Hero />
      <DeveloperSnapshot />
      <CodingActivity />
      <About />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />

      {/* Interactive Features */}
      <Terminal />
    </main>
  );
}
