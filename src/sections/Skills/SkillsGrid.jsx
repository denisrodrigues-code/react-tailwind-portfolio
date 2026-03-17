import { motion } from "framer-motion";
import { containerVariants } from "@/constants";
import SkillCategoryCard from "./SkillCategoryCard";

const SkillsGrid = ({ isDarkMode, isInView, skills }) => {
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="grid md:grid-cols-2 gap-8 lg:gap-12"
    >
      {skills.map((category) => (
        <SkillCategoryCard
          key={category.title}
          category={category}
          isDarkMode={isDarkMode}
          isInView={isInView}
        />
      ))}
    </motion.div>
  );
};

export default SkillsGrid;
