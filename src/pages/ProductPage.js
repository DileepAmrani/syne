import React from "react";
import BottomBar from "../components/BottomBar/BottomBar";
import Navbar from "../components/Navbar/Navbar";
import Product from "../components/Product/Product";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <Product />
      <BottomBar />
    </div>
  );
};

export default ProductPage;
