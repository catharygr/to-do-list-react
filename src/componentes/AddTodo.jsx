import React from "react";

export default function AddTodo({ addTodo }) {
  const [newTodo, setNewTodo] = React.useState("");

  function handleChange(value) {
    setNewTodo(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newTodo === "") return;
    addTodo(newTodo);
    setNewTodo("");
  }

  return (
    <div id="add-todo-container">
      <h1 className="add-todo-title">Add Todo</h1>
      <form className="add-todo-form" onSubmit={handleSubmit}>
        <input
          className="add-todo-input"
          type="text"
          value={newTodo}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button className="add-todo-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
