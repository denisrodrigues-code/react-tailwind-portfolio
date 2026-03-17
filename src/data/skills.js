import { Cloud, Code2, Database, Server } from "lucide-react";

export const skills = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Criação de interfaces modernas e responsivas",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "Redux", level: 90, color: "bg-red-600" },
      { name: "Bootstrap", level: 88, color: "bg-green-600" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 85, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Construção de APIs robustas e escaláveis",
    skills: [
      { name: "Node.js", level: 92, color: "bg-green-600" },
      { name: "Express", level: 90, color: "bg-yellow-400" },
      { name: "Java", level: 85, color: "bg-orange-500" },
      { name: "Go", level: 88, color: "bg-sky-500" },
      { name: ".NET", level: 80, color: "bg-purple-600" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    description: "Modelagem e gerenciamento eficiente de dados",
    skills: [
      { name: "MySQL", level: 90, color: "bg-blue-700" },
      { name: "MongoDB", level: 88, color: "bg-green-700" },
      { name: "PostgreSQL", level: 85, color: "bg-pink-500" },
      { name: "Sequelize", level: 75, color: "bg-red-500" },
      { name: "Prisma", level: 80, color: "bg-orange-400" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploy, automação e gerenciamento de aplicações",
    skills: [
      { name: "Docker", level: 85, color: "bg-blue-500" },
      { name: "Git & GitHub", level: 80, color: "bg-red-800" },
      { name: "AWS", level: 75, color: "bg-yellow-500" },
      { name: "Apache Maven", level: 78, color: "bg-green-600" },
      { name: "Linux", level: 85, color: "bg-purple-700" },
    ],
  },
];
