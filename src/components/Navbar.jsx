import React from "react";
import { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar mx-auto py-7 flex items-center justify-between px-5">
      <div>
        <h1 className="logo text-3xl text-center bg-white font-bold text-black p-1 md:bg-transparent md:text-white">
          Krisnanda's Portofolio
        </h1>
      </div>
      <ul
        className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100
           bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40  ${
             active ? "top-0 opacity-100" : "-top-0 opacity-0"
           }`}
      >
        <li>
          <a
            href="#beranda"
            className="sm:text-lg text-base font-medium hover:text-violet-600"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#tentang"
            className="sm:text-lg text-base font-medium hover:text-violet-600"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#proyek"
            className="sm:text-lg text-base font-medium hover:text-violet-600"
          >
            Project
          </a>
        </li>
        <li>
          <a
            href="#kontak"
            className="sm:text-lg text-base font-medium hover:text-violet-600"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
