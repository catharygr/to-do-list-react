// TodoList.js
import { useState, useEffect } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    if (newTodo === "") return;

    const newTodos = [...todos, { task: newTodo, isCompleted: false }];
    setTodos(newTodos);
    setNewTodo("");
  }

  function handleComplete(index) {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  function handleRemove(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="todo-container">
      <h1 className="todo-list">Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.task}
            {!todo.isCompleted && (
              <button
                className="btn-complete"
                onClick={() => handleComplete(index)}
              >
                Complete
              </button>
            )}
            <button className="btn-delete" onClick={() => handleRemove(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}
