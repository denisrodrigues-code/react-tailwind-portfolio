const ProjectCardContent = ({ project }) => {
  return (
    <div className="p-6">
      <h3 className="text-xl font-medium mb-3 group-hover:text-blue-500 transition-colors">
        {project.title}
      </h3>

      <p className="text-sm leading-relaxed mb-4 text-gray-400">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCardContent;
