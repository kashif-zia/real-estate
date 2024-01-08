import React from "react";

const PillLabelSection = () => {
  return (
    <div className="theme-card">
      <div className="card-header bg-transparent">
        <h5 className="f-w-600"> Pill label</h5>
      </div>
      <div className="card-body pb-0">
        <span className="label label-solid label-pill">new</span>
        <span className="label label-dark label-pill">new</span>
        <span className="label label-success label-pill">new</span>
        <span className="label label-danger label-pill">new</span>
      </div>
    </div>
  );
};

export default PillLabelSection;
