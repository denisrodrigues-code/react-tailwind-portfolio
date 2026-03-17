import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/constants";

const SkillsHeader = ({ isDarkMode, isInView, skillsData }) => {
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="text-center mb-20"
    >
      <motion.div
        variants={itemVariants}
        className={`text-sm uppercase tracking-widest ${
          isDarkMode ? "text-gray-500" : "text-gray-600"
        } mb-4`}
      >
        {skillsData.eyebrow}
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-5xl font-light mb-6"
      >
        {skillsData.title.normal}
        <span className="text-blue-500 font-medium">
          {" "}
          {skillsData.title.highlight}
        </span>
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className={`text-lg ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        } max-w-2xl mx-auto font-light`}
      >
        {skillsData.description}
      </motion.p>
    </motion.div>
  );
};

export default SkillsHeader;
