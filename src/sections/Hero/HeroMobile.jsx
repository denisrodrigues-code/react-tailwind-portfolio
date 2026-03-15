import { motion } from "framer-motion";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";
import HeroSocialLinks from "./HeroSocialLinks";
import HeroTechStack from "./HeroTechStack";

const HeroMobile = ({
  isDarkMode,
  containerVariants,
  itemVariants,
  textVariants,
  imageVariants,
  heroContent,
  socialLinks,
  techStack,
  onProjectsClick,
}) => {
  return (
    <div className="block lg:hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center"
      >
        <HeroImage
          isDarkMode={isDarkMode}
          imageVariants={imageVariants}
          mobile
        />

        <HeroContent
          isDarkMode={isDarkMode}
          content={heroContent}
          itemVariants={itemVariants}
          textVariants={textVariants}
          onProjectsClick={onProjectsClick}
          mobile
        />

        <HeroSocialLinks
          links={socialLinks}
          isDarkMode={isDarkMode}
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-8"
        />

        <HeroTechStack
          stack={techStack}
          isDarkMode={isDarkMode}
          variants={itemVariants}
          className="flex justify-center items-center text-xs uppercase tracking-widest flex-wrap"
        />
      </motion.div>
    </div>
  );
};

export default HeroMobile;