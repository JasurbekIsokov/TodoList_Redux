import TODO from "../constants/todos";

export const addTodo = (todoItem) => {
  console.log(todoItem);

  return {
    type: TODO.ADD_TODO,
    payload: {
      ...todoItem,
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: TODO.REMOVE_TODO,
    payload: {
      id,
    },
  };
};

export const storageTodos = (todos) => {
  return {
    type: TODO.INITIAL_STATE,
    payload: todos,
  };
};

const fetchAllData = async (dispatch) => {
  try {
    const data = await fetch("http://localhost:3004/todos");
    const dataParse = await data.json();
    console.log(dataParse);
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
