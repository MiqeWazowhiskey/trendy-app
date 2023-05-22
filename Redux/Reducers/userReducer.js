import { LOGIN, LOGOUT } from "../actions";
export const initialState = { user: null };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: null };
    default:
      return state;
  }
};
