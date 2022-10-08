import React from "react";
import AddProductJobs from "../components/AddProductJobs/AddProductJobs";
import BottomBar from "../components/BottomBar/BottomBar";
import Navbar from "../components/Navbar/Navbar";

const AddProductJobsPage = () => {
  return (
    <div>
      <Navbar />
      <AddProductJobs />
      <BottomBar />
    </div>
  );
};

export default AddProductJobsPage;
