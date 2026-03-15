import {
    Code2,
    Server,
    Database,
    Cloud,
} from "lucide-react"

export const skills = [
    {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "TypeScript", level: 90, color: "bg-blue-600" },
      { name: "Next.js", level: 88, color: "bg-gray-800" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 85, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building scalable APIs and server-side applications",
    skills: [
      { name: "Node.js", level: 92, color: "bg-green-600" },
      { name: "Express", level: 90, color: "bg-gray-700" },
      { name: "Java", level: 85, color: "bg-orange-500" },
      { name: "Go", level: 88, color: "bg-sky-500" },
      { name: ".NET", level: 80, color: "bg-purple-600" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    description: "Designing efficient data models and queries",
    skills: [
      { name: "MySQL", level: 90, color: "bg-blue-700" },
      { name: "MongoDB", level: 88, color: "bg-green-700" },
      { name: "PostgreSQL", level: 85, color: "bg-indigo-700" },
      { name: "Redis", level: 75, color: "bg-red-500" },
      { name: "SQLite", level: 80, color: "bg-gray-600" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and managing applications in the cloud",
    skills: [
      { name: "Docker", level: 85, color: "bg-blue-500" },
      { name: "GitHub Actions", level: 80, color: "bg-gray-800" },
      { name: "AWS", level: 75, color: "bg-yellow-500" },
      { name: "Nginx", level: 78, color: "bg-green-600" },
      { name: "Linux", level: 85, color: "bg-gray-700" },
    ],
  },
]