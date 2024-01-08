import Link from "next/link";
import React from "react";
import { Col } from "reactstrap";
import { FooterData } from "../../../data/footerData";

const FooterBlog = ({ isActive, setIsActive, img }) => {
  return (
    <Col xl="3" md="6">
      <div className="footer-links">
        <h5
          className="footer-title"
          onClick={(e) => {
            e.preventDefault();
            setIsActive("OurLatestBlog");
            isActive === "OurLatestBlog" && setIsActive();
          }}>
          {FooterData.our_latest_blog.title}
          <span className="according-menu">
            <i className="fas fa-chevron-down"></i>
          </span>
        </h5>
        <div className={`footer-content ${isActive === "OurLatestBlog" ? "d-block" : "d-none d-md-block"}`}>
          <div className="footer-blog">
            {FooterData.our_latest_blog.children.map((value, i) => (
              <div className="media" key={i}>
                <Link href="/pages/blog-detail-pages/detail-with-gallery">
                  <div className="img-overlay">
                    <img src={img[i]} alt="" />
                  </div>
                </Link>
                <div className="media-body">
                  <h6>
                    <Link href="/pages/blog-detail-pages/detail-with-gallery">{value.title}</Link>
                  </h6>
                  <p className="font-roboto mb-0">
                    <Link href={value.link}>{value.description}</Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default FooterBlog;
