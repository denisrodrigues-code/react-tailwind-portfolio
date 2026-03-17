import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import {
  containerVariants,
  imageVariants,
  itemVariants,
  textVariants,
} from "@/constants";
import { useTheme } from "@/hooks/useTheme";
import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";
import { heroContent, socialLinks, techStack } from "./heroData";

const Hero = () => {
  const { isDarkMode } = useTheme();

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-blue-500" : "bg-blue-400"
            }`}
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-purple-500" : "bg-purple-400"
            }`}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 mt-20">
          <HeroMobile
            isDarkMode={isDarkMode}
            containerVariants={containerVariants}
            itemVariants={itemVariants}
            textVariants={textVariants}
            imageVariants={imageVariants}
            heroContent={heroContent}
            socialLinks={socialLinks}
            techStack={techStack}
            onProjectsClick={() => scrollToSection("work")}
          />

          <HeroDesktop
            isDarkMode={isDarkMode}
            containerVariants={containerVariants}
            itemVariants={itemVariants}
            textVariants={textVariants}
            imageVariants={imageVariants}
            heroContent={heroContent}
            socialLinks={socialLinks}
            techStack={techStack}
            onProjectsClick={() => scrollToSection("work")}
          />
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown
            size={20}
            className={isDarkMode ? "text-gray-600" : "text-gray-400"}
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Hero;
