// src/Components/ProjectDetails.jsx
import { useParams, Link } from "react-router";

const projectData = {
  1: {
    name: "Hobby Tribe",
    techStack: ["React", "TailwindCSS", "MongoDB", "Express", "Firebase Auth"],
    description:
      "Hobby Tribe is a social platform where users can create and join hobby-based groups. It features user authentication, CRUD operations, and secure role-based access.",
    liveLink: "https://hobby-tribe-355ca.web.app/",
    github: "https://github.com/tofashish527/HobbyNest-Client-Side",
    challenges:
      "Managing secure user-specific CRUD operations and ensuring dynamic UI updates across group members.",
    improvements:
      "Plan to add real-time chat and event scheduling for group members.",
  },
  2: {
    name: "SwiftFix",
    techStack: ["React", "Tailwind", "Firebase", "Node.js", "Express", "MongoDB"],
    description:
      "SwiftFix allows users to manage repair services, book technicians, and track service history with secure authentication.",
    liveLink: "https://swiftfix-client.web.app",
    github: "https://github.com/tofashish527/SwiftFix-client",
    challenges:
      "Integrating role-based access for customers and service providers.",
    improvements:
      "Plan to integrate payment gateway and live booking notifications.",
  },
  3: {
    name: "Task Monitor",
    techStack: ["React", "Firebase", "Recharts", "TailwindCSS"],
    description:
      "DevQuest is a productivity app for developers to log daily coding activities, bookmark resources, and track weekly progress.",
    liveLink: "https://task-monitor-client.web.app/",
    github: "https://github.com/tofashish527/TaskMonitor-client",
    challenges:
      "Managing data visualization with real-time updates and Firebase authentication persistence.",
    improvements:
      "Add AI-based suggestion engine for learning resources.",
  },
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-xl">Project not found.</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{project.name}</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Tech Stack:</h3>
          <ul className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <li
                key={index}
                className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Description:</span> {project.description}
        </p>

        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Challenges:</span> {project.challenges}
        </p>

        <p className="text-gray-700 mb-6">
          <span className="font-semibold">Future Improvements:</span> {project.improvements}
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg shadow font-medium transition"
          >
            Live Project
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-lg shadow font-medium transition"
          >
            GitHub Repo
          </a>
          <Link
            to="/"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-2 rounded-lg font-medium transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
