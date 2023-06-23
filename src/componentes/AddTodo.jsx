export default function AddTodo() {
  const [newTodo, setNewTodo] = React.useState("");

  return (
    <div>
      <h1>Add Todo</h1>
      <form>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      q
    </div>
  );
}
