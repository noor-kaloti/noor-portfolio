import { useState } from "react";
import { useEffect } from "react";
export const Navbar = ({ menuOpen, setMenuOpen }) => {
  // Function to toggle the mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-md">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {" "}
          <a href="#home" className="text-white text-lg font-mono font-bold">
            noor<span className="text-blue-500">.portfolio</span>{" "}
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776; {/* Hamburger icon for mobile view */}
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors "
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors "
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors "
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors "
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
