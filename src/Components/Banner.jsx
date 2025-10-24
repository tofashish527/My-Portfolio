import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import image from "../assets/portfolio image.jpg"
import {resume} from "../data/resume"
export default function Banner() {
  return (
    <section
      id="home"
      className="bg-black pt-24 md:pt-32 pb-16 flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left px-6 md:px-20"
    >
      {/* Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          <span className="text-cyan-300">Tofashish Nujum</span>
        </h2>
        <p className="text-xl md:text-2xl text-cyan-600 mb-6">
          MERN Stack Developer | React Enthusiast | Problem Solver
        </p>

        {/* Resume Button */}
        <a
          href={resume.resume}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl shadow-md font-semibold transition duration-300"
        >
         Get Resume
        </a>
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 ml-5 rounded-xl shadow-lg font-semibold transition"
        >
          Let's Connect
        </a>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start mt-6 space-x-4">
          <a
            href="https://github.com/tofashish527"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-cyan-500 text-2xl transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tofashish-nujum"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-cyan-500 text-2xl transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/share/1DQkirbAQx/"
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
          className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-cyan-500 shadow-lg"
        />
      </div>
    </section>
  );
}
