// import dynamic from 'next/dynamic';
import React, { useState } from "react";
import { Col, Container, Row, TabContent, TabPane } from "reactstrap";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import WizrdSteps from "./WizrdSteps";

// const DynamicBodyContent = dynamic(() => import('./WizrdSteps'), {
//   ssr: false,
// });

const BodyContent = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [data, setData] = useState();

  return (
    <>
      <section className="property-wizard">
        <Container>
          <Row className=" wizard-box">
            <Col sm="12">
              <Row className="wizard-step-container ">
                <Col xxl="3" lg="4">
                  <WizrdSteps activeTab={activeTab} />
                </Col>
                <Col xxl="9" lg="8" className="wizard-form-details ">
                  <div className="theme-card my-3">
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId={1}>
                        <Step1 setActiveTab={setActiveTab} setData={setData} />
                      </TabPane>
                      <TabPane tabId={2}>
                        <Step2 setActiveTab={setActiveTab} setData={setData} />
                      </TabPane>
                      <TabPane tabId={3}>
                        <Step3 setActiveTab={setActiveTab} setData={setData} />
                      </TabPane>
                      <TabPane tabId={4}>
                        <Step4 setActiveTab={setActiveTab} data={data} setData={setData} />
                      </TabPane>
                    </TabContent>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BodyContent;
