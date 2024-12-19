import React from "react";

const BannerProduct = () => {
  
  return (
    <section className="bg-white ">
      <div className="gap-16 items-center py-8 px-6 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6 ">
        <img
          className="w-full h-[400px] object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1593789198777-f29bc259780e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Random"
        />
      </div>
    </section>
  );
};

export default BannerProduct;
