import React from 'react';
import styles from './CreateCard.module.css';

export default function CreateCard({ type }) {
  return (
    <div className={styles.createCard}>
      <span className={styles.createPlus}>+</span>
      <p className={styles.label}>Create New {type.charAt(0).toUpperCase() + type.slice(1)}</p>
    </div>
  );
}
