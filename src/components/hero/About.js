import React from "react";

const About = () => {
  return (
    <div className="my-20">
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Construction Worker"
            className="rounded-lg shadow-lg w-[500px] h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left px-6">
          <p className="text-sm text-gray-600 uppercase">
            Established Since 2000
          </p>
          <h2 className="text-4xl font-bold text-blue-900 mt-2">
            Melayani Anda <br />
            <span className="text-yellow-600">lebih dari 24 years.</span>
          </h2>
          <p className="text-gray-500 mt-4 leading-relaxed">
            Lembaga perbankan yang telah melayani masyarakat selama lebih dari
            24 tahun. Dengan pengalaman yang luas dan komitmen untuk memberikan
            layanan berkualitas, kami menyediakan berbagai solusi keuangan yang
            dirancang untuk memenuhi kebutuhan nasabah kami.
          </p>
          <button className="mt-6 bg-yellow-600 text-white font-bold py-2 px-6 rounded-full hover:bg-yellow-700 transition duration-300">
            Best Offer
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
