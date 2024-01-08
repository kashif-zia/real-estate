import React from "react";
import { Check } from "react-feather";
import { NavItem } from "reactstrap";

const WizrdSteps = ({ activeTab }) => {
  return (
    <div className="theme-card">
      <ul className="wizard-steps">
        <NavItem className={`step-container step-1 ${activeTab === 1 ? "active" : activeTab > 1 ? "disabled" : ""}`}>
          <div className="media">
            <div className="step-icon">
              <Check />
              <span>1</span>
            </div>
            <div className="media-body">
              <h5>General</h5>
              <h6>Basic Information</h6>
            </div>
          </div>
        </NavItem>
        <NavItem className={`step-container step-2 ${activeTab === 2 ? "active" : activeTab > 2 ? "disabled" : ""}`}>
          <div className="media">
            <div className="step-icon">
              <Check />
              <span>2</span>
            </div>
            <div className="media-body">
              <h5>Address</h5>
              <h6>Add your place</h6>
            </div>
          </div>
        </NavItem>
        <NavItem className={`step-container step-3 ${activeTab === 3 ? "active" : activeTab > 3 ? "disabled" : ""}`}>
          <div className="media">
            <div className="step-icon">
              <Check />
              <span>3</span>
            </div>
            <div className="media-body">
              <h5>Gallery</h5>
              <h6>Add your media</h6>
            </div>
          </div>
        </NavItem>
        <NavItem className={`step-container step-4 ${activeTab === 4 ? "active" : activeTab > 4 ? "disabled" : ""}`}>
          <div className="media">
            <div className="step-icon">
              <Check />
              <span>4</span>
            </div>
            <div className="media-body">
              <h5>Confirmation</h5>
              <h6>Complete details</h6>
            </div>
          </div>
        </NavItem>
      </ul>
    </div>
  );
};

export default WizrdSteps;
