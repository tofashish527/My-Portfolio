// src/components/About.jsx
export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-start justify-between gap-12"
    >
      {/* Left Side – Detailed Introduction */}
      <div className="md:w-2/3">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About <span className="text-cyan-500">Me</span>
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-5">
          Hello! I'm <span className="font-semibold text-gray-900">Tofashish Nujum</span>, a passionate{" "}
          <span className="text-cyan-500 font-semibold">Frontend Developer</span> who loves crafting beautiful, 
          efficient, and user-friendly web interfaces. My programming journey began out of curiosity — I wanted 
          to understand how websites come to life, and that curiosity quickly grew into a full-fledged passion for web development.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-5">
          Over time, I’ve learned and worked with technologies like{" "}
          <span className="font-semibold">React, JavaScript, TailwindCSS,</span> and{" "}
          <span className="font-semibold">Node.js</span>. I enjoy building modern, responsive applications that 
          provide smooth and meaningful user experiences. My focus is on writing clean, maintainable code while 
          continuously improving as a developer.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Outside of programming, I love engaging in creative activities and personal growth. I enjoy{" "}
          <span className="font-semibold">football</span>, exploring{" "}
          <span className="font-semibold">new technologies</span>, and discovering{" "}
          <span className="font-semibold">music and design trends</span>. I believe that balance between work 
          and creativity fuels innovation and keeps me inspired as a developer.
        </p>
      </div>

      {/* Right Side – Showcase Personality */}
      <div className="md:w-1/3 bg-gray-50 border-l-4 border-cyan-500 rounded-lg shadow-md p-6 text-center md:text-left">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          A Little More About Me 💡
        </h3>

        <ul className="text-gray-700 text-lg space-y-3">
          <li>✨ Creative Thinker</li>
          <li>🚀 Lifelong Learner</li>
          <li>💻 Love solving UI/UX challenges</li>
          <li>☕ Fuelled by coffee & late-night coding</li>
          <li>🌍 Dreaming of building impactful digital products</li>
        </ul>

        <p className="mt-6 text-gray-600 italic">
          “Code is like art — every line tells a story.”
        </p>
      </div>
    </section>
  );
}
