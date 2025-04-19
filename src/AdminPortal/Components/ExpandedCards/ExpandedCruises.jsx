import React, { useState } from 'react';
import styles from './ExpandedCards.module.css';

export default function ExpandedCruises({ onAdd }) {
  const [cruise, setCruise] = useState({
    title: '',
    departurePort: '',
    destination: '',
    duration: '',
    cabinType: '',
    price: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    setCruise({ ...cruise, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onAdd({ ...cruise, id: Date.now() });
    document.getElementById('addCruiseModal').close();
    setCruise({});
  };

  return (
    <dialog id="addCruiseModal" className={styles.dialog}>
      <h2 className={styles.title}>Add New Cruise</h2>
      <div className={styles.form}>
        {['title', 'departurePort', 'destination', 'duration', 'cabinType', 'price', 'description', 'image'].map(field => (
          <input
            key={field}
            type={field === 'price' || field === 'duration' ? 'number' : 'text'}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={cruise[field] || ''}
            onChange={handleChange}
            className={styles.input}
          />
        ))}
        <div className={styles.buttonGroup}>
          <button onClick={handleSubmit}>Add Cruise</button>
          <button onClick={() => document.getElementById('addCruiseModal').close()}>Cancel</button>
        </div>
      </div>
    </dialog>
  );
}
