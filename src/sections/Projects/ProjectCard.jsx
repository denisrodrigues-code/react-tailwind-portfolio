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

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative"
    >
      <div className="rounded-2xl overflow-hidden border transition-all duration-500 bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm">
        <ProjectCardImage project={project} />
        <ProjectCardContent project={project} />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
