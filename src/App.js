import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import DarkModeProvider from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <div className="app">
      <DarkModeProvider>
        <Header filters={filters} setFilter={setFilter} filter={filter} />
        <TodoList filter={filter} />
      </DarkModeProvider>
    </div>
  );
}

export default App;
