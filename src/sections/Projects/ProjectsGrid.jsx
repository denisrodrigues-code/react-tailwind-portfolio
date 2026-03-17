import { projects } from "@/data";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = ({ isDarkMode }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;
