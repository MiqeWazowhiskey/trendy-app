import { SELECT_GENRE } from "../actions";
const initialState = { genre: null };

export const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GENRE:
      return { genre: action.payload };
    default:
      return state;
  }
};
