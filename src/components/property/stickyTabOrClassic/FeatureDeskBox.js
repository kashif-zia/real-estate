import React from "react";
import { Col, Row } from "reactstrap";

const FeatureDeskBox = () => {
  return (
    <div className='desc-box' id='feature'>
      <div className='page-section feature-dec'>
        <h4 className='content-title'>features</h4>
        <Row className='single-feature '>
          <Col xxl='3' xl='4' sm='6'>
            <ul>
              <li>
                <i className='fas fa-wifi'></i> Free Wi-Fi
              </li>
              <li>
                <i className='fas fa-hands'></i> Elevator Lift
              </li>
              <li>
                <i className='fas fa-power-off'></i> Power Backup
              </li>
              <li>
                <i className='fas fa-monument'></i> Laundry Service
              </li>
            </ul>
          </Col>
          <Col xxl='3' xl='4' sm='6'>
            <ul>
              <li>
                <i className='fas fa-user-shield'></i> Security Guard
              </li>
              <li>
                <i className='fas fa-video'></i> CCTV
              </li>
              <li>
                <i className='fas fa-door-open'></i> Emergency Exit
              </li>
              <li>
                <i className='fas fa-first-aid'></i> Doctor On Call
              </li>
            </ul>
          </Col>
          <Col xxl='3' xl='4' sm='6'>
            <ul>
              <li>
                <i className='fas fa-shower'></i> Shower
              </li>
              <li>
                <i className='fas fa-car'></i> free Parking in the area
              </li>
              <li>
                <i className='fas fa-fan'></i> Air Conditioning
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FeatureDeskBox;
