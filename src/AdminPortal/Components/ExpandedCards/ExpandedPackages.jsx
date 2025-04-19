import React from 'react';
import styles from './ExpandedCards.module.css';

export default function ExpandedPackages({ id }) {
  return (
    <dialog id={id} className={styles.dialog}>
      <h2 className={styles.title}>Create New Package</h2>
      <form method="dialog" className={styles.form}>
        <input type="text" placeholder="Package Title" className={styles.input} />
        <textarea placeholder="Services (comma-separated)" className={styles.input}></textarea>
        <input type="text" placeholder="Discount (e.g. 15% or $200)" className={styles.input} />
        <input type="text" placeholder="Validity Period" className={styles.input} />
        <textarea placeholder="Description" className={styles.input}></textarea>
        <div className={styles.buttonGroup}>
          <button type="submit">Add</button>
          <button type="button" onClick={() => document.getElementById(id).close()}>Cancel</button>
        </div>
      </form>
    </dialog>
  );
}
