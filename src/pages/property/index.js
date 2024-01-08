/**
 * It takes the locale from the context and returns the translations for the given namespaces
 * @returns A React component.
 */
import React from "react";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import GridView from "../../components/listing/gridView/grid/GridView";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import Footer from "../../layout/footers/Footer";
import NavbarTwo from "../../layout/headers/NavbarTwo";

// export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const LeftSidebar = () => {
  return (
    <>
      <NavbarTwo />
      <Breadcrumb />
      <GridView side={"left"} size={2} gridType={"grid-view"} gridBar={false} tabHeader={true} infiniteScroll={true} />
      <Footer />
    </>
  );
};

export default LeftSidebar;
