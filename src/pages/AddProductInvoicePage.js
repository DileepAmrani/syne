import React from "react";
import AddProductInvoice from "../components/AddProductInvoice/AddProductInvoice";
import BottomBar from "../components/BottomBar/BottomBar";
import Navbar from "../components/Navbar/Navbar";
const AddProductInvoicePage = () => {
  return (
    <div>
      <Navbar />
      <AddProductInvoice />
      <BottomBar />
    </div>
  );
};

export default AddProductInvoicePage;
