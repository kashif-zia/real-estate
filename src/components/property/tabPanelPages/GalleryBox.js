import React from "react";
import { Col, Row } from "reactstrap";
import Exploration from "../../../layout/sidebarLayout/Exploration";
import GallerySlider from "../stickyTabOrClassic/GallerySlider";

const GalleryBox = ({ exploration }) => {
  return (
    <Row>
      <Col sm='12'>
        <div className='single-gallery mb-4'>
          {exploration && (
            <div className='blog-sidebar modal-form'>
              <div className='filter-cards'>
                <Exploration />
              </div>
            </div>
          )}
          <GallerySlider />
        </div>
      </Col>
    </Row>
  );
};

export default GalleryBox;
