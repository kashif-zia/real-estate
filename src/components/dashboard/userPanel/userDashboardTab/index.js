import React from "react";
import { Row } from "reactstrap";
import AvailableProperty from "./AvailableProperty";
import PropertyOverview from "./PropertyOverview";
import SalesByAgent from "./SalesByAgent";
import SalesOverview from "./SalesOverview";
import SmallBarCard from "./SmallBarCard";

const UserDashboardTab = () => {
  return (
    <div className="dashboard-content">
      <div id="dashboard">
        <div className="user-wrapper">
          <Row>
            <SmallBarCard />
            <SalesOverview />
            <SalesByAgent />
            <AvailableProperty />
            <PropertyOverview />
          </Row>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardTab;
