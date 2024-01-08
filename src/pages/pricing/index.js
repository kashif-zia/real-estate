import React from "react";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../components/pages/otherPages/pricing";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import Footer from "../../layout/footers/Footer";
import NavbarTwo from "../../layout/headers/NavbarTwo";

// export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const Pricing = () => {
  return (
    <>
      <NavbarTwo />
      <Breadcrumb />
      <BodyContent />
      <Footer />
    </>
  );
};

export default Pricing;
