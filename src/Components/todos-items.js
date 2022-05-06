import { useSelector } from "react-redux";

import TodoItem from "./todo-item";

const TodosItems = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="cards">
      {todos.length > 0 ? (
        todos.map((item) => (
          <TodoItem text={item.text} id={item.id} key={item.id} />
        ))
      ) : (
        <p className="not_todos_text">Todos not created yet</p>
      )}
    </div>
  );
};

export default TodosItems;
