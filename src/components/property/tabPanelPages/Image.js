/**
 * It takes an array of images and returns a gallery of images
 * @returns The return value of the function is being returned.
 */
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Col, Row } from "reactstrap";
import Img from "../../../libs/utils/BackgroundImageRatio";

const ImageSection = () => {
  return (
    <Row className='image_section  zoom-gallery-multiple gx-3'>
      <Gallery>
        <Item original='/assets/images/parallax/4.jpg' thumbnail='/assets/images/parallax/4.jpg' width='1000' height='600'>
          {({ ref, open }) => (
            <Col sm='8'>
              <a ref={ref} onClick={open}>
                <img src='/assets/images/parallax/4.jpg' className='img-fluid bg-img' alt='' />
              </a>
            </Col>
          )}
        </Item>
        <Col sm='4'>
          <Row>
            <Item original='/assets/images/property/15.jpg' width='1000' height='600'>
              {({ ref, open }) => (
                <Col lg='12'>
                  <div className='img-property' ref={ref} onClick={open}>
                    <Img src='/assets/images/property/15.jpg' className='bg-img' />
                  </div>
                </Col>
              )}
            </Item>
            <Item original='/assets/images/property/14.jpg' width='1000' height='600'>
              {({ ref, open }) => (
                <div lg='12'>
                  <div className='img-property' ref={ref} onClick={open}>
                    <Img src='/assets/images/property/14.jpg' className='bg-img' />
                  </div>
                </div>
              )}
            </Item>
          </Row>
        </Col>
      </Gallery>
    </Row>
  );
};

export default ImageSection;
