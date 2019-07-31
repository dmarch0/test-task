import React from "react";
import { Field } from "redux-form";

import "./MessageInput.css";

const MessageInput = ({ label, error }) => {
  return (
    <div className="message-input">
      <label className="message-input__label">{label}</label>
      <Field
        className="message-input__field"
        component="textarea"
        name="message"
        placeholder="Текст сообщения"
        id="message"
      />
      {error ? (
        <div className="message-input__error-display">{error}</div>
      ) : null}
    </div>
  );
};

export default MessageInput;
