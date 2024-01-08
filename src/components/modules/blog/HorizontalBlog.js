import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { Col, Container } from "reactstrap";
import { blog1 } from "../../../../../data/inputForm";
import NoSsr from "../../../libs/utils/NoSsr";

const HorizontalBlogSection = () => {
  return (
    <section className="pb-0 horizontal-blog">
      <Container>
        <div className="row">
          <Col>
            <div className="title-2">
              <h2>Horizontal Blog</h2>
              <p>Discover New York’s best things to do, restaurants, theatre, nightlife and more</p>
            </div>
            <NoSsr>
              <Slider className="blog-1" {...blog1}>
                <div>
                  <div className="blog-box">
                    <div className="img-box">
                      <img src="/assets/images/blog/4.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="blog-content">
                      <span>January 9, 2022</span>
                      <h3>
                        <Link href="/listing/grid-view/2-grid/left-sidebar">Someone who is obsessed with fashion niche very well.</Link>
                      </h3>
                      <p className="font-roboto">Residences can be classified by and how they are connected to neighbouring residences and land.</p>
                      <Link href="/blog/detail" className="btn btn-gradient btn-pill btn-lg">
                        read more
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="blog-box">
                    <div className="img-box">
                      <img src="/assets/images/blog/5.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="blog-content">
                      <span>January 9, 2022</span>
                      <h3>
                        <Link href="/listing/grid-view/2-grid/left-sidebar">Residences can be classified by and how they are connected.</Link>
                      </h3>
                      <p className="font-roboto">How they are connected to neighbouring residences and land. Residences can be classified</p>
                      <Link href="/blog/detail" className="btn btn-gradient btn-pill btn-lg">
                        read more
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="blog-box">
                    <div className="img-box">
                      <img src="/assets/images/blog/4.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="blog-content">
                      <span>January 9, 2022</span>
                      <h3>
                        <Link href="/listing/grid-view/2-grid/left-sidebar">See why ProCity is one of best friends for exploring city.</Link>
                      </h3>
                      <p className="font-roboto">Area classified by and how they are connected to neighbouring residences and land.</p>
                      <Link href="/blog/detail" className="btn btn-gradient btn-pill btn-lg">
                        read more
                      </Link>
                    </div>
                  </div>
                </div>
              </Slider>
            </NoSsr>
          </Col>
        </div>
      </Container>
    </section>
  );
};

export default HorizontalBlogSection;
