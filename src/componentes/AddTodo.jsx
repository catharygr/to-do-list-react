import { useState } from "react";

function AddTodo({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      const newTodoObj = {
        id: Date.now(),
        text: newTodo,
        completed: false,
      };

      setTodos([...todos, newTodoObj]);
      setNewTodo("");
    }
  }

  return (
    <div className="add-todo-container">
      <h2 className="add-todo-title">Add Todo</h2>
      <form className="add-todo-form" onSubmit={handleSubmit}>
        <input
          className="add-todo-input"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="add-todo-button" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
