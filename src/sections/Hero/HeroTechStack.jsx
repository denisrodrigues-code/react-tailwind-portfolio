import { motion } from "framer-motion";

const HeroTechStack = ({ stack, isDarkMode, variants, className = "" }) => {
  return (
    <motion.div
      variants={variants}
      className={`flex items-center justify-center whitespace-nowrap text-[11px] uppercase tracking-[0.3em] ${className}`}
    >
      {stack.map((tech, index) => (
        <div key={tech} className="flex items-center">
          <span
            className={`transition-colors duration-300 ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            }`}
          >
            {tech}
          </span>

          {index < stack.length - 1 && (
            <span
              className={`mx-4 text-[10px] ${
                isDarkMode ? "text-blue-400/70" : "text-blue-500/70"
              }`}
            >
              •
            </span>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default HeroTechStack;