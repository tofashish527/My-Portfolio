import React from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineChatAlt2 } from "react-icons/hi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black pb-10 px-6 md:px-20 text-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Get in <span className="text-cyan-400">Touch</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info Card */}
        <div className="bg-[#0a0d37] rounded-3xl shadow-[0_0_30px_0_rgba(0,0,0,0.5)] p-10 flex flex-col justify-between border border-cyan-600">
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            I’m open to discussing new projects, opportunities, or collaborations. 
            Feel free to reach out via email, phone, or WhatsApp — I respond quickly!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <HiOutlineMail className="text-cyan-400 w-6 h-6" />
              <a
                href="mailto:2011nujum@gmail.com"
                className="text-gray-200 hover:text-cyan-400 font-medium transition"
              >
                2011nujum@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <HiOutlinePhone className="text-cyan-400 w-6 h-6" />
              <a
                href="tel:+8801338996220"
                className="text-gray-200 hover:text-cyan-400 font-medium transition"
              >
                +8801338996220
              </a>
            </div>
            <div className="flex items-center gap-4">
              <HiOutlineChatAlt2 className="text-cyan-400 w-6 h-6" />
              <a
                href="https://wa.me/880123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-cyan-400 font-medium transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="flex gap-4 mt-10">
            <a
              href="https://github.com/tofashish527"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-[#1a1443] hover:bg-[#271c63] text-white py-3 rounded-xl font-semibold shadow-md transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tofashish-nujum-58a443360"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-xl font-semibold shadow-md transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-[#0a0d37] rounded-3xl shadow-[0_0_30px_0_rgba(0,0,0,0.5)] p-10 flex flex-col gap-5 border border-cyan-600">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-700 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-[#0d1224] text-white transition"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-700 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-[#0d1224] text-white transition"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            className="border border-gray-700 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-[#0d1224] text-white transition"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
