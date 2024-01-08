import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../../../../layout/sidebarLayout/Sidebar";
import { getData } from "../../../../libs/utils/getData";
import Exploration from "../../../../layout/sidebarLayout/Exploration";
import RecentlyAdded from "../../../../layout/sidebarLayout/RecentlyAdded";
import Filter from "../../../../layout/sidebarLayout/Filter";
import PropertyBoxFour from "../../../elements/propertyBoxs/PropertyBoxFour";
import GridView from "../../../listing/gridView/grid/GridView";
import AboutAgent from "./AboutAgent";
import RealEstateAgency from "./RealEstateAgency";

const BodyContent = () => {
  const [clientData, setClientData] = useState();

  useEffect(() => {
    getData(`${process.env.API_URL}/client-agent`)
      .then((res) => {
        setClientData(res.data.agencyProfileOurAgent);
      })
      .catch((error) => console.log("Error", error));
  }, []);
  return (
    <section className="agent-section property-section">
      <Container>
        <Row className=" ratio_63">
          <Col xl="9" lg="8" className=" property-grid-2">
            <RealEstateAgency />
            <AboutAgent />
            <div className="agency-title">
              <h3>Our Agent</h3>
            </div>
            <Row className=" column-sm property-label">
              {clientData &&
                clientData?.map((data, i) => (
                  <Col xl="4" md="6" className="wow fadeInUp" key={i}>
                    <PropertyBoxFour data={data} />
                  </Col>
                ))}
            </Row>
            <GridView size={2} gridType={"grid-view"} gridBar={true} />
          </Col>
          <Sidebar>
            <Exploration />
            <Filter />
            <RecentlyAdded />
          </Sidebar>
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
