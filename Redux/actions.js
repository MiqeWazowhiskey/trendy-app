export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SELECT_GENRE = "SELECT_GENRE";
export const SET_SEARCH = "SET_SEARCH";

export const login = (user) => ({ type: LOGIN, payload: user });
export const logout = () => ({ type: LOGOUT });
export const selectGenre = (genre) => ({
  type: SELECT_GENRE,
  payload: genre,
});
export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search,
});
