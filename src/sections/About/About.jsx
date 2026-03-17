import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { containerVariants } from "@/constants";
import { journeySteps } from "@/data";
import { useTheme } from "@/hooks/useTheme";
import AboutIntro from "./AboutIntro";
import AboutTimeline from "./AboutTimeline";

const About = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-10"
        >
          <AboutIntro />
          <AboutTimeline steps={journeySteps} />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
