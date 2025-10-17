import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/laravel.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/php.png";
import Tools10 from "/assets/tools/vscode.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/canva.png";
import Tools13 from "/assets/tools/ai.png";
import Tools14 from "/assets/tools/photoshop.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Laravel",
    ket: "PHP Framework",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Php",
    ket: "Language",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Canva",
    ket: "Design App",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Photoshop",
    ket: "Design App",
    dad: "1400",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek1more from "/assets/proyek/proyek1more.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek4,
    nama: "Website Rent Office Spaces",
    tools: [
      "laravel",
      "ReactJS",
      "TailwindCSS",
      "Vite",
      "AOS",
      "MySQL",
      "Filament",
    ],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website UMKM",
    tools: ["ReactJS", "TailwindCSS", "Vite", "AOS", "Figma"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Website Portofolio",
    tools: ["ReactJS", "TailwindCSS", "Vite", "AOS", "Figma"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek1,
    Proyek1more,
    nama: "Website BSC Event ",
    tools: ["ReactJS", "TailwindCSS", "Vite", "AOS", "Figma"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Website Wedding Package",
    tools: ["Laravel", "Javascript", "Bootsrap", "Filament", "MySQL"],
    dad: "600",
  },
  // {
  //   id: 6,
  //   gambar: Proyek6,
  //   nama: "Company Profile",
  //   // desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["NextJS", "TailwindCSS", "Framermotion"],
  //   dad: "700",
  // },
];
