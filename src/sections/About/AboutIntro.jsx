import { motion } from "framer-motion";
import { useState } from "react";
import PROFILE_PIC from "@/assets/images/profile-img.jpg";
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
        className={`text-center text-sm uppercase tracking-widest ${
          isDarkMode ? "text-gray-500" : "text-gray-600"
        }`}
      >
        {aboutContent.eyebrow}
      </div>

      <h2 className="mt-2 text-center text-3xl md:mt-3 md:text-5xl font-light leading-tight">
        {aboutContent.title.normal}
        <span className="text-blue-500 font-medium">
          {" "}
          {aboutContent.title.highlight}
        </span>
      </h2>

      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`mt-8 overflow-hidden rounded-2xl border md:mt-10 ${
          isDarkMode
            ? "border-gray-800 bg-[#0f172a]"
            : "border-gray-300 bg-slate-50"
        }`}
      >
        <div
          className={`flex items-center justify-between border-b px-4 py-2.5 ${
            isDarkMode
              ? "border-gray-800 bg-slate-900"
              : "border-gray-300 bg-slate-100"
          }`}
        >
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span
            className={`font-mono text-[11px] ${
              isDarkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            sobre-mim.sh
          </span>
        </div>

        <div className="grid gap-6 p-5 md:grid-cols-2 md:items-stretch">
          <div className="space-y-4">
            <p
              className={`text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
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
          </div>

          <div className="relative overflow-hidden rounded-xl border border-slate-700/60 bg-black/30">
            <img
              src={imageSrc}
              alt="Denis programando"
              className="h-80 w-full object-contain object-center md:h-full"
              onError={() => setImageSrc(PROFILE_PIC)}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutIntro;
