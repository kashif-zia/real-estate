import Link from "next/link";
import React, { useState } from "react";
import { Lock, User } from "react-feather";
import { Button, Form, FormGroup, Input, InputGroup, InputGroupText, Label } from "reactstrap";

const LoginTab = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Form>
      <FormGroup>
        <InputGroup>
          <InputGroupText>
            <User />
          </InputGroupText>
          <Input type="text" className="form-control" placeholder="Enter Email" required />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <div className="input-group-prepend">
            <InputGroupText>
              <Lock />
            </InputGroupText>
          </div>
          <Input type={showPassword ? "text" : "password"} id="pwd-input" className="form-control" placeholder="Password" required />
          <div className="input-group-apend">
            <InputGroupText>
              <i id="pwd-icon" className="far fa-eye-slash" onClick={() => setShowPassword((prev) => !prev)} />
            </InputGroupText>
          </div>
        </InputGroup>
      </FormGroup>
      <div className="d-flex">
        <Label className="d-block mb-0" htmlFor="chk-ani">
          <Input className="checkbox_animated color-3" id="chk-ani" type="checkbox" /> <span>Remember me</span>
        </Label>
        <Link href="/pages/other-pages/forgot-password" className="font-rubik text-color-3">
          Forgot password ?
        </Link>
      </div>
      <Button type="submit" className="btn btn-solid btn-flat color-3">
        Log in
      </Button>
    </Form>
  );
};

export default LoginTab;
