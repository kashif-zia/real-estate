import { Field, Form, Formik } from "formik";
import React from "react";
import { Map, MapPin, Phone } from "react-feather";
import { Button, Row } from "reactstrap";
import * as Yup from "yup";
import ReactstrapFormikInput from "../../../../libs/utils/ReactstrapInputsValidation/ReactstrapFormikInput";

const Step2 = ({ setActive, setData }) => {
  return (
    <Formik
      initialValues={{
        firstname: "",
        phone: "",
        state: "",
        country: "",
        pin: "",
      }}
      validationSchema={Yup.object().shape({
        firstname: Yup.string().required(),
        phone: Yup.number()
          .test("len", "Must be exactly 9 characters", (val) => String(val) && String(val).length === 9)
          .required(),
        state: Yup.string().required(),
        country: Yup.string().required(),
        pin: Yup.number()
          .test("len", "Must be exactly 5 characters", (val) => String(val) && String(val).length === 5)
          .required(),
      })}
      onSubmit={(values) => {
        setData((prev) => ({ ...prev, ...values }));
        setActive(3);
      }}
      render={() => (
        <Form>
          <div className="wizard-step-2">
            <div className="title-3 text-start">
              <h2>Add your Location</h2>
            </div>
            <Row className="row" id="needs-validation1" noValidate="">
              <div className="form-group col-md-12">
                <div className="input-group">
                  <div className="input-group-text">
                    <MapPin />
                  </div>
                  <Field name="firstname" component={ReactstrapFormikInput} type="text" className="form-control" id="address" placeholder="Enter your Address" />
                </div>
              </div>
              <div className="form-group col-md-6">
                <div className="input-group">
                  <div className="input-group-text">
                    <Phone />
                  </div>
                  <Field name="phone" component={ReactstrapFormikInput} type="text" className="form-control" id="city_name" placeholder="Enter your city" />
                </div>
              </div>
              <div className="form-group col-md-6">
                <div className="input-group">
                  <div className="input-group-text">
                    <MapPin />
                  </div>
                  <Field type="text" name="state" component={ReactstrapFormikInput} className="form-control" id="state_name" placeholder="Enter your state" />
                </div>
              </div>
              <div className="form-group col-md-6">
                <div className="input-group">
                  <div className="input-group-text">
                    <Map />
                  </div>
                  <Field type="text" name="country" component={ReactstrapFormikInput} className="form-control" id="country_name" placeholder="Enter your country" />
                </div>
              </div>
              <div className="form-group col-md-6">
                <div className="input-group">
                  <div className="input-group-text">
                    <MapPin />
                  </div>
                  <Field name="pin" type="number" component={ReactstrapFormikInput} className="form-control" id="pin_code" placeholder="Enter your pin code" />
                </div>
              </div>
              <div className="next-btn d-flex col-sm-12">
                <Button type="button" className="btn btn-dashed prev1 btn-pill" onClick={() => setActive((prev) => prev - 1)}>
                  <i className="fas fa-arrow-left me-2"></i> Previous
                </Button>
                <Button type="submit" className="btn btn-gradient next2 btn-pill">
                  Next <i className="fas fa-arrow-right ms-2"></i>
                </Button>
              </div>
            </Row>
          </div>
        </Form>
      )}
    />
  );
};

export default Step2;
