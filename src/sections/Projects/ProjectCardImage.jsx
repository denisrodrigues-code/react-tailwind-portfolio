import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const ProjectCardImage = ({ project, isDarkMode }) => {
  return (
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {project.featured && (
        <div className="absolute top-4 left-4">
          <span className="bg-blue-500 text-white text-[11px] px-2.5 py-1 rounded-md font-mono uppercase tracking-wide">
            featured
          </span>
        </div>
      )}

      <div className="absolute top-4 right-4">
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm ${
            isDarkMode
              ? "bg-slate-900/90 text-slate-300 border border-slate-700 font-mono"
              : "bg-white/90 text-slate-700 border border-slate-300 font-mono"
          }`}
        >
          {project.category}
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center space-x-4"
      >
        <motion.a
          href={project.liveUrl}
          initial={{ y: 20, opacity: 0.5 }}
          whileHover={{ y: 0, opacity: 1, scale: 1.05 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 text-sm font-mono transition-colors"
        >
          <ExternalLink size={16} />
          <span>open_live</span>
        </motion.a>

        <motion.a
          href={project.githubUrl}
          initial={{ y: 20, opacity: 0.5 }}
          whileHover={{ y: 0, opacity: 1, scale: 1.05 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 py-2 rounded-md flex items-center space-x-2 text-sm font-mono transition-all"
        >
          <FiGithub size={16} />
          <span>source_code</span>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ProjectCardImage;
