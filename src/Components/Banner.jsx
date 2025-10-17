import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import image from "../assets/image.png"
export default function Banner() {
  return (
    <section
      id="home"
      className="bg-gray-100 pt-24 md:pt-32 pb-16 flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left px-6 md:px-20"
    >
      {/* Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Hi, I'm <span className="text-cyan-500">Tofashish Nujum</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-6">
          Frontend Developer | React Enthusiast | Problem Solver
        </p>

        {/* Resume Button */}
        <a
          href="/Tofashish_Nujum_.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl shadow-md font-semibold transition duration-300"
        >
         Download Resume
        </a>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start mt-6 space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-cyan-500 text-2xl transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-cyan-500 text-2xl transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-cyan-500 text-2xl transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-cyan-500 text-2xl transition duration-300"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={image}
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-cyan-500 shadow-lg"
        />
      </div>
    </section>
  );
}
