import React from "react";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../components/agent/submitProperty";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import Footer from "../../layout/footers/Footer";
import NavbarOne from "../../layout/headers/NavbarOne";

// export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const SubmitProperty = () => {
  return (
    <>
      <NavbarOne />
      <Breadcrumb />
      <BodyContent />
      <Footer />
    </>
  );
};

export default SubmitProperty;
