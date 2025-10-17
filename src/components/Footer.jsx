import React from "react";

const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">Krisnanda's Portofolio</h1>
      <div className="flex gap-7 ">
        <a href="#beranda" className="hover:text-violet-600">
          Home
        </a>
        <a href="#tentang" className="hover:text-violet-600">
          About
        </a>
        <a href="#proyek" className="hover:text-violet-600">
          Project
        </a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/Krisnanda7">
          <i className="ri-github-fill ri-2x"> </i>
        </a>
        <a href="https://www.instagram.com/krisnanda_mas/">
          <i className="ri-instagram-fill ri-2x"> </i>
        </a>
        <a href="https://www.linkedin.com/in/krisnanda-mas">
          <i className="ri-linkedin-fill ri-2x"> </i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
