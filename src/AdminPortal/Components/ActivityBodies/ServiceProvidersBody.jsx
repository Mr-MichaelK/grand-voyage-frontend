// The ServiceProvidersBody activity allows the admin to manage all service providers affiliated with the agency. These could include airlines, cruise operators, hotels, tour guides, etc. Admins can:

// View provider info

// Add new providers via a form

// View details using an expanded card

import React, { useState } from 'react';
import styles from './ActivitiesBody.module.css';
import ServiceProvidersCard from './ServiceProvidersCard';
import CreateCard from './CreateCard'; // Optional: reuse for adding new providers

export default function ServiceProvidersBody() {
  const [providers, setProviders] = useState([
    {
      id: 1,
      name: "Oceanic Cruises",
      type: "Cruise",
      contact: "cruise@oceanic.com",
      rating: 4.5,
    },
    {
      id: 2,
      name: "SkyHigh Airlines",
      type: "Airline",
      contact: "support@skyhigh.com",
      rating: 4.2,
    },
  ]);

  const addProvider = (provider) => {
    setProviders(prev => [...prev, { ...provider, id: prev.length + 1 }]);
  };

  return (
    <div className={styles.gridContainer}>
      <h2 className={styles.gridTitle}>Service Providers</h2>
      <CreateCard type="provider" onCreate={addProvider} />
      <div className={styles.cardGrid}>
        {providers.map((provider) => (
          <ServiceProvidersCard key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
}























