import React, { useState } from "react";
import { Facebook, Instagram, Printer, Twitter } from "react-feather";
import { Container } from "reactstrap";
import ReviewStarr from "../../elements/ReviewStarr";

const TopTitle = ({ singleData }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="single-property-section">
      <Container>
        <div className="single-title">
          <div className="left-single">
            <div className="d-flex">
              <h2 className="mb-0">{singleData?.title || "Orchard House"}</h2>
              <span>
                <span className="label label-shadow ms-2">For Sale</span>
              </span>
            </div>
            <p className="mt-1">Mina Road, Bur Dubai, Dubai, United Arab Emirates</p>
            <ul>
              <li>
                <div>
                  <img src="/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt="" />
                  <span>{singleData?.beds || 4}Bedrooms</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt="" />
                  <span>{singleData?.bath || 4} Bathrooms</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="/assets/images/svg/icon/sofa.svg" className="img-fluid" alt="" />
                  <span>{singleData?.halls || 4} Halls</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt="" />
                  <span>{singleData?.sqft || 5000} Sq ft</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="/assets/images/svg/icon/garage.svg" className="img-fluid" alt="" />
                  <span>1 Garage</span>
                </div>
              </li>
            </ul>
            <div className="share-buttons">
              <div className="d-inline-block">
                <a className="btn btn-gradient btn-pill">
                  <i className="fas fa-share-square"></i>
                  share
                </a>
                <div className="share-hover">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/" className="icon-facebook" target="_blank" rel="noreferrer">
                        <Facebook></Facebook>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" className="icon-twitter" target="_blank" rel="noreferrer">
                        <Twitter></Twitter>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank" className="icon-instagram" rel="noreferrer">
                        <Instagram></Instagram>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <a className="btn btn-dashed btn-pill ms-md-2 ms-1 save-btn" onClick={() => setLike(!like)}>
                <i className={`${like ? "fas" : "far"} fa-heart`}></i>
                Save
              </a>
              <a className="btn btn-dashed btn-pill ms-md-2 ms-1" onClick={() => window.print()}>
                <Printer />
                Print
              </a>
            </div>
          </div>
          <div className="right-single">
            <ReviewStarr rating={4} />
            <h2 className="price">
              ${singleData?.price || "20,45,472"} <span>/ start From</span>
            </h2>
            <div className="feature-label">
              <span className="btn btn-dashed btn-pill">Wi-fi</span>
              <span className="btn btn-dashed ms-1 btn-pill">Swimming Pool</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopTitle;
