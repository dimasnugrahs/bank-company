import React, { useEffect, useState } from "react";

const ReportDetail = () => {
  const pdfFile = "/sample.pdf"; // Path file PDF di folder public

  const handleOpenPDF = () => {
    window.open("/sample.pdf", "_blank");
  };

  return (
    <div className=" items-center py-8 px-6 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
      <div className="mb-8">
        <h1 className="mb-8 font-bold text-lg">
          Laporan Publikasi September 2024
        </h1>
        <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
          <li class="pb-3 sm:pb-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
              <div class="flex-shrink-0"></div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate ">
                  Laporan Posisi Keuangan
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                <button
                  onClick={handleOpenPDF}
                  className="btn bg-slate-700 text-white border-0 rounded-sm px-5 py-1 hover:bg-slate-600"
                >
                  Lihat PDF
                </button>
              </div>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
              <div class="flex-shrink-0"></div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate ">
                  Laporan Laba Rugi
                </p>
              </div>
              <button
                onClick={handleOpenPDF}
                className="btn bg-slate-700 text-white border-0 rounded-sm px-5 py-1 hover:bg-slate-600"
              >
                Lihat PDF
              </button>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
              <div class="flex-shrink-0"></div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate ">
                  Laporan Kualitas Aset Produktif
                </p>
              </div>
              <button
                onClick={handleOpenPDF}
                className="btn bg-slate-700 text-white border-0 rounded-sm px-5 py-1 hover:bg-slate-600"
              >
                Lihat PDF
              </button>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
              <div class="flex-shrink-0"></div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate ">
                  Laporan Komitmen Kontijensi
                </p>
              </div>
              <button
                onClick={handleOpenPDF}
                className="btn bg-slate-700 text-white border-0 rounded-sm px-5 py-1 hover:bg-slate-600"
              >
                Lihat PDF
              </button>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
              <div class="flex-shrink-0"></div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate ">
                  Laporan Informasi Lainnya
                </p>
              </div>
              <button
                onClick={handleOpenPDF}
                className="btn bg-slate-700 text-white border-0 rounded-sm px-5 py-1 hover:bg-slate-600"
              >
                Lihat PDF
              </button>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse"></div>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h1 className="mb-8 font-bold text-lg">
          Laporan Publikasi Januari 2025
        </h1>
        <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
          <li class="pb-3 sm:pb-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
              <div class="flex-shrink-0"></div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate ">
                  Laporan Posisi Keuangan
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                <button
                  onClick={handleOpenPDF}
                  className="btn bg-slate-700 text-white border-0 rounded-sm px-5 py-1 hover:bg-slate-600"
                >
                  Lihat PDF
                </button>
              </div>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
              <div class="flex-shrink-0"></div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate ">
                  Laporan Laba Rugi
                </p>
              </div>
              <button
                onClick={handleOpenPDF}
                className="btn bg-slate-700 text-white border-0 rounded-sm px-5 py-1 hover:bg-slate-600"
              >
                Lihat PDF
              </button>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
              <div class="flex-shrink-0"></div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate ">
                  Laporan Kualitas Aset Produktif
                </p>
              </div>
              <button
                onClick={handleOpenPDF}
                className="btn bg-slate-700 text-white border-0 rounded-sm px-5 py-1 hover:bg-slate-600"
              >
                Lihat PDF
              </button>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
              <div class="flex-shrink-0"></div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate ">
                  Laporan Komitmen Kontijensi
                </p>
              </div>
              <button
                onClick={handleOpenPDF}
                className="btn bg-slate-700 text-white border-0 rounded-sm px-5 py-1 hover:bg-slate-600"
              >
                Lihat PDF
              </button>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
              <div class="flex-shrink-0"></div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate ">
                  Laporan Informasi Lainnya
                </p>
              </div>
              <button
                onClick={handleOpenPDF}
                className="btn bg-slate-700 text-white border-0 rounded-sm px-5 py-1 hover:bg-slate-600"
              >
                Lihat PDF
              </button>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReportDetail;
