const TodoItem = ({ text, id }) => {
  return (
    <div className="card">
      <div className="card_left">
        <input className="check_btn btn" type={"checkbox"} />
        <label>{text}</label>
      </div>
      <button className="delete_btn btn">Delete</button>
    </div>
  );
};

export default TodoItem;
