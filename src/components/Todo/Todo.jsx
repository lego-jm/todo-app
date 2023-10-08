import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Todo.module.css";

export default function Todo({ todo, onDelete, onUpdate }) {
  const handleDelete = () => onDelete(todo);
  const handleUpdate = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  return (
    <li className={styles.list}>
      <input
        className={styles.input}
        id={todo.id}
        type="checkbox"
        onChange={handleUpdate}
        checked={todo.status === "completed"}
      />
      <label
        className={`${styles.text} ${
          todo.status === "completed" ? styles.completed : ""
        }`}
        htmlFor={todo.id}
      >
        {todo.text}
      </label>
      <span className={styles.icon} onClick={handleDelete}>
        <FaTrashAlt />
      </span>
    </li>
  );
}
