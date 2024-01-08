import Link from "next/link";
import React, { useState } from "react";
import { Mail, User, Lock } from "react-feather";
import { Button, Form, FormGroup, Input, InputGroup, InputGroupText } from "reactstrap";

const SignUpTab = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form>
      <FormGroup>
        <InputGroup>
          <div className="input-group-prepend">
            <InputGroupText>
              <User />
            </InputGroupText>
          </div>
          <Input type="text" className="form-control" placeholder="Enter your name" required />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <div className="input-group-prepend">
            <InputGroupText>
              <Mail />
            </InputGroupText>
          </div>
          <Input type="text" className="form-control" placeholder="Enter email address" required />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <div className="input-group-prepend">
            <InputGroupText>
              <Lock />
            </InputGroupText>
          </div>
          <Input type={showPassword ? "text" : "password"} id="pwd-input1" className="form-control" placeholder="Password" required />
          <div className="input-group-apend">
            <InputGroupText className="input-group-text">
              <i id="pwd-icon1" className="far fa-eye-slash" onClick={() => setShowPassword((prev) => !prev)} />
            </InputGroupText>
          </div>
        </InputGroup>
      </FormGroup>
      <Button type="submit" className="btn btn-solid color-3 btn-flat">
        Create account
      </Button>
      <span className="d-block mt-3 font-rubik">
        Already have an acoount ?
        <Link href="/pages/other-pages/login" className="float-end text-color-3">
          Login here
        </Link>
      </span>
    </Form>
  );
};

export default SignUpTab;
