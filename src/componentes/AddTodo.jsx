export default function AddTodo() {
  const [newTodo, setNewTodo] = React.useState("");

  function handleChange(value) {
    setNewTodo(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if

  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
