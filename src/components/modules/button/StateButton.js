import React from "react";

const StateButtonSection = () => {
  return (
    <div className='theme-card'>
      <div className='card-header bg-transparent'>
        <h5 className='f-w-600'>State</h5>
      </div>
      <div className='card-body pb-0'>
        <a className='btn btn-primary btn-lg active' role='button' aria-pressed='true'>
          Active
        </a>
        <a className='btn btn-secondary btn-lg active' role='button' aria-pressed='true'>
          Active
        </a>

        <button type='button' className='btn btn-lg btn-primary' disabled>
          Disabled
        </button>
        <button type='button' className='btn btn-secondary btn-lg' disabled>
          Disabled
        </button>
      </div>
    </div>
  );
};

export default StateButtonSection;
