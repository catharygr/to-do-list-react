import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./componentes/TodoList";
import AddTodo from "./componentes/AddTodo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
