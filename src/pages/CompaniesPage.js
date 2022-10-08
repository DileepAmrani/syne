import React from "react";
import BottomBar from "../components/BottomBar/BottomBar";
import Companies from "../components/Companies/Companies";
import Navbar from "../components/Navbar/Navbar";

const CompaniesPage = () => {
  return (
    <div>
      <Navbar />
      <Companies />
      <BottomBar />
    </div>
  );
};

export default CompaniesPage;
