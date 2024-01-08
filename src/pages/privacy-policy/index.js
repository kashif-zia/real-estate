import React, { useState } from "react";
import { Container } from "reactstrap";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import Footer from "../../layout/footers/Footer";
import NavbarTwo from "../../layout/headers/NavbarTwo";

// export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const PrivacyPolicy = () => {
  const [active, setActive] = useState("1");

  return (
    <>
      <NavbarTwo />
      <Breadcrumb />
      <section className='user-dashboard terms-section'>
        <Container>
          <div className='row log-in'>
            <div className='col-xl-3 col-lg-4'>
              <div className='sidebar-user sticky-cls'>
                <div className='dashboard-list'>
                  <h5>Related Topics</h5>
                  <ul className='nav nav-tabs right-line-tab'>
                    <li className='nav-item'>
                      <a className={`nav-link ${active === "1" ? "active" : ""}`} onClick={() => setActive("1")} href='#intro'>
                        Information
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className={`nav-link ${active === "2" ? "active" : ""}`} href='#howuse' onClick={() => setActive("2")}>
                        How We Use
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className={`nav-link ${active === "3" ? "active" : ""}`} href='#thirdparty' onClick={() => setActive("3")}>
                        Third-Party Privacy
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className={`nav-link ${active === "4" ? "active" : ""}`} href='#advertising' onClick={() => setActive("4")}>
                        Advertising
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className={`nav-link ${active === "5" ? "active" : ""}`} href='#dpr' onClick={() => setActive("5")}>
                        GDPR Privacy
                      </a>
                    </li>
                  </ul>
                  <div className='terms-bottom-content'>
                    <img src='/assets/images/others/1.svg' alt='' className='img-fluid' />
                    <a href='/assets/privacy.txt' className='btn btn-gradient btn-pill' download>
                      Download Doc
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-9 col-lg-8 col-12'>
              <div className='theme-card'>
                <h2>Privacy policy for Sheltos</h2>
                <div className='terms-wrap'>
                  <div className='terms-wrapper'>
                    <p>At Sheltos, accessible at sheltos.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by sheltos and how we use it.</p>
                    <p>
                      If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at <a>test@sheltos.com</a>
                    </p>
                  </div>
                  <div className='terms-wrapper' id='intro'>
                    <h4>Information we collect</h4>
                    <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                    <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
                  </div>
                  <div className='terms-wrapper' id='howuse'>
                    <h4>How we use your information</h4>
                    <p>We use the information we collect in various ways, including to:</p>
                    <ul>
                      <li>Understand and analyze how you use our website</li>
                      <li>Provide, operate, and maintain our website</li>
                      <li>Develop new products, services, features, and functionality</li>
                    </ul>
                  </div>
                  <div className='terms-wrapper' id='thirdparty'>
                    <h4>Third-Party Privacy Policies</h4>
                    <p>Sheltos's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>
                    <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p>
                  </div>
                  <div className='terms-wrapper' id='advertising'>
                    <h4>Advertising Partners Privacy Policies</h4>
                    <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Sheltos.</p>
                    <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Website Name, which are sent directly to users' browser. </p>
                    <p>Note that Sheltos has no access to or control over these cookies that are used by third-party advertisers.</p>
                  </div>
                  <div className='terms-wrapper' id='dpr'>
                    <h4>GDPR Privacy Policy (Data Protection Rights)</h4>
                    <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                    <p>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>
                    <p>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
