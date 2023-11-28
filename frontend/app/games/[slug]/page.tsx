import React from "react";
import styles from "./styles.module.css";
import { GridComponent } from "./Grid";

export default function GamePage() {
  return (
    <div className={styles.game}>
      <GridComponent />
    </div>
  );
}
