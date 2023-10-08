import React, { useEffect, useState } from "react";
import TodoAdd from "../TodoAdd/TodoAdd";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(getTodos);

  const handleAddTodo = (todo) => setTodos([...todos, todo]);
  const handleDelete = (deleted) =>
    setTodos(todos.filter((item) => item.id !== deleted.id));
  const handleUpdate = (updated) =>
    setTodos(todos.map((item) => (item.id === updated.id ? updated : item)));

  const filterList = getFilterList(todos, filter);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    getTodos();
  }, [todos]);

  return (
    <div>
      <ul className={styles.list}>
        {filterList.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
      <TodoAdd addTodo={handleAddTodo} />
    </div>
  );
}

function getFilterList(todos, filter) {
  if (filter === "all") return todos;

  return todos.filter((item) => item.status === filter);
}

function getTodos() {
  return JSON.parse(localStorage.getItem("todos"));
}
