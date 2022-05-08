const TodosHeader = ({ todoLength }) => {
  return (
    <div className="title_todo_sum">
      <h1 className="todo_sum">Todos: {todoLength}</h1>
    </div>
  );
};

export default TodosHeader;
