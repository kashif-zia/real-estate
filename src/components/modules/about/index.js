import React, { useEffect, useState } from "react";
import { getData } from "../../../libs/utils/getData";
import AboutSectionOne from "../../home/slider-filter-search/About";

import AboutSectionThree from "../../home";

const BodyContent = () => {
  const [clientData, setClientData] = useState();

  useEffect(() => {
    getData(`${process.env.API_URL}/client-agent`)
      .then((res) => {
        setClientData(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <>
      <AboutSectionOne value={clientData?.MeetOurAgent} />
      <div className="bg-light section-pb">
        <AboutSectionTwo value={clientData?.OurAgentInCorporateLayout} />
      </div>
      <AboutSectionThree value={clientData?.OurAgentInClassicLayout} />
    </>
  );
};

export default BodyContent;
