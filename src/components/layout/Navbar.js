import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menus = [
    { name: "Home", href: "/", subMenu: null },
    { name: "Tentang Kami", href: "/about", subMenu: null },
    {
      name: "Layanan Kami",
      href: null,
      subMenu: [
        { name: "Tabungan", href: "/about" },
        { name: "Deposito", href: "/about" },
        { name: "Kredit", href: "/about" },
      ],
    },
    {
      name: "Laporan",
      href: null,
      subMenu: [
        { name: "Laporan Keuangan", href: "/about" },
        { name: "Laporan 1", href: "/about" },
        { name: "Laporan 2", href: "/about" },
      ],
    },
    { name: "Blog", href: "/blog", subMenu: null },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-10 transition-colors duration-300 ease-in-out  ${
        navbarBg
          ? "bg-slate-900 md:bg-transparent md:bg-opacity-70 md:backdrop-blur-md"
          : "bg-slate-900 md:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-white font-bold">Logo</h1>
          </div>

          <div className="hidden md:flex flex-grow justify-center space-x-4">
            {menus.map((menu, index) => (
              <div key={index} className="relative group">
                {menu.subMenu === null ? (
                  <a
                    href={menu.href}
                    className="text-slate-300 px-4 py-2 rounded-md text-sm font-medium hover:text-white"
                  >
                    {menu.name}
                  </a>
                ) : (
                  <a
                    href={menu.href}
                    className="text-slate-300 px-4 py-2 rounded-md text-sm font-medium hover:text-white"
                  >
                    {menu.name}
                  </a>
                )}
                {/* Sub Menu */}
                {menu.subMenu && (
                  <div className="absolute left-0 mt-4 w-64 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ">
                    <div className="absolute top-0 left-4 -mt-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
                    {menu.subMenu.map((sub, subIndex) => (
                      <a
                        href={sub.href}
                        key={subIndex}
                        className="block px-6 py-4 text-slate-900 hover:font-semibold border-solid border-b-2 border-grey-500"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="">
            {/* <a
              href="/"
              className="text-slate-300 px-4 py-2 rounded-md text-sm font-medium hover:text-white"
            >
              Indonesia
            </a> */}
            <button className="text-slate-300 px-4 py-2 rounded-md text-sm font-medium hover:text-white">
              Kontak Kami
            </button>
            {/* <button className="text-slate-300 px-4 py-2 rounded-md text-sm font-medium hover:text-white">
              Dark Mode
            </button> */}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu versi mobile */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menus.map((menu, index) => (
              <div key={index} className="relative">
                {menu.subMenu === null ? (
                  <a
                    href={menu.href}
                    className="text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {menu.name}
                  </a>
                ) : (
                  <div className="group">
                    <button className="text-white block px-3 py-2 rounded-md text-base font-medium">
                      {menu.name}
                    </button>
                    <div className="ml-4">
                      {menu.subMenu.map((sub, subIndex) => (
                        <a
                          href={sub.href}
                          key={subIndex}
                          className="block px-4 py-2 text-gray-200"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
