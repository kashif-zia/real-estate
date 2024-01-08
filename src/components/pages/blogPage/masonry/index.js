/**
 * It takes an array of items and returns a new array with the items in a random order
 * @returns The return value of the function is the value of the last expression executed by the
 * function.
 */
import React, { useEffect, useState } from "react";
import { MasonryGrid } from "@egjs/react-grid";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../../../../layout/sidebarLayout/Sidebar";
import Category from "../../../../layout/sidebarLayout/Category";
import RecentlyAdded from "../../../../layout/sidebarLayout/RecentlyAdded";
import PopularTags from "../../../../layout/sidebarLayout/PopularTags";
import { getData } from "../../../../libs/utils/getData";
import BlogWrapBox from "../../../elements/propertyBoxs/BlogWrapBox";

const BodyContent = ({ side }) => {
  const [value, setValue] = useState();

  useEffect(() => {
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        setValue(res.data?.LatestBlogInCorporate);
      })
      .catch((error) => console.log("Error", error));
  }, []);
  return (
    <section>
      <Container>
        <Row>
          {side && (
            <Sidebar side={side}>
              <Category />
              <RecentlyAdded />
              <PopularTags />
            </Sidebar>
          )}
          <Col xl={side ? "9" : "12"} lg={side ? "8" : "12"}>
            <Row className='blog-grid  grid'>
              <MasonryGrid className='masonry-spacing'>
                {value?.map((data, i) => (
                  <Col sm={side ? "6" : "4"} className='grid-item wow fadeInUp ' key={i}>
                    <BlogWrapBox data={data} masonry={true} />
                  </Col>
                ))}
              </MasonryGrid>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
