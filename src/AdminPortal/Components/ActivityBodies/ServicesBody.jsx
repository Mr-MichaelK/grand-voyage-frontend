// The ServicesBody activity allows the admin to manage individual services offered by various providers — like flights, hotel bookings, guided tours, cruise activities, etc.

// Admins can:

// View all services with details

// Add a new service (via a form)

// View more information using an expanded card

import React, { useState } from 'react';
import styles from './ActivitiesBody.module.css';
import ServicesCard from './ServicesCard';
import CreateCard from './CreateCard'; // Reusable for adding new services

export default function ServicesBody() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Rome City Tour",
      category: "Tour",
      provider: "ItaliaGuides",
      price: 99,
      description: "A full-day guided tour of Rome's historic landmarks."
    },
    {
      id: 2,
      name: "Santorini Sunset Cruise",
      category: "Cruise",
      provider: "BlueWaters",
      price: 120,
      description: "Evening cruise with dinner and wine around Santorini."
    },
  ]);

  const addService = (service) => {
    setServices(prev => [...prev, { ...service, id: prev.length + 1 }]);
  };

  return (
    <div className={styles.gridContainer}>
      <h2 className={styles.gridTitle}>Services</h2>
      <CreateCard type="service" onCreate={addService} />
      <div className={styles.cardGrid}>
        {services.map((service) => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}















