/**
 * It returns a section with a container with a row with a sidebar and a single property section
 * @returns The return statement is used to return a value from a function.
 */
import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import ContactInfo from "../../../layout/sidebarLayout/ContactInfo";
import Exploration from "../../../layout/sidebarLayout/Exploration";
import Featured from "../../../layout/sidebarLayout/Featured";
import Filter from "../../../layout/sidebarLayout/Filter";
import Mortgage from "../../../layout/sidebarLayout/Mortgage";
import RecentlyAdded from "../../../layout/sidebarLayout/RecentlyAdded";
import Sidebar from "../../../layout/sidebarLayout/Sidebar";
import NoSsr from "../../../libs/utils/NoSsr";
import RelatedProperty from "./RelatedProperty";
import SinglePropertySection from "./SingleProperty";
import SliderBreadcrumbSection from "./SliderBreadcrumb";
import {API} from "aws-amplify"
import {propertiesBySlug} from "../../../graphql/queries"
const BodyContent = ({ side, slug }) => {
  const [singleProperty,setSingleProperty] = useState({})
  const getSingleProperty = async()=>{
    try{
      console.log(slug,"OUR SLUG")
      const getBySlugAPI = await API.graphql({query:propertiesBySlug,variables:{slug:slug}})
      console.log(getBySlugAPI,"Single property response")
    }
    catch(err){
      console.log(err, "getSingleProperty error")
    }
  }
  useEffect(()=>{
    getSingleProperty()
  })
  return (
    <NoSsr>
      <SliderBreadcrumbSection />
      <section className="single-property">
        <Container>
          <Row className=" ratio_65">
            <Sidebar mortgage={true} side={side} singleProperty={true}>
              <ContactInfo />
              <Exploration />
              <Filter sm={12} />
              <Featured />
              <RecentlyAdded />
              <Mortgage />
            </Sidebar>
            <SinglePropertySection />
          </Row>
        </Container>
      </section>
      <RelatedProperty />
    </NoSsr>
  );
};

export default BodyContent;
