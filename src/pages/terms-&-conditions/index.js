import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import Footer from "../../layout/footers/Footer";
import NavbarTwo from "../../layout/headers/NavbarTwo";

// export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const TermsAndConditions = () => {
  const [active, setActive] = useState("1");

  return (
    <>
      <NavbarTwo />
      <Breadcrumb />
      <section className="user-dashboard terms-section">
        <Container>
          <Row className="log-in">
            <Col xl="3" lg="4">
              <div className="sidebar-user sticky-cls">
                <div className="dashboard-list">
                  <h5>Related Topics</h5>
                  <ul className="nav nav-tabs right-line-tab">
                    <li className="nav-item">
                      <a className={`nav-link ${active === "1" ? "active" : ""}`} href="#intro" onClick={() => setActive("1")}>
                        Introduction
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${active === "2" ? "active" : ""}`} href="#restriction" onClick={() => setActive("2")}>
                        Restrictions
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${active === "3" ? "active" : ""}`} href="#limitation" onClick={() => setActive("3")}>
                        Limitation
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${active === "4" ? "active" : ""}`} href="#reservation" onClick={() => setActive("4")}>
                        Reservation of Rights
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${active === "5" ? "active" : ""}`} href="#disclaimer" onClick={() => setActive("5")}>
                        Disclaimer
                      </a>
                    </li>
                  </ul>
                  <div className="terms-bottom-content">
                    <img src="/assets/images/others/1.svg" alt="" className="img-fluid" />
                    <a href="text.txt" className="btn btn-gradient btn-pill" download>
                      Download Doc
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl="9" lg="8" sm="12">
              <div className="theme-card">
                <h2>Terms & Conditions</h2>
                <div className="terms-wrap">
                  <div className="terms-wrapper" id="intro">
                    <h4>Introduction</h4>
                    <p>These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Sheltos accessible at sheltos.com.</p>
                    <p>
                      These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use
                      this Website if you disagree with any of these Website Standard Terms and Conditions.
                    </p>
                  </div>
                  <div className="terms-wrapper" id="restriction">
                    <h4>Restrictions</h4>
                    <p>You are specifically restricted from all of the following:</p>
                    <ul>
                      <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
                      <li>publishing any Website material in any other media;</li>
                      <li>using this Website in any way that is or may be damaging to this Website;</li>
                      <li>using this Website to engage in any advertising or marketing.</li>
                    </ul>
                  </div>
                  <div className="terms-wrapper" id="limitation">
                    <h4>Limitation of liability</h4>
                    <p>
                      In no event shall Pixelstrap, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this
                      Website whether such liability is under contract. Pixelstrap, including its officers, directors and employees shall not be held liable for any indirect, consequential or special
                      liability arising out of or in any way related to your use of this Website.
                    </p>
                  </div>
                  <div className="terms-wrapper" id="reservation">
                    <h4>Reservation of Rights</h4>
                    <p>
                      We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also
                      reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these
                      linking terms and conditions.
                    </p>
                  </div>
                  <div className="terms-wrapper" id="disclaimer">
                    <h4>Disclaimer</h4>
                    <p>
                      The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities
                      arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
                    </p>
                    <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
