import React from "react";

const LargeLabelSection = () => {
  return (
   <div className="theme-card">
   <div className="card-header bg-transparent">
       <h5 className="f-w-600"> Large label</h5>
   </div>
   <div className="card-body pb-0">
       <span className="label label-gradient label-lg">new</span>
       <span className="label label-solid label-lg label-flat">new</span>
       <span className="label label-white label-lg label-flat">new</span>
       <span className="label label-white label-lg">new</span>
       <span className="label label-white label-lg label-pill"><span
               className="gradient-1">new</span></span>
   </div>
</div>
  );
};

export default LargeLabelSection;