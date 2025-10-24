import { useParams, useNavigate } from "react-router";
import { projectsData } from "../data/projectsData";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === parseInt(id));

  const handleGoBack = () => {
    navigate("/");
    // Restore scroll after short delay
    setTimeout(() => {
      const savedPosition = sessionStorage.getItem("scrollPosition");
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition));
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="text-center text-white mt-20">
        <h2 className="text-2xl font-bold">Project Not Found</h2>
        <button
          onClick={handleGoBack}
          className="text-cyan-400 underline mt-4 block hover:text-cyan-300"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#0d1224] min-h-screen py-16 px-6 md:px-20 text-white">
      <div className="max-w-4xl mx-auto bg-[#101632]/60 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_25px_#00ffff20] rounded-2xl p-8 transition duration-300 hover:shadow-[0_0_35px_#00ffff60]">

        {/* Back Button */}
        <button
          onClick={handleGoBack}
          className="inline-block mb-6 text-cyan-400 hover:text-cyan-300 bg-[#16203a] border border-cyan-400/30 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-cyan-500/20"
        >
          ← Back to Projects
        </button>

        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover rounded-xl mb-8 shadow-lg border border-cyan-500/20"
        />

        <h1 className="text-3xl font-bold text-cyan-400 mb-4">{project.name}</h1>
        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">🧰 Tech Stack</h2>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech, index) => (
              <li
                key={index}
                className="bg-[#1a1443] border border-cyan-500/20 px-3 py-1 rounded-md text-cyan-400 text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">🚀 Live Links</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Live Demo
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              GitHub Code
            </a>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">💡 Challenges</h2>
          <p className="text-gray-300 leading-relaxed">{project.challenges}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">🔮 Future Improvements</h2>
          <p className="text-gray-300 leading-relaxed">{project.improvements}</p>
        </div>
      </div>
    </div>
  );
}
