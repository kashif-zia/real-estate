import React, { useEffect, useState } from "react";
import { Button, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const Card = ({ modal, setModal, setData, editId, data }) => {
  const [inputs, setInputs] = useState({
    paymentCard: "",
    name: "",
    cardNumber: "",
    date: "",
    cvv: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value.trim();
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs?.paymentCard && inputs?.name && inputs?.cardNumber && inputs?.date && inputs?.cvv) {
      editId ? setData((prev) => prev.map((singleData) => (singleData.id === editId ? { ...inputs } : singleData))) : setData((prev) => [...prev, { id: new Date(), ...inputs }]);
      setInputs({ paymentCard: "", name: "", cardNumber: "", date: "", cvv: "" });
      setModal(false);
    } else {
      alert("field all input field proper");
    }
  };

  useEffect(() => {
    editId
      ? setInputs(...data.filter((singleData) => singleData.id === editId))
      : setInputs({
          paymentCard: "",
          name: "",
          cardNumber: "",
          date: "",
          cvv: "",
        });
  }, [modal]);

  return (
    <div className="modal fade edit-profile-modal" id="add-card">
      <div className="modal-dialog modal-dialog-centered">
        <Modal className="modal-content" isOpen={modal ? true : false} size="lg">
          <ModalHeader className="modal-header">
            <p className="modal-title">{modal} new card</p>
            <Button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" onClick={() => setModal(false)}>
                &times;
              </span>
            </Button>
          </ModalHeader>
          <ModalBody className="modal-body">
            <Form id="card-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <Label htmlFor="a-month">card type</Label>
                <select id="a-month" className="form-control" name="paymentCard" value={inputs?.paymentCard || "choose..."} onChange={handleChange}>
                  <option>master</option>
                  <option>visa</option>
                  <option>american-express</option>
                </select>
              </div>
              <div className="form-group">
                <Label htmlFor="a-na">name on card</Label>
                <Input type="text" className="form-control" id="a-na" name="name" value={inputs?.name || ""} onChange={handleChange} />
              </div>
              <div className="form-group">
                <Label htmlFor="a-n">card number</Label>
                <Input type="text" className="form-control" length="12" id="a-n" name="cardNumber" value={inputs?.cardNumber || ""} onChange={handleChange} />
              </div>
              <div className="row gx-3">
                <div className="form-group col-md-8">
                  <Label htmlFor="a-e">expiry date</Label>
                  <Input name="date" type="date" value={inputs?.date || ""} onChange={handleChange} />
                </div>
                <div className="form-group col-md-4">
                  <Label htmlFor="a-c">cvv</Label>
                  <Input type="number" className="form-control" value={inputs?.cvv || ""} id="a-c" name="cvv" onChange={handleChange} />
                </div>
              </div>
            </Form>
          </ModalBody>
          <ModalFooter className="modal-footer">
            <Button type="button" className="btn btn-dashed btn-pill" data-bs-dismiss="modal" onClick={() => setModal(false)}>
              Cancel
            </Button>
            <Button type="submit" form="card-form" className="btn btn-gradient btn-pill" data-bs-dismiss="modal">
              {modal} card
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default Card;
