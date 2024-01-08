/**
 * It takes an array of objects and returns a new array of objects with the same keys but with the
 * values transformed by the function you pass in
 * @returns The return value of the function is the value of the last expression executed in the
 * function.
 */
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { LatestPropertyDetail } from "../../constValues/constValues";
import { blog2 } from "../../../data/slickSlider";
import NoSsr from "../../libs/utils/NoSsr";
import BlogWrapBox from "../elements/propertyBoxs/BlogWrapBox";

const BlogSection = ({ value }) => {
  return (
    <section className="ratio2_1 simple-blog">
      <Container>
        <Row>
          <Col>
            <div className="title-3">
              <svg className="title-svg">
                <use xlinkHref="/assets/svg/icons.svg#title-line"></use>
              </svg>
              <h2>
                Latest <span>Blog</span>
              </h2>
              <p className="font-roboto">{LatestPropertyDetail}</p>
            </div>
            <NoSsr>
              <Slider className="blog-2" {...blog2}>
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <BlogWrapBox data={data} />
                    </div>
                  ))}
              </Slider>
            </NoSsr>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
