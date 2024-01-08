import React from "react";
import { Container, Row } from "reactstrap";
import Img from "../../libs/utils/BackgroundImageRatio";

const AboutUsSection = () => {
  return (
    <section className='about-main ratio_36'>
      <Container>
        <Row>
          <div className='col'>
            <div className='title-2'>
              <h2>About Us</h2>
              <p className='font-roboto'>Residences can be classified into different type of housing tenure can used for same physical type.</p>
            </div>
            <div className='user-about'>
              <Row>
                <div className='col-xl-5 col-lg-7'>
                  <div className='about-content'>
                    <h3>
                      We are the <br />
                      expert of communication
                    </h3>
                    <p className='font-roboto'>Decoration is the furnishing of a space with decorative elements, sometimes complemented by advice and practical assistance. sometimes complemented by advice and practical assistance.</p>
                  </div>
                  <div className='about-listing'>
                    <ul>
                      <li>
                        <h4>15,801</h4>
                        <p>Total property</p>
                      </li>
                      <li>
                        <h4>5792</h4>
                        <p>Agents</p>
                      </li>
                      <li>
                        <h4>3871</h4>
                        <p>Agency</p>
                      </li>
                      <li>
                        <h4>4791+</h4>
                        <p>Sold out property</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-xl-7 map-image col-lg-5'>
                  <Img src='/assets/images/about/map.png' className='img-fluid bg-img' alt='' />
                  <div className='marker-icons'>
                    <ul>
                      <li>
                        <img className='img-fluid marker-1' src='/assets/images/leaflet/marker-icon.png' alt='' />
                      </li>
                      <li>
                        <img className='img-fluid marker-2' src='/assets/images/leaflet/marker-icon.png' alt='' />
                      </li>
                      <li>
                        <img className='img-fluid marker-3' src='/assets/images/leaflet/marker-icon.png' alt='' />
                      </li>
                      <li>
                        <img className='img-fluid marker-4' src='/assets/images/leaflet/marker-icon.png' alt='' />
                      </li>
                    </ul>
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsSection;
