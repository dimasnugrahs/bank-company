import React from "react";
import Jumbotron from "../components/hero/Jumbotron";
import ProductDetail from "../components/product/ProductDetail";

const Product = () => {
  return (
    <div>
      <Jumbotron
        heading={"This title is dynamic for services page"}
        description={"this desc is dyinamic too for services page description"}
      />
      <ProductDetail />
    </div>
  );
};

export default Product;
