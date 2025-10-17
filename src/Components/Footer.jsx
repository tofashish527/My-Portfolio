import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Tofashish Nujum. All rights reserved.</p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com/tofashish527"
           target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tofashish-nujum-58a443360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/?lang=en-in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
