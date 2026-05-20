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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-700 max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gambar */}
            <div className="relative">
              <img
                src={selected.gambar}
                alt={selected.nama}
                className="w-full object-contain max-h-[60vh]"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 bg-black/60 hover:bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-lg transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Detail */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-bold text-white">
                  {selected.nama}
                </h3>
                <span className="bg-violet-700 text-white text-xs font-semibold px-2 py-1 rounded-md flex-shrink-0">
                  PROJECT
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-4">{selected.deskripsi}</p>
              <h2 className="text-sm text-white mb-2">Framework & Tools :</h2>
              <div className="flex flex-wrap gap-2">
                {selected.tools.map((tool) => (
                  <div
                    key={tool.id}
                    className="flex items-center gap-1.5 bg-zinc-800 rounded-lg px-2 py-1"
                  >
                    <img
                      src={tool.gambar}
                      alt={tool.nama}
                      className="w-4 h-4 object-contain"
                    />
                    <span className="text-xs text-zinc-300">{tool.nama}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Project;
