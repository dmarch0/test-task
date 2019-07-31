import {
  OPEN_FILE_DND,
  CLOSE_FILE_DND,
  LETTERS_LOADING,
  ADD_LETTER,
  LETTER_SEND
} from "../actions/types";

const initialState = {
  isFileDndDisplayed: false,
  lettersLoading: false,
  isLetterSend: false
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_FILE_DND:
      return { isFileDndDisplayed: true };
    case CLOSE_FILE_DND:
      return { isFileDndDisplayed: false };
    case LETTERS_LOADING:
      return { ...state, lettersLoading: true };
    case ADD_LETTER:
      return { ...state, lettersLoading: false };
    case LETTER_SEND:
      return { ...state, isLetterSend: true, email: action.payload };
    default:
      return state;
  }
};

export default uiReducer;
