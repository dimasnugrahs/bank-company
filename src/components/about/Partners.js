import React from "react";

const Partners = () => {
  const partners = [
    {
      href: "https://upload.wikimedia.org/wikipedia/commons/8/83/OJK_Logo.png",
    },
    {
      href: "https://ayokebank.com/wp-content/uploads/2022/11/logo.png",
    },
    {
      href: "https://upload.wikimedia.org/wikipedia/commons/8/83/OJK_Logo.png",
    },
    {
      href: "https://ayokebank.com/wp-content/uploads/2022/11/logo.png",
    },
  ];
  return (
    <div className="bg-gray-200 pt-6 pb-20 ">
      <div className="mx-auto max-w-6xl ">
        <ul className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-700 lg:grid-cols-4">
          {partners.map((partner, key) => (
            <li key={key} className="rounded-xl  border">
              <div className="group h-12 w-full flex items-center justify-center">
                <img
                  src={partner.href}
                  alt=""
                  className="h-auto w-24 object-cover rounded-md"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Partners;
