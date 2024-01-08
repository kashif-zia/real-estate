import React, { useState } from "react";
import { Button, Col, Form, FormFeedback, FormText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";

const ChangeDetails = ({ toggle, setModal, detail, profileDetail, setProfileDetail, old }) => {
  const [inputs, setInputs] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputs.confirm", inputs.confirm);
    if (old === inputs.current) {
      detail === "email address" ? setProfileDetail((prev) => ({ ...prev, email: inputs.confirm })) : setProfileDetail((prev) => ({ ...prev, password: inputs.confirm }));
      setModal(false);
    } else {
      alert("current firled is not proper");
    }
  };
  return (
    <>
      <Modal className="modal-content" isOpen={toggle} size="lg">
        <ModalHeader className="modal-header">
          <p className="modal-title">Change {detail}</p>
          <Button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModal(false)}>
            <span aria-hidden="true">×</span>
          </Button>
        </ModalHeader>
        <ModalBody className="modal-body">
          <Form id="detail-change" onSubmit={handleSubmit}>
            <Row className="row gx-3">
              <Col sm="12" className="form-group">
                <Label htmlFor="old">current {detail}</Label>
                <Input type="email" className="form-control" id="old" name="current" value={inputs.current} onChange={handleChange} />
                <p className="pt-2">current detail is "{old}"</p>
              </Col>
              <Col sm="12" className="form-group">
                <Label htmlFor="new">enter new {detail}</Label>
                <Input type={detail === "email address" ? "email" : "password"} className="form-control" id="new" name="new" value={inputs.new} onChange={handleChange} />
              </Col>
              <Col sm="12" className="form-group">
                <Label htmlFor="comfirm">confirm your {detail}</Label>
                <Input type={detail === "email address" ? "email" : "password"} className="form-control" id="comfirm" name="confirm" value={inputs.confirm} onChange={handleChange} />
                <FormText className={inputs.new === inputs.confirm ? "d-none" : "d-block"}>Oh noes! confirm field is not matched</FormText>
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter className="modal-footer">
          <Button type="button" className="btn btn-dashed btn-pill" data-bs-dismiss="modal" onClick={() => setModal(false)}>
            Cancel
          </Button>
          <Button type="submit" form="detail-change" className="btn btn-gradient btn-pill" data-bs-dismiss="modal">
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ChangeDetails;



