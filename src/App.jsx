import Navbar from "@/components/layout/Navbar";
import ModernCursor from "@/components/ui/ModernCursor";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

const App = () => {
  return (
    <div>
      <ModernCursor />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
