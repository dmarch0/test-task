import validator from "validator";

import { VALIDATION_ERROR, CLEAR_ERROR, LETTER_SEND } from "./types";
import { addStorageItem } from "../storage/utils";

//Form keys
const keys = [
  "from_email",
  "from_name",
  "to_email",
  "to_name",
  "subject",
  "message"
];

//Util function to check if value is empty
const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

//Checking if file size exceeds 20 Mb
const validateFilesSize = files => {
  let summSize = 0;
  for (let file of files) {
    summSize += file.size;
  }
  return summSize <= 20000000 ? true : false;
};

const validateFormFields = (formValues, files) => {
  const errors = {};

  //Convert values to empty strings to use validator
  for (let key of keys) {
    formValues[key] = isEmpty(formValues[key]) ? "" : formValues[key];
  }

  if (!validator.isEmail(formValues.from_email)) {
    errors.from_email = "Некорректный email";
  }

  if (validator.isEmpty(formValues.from_email)) {
    errors.from_email = "Email не может быть пустым";
  }

  if (validator.isEmpty(formValues.from_name)) {
    errors.from_name = "Имя не может быть пустым";
  }

  if (!validator.isEmail(formValues.to_email)) {
    errors.to_email = "Некорректный email";
  }

  if (validator.isEmpty(formValues.to_email)) {
    errors.to_email = "Email не может быть пустым";
  }

  if (validator.isEmpty(formValues.to_name)) {
    errors.to_name = "Имя не может быть пустым";
  }

  if (validator.isEmpty(formValues.subject)) {
    errors.subject = "Тема не может быть пустой";
  }

  if (validator.isEmpty(formValues.message)) {
    errors.message = "Напишите, пожалуйста, хоть что-нибудь";
  }

  if (!validateFilesSize(files)) {
    errors.files = "Размер файлов не должен превышать 20 Mb";
  }

  const isValid = Object.keys(errors).length === 0 ? true : false;
  return { errors, isValid };
};

export const submitForm = (formValues, reset) => (dispatch, getState) => {
  const files = getState().files;

  //Validate input
  const { errors, isValid } = validateFormFields(formValues, files);
  if (!isValid) {
    return dispatch({ type: VALIDATION_ERROR, payload: errors });
  }

  //Clear possible remaining errors
  dispatch({ type: CLEAR_ERROR });

  //Format files
  const payloadFiles = [];
  for (let file of files) {
    payloadFiles.push({
      name: file.name,
      content: file.content,
      encoding: file.encoding
    });
  }

  const payload = {
    action: "issue.send.test",
    letter: {
      subject: formValues.subject,
      "from.name": formValues.from_name,
      "from.email": formValues.from_email,
      "to.name": formValues.to_name,
      message: { text: formValues.message },
      attaches: payloadFiles
    },
    sendwhen: "test",
    mca: [formValues.to_email]
  };

  const sendsay = new window.Sendsay({
    auth: {
      login: "daniil2305@yandex.ru",
      password: "xoo4Yav"
    }
  });

  dispatch({ type: LETTER_SEND, payload: formValues.to_email });
  sendsay
    .request(payload)
    .then(res => addStorageItem({ ...res, subject: formValues.subject }))
    .catch(err => console.log(err));
};
