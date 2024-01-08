/**
 * It returns a div with a class of advance-card, which contains a h6 tag with the text Mortgage, which
 * contains a div with a class of category-property, which contains a form, which contains an input
 * group with a span with a class of input-group-text and the text $, which contains an input with a
 * type of number, a class of form-control, and a placeholder of Loan Amount, which is required, which
 * contains an input group with a class of mb-3, which contains a span with a class of input-group-text
 * and the text $, which contains an input with a type of number, a class of form-control, and a
 * placeholder of Down Payment, which is required, which contains an input group with a class of
 * input-group mb-3, which contains a span with a class of input-group-text and the text %, which
 * contains an input with a type of number, a class of form-
 * @returns A React component
 */
import React, { useEffect, useState } from "react";
import { Form, Input, InputGroup } from "reactstrap";

const Mortgage = () => {
  const [inputs, setInputs] = useState({ amount: "", downPayment: "", interest: "", years: "" });
  const [calculate, setCalculate] = useState();
  const [touch, setTouch] = useState();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  useEffect(() => {
    if (!inputs.amount.length || !inputs.downPayment.length || !inputs.interest.length || !inputs.years.length) {
      setCalculate("Enter valid inputs");
    } else {
      setCalculate(((inputs.amount - inputs.downPayment) * inputs.interest * inputs.years) / 100);
    }
  }, [inputs]);

  return (
    <div className='advance-card'>
      <h6>Mortgage</h6>
      <div className='category-property'>
        <Form>
          <InputGroup className='mb-3'>
            <span className='input-group-text'>$</span>
            <Input type='number' className='form-control' placeholder='Loan Amount' required name='amount' value={inputs.amount} onChange={handleChange} onFocus={() => setTouch(true)} />
          </InputGroup>
          <InputGroup className=' mb-3'>
            <span className='input-group-text'>$</span>
            <Input type='number' className='form-control' placeholder='Down Payment' required name='downPayment' value={inputs.downPayment} onChange={handleChange} onFocus={() => setTouch(true)} />
          </InputGroup>
          <InputGroup className='input-group mb-3'>
            <span className='input-group-text'>%</span>
            <Input type='number' className='form-control' placeholder='Rate of Interest' required name='interest' value={inputs.interest} onChange={handleChange} onFocus={() => setTouch(true)} />
          </InputGroup>
          <InputGroup className='input-group mb-3'>
            <span className='input-group-text'>$</span>
            <Input type='number' className='form-control' placeholder='Number Of years' required name='years' value={inputs.years} onChange={handleChange} onFocus={() => setTouch(true)} />
          </InputGroup>
          <div>
            {typeof calculate == ("number" || NaN) ? (
              <>
                Total Amount With Interest : {calculate + (inputs.amount - inputs.downPayment)}
                <br></br>
                Total Interest : {calculate}
                <br></br>
                Instalment Per Month : {((calculate + (inputs.amount - inputs.downPayment)) / (inputs.years * 12)).toFixed(2)}
              </>
            ) : (
              touch && calculate
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Mortgage;
