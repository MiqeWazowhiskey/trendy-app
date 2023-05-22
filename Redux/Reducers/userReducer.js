import { LOGIN } from "../actions";
export const initialState = { user: null };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    default:
      return state;
  }
};
