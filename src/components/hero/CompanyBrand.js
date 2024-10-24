import React from "react";

const CompanyBrand = () => {
  return (
    <div>
      <section class="bg-white ">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 ">
              Fleksibilitas, Inovasi dan kepercayaan
            </h2>
            <p class="mb-4">
              Bank Lorem Ipsum adalah mitra keuangan yang andal. Inovator dalam
              layanan perbankan dan penyedia solusi keuangan. Cukup fleksibel
              untuk memenuhi kebutuhan harian Anda, namun cukup kuat untuk
              mendukung impian besar Anda.
            </p>
            <p>
              Bank Lorem Ipsum hadir dengan layanan yang sederhana, cepat, dan
              mudah diakses, namun tetap berkomitmen untuk memberikan solusi
              keuangan yang lengkap dan komprehensif, sesuai dengan skala
              kebutuhan Anda.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            ></img>
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyBrand;
