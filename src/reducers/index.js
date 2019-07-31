import { combineReducers } from "redux";
import { reducer } from "redux-form";

import filesReducer from "./filesReducer";
import uiReducer from "./uiReducer";
import errorReducer from "./errorReducer";
import lettersReducer from "./lettersReducer";

export default combineReducers({
  test: () => 5,
  form: reducer,
  files: filesReducer,
  ui: uiReducer,
  error: errorReducer,
  letters: lettersReducer
});
