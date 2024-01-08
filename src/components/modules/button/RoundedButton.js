import React from "react";

const RoundedButtonSection = () => {
  return (
    <div className='theme-card'>
      <div className='card-header bg-transparent'>
        <h5 className='f-w-600'> Rounded button</h5>
      </div>
      <div className='card-body pb-0'>
        <a className='btn btn-gradient btn-pill'>read more</a>
        <a className='btn btn-gradient btn-pill'>read more</a>
        <a className='btn btn-light-bg btn-pill'>
          <span>read more</span>
        </a>
        <a className='btn btn-white btn-pill'>
          <span>read more</span>
        </a>
      </div>
    </div>
  );
};

export default RoundedButtonSection;
