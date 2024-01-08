import React from "react";
import { Container, Row } from "reactstrap";
// // import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import NavbarTwo from "../../layout/headers/NavbarTwo";

// export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const Page404 = () => {
  return (
    <>
      <NavbarTwo />
      <section className="error-section small-section">
        <Container>
          <Row>
            <div className="col text-center not-found pt-5">
              <img src="/assets/images/inner-pages/2.svg" className="img-fluid mt-4" alt="" />
              <h2>Whoops! something went wrong ?</h2>
              <p className="font-roboto">we are sorry but the page you are looking for doesn&apos;t exist or has been removed. please check or search again.</p>
              <div className="btns">
                <Link href="/home" className="btn btn-gradient">
                  go to home page
                </Link>
                <a className="btn btn-dashed ms-2">Report problem</a>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Page404;
