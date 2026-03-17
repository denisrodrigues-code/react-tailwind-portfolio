import { motion } from "framer-motion";
import HeroRotatingWord from "./HeroRotatingWord";

const HeroContent = ({
  isDarkMode,
  content,
  itemVariants,
  textVariants,
  onProjectsClick,
  mobile = false,
}) => {
  return (
    <>
      <motion.div
        variants={textVariants}
        className={`text-sm uppercase tracking-widest ${
          isDarkMode ? "text-gray-500" : "text-gray-600"
        } ${mobile ? "mb-4" : "mb-6"}`}
      >
        {content.role}
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className={`${
          mobile
            ? "text-3xl md:text-[2.5rem] mb-6"
            : "text-5xl xl:text-7xl mb-8"
        } font-light leading-[1.1]`}
      >
        <span className="inline-flex items-center whitespace-nowrap">
          <span className={isDarkMode ? "text-white" : "text-gray-900"}>
            {content.titleLine1}
          </span>

          <span className="ml-2 inline-flex items-center">
            <HeroRotatingWord
              words={
                mobile
                  ? content.titleHighlight.filter((word) => word.length <= 8)
                  : content.titleHighlight
              }
            />
          </span>
        </span>

        <br />

        <span className={isDarkMode ? "text-white" : "text-gray-900"}>
          {content.titleLine2}
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className={`${
          mobile
            ? "text-base md:text-lg mb-8 max-w-xl mx-auto"
            : "text-xl mb-12 max-w-lg"
        } ${isDarkMode ? "text-gray-400" : "text-gray-600"} font-light leading-relaxed`}
      >
        {content.description}
      </motion.p>

      <motion.div
        variants={itemVariants}
        className={`flex gap-4 mb-8 ${
          mobile ? "flex-col sm:flex-row justify-center items-center" : ""
        }`}
      >
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={onProjectsClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 md:py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
        >
          Ver Projetos
        </motion.button>

        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          href="/cv-denis-rodrigues.pdf"
          download
          className={`border ${
            isDarkMode
              ? "border-gray-700 hover:border-gray-600 text-gray-300"
              : "border-gray-300 hover:border-gray-400 text-gray-700"
          } px-8 py-3 md:py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
        >
          Baixar CV
        </motion.a>
      </motion.div>
    </>
  );
};

export default HeroContent;
