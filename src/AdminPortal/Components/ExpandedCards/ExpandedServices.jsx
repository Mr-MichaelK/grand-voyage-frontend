import React from 'react';
import styles from './ExpandedCards.module.css';

export default function ExpandedServices({ service, onClose }) {
  return (
    <dialog open className={styles.dialog}>
      <h3 className={styles.title}>{service.name}</h3>
      <form method="dialog" className={styles.form}>
        <input className={styles.input} type="text" value={service.category} readOnly />
        <input className={styles.input} type="text" value={service.provider} readOnly />
        <input className={styles.input} type="text" value={`$${service.price}`} readOnly />
        <textarea className={styles.input} rows="3" value={service.description} readOnly />
        <div className={styles.buttonGroup}>
          <button type="submit" onClick={onClose}>Close</button>
        </div>
      </form>
    </dialog>
  );
}
