import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DataImage from "./data ";
import { listTools, listProyek } from "./data ";
import CV from "../public/assets/CV/CV_krisnanda.png";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const body = `Hi Bagus,\n\n${message}\n\n---\nFrom: ${name}${email ? "\nEmail: " + email : ""}`;
    const mailto = `mailto:baguskrisna424@gmail.com?subject=${encodeURIComponent(subject || "General Inquiry")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };
  return (
    <>
      {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl mx-auto sm:mx-0">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 border border-violet-600 rounded-4xl"
              loading="lazy"
            />
            <q> Consistency is the key </q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, I'm Krisnanda</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Passionate about Full-Stack Developers & UI/UX Design.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href={CV}
              className="bg-violet-600 p-4 rounded-2xl hover:bg-violet-800"
              download="CV_krisnanda.png"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              My Projects <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="mt-10 w-full max-w-[250px] md:max-w-[400px] h-auto mx-auto md:ml-auto animate__animated animate__fadeInUp animate__delay-3s border border-violet-600 rounded-bl-full"
          loading="lazy"
        />
      </div>
      {/* Hero Section */}

      {/* About Section */}
      <div className="tentang mt-10 py-10" id="tentang">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg animate__animated animate__fadeInUp animate__delay-3s"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src={DataImage.HeroImage}
            alt="image"
            className="w-12  mb-10 sm:hidden border border-violet-600 rounded-4xl"
            loading="lazy"
          />
          <p
            className="text-base/loose mb-10 text-justify"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            My name is Dewa Gede Mas Bagus Krisnanda, commonly known as
            Krisnanda. I am passionate about full-stack development and UI/UX
            design, with a strong interest in creating digital experiences that
            are both functional and visually engaging. I continuously strive to
            enhance my technical and creative skills to build innovative,
            user-focused solutions that combine clean design with powerful
            performance.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="image"
              className="w-12 border border-violet-600 rounded-4xl  sm:block hidden"
              loading="lazy"
            />
          </div>
        </div>

        {/* Tools */}
        <div className="tools mt-20">
          <h1
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Tools I use
          </h1>
          <p
            className="text-base/loose text-center opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Here are some of the Framework & Tools I usually use.
          </p>

          <div className="tool-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-2.5 border border-violet-900 rounded-lg
        hover:bg-zinc-800 group"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                key={tool.id}
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-10 h-10 rounded-lg bg-zinc-700 p-1 object-contain group-hover:bg-zinc-900 flex-shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <h4 className="font-bold text-sm leading-tight truncate">
                    {tool.nama}
                  </h4>
                  <p className="opacity-50 text-xs mt-0.5">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Tools */}
      </div>
      {/* About Section */}

      {/* Proyek Section */}
      <div className="proyek mt-20 py-10" id="proyek">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Projects
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Here are some of the projects I've created.
        </p>

        <div
          className="mt-14"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {listProyek.map((proyek) => (
              <SwiperSlide key={proyek.id}>
                <div className="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={proyek.gambar}
                      alt={proyek.nama}
                      loading="lazy"
                      className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-violet-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                      PROJECT
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-4 leading-snug">
                      {proyek.nama}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">
                      {proyek.deskripsi}
                    </p>
                    <h2 className="text-sm  text-white mb-2">
                      Framework & Tools :
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {proyek.tools.map((tool) => (
                        <span
                          key={tool.id}
                          className="text-xs py-1   text-zinc-300 rounded-full"
                        >
                          <img
                            src={tool.gambar}
                            alt={tool.nama}
                            className="w-5 h-5 object-contain"
                            loading="lazy"
                          />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Proyek Section */}

      {/* Kontak Section */}
      <div className="kontak py-20 sm:px-10 px-4" id="kontak">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center sm:items-start mb-12">
            <div className="flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-xs text-violet-400 uppercase tracking-widest">
                Available for work
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-bold text-zinc-100 leading-tight mb-3 text-center sm:text-left"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Let's <span className="text-violet-500">build</span> something
              <br className="hidden sm:block" /> together
            </h1>
            <p
              className="text-zinc-500 text-base max-w-md text-center sm:text-left"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Have a project in mind? Fill out the form and I'll get back to you
              within 24 hours.
            </p>
          </div>

          {/* Grid */}
          <div
            className="grid sm:grid-cols-[1fr_1.4fr] grid-cols-1 gap-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            {/* Left — Info Cards */}
            <div className="hidden sm:flex flex-col gap-4">
              {[
                {
                  icon: "✉️",
                  label: "Email",
                  value: "baguskrisna424@gmail.com",
                },
                { icon: "📍", label: "Location", value: "Bali, Indonesia" },
                {
                  icon: "⏱️",
                  label: "Response time",
                  value: "Within 24 hours",
                },
              ].map(({ icon, label, value }) => (
                <div
                  key={label}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex items-start gap-4 hover:border-violet-500/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-lg flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600 uppercase tracking-wider mb-1">
                      {label}
                    </p>
                    <p className="text-sm text-zinc-300 font-medium">{value}</p>
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/25 rounded-full px-4 py-2 w-fit mt-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-green-400">
                  Open to opportunities
                </span>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-zinc-500 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/20 transition"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-zinc-500 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/20 transition"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-5">
                <label className="text-xs text-zinc-500 uppercase tracking-wider">
                  Subject
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-400 outline-none focus:border-violet-500/60 transition appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a topic...
                  </option>
                  <option value="Project Collaboration">
                    Project Collaboration
                  </option>
                  <option value="Freelance Work">Freelance Work</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label className="text-xs text-zinc-500 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project, goals, or ideas..."
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/20 transition resize-none"
                />
              </div>

              <button
                onClick={handleSend}
                className="w-full bg-violet-700 hover:bg-violet-600 text-white font-semibold rounded-xl py-3.5 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Send Message →
              </button>
              <p className="text-center text-xs text-zinc-600 mt-3">
                Opens Gmail — no data stored anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Kontak Section */}
    </>
  );
}

export default App;
