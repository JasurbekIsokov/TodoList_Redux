import { Dispatch } from "react";
import { useDispatch } from "react-redux";

import { removeTodo } from "../actions/todos";

const TodoItem = ({ text, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card_left">
        <input className="check_btn btn" type={"checkbox"} />
        <label>{text}</label>
      </div>
      <button
        className="delete_btn btn"
        onClick={() => dispatch(removeTodo(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
