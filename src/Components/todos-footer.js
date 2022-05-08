import { useSelector } from "react-redux";

const TodosFooter = () => {
  const todoItems = useSelector((state) => state.todos);

  const saveHandle = () => {
    localStorage.setItem("todos", JSON.stringify(todoItems));
  };

  return (
    <div className="save_local_storage">
      <button className="save_btn btn" onClick={saveHandle}>
        Save
      </button>
    </div>
  );
};

export default TodosFooter;
