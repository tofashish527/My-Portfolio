import { TfiLayoutSlider } from "react-icons/tfi";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gray-100 py-20 px-6 md:px-20 text-center md:text-left"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
        My <span className="text-cyan-500">Skills</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Frontend */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-cyan-500">
          <h3 className="flex items-center gap-3 text-2xl font-semibold text-gray-800 mb-4">
  <TfiLayoutSlider className="text-cyan-500 text-3xl" />
  Frontend Technologies
</h3>
          <p className="text-gray-700 leading-relaxed">
            HTML, CSS, Tailwind CSS, Bootstrap, React.js
          </p>
          <div className="mt-4 bg-gray-200 rounded-full h-3">
            <div className="bg-cyan-500 h-3 rounded-full w-[90%]"></div>
          </div>
        </div>

        {/* Backend */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-cyan-500">
          <h3 className="flex items-center gap-3 text-2xl font-semibold text-gray-800 mb-4">
  <TfiLayoutSlider className="text-cyan-500 text-3xl" />
  BackendTechnologies
</h3>
          <p className="text-gray-700 leading-relaxed">
            Node.js, Express.js, Firebase, JWT Authentication
          </p>
          <div className="mt-4 bg-gray-200 rounded-full h-3">
            <div className="bg-cyan-500 h-3 rounded-full w-[80%]"></div>
          </div>
        </div>

        {/* Database */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-cyan-500">
          <h3 className="flex items-center gap-3 text-2xl font-semibold text-gray-800 mb-4">
  <TfiLayoutSlider className="text-cyan-500 text-3xl" />
  Database
</h3>
          <p className="text-gray-700 leading-relaxed">MongoDB, MySQL</p>
          <div className="mt-4 bg-gray-200 rounded-full h-3">
            <div className="bg-cyan-500 h-3 rounded-full w-[75%]"></div>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-cyan-500">
          <h3 className="flex items-center gap-3 text-2xl font-semibold text-gray-800 mb-4">
  <TfiLayoutSlider className="text-cyan-500 text-3xl" />
  Programming Languages
</h3>
          <p className="text-gray-700 leading-relaxed">C, C++, JavaScript</p>
          <div className="mt-4 bg-gray-200 rounded-full h-3">
            <div className="bg-cyan-500 h-3 rounded-full w-[85%]"></div>
          </div>
        </div>

        {/* Tools */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-cyan-500">
          <h3 className="flex items-center gap-3 text-2xl font-semibold text-gray-800 mb-4">
  <TfiLayoutSlider className="text-cyan-500 text-3xl" />
  Software Tools
</h3>
          <p className="text-gray-700 leading-relaxed">
            Git, GitHub, VS Code, Figma, Vercel, Netlify
          </p>
          <div className="mt-4 bg-gray-200 rounded-full h-3">
            <div className="bg-cyan-500 h-3 rounded-full w-[85%]"></div>
          </div>
        </div>

        {/* Domain Expertise */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-cyan-500">
            <h3 className="flex items-center gap-3 text-2xl font-semibold text-gray-800 mb-4">
  <TfiLayoutSlider className="text-cyan-500 text-3xl" />
  Domain Expertise
</h3>
          <p className="text-gray-700 leading-relaxed">
            Data Structures & Algorithms, Object-Oriented Programming
          </p>
          <div className="mt-4 bg-gray-200 rounded-full h-3">
            <div className="bg-cyan-500 h-3 rounded-full w-[80%]"></div>
          </div>
        </div>

        {/* Problem Solving */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-cyan-500 md:col-span-2">
              <h3 className="flex items-center gap-3 text-2xl font-semibold text-gray-800 mb-4">
  <TfiLayoutSlider className="text-cyan-500 text-3xl" />
  Problem Solving
</h3>
          <p className="text-gray-700 leading-relaxed">
            Solved <span className="font-semibold">400+</span> algorithmic problems on Codeforces and CodeChef.
          </p>
          <div className="mt-4 bg-gray-200 rounded-full h-3">
            <div className="bg-cyan-500 h-3 rounded-full w-[95%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
