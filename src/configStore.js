// import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger";
// // import thunk from "thunk";
// import rootReducer from "./reducers";

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// chrome ga chiqarish uchun
import thunk from "redux-thunk";
import {
  addTodoReducer,
  deleteTodoReducer,
  todoReducer,
} from "./reducers/todos";

// holatni inital qilish
const initialState = {};
// reducer funksiya backenddan kelgan ma'lumotlar bo'yicha combineReducers funksiyasi yordamida

const reducer = combineReducers({
  todoR: todoReducer,
  addR: addTodoReducer,
  deleteR: deleteTodoReducer,
});

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// baza shakllantirish
const store = createStore(
  reducer,
  initialState,
  composeEnhacer(applyMiddleware(thunk))
);

export default store;
