import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "antd/dist/antd.css";
import { Spin } from "antd";

import "../css/index.css";

import { getAllTodos } from "../actions/todos";
import TodosHeader from "./todos-header";
import TodosForm from "./todos-form";
import TodosItems from "./todos-items";
import TodosFooter from "./todos-footer";

function App() {
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todoR);
  const addTodo = useSelector((state) => state.addR);
  const deleteTodo = useSelector((state) => state.deleteR);
  // console.log(todoData);

  const fetchData = async () => {
    dispatch(getAllTodos());
  };
  useEffect(() => {
    fetchData();
  }, [addTodo.success, deleteTodo.success]);

  return (
    <div className="container">
      <TodosHeader todoLength={todoData.todos.length} />
      <TodosForm />
      {todoData.loading === true ? (
        <div className="example">
          <Spin />
        </div>
      ) : todoData.error ? (
        <div className="errorMessage">{todoData.error}</div>
      ) : (
        <TodosItems />
      )}
      <TodosFooter />
    </div>
  );
}

export default App;
