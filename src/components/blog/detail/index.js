import React from "react";
import { Col, Container, Row } from "reactstrap";
import Category from "../../../layout/sidebarLayout/Category";
import PopularTags from "../../../layout/sidebarLayout/PopularTags";
import RecentlyAdded from "../../../layout/sidebarLayout/RecentlyAdded";
import SearchBar from "../../../layout/sidebarLayout/SearchBar";
import Sidebar from "../../../layout/sidebarLayout/Sidebar";
import BlogTitle from "./BlogTitle";
import CommentSection from "./CommentSection";
import DetailsProperty from "./DetailsProperty";
import LeaveComment from "./LeaveComment";

const BodyContent = (props) => {
  return (
    <section className="ratio_40">
      <Container>
        <Row>
          <Col xl={props.side ? "9" : "12"} lg={props.side ? "8" : ""} className=" order-lg-1">
            <div className="blog-single-detail theme-card">
              {props.children}
              <BlogTitle />
              <DetailsProperty />
              <CommentSection />
              <LeaveComment />
            </div>
          </Col>
          {props.side && (
            <Sidebar side={props.side}>
              <SearchBar />
              <Category />
              <RecentlyAdded />
              <PopularTags />
            </Sidebar>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
