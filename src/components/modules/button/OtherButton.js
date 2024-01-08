import React from "react";

const OtherButtonSection = () => {
  return (
    <div className='theme-card'>
      <div className='card-header bg-transparent'>
        <h5 className='f-w-600'> Other button</h5>
      </div>
      <div className='card-body pb-0'>
        <a className='btn btn-gradient'>read more</a>
        <a className='btn btn-dashed btn-pill'>
          {" "}
          <span>read more</span>
        </a>
      </div>
    </div>
  );
};

export default OtherButtonSection;
