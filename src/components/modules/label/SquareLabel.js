import React from "react";

const SquareLabelSection = () => {
  return (
   <div className="theme-card">
   <div className="card-header bg-transparent">
       <h5 className="f-w-600"> Rounded label</h5>
   </div>
   <div className="card-body pb-0">
       <span className="label label-gradient">new</span>
       <span className="label label-dark">new</span>
       <span className="label label-success">new</span>
       <span className="label label-danger">new</span>
       <span className="label label-shadow">new</span>
   </div>
</div>
  );
};

export default SquareLabelSection;