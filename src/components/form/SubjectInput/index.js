import React from "react";
import { Field } from "redux-form";

import "./SubjectInput.css";

const SubjectInput = ({ label, error }) => {
  return (
    <div className="subject-input">
      <label className="subject-input__label">{label}</label>
      <Field
        className="subject-input__field"
        component="input"
        type="text"
        name="subject"
        placeholder="Тема письма"
        id="subject"
      />
      {error ? (
        <div className="subject-input__error-display">{error}</div>
      ) : null}
    </div>
  );
};

export default SubjectInput;
