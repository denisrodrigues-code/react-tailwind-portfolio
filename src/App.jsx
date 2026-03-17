import { lazy, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import ModernCursor from "@/components/ui/ModernCursor";

const Hero = lazy(() => import("@/sections/Hero"));
const Skills = lazy(() => import("@/sections/Skills"));
const Projects = lazy(() => import("@/sections/Projects"));
const About = lazy(() => import("@/sections/About"));
const Contact = lazy(() => import("@/sections/Contact"));
const Footer = lazy(() => import("@/sections/Footer"));

const App = () => {
  return (
    <div>
      <ModernCursor />
      <Navbar />
      <Suspense
        fallback={
          <div className="px-6 py-24 text-center text-sm text-gray-500">
            Carregando...
          </div>
        }
      >
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
