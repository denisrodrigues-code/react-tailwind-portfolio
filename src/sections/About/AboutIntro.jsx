import { motion } from "framer-motion";
import { useState } from "react";
import PROFILE_PIC from "@/assets/images/profile-img.png";
import { itemVariants } from "@/constants";
import { aboutContent } from "@/content/portfolio";
import { useTheme } from "@/hooks/useTheme";

const ABOUT_CODING_IMAGE = "/images/about-image.png";

const AboutIntro = () => {
  const { isDarkMode } = useTheme();
  const [imageSrc, setImageSrc] = useState(ABOUT_CODING_IMAGE);

  return (
    <motion.div variants={itemVariants} className="space-y-6">
      <div
        className={`text-sm uppercase tracking-widest ${
          isDarkMode ? "text-gray-500" : "text-gray-600"
        }`}
      >
        {aboutContent.eyebrow}
      </div>

      <h2 className="text-3xl md:text-5xl font-light leading-tight">
        {aboutContent.title.normal}
        <span className="text-blue-500 font-medium">
          {" "}
          {aboutContent.title.highlight}
        </span>
      </h2>

      <p
        className={`text-lg leading-relaxed ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {aboutContent.paragraphs[0]}
      </p>

      <p
        className={`text-lg leading-relaxed ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {aboutContent.paragraphs[1]}
      </p>

      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`relative overflow-hidden rounded-2xl border ${
          isDarkMode
            ? "border-gray-800 bg-gray-900/60"
            : "border-gray-200 bg-white"
        }`}
      >
        <img
          src={imageSrc}
          alt="Denis programando"
          className="h-80 w-full object-contain object-center md:h-96"
          onError={() => setImageSrc(PROFILE_PIC)}
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutIntro;
