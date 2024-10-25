import React from "react";

const About = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 py-20 px-20">
      <div className="md:w-1/2 flex justify-center">
        <iframe
          className="rounded-lg shadow-lg"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TboWOSW7qCI?si=g9bwcKiLAQgkldfW"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left px-6">
        <p className="text-sm text-gray-600 uppercase font-semibold">
          Established Since 2000
        </p>
        <h2 className="text-4xl font-bold text-blue-900 mt-2">
          Melayani Anda <br />
          <span className="text-yellow-600">lebih dari 24 years.</span>
        </h2>
        <p className="text-gray-500 mt-4 leading-relaxed text-justify">
          Lembaga perbankan yang telah melayani masyarakat selama lebih dari 24
          tahun. Dengan pengalaman yang luas dan komitmen untuk memberikan
          layanan berkualitas, kami menyediakan berbagai solusi keuangan yang
          dirancang untuk memenuhi kebutuhan nasabah kami.
        </p>
        <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg  transition duration-300">
          Best Offer
        </button>
      </div>
    </section>
  );
};

export default About;
