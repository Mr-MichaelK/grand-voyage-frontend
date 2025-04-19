//Filter by: Name, Service Type, Rating, Status

import React from 'react';
import styles from './Sidebar.module.css';

export default function ServiceProviderSidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.filterSection}>
        <h3 className={styles.sectionTitle}>Filter Providers</h3>

        <div className={styles.filterGroup}>
          <label>Provider Name</label>
          <input
            type="text"
            className={styles.filterInput}
            placeholder="Search by name..."
          />
        </div>

        <div className={styles.filterGroup}>
          <label>Service Type</label>
          <select className={styles.filterSelect}>
            <option value="">All Types</option>
            <option>Hotel</option>
            <option>Flight</option>
            <option>Cruise</option>
            <option>Transport</option>
            <option>Tour Guide</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label>Rating</label>
          <div className={styles.priceRange}>
            <input type="number" min="1" max="5" placeholder="Min" />
            <span>-</span>
            <input type="number" min="1" max="5" placeholder="Max" />
          </div>
        </div>

        <div className={styles.filterGroup}>
          <label>Status</label>
          <div className={styles.checkboxGroup}>
            <label><input type="checkbox" /> Active</label>
            <label><input type="checkbox" /> Inactive</label>
            <label><input type="checkbox" /> Suspended</label>
          </div>
        </div>

        <button className={styles.applyButton}>
          Show Providers
        </button>
      </div>
    </div>
  );
}
