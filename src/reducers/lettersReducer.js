import { GET_LETTERS, ADD_LETTER } from "../actions/types";

const initialState = [];

const lettersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LETTERS:
      return action.payload;
    case ADD_LETTER:
      const newState = [...state];
      newState.push(action.payload);
      return newState;
    default:
      return state;
  }
};

export default lettersReducer;
