import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button, Col, Label, Row } from "reactstrap";
import { ReactstrapInput } from "../../../libs/utils/ReactstrapInputsValidation";

const Step3 = ({ setActiveTab, setData }) => {
  return (
    <Formik
      initialValues={{
        mp4Link: "",
        checkBoxes: [],
      }}
      validationSchema={Yup.object().shape({
        
      })}
      onSubmit={(values) => {
        setActiveTab((prev) => prev + 1);
        setData((prev) => ({ ...prev, ...values }));
      }}
      render={() => (
        <Form>
          <div className="wizard-step-3 ">
            <h2>Gallery</h2>
            <p className="font-roboto">Add your property Media</p>
            <label>Media</label>
            <div className="dropzone" id="multiFileUpload">
              <div className="dz-message needsclick">
                <i className="fas fa-cloud-upload-alt" />
                <h6>Drop files here or click to upload.</h6>
                <span className="note needsclick">
                  (This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)
                </span>
              </div>
            </div>
            <Row className="gx-3">
              <Col sm="12" className="form-group">
                <Field name="mp4Link" component={ReactstrapInput} type="text" className="form-control" placeholder="mp4 video link" label="Video (mp4)" />
              </Col>
              <Col sm="12" className="form-group">
                <Label>Additional features</Label>
                <div className="feature-checkbox">
                  <Label htmlFor="chk-ani">
                    <Field name="checkBoxes" value="Emergency Exit" className="checkbox_animated color-2" id="chk-ani" type="checkbox" /> Emergency Exit
                  </Label>
                  <Label htmlFor="chk-ani1">
                    <Field name="checkBoxes" value="CCTV" className="checkbox_animated color-2" id="chk-ani1" type="checkbox" /> CCTV
                  </Label>
                  <Label htmlFor="chk-ani2">
                    <Field name="checkBoxes" value="Free Wi-Fi" className="checkbox_animated color-2" id="chk-ani2" type="checkbox" /> Free Wi-Fi
                  </Label>
                  <Label htmlFor="chk-ani3">
                    <Field name="checkBoxes In The Area" value="Free Parking In The Area" className="checkbox_animated color-2" id="chk-ani3" type="checkbox" /> Free Parking In The Area
                  </Label>
                  <Label htmlFor="chk-ani4">
                    <Field name="checkBoxes" value="Air Conditioning" className="checkbox_animated color-2" id="chk-ani4" type="checkbox" /> Air Conditioning
                  </Label>
                </div>
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

export default Step3;
