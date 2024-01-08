import React, { useState } from "react";
import { Container, TabContent, TabPane } from "reactstrap";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import StepsBarSection from "./StepsBar";

const BodyContent = () => {
  const [active, setActive] = useState(1);
  const [data, setData] = useState();

  return (
    <>
      <section className="property-wizard horizontal-wizard">
        <Container>
          <div className="row wizard-box">
            <div className="col-lg-8 col-sm-10">
              <div className="wizard-step-container theme-card">
                <StepsBarSection active={active} />
                <div className="wizard-form-details log-in">
                  <TabContent id="tabsContent" className="tab-content" activeTab={active}>
                    <TabPane tabId={1}>
                      <Step1 setActive={setActive} setData={setData} />
                    </TabPane>
                    <TabPane tabId={2}>
                      <Step2 setActive={setActive} setData={setData} />
                    </TabPane>
                    <TabPane tabId={3}>
                      <Step3 setActive={setActive} data={data} />
                    </TabPane>
                  </TabContent>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BodyContent;
