/**
 * It's a function that returns a div with a bunch of other divs and spans inside it
 * @returns A React component
 */
import Link from "next/link";
import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import Img from "../../../libs/utils/BackgroundImageRatio";
import SocialAccounts from "../SocialAccounts";

const PropertyBoxFour = ({ data }) => {
  const [load, setLoad] = useState(true);
  const [show, setShow] = useState();
  return (
    <>
      {!load ? (
        <div className="property-box">
          <div className="agent-image">
            <div>
              <Img src={data?.img} className="bg-img" alt="" />
              <span className="label label-shadow">{data?.property} properties</span>
              <div className="agent-overlay"></div>
              <div className="overlay-content">
                <SocialAccounts />
                <span>Connect</span>
              </div>
            </div>
          </div>
          <div className="agent-content">
            <h3>
              <Link href="/pages/agency/agency-profile">{data?.name}</Link>
            </h3>
            <p className="font-roboto">Real estate Agent</p>
            <ul className="agent-contact">
              <li>
                <i className="fas fa-phone-alt"></i>
                <span className="character">+91 {data?.mobile === show ? data?.mobile : data?.mobile.slice(0, 5) + "*****"}</span>
                <span
                  className="label label-light label-flat"
                  onClick={() => {
                    setShow(data?.mobile);
                    data?.mobile === show && setShow();
                  }}>
                  {show === data?.mobile ? "show" : "hide"}
                </span>
              </li>
              <li>
                <i className="fas fa-envelope"></i> {data?.mail}
              </li>
              <li>
                <i className="fas fa-fax"></i> {data?.pinCode}
              </li>
            </ul>
            <Link href="/agent/agent-profile">
              View profile <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      ) : (
        <ContentLoader className="skeleton-svg">
          {setTimeout(() => {
            setLoad(false);
          }, 2000)}
          <rect className="skeleton-img" />
          <rect className="skeleton-c1" />
          <rect className="skeleton-c2" />
          <rect className="skeleton-c3" />
        </ContentLoader>
      )}
    </>
  );
};

export default PropertyBoxFour;
