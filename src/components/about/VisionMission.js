import React from "react";

const VisionMission = () => {
  const priorities = [
    {
      title: "VISI",
      subtitle: "Kepercayaan Anda adalah Tanggung Jawab Kami",
      description:
        "Dengan teknologi keamanan tingkat tinggi dan sistem enkripsi terbaru, kami menjaga setiap transaksi Anda tetap aman. Komitmen kami adalah memberikan perlindungan terbaik bagi data dan aset Anda, memastikan pengalaman perbankan yang bebas dari risiko.",
    },
    {
      title: "MISI",
      subtitle: "Siap Membantu Kapanpun Anda Membutuhkan",
      description:
        "Kami menyediakan layanan nasabah yang responsif dan siap memberikan solusi tepat bagi kebutuhan Anda. Dengan layanan 24/7, kami hadir untuk memastikan bahwa pengalaman perbankan Anda selalu lancar, baik dalam konsultasi produk maupun bantuan transaksi.",
    },
  ];
  return (
    <div className="bg-gray-200 px-6 pt-10 pb-24 ">
      <div className="mx-auto max-w-6xl ">
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
  );
};

export default VisionMission;
