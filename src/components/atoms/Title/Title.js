import React from "react";
import styles from "./Title.css";

export default function Title({ titleText }) {
  return (
    <div className={styles.title}>
      <h1>{titleText}</h1>
    </div>
  );
}
