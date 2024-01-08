/**
 * It renders a div with a class of 'desc-box' and an id of 'gallery'. Inside that div, it renders a
 * div with a class of 'page-section ratio3_2'. Inside that div, it renders a h4 with a class of
 * 'content-title' and the text 'gallery'. Inside that div, it renders a div with a class of
 * 'single-gallery'. Inside that div, it renders the GallerySlider component
 * @returns A div with a class of 'desc-box' and an id of 'gallery'.
 */
import React from "react";
import GallerySlider from "./GallerySlider";

const GalleryDeskBox = () => {
  return (
    <div className='desc-box' id='gallery'>
      <div className='page-section ratio3_2'>
        <h4 className='content-title'>gallery</h4>
        <div className='single-gallery'>
          <GallerySlider />
        </div>
      </div>
    </div>
  );
};

export default GalleryDeskBox;
