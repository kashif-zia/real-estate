import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "react-feather";
import { Container, Row } from "reactstrap";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import Footer from "../../layout/footers/Footer";
import NavbarTwo from "../../layout/headers/NavbarTwo";

// export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const Faq = () => {
  const [active, setActive] = useState(0);
  const handleClick = (value) => {
    setActive(value);
    active === value && setActive();
  };

  const data = [
    {
      title: "Different types of housing tenure can be used for the same physical type.",
      details: "In markets where land and building prices are rising, real estate is often purchased as an investment, whether or not the owner intends to use the property.",
    },
    {
      title: "Section 1.10.32 of \"de Finibus Bonorum et Malorum\", written by",
      details: " In markets where land and building prices are rising, real estate is often purchased as an investment, whether or not the owner intends to use the property.",
    },
    {
      title: "Different types of housing tenure can be used for the same physical type.",
      details:
        " In markets where land and building prices are rising, real estate is often purchased as an investment, whether or not the owner intends to use the property. In markets where land and building prices are rising, real estate is often purchased as an investment, whether or not the owner intends to use the property.",
    },
    {
      title: " Different types of housing tenure can be used for the same physical type.",
      details:
        "In markets where land and building prices are rising, real estate is often purchased as an investment, whether or not the owner intends to use the property. In markets where land and building prices are rising, real estate is often purchased as an investment, whether or not the owner intends to use the property.",
    },
    {
      title: "Section 1.10.32 of \"de Finibus Bonorum et Malorum\", written",
      details:
        " In markets where land and building prices are rising, real estate is often purchased as an investment, whether or not the owner intends to use the property.In markets where land and building prices are rising, real estate is often purchased as an investment, whether or not the owner intends to use the property.",
    },
    {
      title: "Different types of housing tenure can be used for the same physical type.",
      details:
        " In markets where land and building prices are rising, real estate is often purchased as an investment, whether or not the owner intends to use the property.In markets where land and building prices are rising, real estate is often purchased as an investment, whether or not the owner intends to use the property.",
    },
  ];
  return (
    <>
      <NavbarTwo />
      <Breadcrumb />
      <section className='faq-section log-in'>
        <Container>
          <Row>
            <div className='col-lg-6 order-lg-1'>
              <div className='faq-image text-center'>
                <img src='/assets/images/inner-pages/3.svg' className='img-fluid' alt='' />
                <h3>Have Any Questions ?</h3>
                <p className='font-roboto'>You can ask anything you want to know</p>
              </div>
              <form>
                <div className='form-group mb-0'>
                  <label>Let me know</label>
                  <input type='text' className='form-control' placeholder='Ask a question' required />
                </div>
                <button type='submit' className='btn btn-gradient'>
                  Send
                </button>
              </form>
            </div>
            <div className='col-lg-6'>
              <div className='faq-questions'>
                <div className='title-3 text-start'>
                  <h2>Frequently ask question</h2>
                </div>

                <div id='accordion' className='accordion'>
                  {data.map((data, i) => (
                    <div className='card' key={i}>
                      <div className='card-header'>
                        <a className='card-link ' onClick={() => handleClick(i)}>
                          {data.title}
                          {active === i ? <ChevronDown className='float-end' /> : <ChevronRight className='float-end' />}
                        </a>
                      </div>
                      <div className={`collapse ${active === i ? "show" : ""}`}>
                        <div className='card-body'>{data.details}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Faq;
