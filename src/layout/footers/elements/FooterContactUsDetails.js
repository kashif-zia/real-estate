import React from "react";
import { Col } from "reactstrap";
import { FooterData } from "../../../data/footerData";

const FooterContactUsDetails = ({ isActive, setIsActive, logo, liteFooter }) => {
  return (
    <Col xl={liteFooter ? "3" : "2"} md='6' className='order-xl'>
      <div className='footer-links footer-details'>
        <h5
          className='footer-title d-md-none'
          onClick={(e) => {
            e.preventDefault();
            setIsActive("ContactUs");
            isActive === "ContactUs" && setIsActive();
          }}>
          Contact us
          <span className='according-menu'>
            <i className='fas fa-chevron-down'></i>
          </span>
        </h5>
        <div className={`footer-content ${isActive === "ContactUs" ? "d-block" : "d-none d-md-block"}`}>
          {logo}
          <p>{FooterData.description}</p>
          <div className='footer-contact'>
            <ul>
              {FooterData.contactDetails.map((value, i) => (
                <li key={i}>
                  <i className={value.iconsClass}></i>
                  {value.detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default FooterContactUsDetails;
