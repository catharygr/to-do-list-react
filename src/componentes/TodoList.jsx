/* eslint-disable no-undef */
import React from "react";

export default function TodoList() {
  const [todos, setTodos] = React.useState([]);

  // Funcion para marcar una tarea como completada
  function completeTodo(id) {
    const newTodos = [...todos];
    newTodos[id].isCompleted = true;
    setTodos(newTodos);
  }
  // Funcion para eliminar una tarea de la lista
  function removeTodo() {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  }

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <ul className="todo-list">
        {todos.map((todo, id) => (
          <li key={id} className={todo.completed ? "completed" : ""}>
            <span>{todo.task}</span>
            <button onClick={() => completeTodo(id)}>Complete</button>
            <button onClick={() => removeTodo(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
