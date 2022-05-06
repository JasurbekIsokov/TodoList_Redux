import React from "react";

import TodosHeader from "./todos-header";
import TodosForm from "./todos-form";
import TodosItems from "./todos-items";
import TodosFooter from "./todos-footer";

import index from "../css/index.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <TodosHeader />
        {/* <div className="title_todo_sum">
          <h1 className="todo_sum">Todos: </h1>
        </div> */}

        <TodosForm />
        {/* <form className="my_form">
          <input className="write_data" />
          <button className="btn_add btn">Add</button>
        </form> */}

        <TodosItems />
        {/* <div className="cards"> */}
        {/* <div className="card">
            <div className="card_left">
              <input className="check_btn btn" type={"checkbox"} />
              <label>list paragraph</label>
            </div>
            <button className="delete_btn btn">Delete</button>
          </div>
          <div className="card">
            <div className="card_left">
              <input className="check_btn btn" type={"checkbox"} />
              <label>list paragraph</label>
            </div>
            <button className="delete_btn btn">Delete</button>
          </div> */}
        {/* </div> */}

        <TodosFooter />
        {/* <div className="save_local_storage">
          <button className="save_btn btn">Save</button>
        </div> */}
      </div>
    );
  }
}

export default App;
