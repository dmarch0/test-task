import React from "react";
import { Field } from "redux-form";

import "./MessageInput.css";

const MessageInput = ({ label }) => {
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
    </div>
  );
};

export default MessageInput;
