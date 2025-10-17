import React from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineChatAlt2 } from "react-icons/hi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-50 py-28 px-6 md:px-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
        Get in <span className="text-cyan-500">Touch</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info Card */}
        <div className="bg-white rounded-3xl shadow-lg p-10 flex flex-col justify-between">
          <p className="text-gray-700 text-lg mb-8">
            I’m always open to discussing new projects, opportunities, or collaborations. 
            Feel free to reach out via email, phone, or WhatsApp — I respond quickly!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <HiOutlineMail className="text-cyan-500 w-6 h-6" />
              <a
                href="mailto:your-email@example.com"
                className="text-gray-800 hover:text-cyan-500 font-medium transition"
              >
                2011nujum@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <HiOutlinePhone className="text-cyan-500 w-6 h-6" />
              <a
                href="tel:+8801338996220"
                className="text-gray-800 hover:text-cyan-500 font-medium transition"
              >
                +8801338996220
              </a>
            </div>
            <div className="flex items-center gap-4">
              <HiOutlineChatAlt2 className="text-cyan-500 w-6 h-6" />
              <a
                href="https://wa.me/880123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-cyan-500 font-medium transition"
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
              className="flex-1 text-center bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-xl font-semibold shadow-md transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tofashish-nujum-58a443360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-xl font-semibold shadow-md transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white rounded-3xl shadow-lg p-10 flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            className="border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
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
