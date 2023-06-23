/* eslint-disable no-undef */
import React from "react";

export default function TodoList() {
  const [todos, setTodos] = React.useState([]);

  // Funcion para agregar una nueva tarea a las lista de tareas
  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }
  // Funcion para marcar una tarea como completada
  function completeTodo(index) {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }
  // Funcion para eliminar una tarea de la lista
  function removeTodo() {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <span>{todo.task}</span>
            <button onClick={() => completeTodo(index)}>Complete</button>
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
