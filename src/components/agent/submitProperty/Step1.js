import React from "react";
import { Button, Col, Row } from "reactstrap";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { ReactstrapInput, ReactstrapSelect } from "../../../libs/utils/ReactstrapInputsValidation";

const Step1 = ({ setActiveTab, setData }) => {
  return (
    <Formik
      initialValues={{
        propertyType: "",
        propertyStatus: "",
        propertyPrice: "",
        password: "",
        maxRooms: "",
        beds: "",
        baths: "",
        area: "",
        price: "",
        agencies: "",
        description: "",
      }}
      validationSchema={Yup.object().shape({
        propertyType: Yup.string().required(),
        propertyStatus: Yup.string().required(),
        propertyPrice: Yup.number().required(),
        maxRooms: Yup.string().required(),
        beds: Yup.string().required(),
        baths: Yup.string().required(),
        area: Yup.string().required(),
        price: Yup.number().required(),
        agencies: Yup.string().required(),
        description: Yup.string().required(),
      })}
      onSubmit={(values) => {
        setActiveTab((prev) => prev + 1);
        setData((prev) => ({ ...prev, ...values }));
      }}
      render={() => (
        <Form>
          <div className="wizard-step-1 d-block">
            <h2>General</h2>
            <p className="font-roboto">Basic information about property</p>
            <Row className="gx-2 gx-sm-3">
              <Col sm="4" className="form-group">
                <Field name="propertyType" component={ReactstrapInput} type="text" className="form-control" placeholder="villa"/>
              </Col>
              <Col sm="4" className="form-group ">
                <Field
                  name="propertyStatus"
                  component={ReactstrapSelect}
                  type="text"
                  className="form-control"
                  label="Property Status"
                  inputprops={{ options: ["For Rent", "For sale"], defaultOption: "Property Status" }}
                />
              </Col>
              <Col sm="4" className="form-group">
                <Field name="propertyPrice" type="text" className="form-control" component={ReactstrapInput} label="Property Price" placeholder="$2800" />
              </Col>
              <Col sm="4" className="form-group">
                <Field
                  name="maxRooms"
                  component={ReactstrapSelect}
                  type="text"
                  className="form-control"
                  label="Max Rooms"
                  inputprops={{ options: ["1", "2", "3", "4", "5", "6"], defaultOption: "Max Rooms" }}
                />
              </Col>
              <Col sm="4" className="form-group">
                <Field name="beds" component={ReactstrapSelect} type="text" className="form-control" label="Beds" inputprops={{ options: ["1", "2", "3", "4", "5", "6"], defaultOption: "Beds" }} />
              </Col>
              <Col sm="4" className="form-group">
                <Field name="baths" component={ReactstrapSelect} type="text" className="form-control" label="Baths" inputprops={{ options: ["1", "2", "3", "4", "5", "6"], defaultOption: "Baths" }} />
              </Col>
              <Col sm="4" className="form-group">
                <Field name="area" type="text" className="form-control" component={ReactstrapInput} label="Area" placeholder="85 Sq Ft" />
              </Col>
              <Col sm="4" className="form-group">
                <Field name="price" type="text" className="form-control" component={ReactstrapInput} label="Price" placeholder="$3000" />
              </Col>
              <Col sm="4" className="form-group">
                <Field
                  name="agencies"
                  component={ReactstrapSelect}
                  type="text"
                  className="form-control"
                  label="Agencies"
                  inputprops={{ options: ["1", "2", "3", "4", "5", "6"], defaultOption: "Agencies" }}
                />
              </Col>
              <Col sm="12" className="form-group">
                <Field type="textarea" name="description" component={ReactstrapInput} className="form-control" rows={4} label="Description" />
              </Col>
              <div className="next-btn text-end">
                <Button type="submit" className="btn btn-gradient next1 btn-pill">
                  Next <i className="fas fa-arrow-right ms-2" />
                </Button>
              </div>
            </Row>
          </div>
        </Form>
      )}
    />
  );
};

export default Step1;
