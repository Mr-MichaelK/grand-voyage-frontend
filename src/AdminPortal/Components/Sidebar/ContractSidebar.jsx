// flilter by: Provider, Type, Status, Start/End Dates, Contract Value

import React from 'react';
import styles from './Sidebar.module.css';

export default function ContractSidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.filterSection}>
        <h3 className={styles.sectionTitle}>Filter Contracts</h3>

        <div className={styles.filterGroup}>
          <label>Service Provider</label>
          <input
            type="text"
            className={styles.filterInput}
            placeholder="Enter provider name..."
          />
        </div>

        <div className={styles.filterGroup}>
          <label>Contract Type</label>
          <select className={styles.filterSelect}>
            <option value="">All Types</option>
            <option>Maintenance</option>
            <option>Hotel Partnership</option>
            <option>Transport Agreement</option>
            <option>Guide Service</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label>Status</label>
          <div className={styles.checkboxGroup}>
            <label><input type="checkbox" /> Active</label>
            <label><input type="checkbox" /> Expired</label>
            <label><input type="checkbox" /> Suspended</label>
          </div>
        </div>

        <div className={styles.filterGroup}>
          <label>Start Date</label>
          <input type="date" className={styles.filterInput} />
        </div>

        <div className={styles.filterGroup}>
          <label>End Date</label>
          <input type="date" className={styles.filterInput} />
        </div>

        <div className={styles.filterGroup}>
          <label>Contract Value</label>
          <div className={styles.priceRange}>
            <input type="number" placeholder="Min" />
            <span>-</span>
            <input type="number" placeholder="Max" />
          </div>
        </div>

        <button className={styles.applyButton}>
          Show Contracts
        </button>
      </div>
    </div>
  );
}
