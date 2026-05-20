import React, { useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { listProyek } from "../data ";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Project() {
  const [selected, setSelected] = useState(null);

  return (
    <section>
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
                <div
                  className="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 h-full cursor-pointer hover:border-violet-500/50 transition-colors"
                  onClick={() => setSelected(proyek)}
                >
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
                    <h2 className="text-sm text-white mb-2">
                      Framework & Tools :
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {proyek.tools.map((tool) => (
                        <span
                          key={tool.id}
                          className="text-xs py-1 text-zinc-300 rounded-full"
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

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ animation: "fadeIn 0.2s ease" }}
          onClick={() => setSelected(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

          {/* Content */}
          <div
            className="relative z-10 max-w-4xl w-full"
            style={{
              animation: "popUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-violet-500/20 rounded-2xl blur-xl" />

            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden border border-violet-500/30 shadow-2xl shadow-violet-900/40">
              <img
                src={selected.gambar}
                alt={selected.nama}
                className="w-full h-auto object-contain max-h-[85vh]"
              />

              {/* Top bar overlay */}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/70 to-transparent">
                <span className="bg-violet-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                  PROJECT
                </span>
                <button
                  onClick={() => setSelected(null)}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full w-8 h-8 flex items-center justify-center transition-all hover:scale-110 cursor-pointer border border-white/20"
                >
                  ✕
                </button>
              </div>

              {/* Bottom bar overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-bold text-lg">
                  {selected.nama}
                </h3>
                <p className="text-zinc-400 text-sm mt-0.5 line-clamp-1">
                  {selected.deskripsi}
                </p>
              </div>
            </div>

            {/* Click outside hint */}
            <p className="text-center text-zinc-600 text-xs mt-3">
              Click outside to close
            </p>
          </div>
        </div>
      )}

      {/* Animasi */}
      <style>{`
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes popUp {
    from { opacity: 0; transform: scale(0.85) translateY(20px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }
`}</style>
    </section>
  );
}

export default Project;
