import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Col, Container } from "reactstrap";
import Img from "../../../libs/utils/BackgroundImageRatio";

const RatioPortraitSection = () => {
  return (
    <section className="ratio_portrait">
      <Container>
        <Gallery>
          <div className="title-2">
            <h2>ratio - &quot;ratio_portrait&quot;</h2>
            <p>Add this class &quot;ratio_portrait&quot; for this type of ratio</p>
          </div>
          <div className="row portfolio-section zoom-gallery-multiple gy-md-4 gy-3">
            <Col lg="3" sm="6" className="grid-item ">
              <div className="grid-box">
                <div className="overlay">
                  <div className="portfolio-image">
                    <Item original="/assets/images/1.jpg">
                      {({ ref, open }) => (
                        <a ref={ref} onClick={open}>
                          <Img src="/assets/images/1.jpg" className="bg-img" />
                        </a>
                      )}
                    </Item>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3" sm="6" className="grid-item ">
              <div className="grid-box">
                <div className="overlay">
                  <div className="portfolio-image">
                    <Item original="/assets/images/banner-image.jpg">
                      {({ ref, open }) => (
                        <a ref={ref} onClick={open}>
                          <Img src="/assets/images/banner-image.jpg" className="bg-img" />
                        </a>
                      )}
                    </Item>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3" sm="6" className="grid-item ">
              <div className="grid-box">
                <div className="overlay">
                  <div className="portfolio-image">
                    <Item original="/assets/images/3.jpg">
                      {({ ref, open }) => (
                        <a ref={ref} onClick={open}>
                          <Img src="/assets/images/3.jpg" className="bg-img" />
                        </a>
                      )}
                    </Item>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3" sm="6" className="grid-item ">
              <div className="grid-box">
                <div className="overlay">
                  <div className="portfolio-image">
                    <Item original="/assets/images/4.jpg">
                      {({ ref, open }) => (
                        <a ref={ref} onClick={open}>
                          <Img src="/assets/images/4.jpg" className="bg-img" />
                        </a>
                      )}
                    </Item>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </Gallery>
      </Container>
    </section>
  );
};

export default RatioPortraitSection;
