import React from "react";
import { listTools } from "../data ";
function Tools() {
  return (
    <div>
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
  );
}

export default Tools;
