import React from "react";
import BusinessSettingSidebar from "../../components/BusinessSettings/BusinessSettingsSidebar";
import PDFGeneration from "../../components/BusinessSettings/PDFGeneration";
import Navbar from "../../components/Navbar/Navbar";
const PDFGenerationPage = () => {
  return (
    <div>
      <Navbar />
      <BusinessSettingSidebar />
      <PDFGeneration />
    </div>
  );
};

export default PDFGenerationPage;
