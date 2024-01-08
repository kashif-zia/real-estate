import React from "react";
import { Col, Row } from "reactstrap";

const DetailsDeskBox = () => {
  return (
    <div className='desc-box' id='details'>
      <div className='page-section'>
        <h4 className='content-title'>
          Property Details
          <a
            href='https://www.google.com/maps/place/New+York,+NY,+USA/@40.697488,-73.979681,8z/data=!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728?hl=en'
            target='_blank'
            rel='noreferrer'>
            <i className='fa fa-map-marker-alt'></i> view on map
          </a>
        </h4>
        <Row>
          <Col md='6' xl='4'>
            <ul className='property-list-details'>
              <li>
                <span>Property Type :</span> House
              </li>
              <li>
                <span>Property ID :</span> ZOEA245
              </li>
              <li>
                <span>Property status :</span> For sale
              </li>
              <li>
                <span>Operating Since :</span> 2008
              </li>
            </ul>
          </Col>
          <Col md='6' xl='4'>
            <ul className='property-list-details'>
              <li>
                <span>Price :</span> $ 1,50,000
              </li>
              <li>
                <span>Property Size :</span> 1730 sq / ft
              </li>
              <li>
                <span>Balcony :</span> 2
              </li>
            </ul>
          </Col>
          <Col md='6' xl='4'>
            <ul className='property-list-details'>
              <li>
                <span>City :</span> Newyork
              </li>
              <li>
                <span>Bedrooms :</span> 8
              </li>
              <li>
                <span>Bathrooms :</span> 4
              </li>
            </ul>
          </Col>
        </Row>
        <h4 className='content-title mt-4'>Attachments</h4>
        <a className='attach-file'>
          <i className='far fa-file-pdf'></i>Demo Property Document{" "}
        </a>
      </div>
    </div>
  );
};

export default DetailsDeskBox;
