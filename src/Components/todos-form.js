import { useRef } from "react";

const TodosForm = () => {
  const inputRef = useRef(null);

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
