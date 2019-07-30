import React from "react";
import { Field } from "redux-form";
import cn from "classnames";

import "./EmailInput.css";

const EmailInput = ({ label, person, error }) => {
  return (
    <div className="email-input">
      <label className="email-input__label">{label}</label>
      <Field
        component="input"
        type="text"
        name={`${person}_name`}
        id={`${person}_name`}
        className="email-input__field_left"
        placeholder="Имя"
      />
      <Field
        component="input"
        type="email"
        name={`${person}_email`}
        id={`${person}_email`}
        className="email-input__field_right"
        placeholder="Email"
      />
      {error.name ? (
        <div className="email-input__error-display_name">{error.name}</div>
      ) : null}
      {error.email ? (
        <div className="email-input__error-display_email">{error.email}</div>
      ) : null}
    </div>
  );
};

export default EmailInput;
