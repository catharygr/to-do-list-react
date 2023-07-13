import React from "react";
import TodoList from "./TodoList";

function App() {
  const [items, setItems] = React.useState([]);

  function handleAddItem(label) {
    const newItem = {
      label,
      id: Math.random(),
    };

    const nextItems = [...items, newItem];
    setItems(nextItems);
  }

  function handleDeleteItem(index) {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }

  return (
    <div className="container">
      <div className="lista-container">
        <ol className="compra-lista">
          {items.map(({ id, label }, index) => (
            <li key={id}>
              {label}
              <button onClick={() => handleDeleteItem(index)}>Eliminar</button>
            </li>
          ))}
        </ol>
      </div>
      <TodoList
        todos={items}
        handleAddItem={handleAddItem}
        handleDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default App;
