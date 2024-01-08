import React from "react";
import { Row } from "reactstrap";

const AboutAgent = () => {
  return (
    <div className="about-agent theme-card">
      <h3>About the agency</h3>
      <Row>
        <p className="font-roboto col-xl-4">
          Residences can be classified by and how they are connected to neighbouring residences and land. Different types of housing tenure can be used for the same physical type. For example,
          connected residences might be
        </p>
        <p className="font-roboto col-xl-4">
          owned by a single entity and leased out, or owned separately with an agreement covering the relationship between units and common areas and concerns Residential real estate may contain
          either a single family
        </p>
        <p className="font-roboto col-xl-4">
          multifamily structure that is available for occupation or for non-business purposes. Luxury real estate is sometimes used as a way to store value, especially by wealthy foreigners, without
          any particular attempt to rent it out.
        </p>
      </Row>
    </div>
  );
};

export default AboutAgent;
