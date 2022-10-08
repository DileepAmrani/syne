import React from "react";
import BottomBar from "../components/BottomBar/BottomBar";
import Jobes from "../components/Jobes/Jobes";
import Navbar from "../components/Navbar/Navbar";

const JobsPage = () => {
  return (
    <div>
      <Navbar />
      <Jobes />
      <BottomBar />
    </div>
  );
};

export default JobsPage;
