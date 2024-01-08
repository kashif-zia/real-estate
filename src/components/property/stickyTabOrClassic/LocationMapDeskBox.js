/**
 * It returns a div with a class of desc-box and an id of location-map. Inside that div is another div
 * with a class of page-section. Inside that div is an h4 with a class of content-title and the text
 * "Location". Inside that div is an iframe with a title of "realestate location", a src of
 * "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946229!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06
 * @returns A div with a class of desc-box and an id of location-map.
 */
import React from "react";

const LocationMapDeskBox = () => {
  return (
    <div className='desc-box' id='location-map'>
      <div className='page-section'>
        <h4 className='content-title'>Location</h4>
        <iframe
          title='realestate location'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946229!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563449626439!5m2!1sen!2sin'
          allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default LocationMapDeskBox;
