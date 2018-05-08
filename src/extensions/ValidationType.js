import React from "react";
import Validator from "validator";

const REQUIRED = value => {
  if (!value.toString().trim().length) {
    return errorMarkup("This field is required.");
  }
};

const EMAIL = value => {
  if (!Validator.isEmail(value)) {
    return errorMarkup(`${value} is not a valid email.`);
  }
};

const LT = (value, props) => {
  // get the maxLength from component's props
  if (!value.toString().trim().length > props.maxLength) {
    // Return jsx
    return errorMarkup(`The value exceeded ${props.maxLength} symbols.`);
  }
};

const GT = (value, props) => {
  // get the maxLength from component's props
  if (value.toString().trim().length < props.minLength) {
    // Return jsx
    return errorMarkup(`Min length is ${props.minLength} characters.`);
  }
};

const errorMarkup = value => {
  return <span className="validation-error-msg">{value}</span>;
};

export default { REQUIRED, EMAIL, LT, GT };
