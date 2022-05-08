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
