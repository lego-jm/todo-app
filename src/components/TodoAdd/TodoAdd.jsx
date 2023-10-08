import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./TodoAdd.module.css";

export default function TodoAdd({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ id: uuidv4(), text, status: "active" });
    if (text.trim().length === 0) return;
    setText("");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
