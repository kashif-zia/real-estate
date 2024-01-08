import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

const Step3 = ({ data, setActive }) => {
  const router = useRouter();
  const [isModal, setIsModal] = useState(false);
  const notify = () => toast("Your form details submitted successfully.", { type: "success", position: "top-right" });
  return (
    <div className="wizard-step-3 ">
      <div className="title-3 text-start">
        <h2>complete details</h2>
      </div>
      <div className="input-data">
        <div className="account-content">
          <h3>Account information</h3>
          <ul>
            <li>
              Name : <span className="first_name">{data?.firstname}</span>
            </li>
            <li>
              phone number : <span className="phone_number">{data?.mobnumber}</span>
            </li>
            <li>
              Email : <span className="email_add">{data?.email}</span>
            </li>
          </ul>
        </div>
        <div className="account-content">
          <h3>Location Details</h3>
          <ul>
            <li>
              Address :{" "}
              <span className="address-type">
                {data?.state},{data?.country},{data?.pin}
              </span>
            </li>
            <li>
              state : <span className="state-name">{data?.state}</span>
            </li>
            <li>
              country : <span className="country-name">{data?.country}</span>
            </li>
            <li>
              pincode : <span className="pin-code">{data?.pin}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="next-btn d-flex">
        <Button onClick={() => setActive((prev) => prev - 1)} type="button" className="btn btn-dashed prev2 btn-pill">
          <i className="fas fa-arrow-left me-2"></i> Previous
        </Button>
        <Button type="button" className="btn btn-gradient next3 btn-pill" onClick={() => setIsModal(true)}>
          submit
        </Button>
      </div>
      <Modal id="staticBackdrop" isOpen={isModal} centered>
        <ModalBody>
          <h4>Are you sure you want to submit the form?</h4>
          <p>please confirm the details</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setIsModal(false)}>cancel</Button>
          <Button
            onClick={() => {
              setIsModal(false);
              notify();
              setTimeout(() => {
                router.reload();
              }, 3000);
            }}>
            submit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Step3;
