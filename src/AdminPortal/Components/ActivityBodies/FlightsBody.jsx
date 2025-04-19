// This activity allows the admin to:

// View flight listings

// Add new flights using a form popup

// Edit or delete existing flights (planned for future)

// Ensure data consistency across the portal





import React, { useState } from 'react';
import styles from './ActivitiesBody.module.css';
import FlightsCard from '../Cards/FlightsCard';
import CreateCard from '../Cards/CreateCard';
import ExpandedFlights from '../ExpandedCards/ExpandedFlights';

export default function FlightsBody() {
  const [flights, setFlights] = useState([
    {
      id: 1,
      airline: 'Emirates',
      departure: 'Dubai',
      destination: 'Paris',
      date: '2025-06-20',
      time: '14:30',
      price: 950,
      image: 'https://images.unsplash.com/photo-1523012878615-2b713d1d5a1a?auto=format&fit=crop&w=1470&q=80',
    },
  ]);

  const handleDelete = (id) => {
    setFlights(flights.filter(flight => flight.id !== id));
  };

  const handleEdit = (flight) => {
    console.log('Editing flight:', flight);
  };

  return (
    <>
      <div className={styles.gridContainer}>
        <h2 className={styles.gridTitle}>Manage Flights</h2>
        <div className={styles.cardGrid}>
          <div onClick={() => document.getElementById('createFlightForm').showModal()}>
            <CreateCard type="flight" />
          </div>
          {flights.map(flight => (
            <FlightsCard
              key={flight.id}
              flight={flight}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      </div>
      <ExpandedFlights id="createFlightForm" />
    </>
  );
}
