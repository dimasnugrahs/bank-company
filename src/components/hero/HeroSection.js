import React from "react";
import background from "../../assets/images/icon-background.png";
import backgroundDesktop from "../../assets/images/background.jpg";
import backgroundMobile from "../../assets/images/desktop-background.jpg";

const HeroSection = () => {
  return (
    <div className="container mx-auto">
      {/* Tampilan Desktop */}
      <div className="hidden lg:block">
        <div
          style={{ backgroundImage: `url(${backgroundMobile})` }}
          className="bg-cover bg-center h-screen w-full relative"
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="flex items-center justify-center h-full relative px-36">
            <div className="mr-auto place-self-center col-span-12 text-center lg:text-left ">
              <h1 className="max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl xl:text-6xl text-white">
                Menyediakan Solusi Keuangan yang Tepat untuk Masa Depan Anda
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">
                Layanan perbankan yang inovatif dan terpercaya, dirancang untuk
                kebutuhan finansial Anda di setiap tahap kehidupan.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Mulai Sekarang
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Kontak Kami
              </a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-4  md:flex">
              <img
                src={background}
                className="w-[350px] h-auto"
                alt="mockup"
              ></img>
            </div>
          </div>
        </div>
      </div>

      {/* Tampilan Mobile */}
      <div className="lg:hidden">
        <div
          style={{ backgroundImage: `url(${backgroundMobile})` }}
          className="bg-cover bg-center h-screen w-full relative"
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="flex items-center justify-center h-full relative z-10">
            <div className="mr-auto place-self-center col-span-12 text-center lg:text-left ">
              <h1 className="max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl xl:text-6xl text-white">
                Menyediakan Solusi Keuangan yang Tepat untuk Masa Depan Anda
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">
                Layanan perbankan yang inovatif dan terpercaya, dirancang untuk
                kebutuhan finansial Anda di setiap tahap kehidupan.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Mulai Sekarang
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Kontak Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <>
    //   <section
    //     style={{ backgroundImage: `url(${Mobile})` }} // Menggunakan inline style
    //     className="bg-cover bg-center h-screen relative" // Menambahkan relative agar overlay bisa diatur posisinya
    //   >
    //     {/* Overlay */}
    //     <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
    //     {/* Overlay hitam dengan opacity */}
    //     <div className="flex items-center justify-center h-full relative z-10">
    //       {" "}
    //       {/* Menambahkan z-10 untuk mengangkat konten di atas overlay */}
    //       <div className="text-white text-3xl">Hello</div>
    //     </div>
    //   </section>
    // </>
    // <section
    //   className={`h-screen bg-cover bg-center bg-no-repeat md:bg-none`}
    //   style={{
    //     backgroundImage: `url(${Mobile})`, // Hanya terlihat di layar mobile
    //   }}
    // >
    //   <div className="grid max-w-screen-xl px-4 pt-60 md:pt-32 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
    //     <div className="mr-auto place-self-center lg:col-span-7 text-center lg:text-left lg:pb-0">
    //       <h1 className="max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl xl:text-6xl dark:text-white">
    //         Menyediakan Solusi Keuangan yang Tepat untuk Masa Depan Anda
    //       </h1>
    //       <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
    //         Layanan perbankan yang inovatif dan terpercaya, dirancang untuk
    //         kebutuhan finansial Anda di setiap tahap kehidupan.
    //       </p>
    //       <a
    //         href="#"
    //         className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
    //       >
    //         Mulai Sekarang
    //         <svg
    //           className="w-5 h-5 ml-2 -mr-1"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fill-rule="evenodd"
    //             d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
    //             clip-rule="evenodd"
    //           ></path>
    //         </svg>
    //       </a>
    //       <a
    //         href="#"
    //         className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
    //       >
    //         Kontak Kami
    //       </a>
    //     </div>
    //     <div className="hidden lg:mt-0 lg:col-span-4  md:flex">
    //       <img src={background} className="w-[400px] h-auto" alt="mockup"></img>
    //     </div>
    //   </div>
    // </section>
  );
};

export default HeroSection;
