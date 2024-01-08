import { Field, Form, Formik } from "formik";
import React from "react";
import Dropzone from "react-dropzone-uploader";
import { Button, Col, Label, Row } from "reactstrap";
import * as Yup from "yup";
import NoSsr from "../../../../libs/utils/NoSsr";
import { ReactstrapInput, ReactstrapSelect } from "../../../../libs/utils/ReactstrapInputsValidation";

const CreatePropertyTab = () => {
  // const getUploadParams = ({ meta }) => {
  //   return { url: "https://httpbin.org/post" };
  // };
  // const handleChangeStatus = ({ meta, file }, status) => {};

  return (
    <NoSsr>
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
          address: "",
          zip: "",
          anyCountry: "",
          anyCity: "",
          landmark: "",
          mp4Link: "",
          checkBoxes: [],
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
          address: Yup.string().required(),
          zip: Yup.string().min(6).max(6).required(),
          anyCountry: Yup.string().required(),
          anyCity: Yup.string().required(),

          landmark: Yup.string().required(),
        })}
        onSubmit={(values) => {
          console.log(values);
          alert("Your data is submitted check console");
        }}
        render={() => (
          <Form>
            <div className="dashboard-content">
              <div className="create-tab" id="create-property">
                <div className="property-wizard common-card">
                  <div className="common-header">
                    <h5>Create property</h5>
                  </div>
                  <div className="create-property-form">
                    <div className="form-inputs">
                      <h6>Basic information</h6>
                     
                      <Row className="gx-2 gx-sm-3">
                        <Col sm="4" className="form-group">
                          <Field name="propertyType" component={ReactstrapInput} type="text" className="form-control" placeholder="villa" label="Property Type" />
                        </Col>
                        <div className="form-group col-sm-4">
                          <Field
                            name="propertyStatus"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Property Status"
                            inputprops={{ options: ["For Rent", "For sale"], defaultOption: "Property Status" }}
                          />
                        </div>
                        <Col sm="4" className="form-group">
                          <Field name="propertyPrice" type="text" className="form-control" component={ReactstrapInput} label="Property Price" placeholder="$2800" />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field name="maxRooms" component={ReactstrapSelect} type="text" className="form-control" label="Max Rooms"
                            inputprops={{ options: ["1", "2", "3", "4", "5", "6"], defaultOption: "Max Rooms" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field
                            name="beds"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Beds"
                            inputprops={{ options: ["1", "2", "3", "4", "5", "6"], defaultOption: "Beds" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field
                            name="baths"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Baths"
                            inputprops={{ options: ["1", "2", "3", "4", "5", "6"], defaultOption: "Baths" }}
                          />
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
                      </Row>
                    </div>
                    <div className="form-inputs">
                      <h6>Address</h6>
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
                      </Row>
                    </div>
                    <div className="form-inputs">
                      <h6>Gallery</h6>
                      <div className="dropzone" id="multiFileUpload">
                        <div className="dz-message needsclick">
                          <i className="fas fa-cloud-upload-alt" />
                          <Dropzone
                            // getUploadParams={getUploadParams}
                            // onChangeStatus={handleChangeStatus}
                            maxFiles={1}
                            multiple={false}
                            canCancel={false}
                            inputContent="Drop A File"
                            styles={{
                              dropzoneActive: { borderColor: "green" },
                            }}
                          />
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
                    </div>
                    <div className="text-end">
                      <Button type="submit" className="btn btn-gradient color-2 btn-pill">
                        Add property
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      />
    </NoSsr>
  );
};

export default CreatePropertyTab;
