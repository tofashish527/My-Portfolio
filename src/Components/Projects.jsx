// src/Components/Projects.jsx
import { Link } from "react-router";

const projects = [
  {
    id: 1,
    name: "Hobby Tribe",
    image: "/projects/hobby-tribe.png", // put images in public/projects/
    description: "A social platform for hobby-based groups.",
  },
  {
    id: 2,
    name: "SwiftFix",
    image: "/projects/swiftfix.png",
    description: "A service management app with authentication.",
  },
  {
    id: 3,
    name: "DevQuest",
    image: "/projects/devquest.png",
    description: "A daily coding tracker for developers.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        My <span className="text-cyan-500">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link
                to={`/projects/${project.id}`}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
