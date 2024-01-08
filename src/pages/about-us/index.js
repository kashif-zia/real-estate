import React from "react";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
 import NavbarTwo from "../../layout/headers/NavbarTwo";

// export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

import Footer from "../../layout/footers/Footer";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../components/about/index";

const AboutUs1 = () => {
  return (
    <>
     <NavbarTwo />
      <Breadcrumb />
      <BodyContent />
      <Footer />
    </>
  );
};

export default AboutUs1;
