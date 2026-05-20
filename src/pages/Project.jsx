import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { listProyek } from "../data ";
import { Swiper, SwiperSlide } from "swiper/react";

function Project() {
  return (
    <section>
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
    </section>
  );
}

export default Project;
{
  /* Proyek Section */
}
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
              <p className="text-sm text-gray-400 mb-4">{proyek.deskripsi}</p>

              <h2 className="text-sm  text-white mb-2">Framework & Tools :</h2>
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
</div>;
{
  /* Proyek Section */
}
