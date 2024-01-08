/**
 * It returns a section element with a class of without-top property-main small-section, which contains
 * a div element with a class of single-property-section, which contains a Container element, which
 * contains a div element with a class of single-title, which contains two div elements with classes of
 * left-single and right-single, which contain a bunch of other elements
 * @returns The return statement is used to return a value from a function.
 */
import React from "react";
import { Facebook, Instagram, Printer, Twitter } from "react-feather";
import { Container } from "reactstrap";
import ReviewStarr from "../../elements/ReviewStarr";

const HomeBannerSection = () => {
  return (
    <section className='without-top property-main small-section'>
      <div className='single-property-section'>
        <Container>
          <div className='single-title'>
            <div className='left-single'>
              <div className='d-flex'>
                <h2 className='mb-0'>Orchard House </h2>
                <span>
                  <span className='label label-shadow ms-2'>For Sale</span>
                </span>
              </div>
              <p className='mt-1'>Mina Road, Bur Dubai, Dubai, United Arab Emirates</p>
              <ul>
                <li>
                  <div>
                    <img src='/assets/images/svg/icon/double-bed.svg' className='img-fluid' alt='' />
                    <span>4 Bedrooms</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img src='/assets/images/svg/icon/bathroom.svg' className='img-fluid' alt='' />
                    <span>4 Bathrooms</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img src='/assets/images/svg/icon/sofa.svg' className='img-fluid' alt='' />
                    <span>2 Halls</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img src='/assets/images/svg/icon/square-ruler-tool.svg' className='img-fluid ruler-tool' alt='' />
                    <span>5000 Sq ft</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img src='/assets/images/svg/icon/garage.svg' className='img-fluid' alt='' />
                    <span>1 Garage</span>
                  </div>
                </li>
              </ul>
              <div className='share-buttons'>
                <div className='d-inline-block'>
                  <a className='btn btn-gradient btn-pill'>
                    <i className='far fa-share-square'></i>
                    share
                  </a>
                  <div className='share-hover'>
                    <ul>
                      <li>
                        <a href='https://www.facebook.com/' className='icon-facebook'>
                          <Facebook />
                        </a>
                      </li>
                      <li>
                        <a href='https://twitter.com/' className='icon-twitter'>
                          <Twitter />
                        </a>
                      </li>
                      <li>
                        <a href='https://www.instagram.com/' className='icon-instagram'>
                          <Instagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a className='btn btn-dashed btn-pill ms-md-2 ms-1 save-btn'>
                  <i className='far fa-heart'></i>
                  Save
                </a>
                <a className='btn btn-dashed btn-pill ms-md-2 ms-1' onClick='myFunction()'>
                  <Printer />
                  Print
                </a>
              </div>
            </div>
            <div className='right-single'>
              <div className='rating'>
                <ReviewStarr rating={4} />
              </div>
              <h2 className='price'>
                $20,45,472 <span>/ start From</span>
              </h2>
              <div className='feature-label'>
                <span className='btn btn-dashed btn-pill'>Wi-fi</span>
                <span className='btn btn-dashed ms-1 btn-pill'>Swimming Pool</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HomeBannerSection;
