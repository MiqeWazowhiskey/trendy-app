import { combineReducers, createStore } from "redux";
import { userReducer, genreReducer } from "./Reducers";
const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const rootReducer = combineReducers({
  user: userReducer,
  genre: genreReducer,
});
export const store = createStore(rootReducer, enhancer);
