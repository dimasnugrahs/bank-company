import React from "react";

const Review = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-between p-8">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Construction Worker"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
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
            Dengan Pengalaman Lebih Dari 24 Tahun, Kami Berspesialisasi Dalam
            Memberikan Bahan Proyek Konstruksi Berkualitas Tinggi Di Berbagai
            Sektor, Termasuk Perumahan, Komersial, Industri, Dan Infrastruktur.
          </p>
          <button className="mt-6 bg-yellow-600 text-white font-bold py-2 px-6 rounded-full hover:bg-yellow-700 transition duration-300">
            Best Offer
          </button>
        </div>
      </section>
    </div>
  );
};

export default Review;
