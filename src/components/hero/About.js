import React from "react";

const About = () => {
  return (
    <div className="container px-6 lg:px-36">
      <div className="gap-12 items-center py-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16">
        <div className="lg:w-full flex justify-center mx-auto">
          <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/80YB3gJe1pc?si=NfsqZ1127Cqk2WOH"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="lg:w-5/6 mt-10 lg:mt-0 text-center lg:text-left mx-auto">
          <p className="text-sm text-gray-600 uppercase font-semibold mb-2">
            Established Since 2000
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2 leading-tight">
            Melayani Anda <br />
            <span className="text-yellow-600">lebih dari 24 tahun.</span>
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed text-justify lg:text-left">
            Lembaga perbankan yang telah melayani masyarakat selama lebih dari
            24 tahun. Dengan pengalaman yang luas dan komitmen untuk memberikan
            layanan berkualitas, kami menyediakan berbagai solusi keuangan yang
            dirancang untuk memenuhi kebutuhan nasabah kami.
          </p>
          <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-8 rounded-lg transition duration-300 shadow-lg">
            Best Offer
          </button>
        </div>
      </div>
    </div>
    // <section className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 py-20 px-20">
    //   <div className="md:w-1/2 flex justify-center">
    //     <iframe
    //       className="rounded-lg shadow-lg"
    //       width="560"
    //       height="315"
    //       src="https://www.youtube.com/embed/TboWOSW7qCI?si=g9bwcKiLAQgkldfW"
    //       title="YouTube video player"
    //       frameborder="0"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //       referrerpolicy="strict-origin-when-cross-origin"
    //       allowfullscreen
    //     ></iframe>
    //   </div>

    //   <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left px-6">
    //     <p className="text-sm text-gray-600 uppercase font-semibold">
    //       Established Since 2000
    //     </p>
    //     <h2 className="text-4xl font-bold text-blue-900 mt-2">
    //       Melayani Anda <br />
    //       <span className="text-yellow-600">lebih dari 24 years.</span>
    //     </h2>
    //     <p className="text-gray-500 mt-4 leading-relaxed text-justify">
    //       Lembaga perbankan yang telah melayani masyarakat selama lebih dari 24
    //       tahun. Dengan pengalaman yang luas dan komitmen untuk memberikan
    //       layanan berkualitas, kami menyediakan berbagai solusi keuangan yang
    //       dirancang untuk memenuhi kebutuhan nasabah kami.
    //     </p>
    //     <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg  transition duration-300">
    //       Best Offer
    //     </button>
    //   </div>
    // </section>
  );
};

export default About;
