// src/Admin/Cards/FlightsCard.jsx
import React from 'react';
import styles from './Card.module.css';

export default function FlightsCard({ flight, onDelete, onEdit }) {
  return (
    <div className={styles.card}>
      <img src={flight.image} alt={flight.airline} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3>{flight.airline}</h3>
        <p><strong>From:</strong> {flight.departure}</p>
        <p><strong>To:</strong> {flight.destination}</p>
        <p><strong>Date:</strong> {flight.date} at {flight.time}</p>
        <p><strong>Price:</strong> ${flight.price}</p>
        <div className={styles.cardActions}>
          <button onClick={() => onEdit(flight)}>Edit</button>
          <button onClick={() => onDelete(flight.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
