import TODO from "../constants/todos";

const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case TODO.ADD_TODO:
      return [...state, action.payload];

    case TODO.REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default todos;
