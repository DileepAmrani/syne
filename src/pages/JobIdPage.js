import React from "react";
import BottomBar from "../components/BottomBar/BottomBar";
import JobsId from "../components/JobsId/JobsId";
import Navbar from "../components/Navbar/Navbar";

const JobIdPage = () => {
  return (
    <div>
      <Navbar />
      <JobsId />
      <BottomBar />
    </div>
  );
};

export default JobIdPage;
