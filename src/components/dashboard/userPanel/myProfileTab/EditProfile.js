import React, { useState } from "react";
import { Button, Col, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";

const EditProfile = ({ toggle, setModal, profileDetail, setProfileDetail }) => {
  const [inputs, setInputs] = useState({ ...profileDetail });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setProfileDetail((prev) => ({ ...prev, ...inputs }));
    setModal(false);
  };

  return (
    <div className="modal fade edit-profile-modal" id="edit-profile">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <Modal className="modal-content" isOpen={toggle} size="lg">
          <ModalHeader className="modal-header">
            <p className="modal-title">Edit Profile</p>
            <Button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModal(false)}>
              <span aria-hidden="true">×</span>
            </Button>
          </ModalHeader>
          <ModalBody className="modal-body">
            <Form id="modal-form" onSubmit={handleSubmit}>
              <Row className=" gx-3">
                <Col md="6" className="form-group">
                  <Label htmlFor="first">first name</Label>
                  <Input name="firstName" type="text" className="form-control" id="first" placeholder="first name" value={inputs.firstName || ""} onChange={handleChange} />
                </Col>
                <Col md="6" className="form-group col-md-6">
                  <Label htmlFor="last">last name</Label>
                  <Input name="lastName" type="text" className="form-control" id="last" placeholder="last name" value={inputs.lastName || ""} onChange={handleChange} />
                </Col>
                <div className="form-group col-md-6">
                  <Label htmlFor="gender">gender</Label>
                  <select name="gender" id="gender" className="form-control" value={inputs.gender} onChange={handleChange}>
                    <option>female</option>
                    <option>male</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <Label>Birthday</Label>
                  <Input name="birthDay" type="date" className="form-control" placeholder="18 april" id="datepicker" value={new Date(inputs.birthDay) || ""} onChange={handleChange} />
                </div>
                <div className="form-group col-12">
                  <Label htmlFor="inputAddress">Address</Label>
                  <Input name="address" type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={inputs.address || ""} onChange={handleChange} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputCity">City</label>
                  <input name="city" type="text" className="form-control" id="inputCity" value={inputs.city || ""} onChange={handleChange} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputState">State</label>
                  <select name="state" id="inputState" className="form-control" value={inputs.state} onChange={handleChange}>
                    <option>IL</option>
                    <option>PL</option>
                    <option>GL</option>
                  </select>
                </div>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter className="modal-footer">
            <Button
              type="button"
              className="btn btn-dashed btn-pill"
              data-bs-dismiss="modal"
              onClick={() => {
                setModal(false);
              }}>
              Cancel
            </Button>
            <Button type="submit" className="btn btn-gradient btn-pill" data-bs-dismiss="modal" form="modal-form">
              Save changes
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default EditProfile;
