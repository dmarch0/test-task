import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import "./FormContainer.css";
import EmailInput from "../EmailInput";
import SubjectInput from "../SubjectInput";
import MessageInput from "../MessageInput";
import AttachFilesButton from "../AttachFilesButton";
import FileListContainer from "../FileList/FileListContainer";
import { submitForm } from "../../../actions/formActions";

const FormContainer = ({
  handleSubmit,
  submitForm,
  formError,
  reset,
  size
}) => {
  return (
    <form
      className="main-form"
      onSubmit={handleSubmit(formValues => {
        submitForm(formValues);
      })}
      noValidate
    >
      <h1 className="main-form__header">Отправлялка сообщений</h1>
      <EmailInput
        label="От кого"
        person="from"
        error={{ name: formError.from_name, email: formError.from_email }}
      />
      <EmailInput
        label="Кому"
        person="to"
        error={{ name: formError.to_name, email: formError.to_email }}
      />
      <SubjectInput label="Тема письма" error={formError.subject} />
      <MessageInput label="Сообщение" error={formError.message} />
      <FileListContainer />
      <AttachFilesButton />
      {formError.files ? (
        <div className="main-form__file-size-error">
          Суммарный размер файлов не должен превышать 20 Mb
        </div>
      ) : null}
      <button className="main-form__btn-submit">Отправить</button>
    </form>
  );
};

const formConnected = reduxForm({ form: "main-form" })(FormContainer);

const mapStateToProps = state => {
  return {
    formError: state.error.form ? state.error.form : {}
  };
};

export default connect(
  mapStateToProps,
  { submitForm }
)(formConnected);
