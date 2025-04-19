import React, { useState } from 'react';
import styles from './Card.module.css';
import ExpandedServiceProviders from './ExpandedServiceProviders';

export default function ServiceProvidersCard({ provider }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{provider.name}</h3>
      <p>Type: {provider.type}</p>
      <p>Contact: {provider.contact}</p>
      <p>Rating: ⭐ {provider.rating}</p>
      <button onClick={() => setIsExpanded(true)}>View Details</button>
      {isExpanded && (
        <ExpandedServiceProviders
          provider={provider}
          onClose={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
}
