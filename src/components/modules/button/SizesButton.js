import React from "react";

const SizesButtonSection = () => {
  return (
    <div className="theme-card">
      <div className="card-header bg-transparent">
        <h5 className="f-w-600">Sizes</h5>
      </div>
      <div className="card-body pb-0">
        <button type="button" className="btn btn-primary btn-lg">
          Large button
        </button>
        <button type="button" className="btn btn-secondary btn-lg">
          Large button
        </button>

        <button type="button" className="btn btn-primary btn-sm">
          Small button
        </button>
        <button type="button" className="btn btn-secondary btn-sm">
          Small button
        </button>
      </div>
    </div>
  );
};

export default SizesButtonSection;
