import React from "react";

const ButtonTagsSection = () => {
  return (
    <div className='theme-card'>
      <div className='card-header bg-transparent'>
        <h5 className='f-w-600'> Button tags</h5>
      </div>
      <div className='card-body pb-0'>
        <a className='btn btn-primary' role='button'>
          Link
        </a>
        <button className='btn btn-primary' type='submit'>
          Button
        </button>
        <input className='btn btn-primary' type='button' value='Input' />
        <input className='btn btn-primary' type='submit' value='Submit' />
        <input className='btn btn-primary' type='reset' value='Reset' />
      </div>
    </div>
  );
};

export default ButtonTagsSection;
