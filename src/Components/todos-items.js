import { useSelector } from "react-redux";

import TodoItem from "./todo-item";

const TodosItems = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="cards">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodosItems;
