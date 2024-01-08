import React from "react";

const Step4 = ({ setActiveTab }) => {
  return (
    <div className="wizard-step-4 ">
      <div className="complete-details">
        <div>
          <img src="/assets/images/inner-pages/4.svg" className="img-fluid" alt="" />
          <h3>Thank you !!</h3>
          <h6>Congratulations, your property has been submitted</h6>
          <p className="font-roboto">
            Residences can be classified by and how they are connected to neighbouring residences and land. Different types of housing tenure can be used for the same physical type.
          </p>
          <button
            className="btn btn-gradient step-again btn-pill"
            onClick={() => {
              setActiveTab(1);
              alert("Your data is submitted check console");
            }}>
            Add new property
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
