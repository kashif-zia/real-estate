import { Field, Form, Formik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { Lock, Mail, Phone, User } from "react-feather";
import { Button, Col, Row } from "reactstrap";
import * as Yup from "yup";
import NoSsr from "../../../../libs/utils/NoSsr";
import { ReactstrapInput } from "../../../../libs/utils/ReactstrapInputsValidation";

const Step1 = ({ setActive, setData }) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <NoSsr>
      <Formik
        initialValues={{
          firstname: "",
          mobnumber: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().required(),
          mobnumber: Yup.number()
            .test("len", "Must be exactly 9 characters", (val) => String(val) && String(val).length === 9)
            .required(),
          email: Yup.string().email().required(),
          password: Yup.string().required(),
        })}
        onSubmit={(values) => {
          setData(values);
          setActive(2);
        }}
        render={() => (
          <Form>
            <div className="wizard-step-1 ">
              <div className="title-3 text-start">
                <h2>Get started</h2>
              </div>
              <Row>
                <Col md="12" className="form-group col-md-12">
                  <div className="input-group">
                    <div className="input-group-text">
                      <User />
                    </div>
                    <Field type="text" component={ReactstrapInput} className="form-control" id="first-name" name="firstname" placeholder="Enter your Name" required="" />
                  </div>
                </Col>
                <Col md="6" className="form-group">
                  <div className="input-group">
                    <div className="input-group-text">
                      <Phone />
                    </div>
                    <Field className="form-control" name="mobnumber" component={ReactstrapInput} id="tbNumbers" type="tel" maxLength="9" placeholder="Enter your phone number" />
                  </div>
                </Col>
                <Col md="6" className="form-group ">
                  <div className="input-group">
                    <div className="input-group-text">
                      <Mail />
                    </div>
                    <Field type="email" className="form-control" name="email" id="email" placeholder="e.g,demo@gmail.com" component={ReactstrapInput} />
                  </div>
                </Col>
                <Col sm="12" className="form-group ">
                  <div className="input-group">
                    <div className="input-group-text">
                      <Lock />
                    </div>
                    <Field type={showPass ? "text" : "password"} id="pwd-input" name="password" className="form-control" placeholder="Password" maxLength="8" component={ReactstrapInput} />
                    <div className="input-group-text">
                      <i id="pwd-icon" className="far fa-eye-slash" onClick={() => setShowPass((prev) => !prev)}></i>
                    </div>
                  </div>
                  <div className="text-end">
                    <p>
                      Alerady have an account ?
                      <Link href="/pages/other-pages/login" className="btn btn-dashed btn-pill">
                        Log in
                      </Link>
                    </p>
                  </div>
                </Col>
                <Col sm="12" className="next-btn text-end ">
                  <Button type="submit" className="btn btn-gradient next1 btn-pill">
                    Next <i className="fas fa-arrow-right ms-2"></i>
                  </Button>
                </Col>
              </Row>
            </div>
          </Form>
        )}
      />
    </NoSsr>
  );
};

export default Step1;
