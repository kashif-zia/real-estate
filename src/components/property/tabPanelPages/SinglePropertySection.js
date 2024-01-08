/**
 * It renders a tabbed box with 6 tabs
 * @returns The SinglePropertySection component is being returned.
 */
import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import AboutDeskBox from "../stickyTabOrClassic/AboutDeskBox";
import DetailsDeskBox from "../stickyTabOrClassic/DetailsDeskBox";
import FeatureDeskBox from "../stickyTabOrClassic/FeatureDeskBox";
import FloorPlanDeskBox from "../stickyTabOrClassic/FloorPlanDeskBox";
import LocationMapDeskBox from "../stickyTabOrClassic/LocationMapDeskBox";
import VideoDeskBox from "../stickyTabOrClassic/VideoDeskBox";

const SinglePropertySection = () => {
  const [active, setActive] = useState("About");
  return (
    <div className="desc-box">
      <Nav tabs className="line-tab">
        <NavItem>
          <NavLink
            onClick={() => {
              setActive("About");
            }}
            active={active === "About" && true}>
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              setActive("Features");
            }}
            active={active === "Features" && true}>
            Features
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              setActive("Video");
            }}
            active={active === "Video" && true}>
            Video
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              setActive("Details");
            }}
            active={active === "Details" && true}>
            Details
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              setActive("Floor Plan");
            }}
            active={active === "Floor Plan" && true}>
            Floor Plan
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              setActive("Office");
            }}
            active={active === "Office" && true}>
            Location
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent id="tabsContent" className="tab-content" activeTab={active}>
        <TabPane tabId="About">
          <AboutDeskBox />
        </TabPane>
        <TabPane tabId="Features">
          <FeatureDeskBox />
        </TabPane>
        <TabPane tabId="Video">
          <VideoDeskBox />
        </TabPane>
        <TabPane tabId="Details">
          <DetailsDeskBox />
        </TabPane>
        <TabPane tabId="Floor Plan">
          <FloorPlanDeskBox />
        </TabPane>
        <TabPane tabId="Office">
          <LocationMapDeskBox />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default SinglePropertySection;
