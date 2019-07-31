import React from "react";
import { Field } from "redux-form";

import "./EmailInput.css";

/* Field name is passed as from_name/to_name
so reduxForm wond treat form fiels from.name and to.name 
as object properties */
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
      <div className="email-error">
        {error.name ? (
          <div className="email-error__name">{error.name}</div>
        ) : null}
        {error.email ? (
          <div className="email-error__email">{error.email}</div>
        ) : null}
      </div>
    </div>
  );
};

export default EmailInput;
