import React from "react";
import BusinessSettingSidebar from "../../components/BusinessSettings/BusinessSettingsSidebar";
import TaxCodes from "../../components/BusinessSettings/TaxCodes";
import Navbar from "../../components/Navbar/Navbar";
const TaxCodesPage = () => {
  return (
    <div>
      <Navbar />
      <BusinessSettingSidebar />
      <TaxCodes />
    </div>
  );
};

export default TaxCodesPage;
