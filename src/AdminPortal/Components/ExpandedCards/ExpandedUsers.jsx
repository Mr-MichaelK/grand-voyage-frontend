import React from 'react';
import styles from './ExpandedCards.module.css';

export default function ExpandedUsers({ user, onClose, onDelete, onToggleSuspend }) {
  return (
    <dialog open className={styles.dialog}>
      <h3 className={styles.title}>User Details</h3>
      <form method="dialog" className={styles.form}>
        <input className={styles.input} type="text" value={user.name} readOnly />
        <input className={styles.input} type="email" value={user.email} readOnly />
        <input className={styles.input} type="text" value={user.role} readOnly />
        <input className={styles.input} type="text" value={user.phone} readOnly />
        <input className={styles.input} type="text" value={user.suspended ? "Suspended" : "Active"} readOnly />

        <div className={styles.buttonGroup}>
          <button type="button" onClick={() => { onToggleSuspend(user.id); onClose(); }}>
            {user.suspended ? "Unsuspend" : "Suspend"}
          </button>
          <button type="button" onClick={() => { onDelete(user.id); onClose(); }} style={{ color: 'red' }}>
            Delete
          </button>
          <button type="submit" onClick={onClose}>Close</button>
        </div>
      </form>
    </dialog>
  );
}
