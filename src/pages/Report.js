import React from "react";
import Jumbotron from "../components/hero/Jumbotron";
import ReportDetail from "../components/report/ReportDetail";

const Report = () => {
  return (
    <div>
      <Jumbotron
        heading={"This title is dynamic for report page"}
        description={"this desc is dyinamic too for report page description"}
      />

      <ReportDetail />
    </div>
  );
};

export default Report;
