import React from 'react';
import styles from './ExpandedCards.module.css';

export default function ExpandedServiceProviders({ provider, onClose }) {
  return (
    <dialog open className={styles.dialog}>
      <h3 className={styles.title}>{provider.name}</h3>
      <form method="dialog" className={styles.form}>
        <input className={styles.input} type="text" value={provider.type} readOnly />
        <input className={styles.input} type="email" value={provider.contact} readOnly />
        <input className={styles.input} type="text" value={`Rating: ${provider.rating}`} readOnly />
        <div className={styles.buttonGroup}>
          <button type="submit" onClick={onClose}>Close</button>
        </div>
      </form>
    </dialog>
  );
}
