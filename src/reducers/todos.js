import TODO from "../constants/todos";

const initialState = {
  loading: false,
  todos: [],
  error: false,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // case TODO.ADD_TODO:
    //   return [...state, action.payload];

    // case TODO.REMOVE_TODO:
    //   return state.filter((item) => item.id !== action.payload.id);

    // case TODO.INITIAL_STATE:
    //   return action.payload;
    case TODO.TODO_ALL_REQUST:
      return {
        loading: true,
        todos: [],
        error: null,
      };
    case TODO.TODO_ALL_SUCCESS:
      return {
        loading: false,
        todos: action.payload,
        error: null,
      };
    case TODO.TODO_ALL_FAIL:
      return {
        loading: false,
        todos: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
