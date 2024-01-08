import React from "react";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../../components/blog/detail";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import Footer from "../../../layout/footers/Footer";
import NavbarTwo from "../../../layout/headers/NavbarTwo";

// export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import Img from "../../../libs/utils/BackgroundImageRatio";

const LeftSidebar = () => {
  return (
    <>
      <NavbarTwo />
      <Breadcrumb />
      <BodyContent side={"left"}>
        <div className='blog-detail-image'>
          <Img src='/assets/images/parallax/4.jpg' className='bg-img img-fluid' alt='' />
        </div>
      </BodyContent>
      <Footer />
    </>
  );
};
export default LeftSidebar;
