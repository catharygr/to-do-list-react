import { useState } from "react";

function AddTodo() {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      const newTodoObj = {
        todo: newTodo,
      };

      try {
        const response = await fetch("https://example-api.com/todos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTodoObj),
        });

        if (response.ok) {
          console.log("New todo successfully added to API");
          // Aquí puedes realizar otras acciones después de agregar el nuevo todo a la API
        } else {
          console.log("Failed to add new todo to API");
        }
      } catch (error) {
        console.log("Error:", error);
      }

      setNewTodo("");
    }
  };

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
