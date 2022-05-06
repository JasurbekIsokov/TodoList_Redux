import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger)) // extentions ustanofka qildik chromeda yashil yonadi
);

export default store;
