import React from "react";

const Jumbotron = ({
  heading = "Terdepan Menuju Kesuksesan Anda",
  description = "Kami berkomitmen untuk menjadi mitra bisnis yang handal, menyediakan layanan lengkap dan strategi yang tepat guna memastikan kesuksesan jangka panjang Anda.",
}) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 transition-opacity duration-1000 opacity-100"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center px-6 md:px-0 justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white max-w-xl">
            <h2 className="text-4xl font-bold mb-4">{heading}</h2>
            <p className="hidden md:block text-md font-light italic">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
