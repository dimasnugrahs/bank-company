import React from "react";

const ServicesSection = () => {
  const products = [
    {
      name: "Tabungan",
      subtitle: "Tabungan Anda, Masa Depan Anda.",
      description:
        "Nikmati kemudahan menabung dengan produk tabungan kami yang dirancang untuk membantu Anda mencapai setiap tujuan finansial, mulai dari kebutuhan sehari-hari hingga rencana jangka panjang.",
    },
    {
      name: "Deposito",
      subtitle: "Investasi Aman, Masa Depan Pasti.",
      description:
        "Nikmati keuntungan dari bunga yang lebih tinggi dengan produk deposito kami, solusi investasi yang aman dan stabil untuk masa depan finansial Anda. Dengan jangka waktu yang fleksibel sesuai kebutuhan, deposito kami menawarkan bunga kompetitif yang membantu dana Anda tumbuh tanpa risiko.",
    },
    {
      name: "Kredit",
      subtitle: "Kredit yang Tepat, Solusi Keuangan Anda.",
      description:
        "Kami hadir untuk membantu mewujudkan impian Anda dengan produk kredit yang fleksibel dan mudah diakses. Baik untuk kebutuhan pribadi, pendidikan, renovasi rumah, atau modal usaha, kami menyediakan berbagai jenis kredit dengan suku bunga yang kompetitif dan proses pengajuan yang sederhana.",
    },
  ];
  return (
    <div>
      <div className="bg-gray-200 px-6 pt-10 pb-24">
        <div id="features" className="mx-auto max-w-6xl">
          <p className="text-center text-base  leading-7 text-primary-500">
            Produk Terbaik Kami.
          </p>
          <h2 className="text-center font-display text-2xl md:text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Solusi perbankan yang aman, nyaman dan terpercaya.
          </h2>
          <ul className="mt-8 md:mt-16 px-10 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
            {products.map((product, key) => (
              <li
                key={key}
                className="rounded-xl bg-white px-6 py-8 shadow-sm hover:shadow-lg"
              >
                <a href="/pricing" className="group">
                  <img
                    src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                    alt=""
                    className="mx-auto h-10 w-10"
                  />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    {product.name}
                  </h3>
                  <p className="mt-1.5 mb-4 text-sm leading-6 text-secondary-500 italic">
                    {product.subtitle}
                  </p>
                  <p className="hidden lg:block mt-1.5 text-sm leading-6 text-secondary-500 text-justify px-4">
                    {product.description}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
