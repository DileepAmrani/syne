import React from "react";
import BusinessSettingSidebar from "../../components/BusinessSettings/BusinessSettingsSidebar";
import YourBranding from "../../components/BusinessSettings/YourBranding";
import Navbar from "../../components/Navbar/Navbar";
const YourBrandingPage = () => {
  return (
    <div>
      <Navbar />
      <BusinessSettingSidebar />
      <YourBranding />
    </div>
  );
};

export default YourBrandingPage;
