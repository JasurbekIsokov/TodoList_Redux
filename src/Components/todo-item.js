import { useDispatch, useSelector } from "react-redux";

import { deleteTodo } from "../actions/todos";

const TodoItem = ({ text, id }) => {
  const dispatch = useDispatch();

  const deleteTodoR = useSelector((state) => state.deleteR);
  console.log(deleteTodoR);

  return (
    <div className="card">
      {deleteTodoR.error !== null ? (
        <div>{deleteTodoR.error}</div>
      ) : deleteTodoR.loading == true ? (
        <div className="center">loading...</div>
      ) : (
        <>
          <div className="card_left">
            <input className="check_btn btn" type={"checkbox"} />
            <label>{text}</label>
          </div>
          <button
            disabled={deleteTodoR.loading}
            className="delete_btn btn"
            onClick={() => dispatch(deleteTodo(id))}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
