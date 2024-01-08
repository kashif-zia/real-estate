import React, { useState } from "react";
import { Input } from "reactstrap";

const PrivacyTab = () => {
  const [checkBox, setCheckBox] = useState("radio1");
  const [checkBox2, setCheckBox2] = useState("radio1");

  return (
    <div className='dashboard-content'>
      <div className='privacy-setting' id='privacy'>
        <div className='common-card'>
          <div className='common-header'>
            <h5>Privacy</h5>
            <p className='font-roboto'>Define your privacy settings</p>
          </div>
          <div className='privacy-content'>
            <div className='media'>
              <div className='media-body'>
                <h6 className='font-roboto'>Allows others to see my profile</h6>
                <p className='font-roboto'>all peoples will be able to see my profile</p>
              </div>
              <label className='switch'>
                <Input type='radio' name='radio1' checked={checkBox && true} onChange={() => setCheckBox(!checkBox)} />
                <span className='switch-state'></span>
              </label>
            </div>
            <div className='media'>
              <div className='media-body'>
                <h6 className='font-roboto'>who has save this profile only that people see my profile</h6>
                <p className='font-roboto'>all peoples will not be able to see my profile</p>
              </div>
              <label className='switch'>
                <Input type='radio' name='radio1' checked={!checkBox && true} onChange={() => setCheckBox(!checkBox)} />
                <span className='switch-state'></span>
              </label>
            </div>
            <button type='button' className='btn btn-gradient btn-pill'>
              Save changes
            </button>
          </div>
          <div className='privacy-content'>
            <h5>Account settings</h5>
            <div className='media'>
              <div className='media-body'>
                <h6 className='font-roboto'>Deleting Your Account Will Permanently</h6>
                <p className='font-roboto'>Once your account is deleted, you will be logged out and will be unable to log in back.</p>
              </div>
              <label className='switch'>
                <Input type='radio' name='radio2-1' checked={checkBox2 && true} onChange={() => setCheckBox2(!checkBox2)} />
                <span className='switch-state'></span>
              </label>
            </div>
            <div className='media'>
              <div className='media-body'>
                <h6 className='font-roboto'>Deleting Your Account Will Temporary</h6>
                <p className='font-roboto'>Once your account is deleted, you will be logged out and you will be create new account </p>
              </div>
              <label className='switch'>
                <input type='radio' name='radio2-2' checked={!checkBox2 && true} onChange={() => setCheckBox2(!checkBox2)} />
                <span className='switch-state'></span>
              </label>
            </div>
            <button type='button' className='btn btn-gradient btn-pill'>
              Delete my account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyTab;
