import validator from "validator";
import { VALIDATION_ERROR } from "./types";

const keys = [
  "from_email",
  "from_name",
  "to_email",
  "to_name",
  "subject",
  "message"
];

const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

const validateFormFields = formValues => {
  const errors = {};

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
  const isValid = Object.keys(errors).length === 0 ? true : false;
  console.log(errors, isValid);
  return { errors, isValid };
};

export const submitForm = formValues => dispatch => {
  const { errors, isValid } = validateFormFields(formValues);
  if (!isValid) {
    return dispatch({ type: VALIDATION_ERROR, payload: errors });
  }
};
