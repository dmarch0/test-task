import {
  FILE_ERROR,
  CLOSE_FILE_DND,
  VALIDATION_ERROR,
  CLEAR_ERROR
} from "../actions/types";

const initialState = {};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILE_ERROR:
      return { ...state, file: action.payload };
    case CLOSE_FILE_DND:
      const newState = { ...state };
      delete newState.file;
      return newState;
    case VALIDATION_ERROR:
      return { ...state, form: action.payload };
    case CLEAR_ERROR:
      return {};
    default:
      return state;
  }
};

export default errorReducer;
