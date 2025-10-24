import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiFirebase, SiBootstrap, SiVercel, SiNetlify, SiMysql, SiC, SiCplusplus } from "react-icons/si";
import SectionDivider from "./SectionDevider";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500 text-5xl" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 text-5xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300 text-5xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-amber-400 text-5xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-sky-600 text-5xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600 text-5xl" /> },
    { name: "GitHub", icon: <FaGitAlt className="text-gray-300 text-5xl" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500 text-5xl" /> },
    { name: "Vercel", icon: <SiVercel className="text-white text-5xl" /> },
    { name: "Netlify", icon: <SiNetlify className="text-teal-400 text-5xl" /> },
    { name: "C", icon: <SiC className="text-blue-600 text-5xl" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-400 text-5xl" /> },
  ];

  return (
    <section id="skills" className="relative z-50 py-20 bg-black border-t border-[#25213b]">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Technologies I work with to build beautiful and efficient web applications
        </p>
      </div>

      {/* Marquee */}
      <div className="w-full">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          play={true}
          direction="left"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1e293b] border border-[#334155] rounded-xl p-6 m-4 flex flex-col items-center justify-center min-w-[140px] hover:border-cyan-500 hover:scale-110 transition-all duration-300"
            >
              {skill.icon}
              <p className="text-white mt-3 text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
      <SectionDivider></SectionDivider>
    </section>
    
  );
}
