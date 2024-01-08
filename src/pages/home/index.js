/**
 * It returns the NavbarOne, BodyContent, and FooterTwo components
 * @returns The NavbarOne, BodyContent, and FooterTwo components are being returned.
 */
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import BodyContent from "../../components/home/slider-filter-search";
import { ConfigDB } from "../../config/themeCustomizerConfig";
import Footer from "../../layout/footers/Footer";
import NavbarOne from "../../layout/headers/NavbarOne";

// export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const SliderFilterSearch = () => {
  useEffect(() => {
    setTimeout(() => {
      !ConfigDB.PrimaryColor && document.documentElement.style.setProperty("--theme-default", "#2c2e97");
      !ConfigDB.SecondaryColor && document.documentElement.style.setProperty("--theme-default2", "#4b55c4");
    }, 0.1);
  }, []);
  return (
    <>
      <NavbarOne />
      <BodyContent />
      <Footer />
    </>
  );
};

export default SliderFilterSearch;
