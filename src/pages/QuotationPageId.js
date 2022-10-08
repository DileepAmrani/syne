import React from "react";
import BottomBar from "../components/BottomBar/BottomBar";
import Navbar from "../components/Navbar/Navbar";
import QuotationId from "../components/QuotationId/QuotationId";

const QuotationPageId = () => {
  return (
    <div>
      <Navbar />
      <QuotationId />
      <BottomBar />
    </div>
  );
};

export default QuotationPageId;
