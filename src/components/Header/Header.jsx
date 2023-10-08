import React from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import styles from "./Header.module.css";

export default function Header({ filters, setFilter, filter }) {
  const handleFilterSelected = (filter) => setFilter(filter);

  return (
    <header className={styles.header}>
      <span className={styles.icon}>
        <BiSolidSun />
        <BiSolidMoon />
      </span>
      <ul className={styles.list}>
        {filters.map((item, index) => (
          <li
            className={`${styles.item} ${item === filter ? styles.active : ""}`}
            key={index}
            onClick={() => handleFilterSelected(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </header>
  );
}
