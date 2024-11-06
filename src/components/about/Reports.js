import React from "react";

const Reports = () => {
  const reports = [
    {
      name: "Laporan Keuangan",
      subtitle:
        "Laporan keuangan pada bank adalah laporan yang mencatat kondisi dan aktivitas keuangan bank dalam periode tertentu",
    },
    {
      name: "Laporan Tata Kelola",
      subtitle:
        "Laporan tata kelola pada bank adalah laporan yang memaparkan penerapan prinsip-prinsip tata kelola yang baik (Good Corporate Governance/GCG) dalam operasional bank.",
    },
    {
      name: "Struktur Organisasi",
      subtitle:
        "Struktur organisasi pada bank adalah susunan posisi dan fungsi kerja yang menentukan alur tanggung jawab dan koordinasi antar-divisi dalam bank.",
    },
  ];
  return (
    <div>
      <div className="px-6 pt-10 pb-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-2xl  font-bold tracking-tight text-slate-900 md:text-2xl">
            Laporan Perusahaan
          </h2>
          <ul className="mt-8 md:mt-16 px-10 grid grid-cols-1 gap-6 text-center  text-slate-700 md:grid-cols-3">
            {reports.map((report, key) => (
              <li
                key={key}
                className="rounded-xl bg-gray-400 text-white px-6 py-8 shadow-sm hover:shadow-lg"
              >
                <a href="/pricing" className="group">
                  <img
                    src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                    alt=""
                    className="mx-auto h-10 w-10"
                  />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    {report.name}
                  </h3>
                  <p className="mt-1.5 mb-4 text-sm leading-6 text-secondary-500 italic">
                    {report.subtitle}
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

export default Reports;
