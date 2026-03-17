const ProjectCardContent = ({ project, isDarkMode }) => {
  return (
    <div className="p-6">
      <h3 className="mb-3 font-mono text-xl font-medium group-hover:text-blue-500 transition-colors">
        {project.title}
      </h3>

      <p
        className={`text-sm leading-relaxed mb-4 ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 border-t pt-4 border-dashed border-slate-600/50">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className={`font-mono text-xs px-2.5 py-1 rounded-md ${
              isDarkMode
                ? "bg-slate-900 text-slate-300 border border-slate-700"
                : "bg-white text-slate-700 border border-slate-300"
            }`}
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCardContent;
