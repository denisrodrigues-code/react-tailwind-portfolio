import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/constants";

const SkillsStats = ({ isDarkMode, isInView, stats }) => {
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={itemVariants}
          className="text-center"
        >
          <div className="text-2xl md:text-3xl font-light text-blue-500 mb-2">
            {stat.number}
          </div>

          <div
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsStats;