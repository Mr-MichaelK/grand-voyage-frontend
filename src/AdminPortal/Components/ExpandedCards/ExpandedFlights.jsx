// src/Admin/ExpandedCards/ExpandedFlights.jsx
import React from 'react';
import styles from './ExpandedCards.module.css';

export default function ExpandedFlights({ id }) {
  return (
    <dialog id={id} className={styles.dialog}>
      <form method="dialog" className={styles.form}>
        <h2 className={styles.formTitle}>Add New Flight</h2>

        <input type="text" placeholder="Airline" required />
        <input type="text" placeholder="Departure" required />
        <input type="text" placeholder="Destination" required />
        <input type="date" required />
        <input type="time" required />
        <input type="number" placeholder="Price" required />
        <input type="url" placeholder="Image URL" required />

        <div className={styles.formActions}>
          <button type="submit">Add Flight</button>
          <button type="button" onClick={() => document.getElementById(id).close()}>Cancel</button>
        </div>
      </form>
    </dialog>
  );
}
