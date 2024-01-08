import React from "react";

const BlockLevelButtonSection = () => {
  return (
   <div className="theme-card">
   <div className="card-header bg-transparent">
      <h5 className="f-w-600">Block level buttons</h5>
   </div>
   <div className="card-body pb-0">
      <button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button>
       <button type="button" className="btn btn-secondary btn-lg btn-block">Block level button</button>
   </div>
</div>
  );
};

export default BlockLevelButtonSection;