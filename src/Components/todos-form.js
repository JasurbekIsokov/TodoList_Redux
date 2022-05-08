import { useRef } from "react";
import { useDispatch } from "react-redux";

const TodosForm = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <form className="my_form" onSubmit={handleSubmit}>
      <input className="write_data" ref={inputRef} />
      <button className="btn_add btn">Add</button>
    </form>
  );
};

export default TodosForm;
