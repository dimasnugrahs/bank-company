import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-gray-200 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <ul className=" md:mt-2 grid grid-cols-1 gap-6 text-slate-700 md:grid-cols-2 flex items-center justify-center">
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Hubungi kami dan tanyakan langsung kebutuhan yang Anda inginkan
            </h2>
            <a
              href="/contact"
              className="flex items-center justify-center bg-slate-900 text-white text-center mx-40 h-16 px-4 py-2 rounded-md text-xl font-medium  hover:bg-slate-800"
            >
              Kontak Kami
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
