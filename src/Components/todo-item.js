const TodoItem = () => {
  return (
    <div className="card">
      <div className="card_left">
        <input className="check_btn btn" type={"checkbox"} />
        <label>list paragraph</label>
      </div>
      <button className="delete_btn btn">Delete</button>
    </div>
  );
};

export default TodoItem;
