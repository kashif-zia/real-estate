import React, { useState } from "react";
import { Col, Container, Row, TabContent, TabPane } from "reactstrap";
import CardsPaymentTab from "./cards&paymentTab";
import CreatePropertyTab from "./createPropertyTab";
import FavoritesTab from "./favouritesTab";
import ComparePropertyTab from "./compareproperty";
import MyListingTab from "./myListingTab";
import MyProfileTab from "./myProfileTab";
import PrivacyTab from "./privacyTab.js/index.js";
import UserDashboardTab from "./userDashboardTab";
import UserPanelSidebar from "../userPanel/UserPanelSidebar";

const BodyContent = ({ active }) => {
  const [activeTab, setActiveTab] = useState(active);

  return (
    <section className='user-dashboard small-section'>
      <Container>
        <Row>
          <UserPanelSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <Col lg='9'>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='Dashboard'>
                <UserDashboardTab />
              </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='Listing'>
                <MyListingTab />
              </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='CreateProperty'>
                <CreatePropertyTab />
              </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='Profile'>
                <MyProfileTab />
              </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='Favorites'>
                <FavoritesTab />
              </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='Compare'>
                <ComparePropertyTab />
              </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='Paymnet'>
                <CardsPaymentTab />
              </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='Setting'>
                <PrivacyTab />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
