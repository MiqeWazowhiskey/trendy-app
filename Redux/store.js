import { createStore } from "redux";
import { userReducer } from "./Reducers/userReducer";
const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(userReducer, enhancer);
