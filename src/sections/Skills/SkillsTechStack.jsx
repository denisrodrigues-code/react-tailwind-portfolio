import { motion } from "framer-motion";
import TerminalFrame from "@/components/ui/TerminalFrame";
import { containerVariants, itemVariants } from "@/constants";

const SkillsTechStack = ({ isDarkMode, isInView, title, techStack }) => {
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mt-16"
    >
      <motion.div variants={itemVariants} className="text-center mb-8">
        <h3 className="text-xl font-medium mb-4">{title}</h3>
      </motion.div>

      <motion.div variants={itemVariants} className="overflow-hidden">
        <TerminalFrame
          isDarkMode={isDarkMode}
          title="tech-stack.sh"
          bodyClassName="p-6"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ y: -2, scale: 1.05 }}
                className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-900 border-gray-700 text-gray-300 hover:border-gray-600"
                    : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </TerminalFrame>
      </motion.div>
    </motion.div>
  );
};

export default SkillsTechStack;
