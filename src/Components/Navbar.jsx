
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = ["home", "about", "skills", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      // Get all sections
      const sections = document.querySelectorAll("section[id]");
      let current = "home"; 

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120; 
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (link) => activeSection === link;

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-cyan-400">Tofashish</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className={`transition-all duration-300 ${
                  isActive(link)
                    ? "text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1"
                    : "text-gray-300"
                } hover:text-cyan-400`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-800 flex flex-col text-center py-4 space-y-2">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                onClick={() => setMenuOpen(false)}
                className={`block transition-all duration-300 ${
                  isActive(link)
                    ? "text-cyan-400 font-semibold"
                    : "text-gray-300"
                } hover:text-cyan-400`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
