import HeroImage from "/assets/krisnandaFormal.png";

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
import Tools15 from "/assets/tools/Postman.png";
import Tools16 from "/assets/tools/git.png";
import Tools17 from "/assets/tools/supabase.png";
import Tools18 from "/assets/tools/expo.png";
import Tools19 from "/assets/tools/filament.png";
import Tools20 from "/assets/tools/vercel.svg";

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
  {
    id: 15,
    gambar: Tools15,
    nama: "Postman",
    ket: "Test API",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "Git",
    ket: "Control System",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "Supabase",
    ket: "Backend Service",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "Expo",
    ket: "Framework",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "Filament",
    ket: "Admin Panel",
    dad: "1900",
  },
  {
    id: 20,
    gambar: Tools20,
    nama: "Vercel",
    ket: "Hosting",
    dad: "2000",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek7 from "/assets/proyek/proyek7.webp";

const getTool = (nama) => listTools.find((t) => t.nama === nama);

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Rent Office Spaces",
    deskripsi:
      "Website untuk menyewa ruang kantor dengan fitur pencarian, pemesanan, dan payment gateway.",
    tools: [
      getTool("Laravel"),
      getTool("React JS"),
      getTool("Tailwind CSS"),
      getTool("Figma"),
      getTool("Postman"),
      getTool("Github"),
    ].filter(Boolean),
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Event Bali Starup Camp",
    deskripsi:
      "Website untuk event startup camp di Bali dengan fitur produk popup dan pemesanan otomatis via WA.",
    tools: [
      getTool("Next JS"),
      getTool("React JS"),
      getTool("Tailwind CSS"),
      getTool("Figma"),
      getTool("Github"),
    ].filter(Boolean),
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek7,
    nama: "Website E-commerce",
    deskripsi:
      "Website e-commerce dengan fitur browsing produk, keranjang belanja, dan checkout WA.",
    tools: [
      getTool("Laravel"),
      getTool("Next JS"),
      getTool("React JS"),
      getTool("Tailwind CSS"),
      getTool("Figma"),
      getTool("Github"),
      getTool("Postman"),
    ].filter(Boolean),
    dad: "400",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Website E-commerce Prototype",
    deskripsi:
      "Prototype website e-commerce dengan fitur browsing produk, keranjang belanja, dan checkout.",
    tools: [
      getTool("Laravel"),
      getTool("Next JS"),
      getTool("React JS"),
      getTool("Bootstrap"),
      getTool("Figma"),
    ].filter(Boolean),
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek3,
    nama: "Website Prototype Company Profile Restaurant",
    deskripsi:
      "Website profil perusahaan dengan informasi tentang visi, misi, dan layanan yang ditawarkan.",
    tools: [
      getTool("Laravel"),
      getTool("Next JS"),
      getTool("React JS"),
      getTool("Tailwind CSS"),
      getTool("Figma"),
    ].filter(Boolean),
    dad: "700",
  },
];
