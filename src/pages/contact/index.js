/**
 * It takes a locale and an array of namespaces, and returns an object with the translations for those
 * namespaces
 * @returns The return value of the function is an object with a props property.
 */
import React from "react";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarTwo from "../../layout/headers/NavbarTwo";

// export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import Footer from "../../layout/footers/Footer";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../components/contact/index";

const ContactUs1 = () => {
  return (
    <>
      <NavbarTwo />
      <Breadcrumb />
      <BodyContent />
      <Footer />
    </>
  );
};

export default ContactUs1;
