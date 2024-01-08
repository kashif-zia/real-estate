

/**
 * It takes a locale and an array of namespaces and returns an object with the translations for those
 * namespaces
 * @returns an object with a property of props. The props property is an object with a property of
 * ...(await serverSideTranslations(locale, ['common']))
 */
import React from "react";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../components/pages/blogPage/sidebarPage";
import Footer from "../../layout/footers/Footer";
import NavbarTwo from "../../layout/headers/NavbarTwo";

// export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const LeftSidebar = () => {
  return (
    <>
      <NavbarTwo />
      <Breadcrumb />
      <BodyContent side={"left"} />
      <Footer />
    </>
  );
};

export default LeftSidebar;
