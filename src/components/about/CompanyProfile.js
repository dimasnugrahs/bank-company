import React from "react";

const CompanyProfile = () => {
  return (
    <div className="container mx-auto px-6 lg:px-36">
      <div className="gap-12 items-center py-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16">
        <div className="lg:w-full flex justify-center mx-auto">
          <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
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
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
