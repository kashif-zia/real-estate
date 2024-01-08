import React from "react";
import { Button, Col, Row } from "reactstrap";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { ReactstrapInput, ReactstrapSelect } from "../../../libs/utils/ReactstrapInputsValidation";

const Step2 = ({ setActiveTab, setData }) => {
  return (
    <Formik
      initialValues={{
        address: "",
        zip: "",
        anyCountry: "",
        anyCity: "",
        landmark: "",
      }}
      validationSchema={Yup.object().shape({
        address: Yup.string().required(),
        zip: Yup.string().min(6).max(6).required(),
        anyCountry: Yup.string().required(),
        anyCity: Yup.string().required(),
        landmark: Yup.string().required(),
      })}
      onSubmit={(values) => {
        setActiveTab((prev) => prev + 1);
        setData((prev) => ({ ...prev, ...values }));
      }}
      render={() => (
        <Form>
          <div className="wizard-step-2">
            <h2>Address</h2>
            <p className="font-roboto">Add your property Location</p>
            <Row className=" gx-3">
              <Col sm="6" className="form-group">
                <Field type="text" name="address" component={ReactstrapInput} className="form-control" label="Address" placeholder="Address of your property" />
              </Col>
              <Col sm="6" className="form-group">
                <Field type="text" name="zip" component={ReactstrapInput} className="form-control" label="Zip code" placeholder="39702" />
              </Col>
              <Col sm="4" className="form-group">
                <Field
                  name="anyCountry"
                  component={ReactstrapSelect}
                  type="text"
                  className="form-control"
                  label="Any country"
                  inputprops={{ options: ["1", "2", "3", "4", "5", "6"], defaultOption: "Any country" }}
                />
              </Col>
              <Col sm="4" className="form-group">
                <Field
                  name="anyCity"
                  component={ReactstrapSelect}
                  type="text"
                  className="form-control"
                  label="Any City"
                  inputprops={{ options: ["1", "2", "3", "4", "5", "6"], defaultOption: "Any City" }}
                />
              </Col>
              <Col sm="4" className="form-group">
                <Field name="landmark" type="text" component={ReactstrapInput} className="form-control" placeholder="landmark place name" label="Landmark" />
              </Col>
              <Col sm="12">
                <iframe
                  title="realestate location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946229!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563449626439!5m2!1sen!2sin"
                  allowFullScreen
                />
              </Col>
            </Row>
            <div className="next-btn d-flex">
              <Button type="button" className="btn btn-dashed color-2 prev1 btn-pill" onClick={() => setActiveTab((prev) => prev - 1)}>
                <i className="fas fa-arrow-left me-2" /> Previous
              </Button>
              <Button type="submit" className="btn btn-gradient color-2 next2 btn-pill">
                Next <i className="fas fa-arrow-right ms-2" />
              </Button>
            </div>
          </div>
        </Form>
      )}
    />
  );
};

export default Step2;
