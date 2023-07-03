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

  return (
    <div className="wrapper">
      <div className="list-wrapper">
        <ol className="shopping-list">
          {items.map(({ id, label }) => (
            <li key={id}>{label}</li>
          ))}
        </ol>
      </div>
      <TodoList handleAddItem={handleAddItem} />
    </div>
  );
}

export default App;
