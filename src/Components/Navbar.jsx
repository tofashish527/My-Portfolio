// src/components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-cyan-400">Tofashish</h1>

        
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>

        
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      
      {menuOpen && (
        <ul className="md:hidden bg-gray-800 flex flex-col text-center py-4 space-y-2">
          <li><a href="#home" className="block hover:text-cyan-400">Home</a></li>
          <li><a href="#about" className="block hover:text-cyan-400">About</a></li>
          <li><a href="#projects" className="block hover:text-cyan-400">Projects</a></li>
          <li><a href="#contact" className="block hover:text-cyan-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
