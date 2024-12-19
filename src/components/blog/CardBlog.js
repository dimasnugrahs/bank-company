import axios from "axios";
import React, { useEffect, useState } from "react";

const CardBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const changeMainImage = (index) => {
    setMainImageIndex(index);
  };

  const url = process.env.REACT_APP_API_URL;

  const getBlogs = async () => {
    try {
      const response = await axios.get(url + "/blogs");
      console.log("response", response);
      const blogs = response.data;
      console.log("blogs : ", blogs);
      setBlogs(blogs);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  // const blogs = [
  //   {
  //     src: "https://plus.unsplash.com/premium_photo-1691223733678-095fee90a0a7?q=80&w=1842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Laporan Keuangan",
  //     subtitle:
  //       "Laporan keuangan pada bank adalah laporan yang mencatat kondisi dan aktivitas keuangan bank dalam periode tertentu",
  //   },
  //   {
  //     src: "https://plus.unsplash.com/premium_photo-1691223733678-095fee90a0a7?q=80&w=1842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Laporan Tata Kelola",
  //     subtitle:
  //       "Laporan keuangan pada bank adalah laporan yang mencatat kondisi dan aktivitas keuangan bank dalam periode tertentu",
  //   },
  //   {
  //     src: "https://plus.unsplash.com/premium_photo-1691223733678-095fee90a0a7?q=80&w=1842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Struktur Organisasi",
  //     subtitle:
  //       "Laporan keuangan pada bank adalah laporan yang mencatat kondisi dan aktivitas keuangan bank dalam periode tertentu",
  //   },
  //   {
  //     src: "https://plus.unsplash.com/premium_photo-1691223733678-095fee90a0a7?q=80&w=1842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Struktur Organisasi",
  //     subtitle:
  //       "Laporan keuangan pada bank adalah laporan yang mencatat kondisi dan aktivitas keuangan bank dalam periode tertentu",
  //   },
  //   {
  //     src: "https://plus.unsplash.com/premium_photo-1691223733678-095fee90a0a7?q=80&w=1842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Struktur Organisasi",
  //     subtitle:
  //       "Laporan keuangan pada bank adalah laporan yang mencatat kondisi dan aktivitas keuangan bank dalam periode tertentu",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1593789198777-f29bc259780e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Struktur Organisasi",
  //     subtitle:
  //       "Laporan keuangan pada bank adalah laporan yang mencatat kondisi dan aktivitas keuangan bank dalam periode tertentu",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1585621243952-f68eae991dd6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Struktur Organisasi",
  //     subtitle:
  //       "Laporan keuangan pada bank adalah laporan yang mencatat kondisi dan aktivitas keuangan bank dalam periode tertentu",
  //   },
  // ];
  return (
    <div className="px-6 pt-10 pb-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-2xl  font-bold tracking-tight text-slate-900 md:text-2xl">
          Artikel Terbaru
        </h2>
        <ul className="mt-8 md:mt-16 px-0 grid grid-cols-1 gap-4 text-center  text-slate-700 md:grid-cols-4">
          {blogs.map((blog, key) => (
            <div
              key={key}
              className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="py-4 px-3">
                {Array.isArray(blog.images) && blog.images.length > 0 && (
                  <img
                    className="w-full h-48  object-cover rounded-lg"
                    src={
                      process.env.REACT_APP_API_URL +
                      "/images/" +
                      blog.images[mainImageIndex]
                    }
                    alt={blog.name}
                  />
                )}
                <div className="text-left py-4 px-2">
                  <h3 className="text-sm font-bold text-gray-800">
                    {blog.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {blog.description.length > 50
                      ? blog.description.substring(0, 50) + "..."
                      : blog.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardBlog;
