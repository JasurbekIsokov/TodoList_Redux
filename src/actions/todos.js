import TODO from "../constants/todos";
import axios from "axios";

// Todo qo'shish
export const addTodo = (todoItem) => async (dispatch) => {
  dispatch({
    type: TODO.TODO_ADD_REQUEST,
  });
  try {
    const { data } = await axios.post("http://localhost:3004/todos", todoItem);
    dispatch({ type: TODO.TODO_ADD_SUCESS });
  } catch (error) {
    dispatch({ type: TODO.TODO_ADD_FAIL, payload: error.message });
  }

  return {
    type: TODO.ADD_TODO,
    payload: {
      ...todoItem,
    },
  };
};
// /Todo qo'shish

// Todoni O'chirish
export const deleteTodo = (id) => async (dispatch) => {
  dispatch({
    type: TODO.TODO_DELETE_REQUEST,
  });
  try {
    const { data } = await axios.delete(`http://localhost:3004/todos/${id}`);
    console.log(data);
    dispatch({ type: TODO.TODO_DELETE_SUCESS });
  } catch (error) {
    dispatch({ type: TODO.TODO_DELETE_FAIL, payload: error.message });
  }

  return {
    type: TODO.DELETE_TODO,
    payload: {
      id,
    },
  };
};
// /Todoni O'chirish

const fetchAllData = async (dispatch) => {
  try {
    const data = await fetch("http://localhost:3004/todos");
    const dataParse = await data.json();

    return dispatch({
      type: TODO.TODO_ALL_SUCCESS,
      payload: dataParse,
    });
  } catch (err) {
    return dispatch({
      type: TODO.TODO_ALL_FAIL,
      payload: err.message,
    });
  }
};

export const getAllTodos = () => async (dispatch) => {
  dispatch({
    type: TODO.TODO_ALL_REQUST,
  });
  fetchAllData(dispatch);
};
