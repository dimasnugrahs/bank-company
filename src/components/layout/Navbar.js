// Navbar.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import iconCompany from "../../assets/images/logo-company.png";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);

  const url = process.env.REACT_APP_API_URL;
  // const [product, setProducts] = useState([]);

  const getProduct = async () => {
    try {
      const response = await axios.get(url + "/products");
      const products = response.data;

      // Map data produk menjadi format yang dibutuhkan
      const productSubMenu = products.map((item) => ({
        name: item.title, // Nama produk
        to: `/products/${item.id}`, // Contoh URL dinamis berdasarkan ID produk
      }));

      // Perbarui menu dengan subMenu produk
      setMenus((prevMenus) =>
        prevMenus.map((menu) =>
          menu.name === "Layanan Kami"
            ? { ...menu, subMenu: productSubMenu }
            : menu
        )
      );
    } catch (err) {
      console.error("Gagal mengambil data produk:", err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

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

  // const menus = [
  //   { name: "Home", to: "/", subMenu: null },
  //   { name: "Tentang Kami", to: "/about", subMenu: null },
  //   {
  //     name: "Layanan Kami",
  //     to: "#",
  //     subMenu: [
  //       { name: "Tabungan", to: "/services" },
  //       { name: "Deposito", to: "/services" },
  //       { name: "Kredit", to: "/services" },
  //     ],
  //   },
  //   {
  //     name: "Laporan",
  //     to: "#",
  //     subMenu: [
  //       { name: "Laporan Keuangan", to: "/report" },
  //       { name: "Laporan 1", to: "/report" },
  //       { name: "Laporan 2", to: "/report" },
  //     ],
  //   },
  //   { name: "Blog", to: "/blog", subMenu: null },
  // ];

  const [menus, setMenus] = useState([
    { name: "Home", to: "/", subMenu: null },
    { name: "Tentang Kami", to: "/about", subMenu: null },
    {
      name: "Layanan Kami", // Ini akan menampung subMenu dari API product
      to: "#",
      subMenu: [],
    },
    // {
    //   name: "Laporan Perusahaan", // Ini akan menampung subMenu dari API product
    //   to: "#",
    //   subMenu: [],
    // },
    { name: "Laporan Publikasi", to: "/report", subMenu: null },
    { name: "Blog", to: "/blog", subMenu: null },
  ]);

  return (
    <nav
      className={` px-6 lg:px-36 fixed top-0 w-full z-20 transition-colors duration-300 ease-in-out md:${
        navbarBg ? "bg-slate-900" : "bg-transparent"
      } ${navbarBg || isOpen ? "bg-slate-900" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-4 lg:py-0">
          <ul>
            <Link to="/" className="flex-shrink-0">
              <img src={iconCompany} alt="Icon" className="max-w-10"></img>
            </Link>
          </ul>

          <div className="hidden lg:flex flex-grow justify-center space-x-4 ">
            {menus.map((menu, index) => (
              <div key={index} className="relative group py-6">
                <ul>
                  {menu.subMenu ? (
                    <Link
                      to="#"
                      onClick={(e) => e.preventDefault()}
                      className="text-slate-300 px-4 py-2 rounded-md text-sm font-medium hover:text-white"
                    >
                      {menu.name}
                    </Link>
                  ) : (
                    <Link
                      to={menu.to}
                      className="text-slate-300 px-4 py-2 rounded-md text-sm font-medium hover:text-white"
                    >
                      {menu.name}
                    </Link>
                  )}

                  {/* Sub Menu */}
                  {menu.subMenu && (
                    <div className="absolute left-0 mt-4 w-64 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                      <div className="absolute top-0 left-4 -mt-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
                      {menu.subMenu.map((sub, subIndex) => (
                        <Link
                          to={sub.to}
                          key={subIndex}
                          className="block px-6 py-4 text-slate-900 hover:font-semibold border-solid border-b border-grey-500"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </ul>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex">
            <ul>
              {/* <a
              to="/"
              className="text-slate-300 px-4 py-2 rounded-md text-sm font-medium hover:text-white"
            >
              Indonesia
            </a> */}
              <Link
                to="/contact"
                className="text-slate-300 px-4 py-2 rounded-md text-sm font-medium hover:text-white"
              >
                Kontak Kami
              </Link>
            </ul>
            {/* <button className="text-slate-300 px-4 py-2 rounded-md text-sm font-medium hover:text-white">
              Dark Mode
            </button> */}
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none z"
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
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            <ul>
              {menus.map((menu, index) => (
                <div key={index} className="relative ">
                  {menu.subMenu === null ? (
                    <Link
                      to={menu.to}
                      className="text-slate-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {menu.name}
                    </Link>
                  ) : (
                    <div className="group">
                      <button className="text-slate-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        {menu.name}
                      </button>
                      <div className="ml-4">
                        {menu.subMenu.map((sub, subIndex) => (
                          <Link
                            to={sub.to}
                            key={subIndex}
                            className="block px-4 py-2 text-slate-400 hover:text-white font-extralight"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="text-slate-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Kontak Kami
              </Link>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
