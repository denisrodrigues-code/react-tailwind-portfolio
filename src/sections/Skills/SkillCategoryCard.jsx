import { motion } from "framer-motion";
import { itemVariants, skillBarVariants } from "@/constants";

const SkillCategoryCard = ({ category, isDarkMode, isInView }) => {
  return (
    <motion.div
      variants={itemVariants}
      className={`p-8 rounded-2xl border ${
        isDarkMode
          ? "bg-gray-900/50 border-gray-800 backdrop-blur-sm"
          : "bg-white/80 border-gray-200 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center mb-6">
        <div
          className={`p-3 rounded-xl ${
            isDarkMode ? "bg-gray-800" : "bg-gray-100"
          } mr-4`}
        >
          <category.icon size={24} className="text-blue-500" />
        </div>

        <div>
          <h3 className="text-xl font-medium mb-1">{category.title}</h3>
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {category.description}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill) => (
          <div key={skill.name} className="group">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">{skill.name}</span>
              <span
                className={`text-xs ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                }`}
              >
                {skill.level}%
              </span>
            </div>

            <div
              className={`h-2 rounded-full overflow-hidden ${
                isDarkMode ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              <motion.div
                variants={skillBarVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={skill.level}
                className={`h-full ${skill.color} rounded-full relative`}
              >
                <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategoryCard;