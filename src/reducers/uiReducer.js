import { OPEN_FILE_DND, CLOSE_FILE_DND } from "../actions/types";

const initialState = { isFileDndDisplayed: false };

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_FILE_DND:
      return { isFileDndDisplayed: true };
    case CLOSE_FILE_DND:
      return { isFileDndDisplayed: false };
    default:
      return state;
  }
};

export default uiReducer;
