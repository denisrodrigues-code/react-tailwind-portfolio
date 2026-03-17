import { motion } from "framer-motion";
import TerminalFrame from "@/components/ui/TerminalFrame";
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
      <TerminalFrame
        isDarkMode={isDarkMode}
        title={`${project.title.toLowerCase().replace(/\s+/g, "-")}.sh`}
        bodyClassName="p-0"
        className={`transition-all duration-500 ${
          isDarkMode ? "hover:border-gray-700" : "hover:border-gray-400"
        }`}
      >
        <ProjectCardImage project={project} isDarkMode={isDarkMode} />
        <ProjectCardContent project={project} isDarkMode={isDarkMode} />
      </TerminalFrame>
    </motion.div>
  );
};

export default ProjectCard;
