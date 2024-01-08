/**
 * It renders a section with a map and a search form
 * @returns The return statement is used to return a value from a function.
 */
import React from "react";
import { Col, Row } from "reactstrap";
import InputForm from "../slider-filter-search/homeElements/InputForm";

const HomeBannerVSearchMapSection = () => {
  return (
    <>
      <section className='layout-map vertical-map'>
        <iframe
          className='map'
          title='realestate location'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946229!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563449626439!5m2!1sen!2sin'
          allowFullScreen></iframe>
        <div className='container'>
          <Row>
            <Col lg='12' className=' search-withmap'>
              <div className='vertical-search'>
                <div className='left-sidebar'>
                  <Row className=' gx-2'>
                    <InputForm />
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default HomeBannerVSearchMapSection;
