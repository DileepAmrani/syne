import React from "react";
import BusinessSettingSidebar from "../../components/BusinessSettings/BusinessSettingsSidebar";
import YourInformation from "../../components/BusinessSettings/YourInformation";
import Navbar from "../../components/Navbar/Navbar";
const YourInformationPage = () => {
  return (
    <div>
      <Navbar />
      <BusinessSettingSidebar />
      <YourInformation />
    </div>
  );
};

export default YourInformationPage;
