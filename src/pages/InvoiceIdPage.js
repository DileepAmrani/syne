import React from "react";
import BottomBar from "../components/BottomBar/BottomBar";
import InvoiceId from "../components/InvoiceId/InvoiceId";
import Navbar from "../components/Navbar/Navbar";

const InvoiceIdPage = () => {
  return (
    <div>
      <Navbar />
      <InvoiceId />
      <BottomBar />
    </div>
  );
};

export default InvoiceIdPage;
