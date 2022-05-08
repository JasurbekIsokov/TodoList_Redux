import { useRef } from "react";
import { useDispatch } from "react-redux";

import addTodo from "../actions/todos";

const TodosForm = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const formRef = useRef(null);

  const returnTiem = () => {
    let date = new Date().getTime();
    return date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        text: inputRef.current.value,
        id: returnTiem(),
        isDone: false,
      })
    );

    formRef.current.reset();
  };

  return (
    <form className="my_form" onSubmit={handleSubmit} ref={formRef}>
      <input className="write_data" ref={inputRef} />
      <button className="btn_add btn">Add</button>
    </form>
  );
};

export default TodosForm;
