import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); // Menangkap ID dari URL
  const [product, setProduct] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const url = process.env.REACT_APP_API_URL;

  const changeMainImage = (index) => {
    setMainImageIndex(index);
  };

  // Fetch data produk berdasarkan ID
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${url}/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    fetchProduct();console.log("Product ID:", id);
console.log("Product Data:", product);
console.log("Main Image Index:", mainImageIndex);
  }, [id]);

  if (!product) {
    return <div className="text-center">Loading...</div>;
  }
  return (
    <div className="gap-16 items-center py-8 px-6 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
      <div className="font-light  sm:text-lg text-gray-400 ">
        <section className="bg-white ">
          {Array.isArray(product.images) && product.images.length > 0 && (
            <div className="gap-16 items-center py-8 px-6 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6 ">
              <img
                className="w-full h-[450px] object-cover rounded-lg"
                src={
                  process.env.REACT_APP_API_URL +
                  "/images/" +
                  product.images[mainImageIndex]
                }
                alt={product.title}
              />
            </div>
          )}
        </section>
        <h2 className=" text-3xl tracking-tight font-extrabold text-gray-900 ">
          {product.title}
        </h2>
        <p className=" mb-4 text-gray-800 mt-4 leading-relaxed text-justify lg:text-left italic">
          {product.subtitle}
        </p>
        <p className=" mb-4 text-gray-600 mt-4 leading-relaxed text-justify lg:text-left">
          {product.description}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
          <div class="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md border border-gray-200">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">
              Keunggulan Produk
            </h2>
            <ul class="space-y-4">
              <li class="flex items-start">
                <div>
                  <p class="text-gray-600">{product.sellingPoint}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md border border-gray-200">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">
              Syarat dan Ketentuan
            </h2>
            <ul class="space-y-4">
              <li class="flex items-start">
                <div>
                  <p class="text-gray-600">{product.productTerms}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md border border-gray-200">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">
              Cara Membuka Rekening
            </h2>
            <ul class="space-y-4">
              <li class="flex items-start">
                <div>
                  <p class="text-gray-600">{product.productGuide}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
