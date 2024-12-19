import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const [products, setProducts] = useState([]);

  const url = process.env.REACT_APP_API_URL;

  const getProduct = async () => {
    try {
      const response = await axios.get(url + "/products");
      console.log("response", response);
      const product = response.data;
      console.log("product", product);
      setProducts(product);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="bg-gray-200 px-6 pt-10 pb-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-base  leading-7 text-primary-500">
          Produk Terbaik Kami.
        </p>
        <h2 className="text-center font-display text-2xl  font-bold tracking-tight text-slate-900 md:text-4xl">
          Solusi perbankan yang aman, nyaman dan terpercaya.
        </h2>
        <ul className="mt-8 md:mt-16 px-10 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
          {products.map((product, key) => (
            <li
              key={key}
              className="rounded-xl bg-white px-6 py-8 shadow-sm hover:shadow-lg"
            >
              <Link to={`/products/${product.id}`} className="group">
                <img
                  src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                  alt=""
                  className="mx-auto h-10 w-10"
                />
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                  {product.title}
                </h3>
                <p className="mt-1.5 mb-4 text-sm leading-6 text-secondary-500 italic">
                  {product.subtitle}
                </p>
                <p className="hidden lg:block mt-1.5 text-sm leading-6 text-secondary-500 text-justify px-4">
                  {product.description.length > 250
                    ? product.description.substring(0, 250) + "..."
                    : product.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesSection;
