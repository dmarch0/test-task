import { ADD_FILE, REMOVE_FILE, FILE_ERROR, CLOSE_FILE_DND } from "./types";

const validateFileExtension = fileName => {
  return !/^(.*\.(?!(jpg|gif|png|doc|xls|pdf|zip)$))?[^.]*$/i.test(fileName);
};

const validateFileSize = fileSize => {
  return fileSize < 5000000 ? true : false;
};

export const addFile = file => dispatch => {
  //Check if file extension matches allowed file types
  if (!validateFileExtension(file.name)) {
    return dispatch({ type: FILE_ERROR, payload: "Неподходящий тип файла" });
  }

  //Check if file size exceeds 5 Mb
  if (!validateFileSize(file.size)) {
    return dispatch({
      type: FILE_ERROR,
      payload: "Размер файла не должен превышать 5Mb"
    });
  }

  const newFile = { name: file.name, encoding: "base64", size: file.size };

  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
  })
    .then(result => {
      //Add new file to store, close find dnd
      dispatch({ type: CLOSE_FILE_DND });
      dispatch({ type: ADD_FILE, payload: { ...newFile, content: result } });
    })
    .catch(err => console.log(err));
};

export const removeFile = index => {
  return { type: REMOVE_FILE, payload: index };
};
