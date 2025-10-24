import { BiPaperPlane } from "react-icons/bi";
import { FaReact, FaNodeJs, FaPaintBrush, FaMusic } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black py-20 px-6 md:px-20 flex flex-col md:flex-row items-start justify-between gap-12"
    >
      {/* Left Side */}
      <div className="md:w-2/3 text-gray-300">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-cyan-500">About Me</span>
        </h2>

<p className="text-lg md:text-xl leading-relaxed max-w-4xl mb-8 text-gray-300">
  I am <span className="font-semibold text-white">Tofashish Nujum</span>, a dedicated and passionate <span className="text-cyan-400 font-semibold">MERN Stack Developer</span> committed to building high-quality, scalable, and user-friendly web applications. With a strong problem-solving mindset and a self-driven learning attitude, I continuously explore emerging technologies to stay at the forefront of modern web development. My core expertise includes <span className="font-bold text-cyan-400">JavaScript, React, NodeJS, Express, and MongoDB</span>, allowing me to craft responsive front-end interfaces and robust back-end solutions. I focus on writing clean, maintainable code while delivering applications that are both visually appealing and functionally efficient. Beyond coding, I am enthusiastic about discovering new technologies, enhancing my skills, and engaging in creative projects. I am eager to contribute to innovative teams and projects, creating meaningful digital experiences that combine technical excellence with thoughtful design.
</p>
   

      </div>

      {/* Right Side - 2x2 Skill Squares */}
      {/* Right Side - 2x2 Skill Squares */}
<div className="md:w-1/3 grid grid-cols-2 grid-rows-2 mt-15 gap-4">
  {[
  { 
    title: "Creative Thinker", 
    description: "Develops innovative solutions to enhance user experience and business impact.",
    icon: <BiPaperPlane className="text-cyan-500 text-3xl" /> 
  },
  { 
    title: "Problem Solver", 
    description: "Analyzes challenges and implements efficient, scalable solutions.",
    icon: <BiPaperPlane className="text-cyan-500 text-3xl" /> 
  },
  { 
    title: "UI/UX Enthusiast", 
    description: "Designs intuitive and visually appealing interfaces aligned with user needs.",
    icon: <BiPaperPlane className="text-cyan-500 text-3xl" /> 
  },
  { 
    title: "Lifelong Learner", 
    description: "Continuously upgrades skills and adapts to evolving technologies and industry standards.",
    icon: <BiPaperPlane className="text-cyan-500 text-3xl" /> 
  }
]
.map((item, idx) => (
    <div
      key={idx}
      className="bg-gray-800 hover:bg-gray-900 text-white flex flex-col items-center justify-center rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105"
    >
      {item.icon}
      <h4 className="mt-3 font-bold text-lg">{item.title}</h4>
      <p className="mt-2 text-gray-300 text-sm">{item.description}</p>
    </div>
  ))}
</div>

    </section>
  );
}
