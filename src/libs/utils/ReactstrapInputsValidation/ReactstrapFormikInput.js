import React from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

const getNestedError = (errorObject, fieldName) => {
  const fieldNames = fieldName.split('.');
  return fieldNames.reduce((obj, key) => (obj && obj[key] ? obj[key] : null), errorObject);
};

const getNestedTouched = (touchedObject, fieldName) => {
  const fieldNames = fieldName.split('.');
  return fieldNames.reduce((obj, key) => (obj && obj[key] ? obj[key] : null), touchedObject);
};

const ReactstrapFormikInput = ({ field: { ...fields }, form: { touched, errors, ...rest }, ...props }) => {
  const InputsProps = { ...props };
  delete InputsProps["label"];
  
  const error = getNestedError(errors, fields.name);
  const touchedField = getNestedTouched(touched, fields.name);

  return (
    <FormGroup>
      {props.label && (
        <Label htmlFor={props.id} className={"label-color"}>
          {props.label}
        </Label>
      )}
      <Input {...InputsProps} {...fields} invalid={Boolean(touchedField && error)} />
      {touchedField && error ? <FormFeedback>{error}</FormFeedback> : ""}
    </FormGroup>
  );
};
export default ReactstrapFormikInput;

