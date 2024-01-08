import React, { useEffect, useState } from "react";
import { AppPropertyData } from "../../../data/appPropertyData";
import { getData } from "../../libs/utils/getData";
import BlogSection from "../blog/index";
import PropertyServicesSection from "../../components/propertyservices/Propertyservices";
import TestimonialSection from "./Testimonial";
import ServiceSection from "./Service";

const BodyContent = () => {
  const [value, setValue] = useState();
  const [clientData, setClientData] = useState();

  useEffect(() => {
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((error) => console.log("Error", error));
    getData(`${process.env.API_URL}/client-agent`)
      .then((res) => {
        setClientData(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);
  return (
    <>
      <ServiceSection />
      <PropertyServicesSection value={AppPropertyData.PropertyServices} />
      <div className="bg-light">
        <TestimonialSection value={clientData?.WhatPeopleSay} />
      </div>      
      <BlogSection value={value?.LatestBlogInCorporate} />
    </>
  );
};

export default BodyContent;
