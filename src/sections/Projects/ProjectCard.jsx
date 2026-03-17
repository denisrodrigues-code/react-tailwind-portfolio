import { motion } from "framer-motion";
import ProjectCardContent from "./ProjectCardContent";
import ProjectCardImage from "./ProjectCardImage";

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProjectCard = ({ project, isDarkMode }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative"
    >
      <div
        className={`rounded-2xl overflow-hidden border transition-all duration-500 backdrop-blur-sm ${
          isDarkMode
            ? "bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10"
            : "bg-white/90 border-gray-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
        }`}
      >
        <ProjectCardImage project={project} isDarkMode={isDarkMode} />
        <ProjectCardContent project={project} isDarkMode={isDarkMode} />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
