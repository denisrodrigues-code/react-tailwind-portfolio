import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <div className="pb-[100vh]">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
