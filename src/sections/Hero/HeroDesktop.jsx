import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroSocialLinks from "./HeroSocialLinks";

const HeroDesktop = ({
  isDarkMode,
  containerVariants,
  itemVariants,
  textVariants,
  imageVariants,
  heroContent,
  socialLinks,
  onProjectsClick,
}) => {
  return (
    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-left"
      >
        <HeroContent
          isDarkMode={isDarkMode}
          content={heroContent}
          itemVariants={itemVariants}
          textVariants={textVariants}
          onProjectsClick={onProjectsClick}
        />

        <HeroSocialLinks
          links={socialLinks}
          isDarkMode={isDarkMode}
          variants={itemVariants}
          className="flex space-x-6 mb-12"
        />
      </motion.div>

      <HeroImage
        isDarkMode={isDarkMode}
        imageVariants={imageVariants}
        itemVariants={itemVariants}
      />
    </div>
  );
};

export default HeroDesktop;
