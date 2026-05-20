import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DataImage from "../data ";
import CV from "/assets/CV_krisnanda.png";

function HomePage() {
  return (
    <section>
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
          <p className="text-base/loose mb-6 opacity-80">
            Full-Stack Developers | UI/UX Design | Product Management
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
      </div>
      {/* About Section */}
    </section>
  );
}

export default HomePage;
{
  /* Hero Section */
}
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
</div>;
{
  /* Hero Section */
}
