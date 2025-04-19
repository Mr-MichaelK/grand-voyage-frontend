import React from 'react';
import styles from './Card.module.css';

export default function CruiseCard({ cruise, onEdit, onDelete }) {
  return (
    <div className={styles.card}>
      <img src={cruise.image} alt={cruise.title} className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{cruise.title}</h3>
      <p className={styles.cardDetail}>From: {cruise.departurePort}</p>
      <p className={styles.cardDetail}>To: {cruise.destination}</p>
      <p className={styles.cardDetail}>Duration: {cruise.duration} nights</p>
      <p className={styles.cardDetail}>Cabin: {cruise.cabinType}</p>
      <p className={styles.cardDetail}>Price: ${cruise.price}</p>
      <div className={styles.cardActions}>
        <button onClick={() => onEdit(cruise)}>Edit</button>
        <button onClick={() => onDelete(cruise.id)}>Delete</button>
      </div>
    </div>
  );
}
