import React from "react";
import BottomBar from "../components/BottomBar/BottomBar";
import Invoice from "../components/Invoice/Invoice";
import Navbar from "../components/Navbar/Navbar";

const InvoicePage = () => {
  return (
    <div>
      <Navbar />
      <Invoice />
      <BottomBar />
    </div>
  );
};

export default InvoicePage;
