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

      <motion.div className="absolute inset-0 hidden md:flex bg-black/60 backdrop-blur-sm items-center justify-center space-x-4 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
        <motion.a
          href={project.liveUrl}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 text-sm font-mono transition-colors"
          target="_blank"
          rel="noopener"
        >
          <ExternalLink size={16} />
          <span>open_live</span>
        </motion.a>

        <motion.a
          href={project.githubUrl}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 py-2 rounded-md flex items-center space-x-2 text-sm font-mono transition-all"
          target="_blank"
          rel="noopener"
        >
          <FiGithub size={16} />
          <span>source_code</span>
        </motion.a>
      </motion.div>

      <div className="md:hidden flex items-center gap-3 p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
        <a
          href={project.liveUrl}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2 text-sm font-mono transition-colors"
          target="_blank"
          rel="noopener"
        >
          <ExternalLink size={16} />
          <span>open_live</span>
        </a>

        <a
          href={project.githubUrl}
          className="flex-1 border-2 border-slate-400 dark:border-white text-slate-700 dark:text-white hover:bg-slate-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 px-4 py-2 rounded-md flex items-center justify-center space-x-2 text-sm font-mono transition-all"
          target="_blank"
          rel="noopener"
        >
          <FiGithub size={16} />
          <span>source_code</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCardImage;
