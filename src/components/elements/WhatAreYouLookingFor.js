import Link from "next/link";
import React from "react";
import { AppPropertyData } from "../../../data/appPropertyData";

const WhatAreYouLookingFor = () => {
  return (
    <div className="looking-icons">
      <h5>What are you looking for?</h5>
      <ul>
        {AppPropertyData.WhatAreYouLookingFor.map((data, i) => (
          <li key={i}>
            <Link href={data.path} className="looking-icon">
              <svg className="property-svg">
                <use xlinkHref={data.img}></use>
              </svg>
              <h6>{data.title}</h6>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhatAreYouLookingFor;
