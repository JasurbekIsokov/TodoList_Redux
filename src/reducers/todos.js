import TODO from "../constants/todos";

const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case TODO.ADD_TODO:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default todos;
