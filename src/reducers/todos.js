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

const addInitialState = {
  loading: false,
  success: false,
  error: null,
};

export const addTodoReducer = (state = addInitialState, action) => {
  switch (action.type) {
    case TODO.TODO_ADD_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
      };
    case TODO.TODO_ADD_SUCESS:
      return {
        loading: false,
        success: true,
        error: null,
      };
    case TODO.TODO_ADD_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteTodoReducer = (state = addInitialState, action) => {
  switch (action.type) {
    case TODO.TODO_DELETE_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
      };
    case TODO.TODO_DELETE_SUCESS:
      return {
        loading: false,
        success: true,
        error: null,
      };
    case TODO.TODO_DELETE_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
  }
  return state;
};
