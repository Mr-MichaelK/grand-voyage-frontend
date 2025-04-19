import React, { useState } from 'react';
import styles from './Card.module.css';
import ExpandedServices from './ExpandedServices';

export default function ServicesCard({ service }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{service.name}</h3>
      <p>Category: {service.category}</p>
      <p>Provider: {service.provider}</p>
      <p>Price: ${service.price}</p>
      <button onClick={() => setIsExpanded(true)}>View Details</button>
      {isExpanded && (
        <ExpandedServices
          service={service}
          onClose={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
}
