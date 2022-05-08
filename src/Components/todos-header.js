const TodosHeader = ({ length }) => {
  return (
    <div className="title_todo_sum">
      <h1 className="todo_sum">Todos: {length}</h1>
    </div>
  );
};

export default TodosHeader;
