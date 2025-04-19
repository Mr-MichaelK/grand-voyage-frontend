import React from 'react';
import styles from './Card.module.css';
import ExpandedPackages from '../ExpandedCards/ExpandedPackages';

export default function PackagesCard({ pkg, onDelete, onEdit }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{pkg.title}</h3>
      <p><strong>Services:</strong> {pkg.services.join(', ')}</p>
      <p><strong>Discount:</strong> {pkg.discount}</p>
      <p><strong>Validity:</strong> {pkg.validity}</p>
      <p>{pkg.description}</p>
      <div className={styles.buttonGroup}>
        <button onClick={() => onEdit(pkg)} className={styles.editBtn}>Edit</button>
        <button onClick={() => onDelete(pkg.id)} className={styles.deleteBtn}>Delete</button>
      </div>
    </div>
  );
}
