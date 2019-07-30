import { ADD_FILE, REMOVE_FILE } from "../actions/types";

const initialState = [];

const filesReducer = (state = initialState, action) => {
  const newState = [...state];
  switch (action.type) {
    case ADD_FILE:
      newState.push(action.payload);
      return newState;
    case REMOVE_FILE:
      newState.splice(action.payload, 1);
      return newState;

    default:
      return state;
  }
};

export default filesReducer;
