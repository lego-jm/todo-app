import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <div className="app">
      <Header filters={filters} setFilter={setFilter} filter={filter} />
      <TodoList filter={filter} />
    </div>
  );
}

export default App;
