import React from "react";

const WhyUs = () => {
  const priorities = [
    {
      title: "Keamanan Terjamin",
      subtitle: "Kepercayaan Anda adalah Tanggung Jawab Kami",
      description:
        "Dengan teknologi keamanan tingkat tinggi dan sistem enkripsi terbaru, kami menjaga setiap transaksi Anda tetap aman. Komitmen kami adalah memberikan perlindungan terbaik bagi data dan aset Anda, memastikan pengalaman perbankan yang bebas dari risiko.",
    },
    {
      title: "Layanan Nasabah yang Proaktif",
      subtitle: "Siap Membantu Kapanpun Anda Membutuhkan",
      description:
        "Kami menyediakan layanan nasabah yang responsif dan siap memberikan solusi tepat bagi kebutuhan Anda. Dengan layanan 24/7, kami hadir untuk memastikan bahwa pengalaman perbankan Anda selalu lancar, baik dalam konsultasi produk maupun bantuan transaksi.",
    },
    {
      title: "Solusi Keuangan Inovatif",
      subtitle: "Produk Lengkap untuk Semua Tahapan Hidup",
      description:
        "Dari tabungan hingga kredit usaha, produk kami dirancang untuk memenuhi kebutuhan finansial Anda secara fleksibel dan mudah diakses. Kami terus mengembangkan layanan baru yang memudahkan Anda dalam mencapai tujuan keuangan, apapun targetnya.",
    },
    {
      title: "Mendukung Pertumbuhan Finansial Anda",
      subtitle: "Berkembang Bersama Menuju Masa Depan Cerah",
      description:
        "Kami berkomitmen untuk menjadi mitra terpercaya dalam perjalanan finansial Anda. Dengan layanan konsultasi finansial dan produk investasi yang transparan, kami membantu Anda merencanakan masa depan yang stabil dan sukses, baik secara personal maupun bisnis.",
    },
  ];
  return (
    <div>
      <div className="px-6 pt-10 pb-24 ">
        <div className="mx-auto max-w-6xl ">
          <p className="text-center text-base  leading-7 text-primary-500">
            Prioritas Terbaik Kami.
          </p>
          <h2 className="text-center font-display text-2xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Kenapa harus memilih BPR Lorem Ipsum?
          </h2>
          <ul className="mt-8 md:mt-16 px-10 grid grid-cols-1 gap-6 text-slate-700 md:grid-cols-2">
            {priorities.map((priority, key) => (
              <li
                key={key}
                className="rounded-xl bg-white px-6 py-8 shadow-sm hover:shadow-lg border"
              >
                <a href="/pricing" className="group">
                  <img
                    src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                    alt=""
                    className="h-10 w-10 ml-4"
                  />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500 px-4">
                    {priority.title}
                  </h3>
                  <p className="mt-1.5 mb-4 text-sm leading-6 text-secondary-500 italic px-4">
                    {priority.subtitle}
                  </p>
                  <p className="hidden lg:block mt-1.5 text-sm leading-6 text-secondary-500 text-justify px-4">
                    {priority.description}
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

export default WhyUs;
