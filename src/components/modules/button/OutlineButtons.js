import React from "react";

const OutlineButtonsSection = () => {
  return (
    <div className="theme-card">
      <div className="card-header bg-transparent">
        <h5 className="f-w-600">Outline buttons</h5>
      </div>
      <div className="card-body pb-0">
        <button type="button" className="btn btn-outline-primary">
          Primary
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Secondary
        </button>
        <button type="button" className="btn btn-outline-success">
          Success
        </button>
        <button type="button" className="btn btn-outline-danger">
          Danger
        </button>
        <button type="button" className="btn btn-outline-warning">
          Warning
        </button>
        <button type="button" className="btn btn-outline-info">
          Info
        </button>
        <button type="button" className="btn btn-outline-light">
          Light
        </button>
        <button type="button" className="btn btn-outline-dark">
          Dark
        </button>
      </div>
    </div>
  );
};

export default OutlineButtonsSection;
