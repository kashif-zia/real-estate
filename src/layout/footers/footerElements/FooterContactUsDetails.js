import Link from "next/link";
import React from "react";
import { Col } from "reactstrap";
import { Logo } from "../../../components/elements/Logo";

const FooterContactUsDetails = () => {
  return (
    <Col xl="3">
      <div className="footer-details text-center">
        <Logo />
        <p>Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef kitchen opening</p>
        <h6>Contact us</h6>
        <ul className="icon-list">
          <li>
            <Link href="/contact">
              <i className="fas fa-map-marker-alt"></i>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <i className="fas fa-phone-alt"></i>
            </Link>
          </li>
          <li>
            <Link href="/auth/signup">
              <i className="fas fa-envelope"></i>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <i className="fas fa-globe"></i>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <i className="fas fa-wifi"></i>
            </Link>
          </li>
        </ul>
      </div>
    </Col>
  );
};

export default FooterContactUsDetails;
