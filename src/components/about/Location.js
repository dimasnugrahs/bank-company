import React from "react";

const Location = () => {
  return (
    <div className="mx-auto max-w-6xl justify-center items-center py-24">
      <h2 className="text-center font-display text-2xl mb-6 font-bold tracking-tight text-slate-900 md:text-2xl">
        Lokasi Kantor Pusat BPR Lorem Ipsum
      </h2>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.1513832889173!2d115.25319477456691!3d-8.581439787091172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23fc44bead20f%3A0x7f46cc8f88f1fec4!2sPT.%20BPR%20Baskara%20Dewata!5e0!3m2!1sen!2sid!4v1730901223735!5m2!1sen!2sid"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default Location;
