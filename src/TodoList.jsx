/* eslint-disable react/prop-types */
import React from "react";

function TodoList({ handleAddItem }) {
  const [label, setLabel] = React.useState("");

  return (
    <div className="nueva-lista-item-form">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleAddItem(label);
          setLabel("");
        }}
      >
        <label htmlFor="new-list-form-input">Nuevo item:</label>
        <div className="fila">
          <input
            id="new-list-form-input"
            type="text"
            value={label}
            onChange={(event) => {
              setLabel(event.target.value);
            }}
          />
          <button>Añadir</button>
        </div>
      </form>
    </div>
  );
}

export default TodoList;
