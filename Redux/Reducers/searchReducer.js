import { SET_SEARCH } from "../actions";
const initialState = { search: null };

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return { search: action.payload };
    default:
      return { state };
  }
};
