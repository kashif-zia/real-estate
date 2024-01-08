import React from "react";
import Img from "../../../../libs/utils/BackgroundImageRatio";

const BodyContent = () => {
  return (
    <section className='p-0 parallax-section'>
      <div className='full_banner'>
        <Img src='/assets/images/parallax/3.jpg' className='img-fluid bg-img' alt />
        <div className='center-content'>
          <div>
            <h2>Orchard House</h2>
            <h6>unmissable experience in vienna</h6>
          </div>
        </div>
      </div>
      <div className='full_banner'>
        <Img src='/assets/images/parallax/2.jpg' className='img-fluid bg-img' alt />
        <div className='center-content'>
          <div>
            <h2>Orchard House</h2>
            <h6>unmissable experience in vienna</h6>
          </div>
        </div>
      </div>
      <div className='full_banner'>
        <Img src='/assets/images/parallax/1.jpg' className='img-fluid bg-img' alt />
        <div className='center-content'>
          <div>
            <h2>Orchard House</h2>
            <h6>unmissable experience in vienna</h6>
          </div>
        </div>
      </div>
      <div className='full_banner'>
        <Img src='/assets/images/parallax/4.jpg' className='img-fluid bg-img' alt />
        <div className='center-content'>
          <div>
            <h2>Orchard House</h2>
            <h6>unmissable experience in vienna</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodyContent;
