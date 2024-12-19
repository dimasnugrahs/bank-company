import React, { useEffect, useState } from "react";

const ReportDetail = () => {
  const pdfFile = "/sample.pdf"; // Path file PDF di folder public

  return (
    <div className=" lg:mx-48 sm:mx-0 mt-10 mb-10">
      <h1 className="text-xl tracking-tight font-bold text-gray-900 mb-2">
        Laporan Keuangan Example 2024
      </h1>
      <iframe
        src={pdfFile}
        title="PDF Viewer"
        width="80%"
        height="700px"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default ReportDetail;
