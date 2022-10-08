import React from "react";
import AddProductQuotes from "../components/AddProductQuotes/AddProductQuotes";
import BottomBar from "../components/BottomBar/BottomBar";
import Navbar from "../components/Navbar/Navbar";

const AddProductQuotesPage = () => {
  return (
    <div>
      <Navbar />
      <AddProductQuotes />
      <BottomBar />
    </div>
  );
};

export default AddProductQuotesPage;
