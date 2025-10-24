import { Link, useNavigate } from "react-router";
import { projectsData } from "../data/projectsData";
import SectionDivider from "./SectionDevider";

export default function Projects() {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    // Save scroll position
    sessionStorage.setItem("scrollPosition", window.scrollY);
    navigate(`/projects/${id}`);
  };

  return (
    <section id="projects" className="bg-black px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        My <span className="text-cyan-400">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="border-[#1b2c68a0] bg-gradient-to-r bg-[#0a0d37] border rounded-xl overflow-hidden shadow-[0_0_25px_0_rgba(0,0,0,0.3)] transition-transform hover:scale-105 duration-300"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <button
                onClick={() => handleViewDetails(project.id)}
                className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <SectionDivider></SectionDivider>
    </section>
  );
}
