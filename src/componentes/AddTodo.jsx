/* eslint-disable react/prop-types */
import { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  function handleInputChange(event) {
    setNewTodo(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (newTodo.trim() === "") return;

    addTodo(newTodo); // Llamada a la función addTodo pasando la nueva tarea como argumento

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
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button className="add-todo-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
