import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { skillsContent } from "@/content/portfolio";
import { skills, stats, techStack } from "@/data";
import { useTheme } from "@/hooks/useTheme";
import SkillsGrid from "./SkillsGrid";
import SkillsHeader from "./SkillsHeader";
import SkillsStats from "./SkillsStats";
import SkillsTechStack from "./SkillsTechStack";

const Skills = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundParallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [100, -100],
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >
      <motion.div
        style={{ y: backgroundParallaxY }}
        className="absolute inset-0 overflow-hidden"
      >
        <div
          className={`absolute top-40 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-40 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SkillsHeader
          isDarkMode={isDarkMode}
          isInView={isInView}
          skillsData={skillsContent}
        />

        <SkillsGrid
          isDarkMode={isDarkMode}
          isInView={isInView}
          skills={skills}
        />

        <SkillsTechStack
          isDarkMode={isDarkMode}
          isInView={isInView}
          title={skillsContent.extraTitle}
          techStack={techStack}
        />

        <SkillsStats
          isDarkMode={isDarkMode}
          isInView={isInView}
          stats={stats}
        />
      </div>
    </section>
  );
};

export default Skills;
