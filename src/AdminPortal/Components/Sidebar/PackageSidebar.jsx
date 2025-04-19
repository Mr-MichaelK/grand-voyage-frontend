import React from 'react';
import styles from './Sidebar.module.css';

export default function PackageFilterSidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.filterSection}>
        <h3 className={styles.sectionTitle}>Filter Packages</h3>

        <div className={styles.filterGroup}>
          <label>Destination</label>
          <input type="text" className={styles.filterInput} placeholder="Enter destination..." />
        </div>

        <div className={styles.filterGroup}>
          <label>Travel Dates</label>
          <div className={styles.priceRange}>
            <input type="date" placeholder="Start date" />
            <span>-</span>
            <input type="date" placeholder="End date" />
          </div>
        </div>

        <div className={styles.filterGroup}>
          <label>Package Type</label>
          <select className={styles.filterSelect}>
            <option value="">All Packages</option>
            <option>All-Inclusive</option>
            <option>Flight+Hotel</option>
            <option>Cruise+Excursions</option>
            <option>Adventure Tours</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label>Package Duration</label>
          <div className={styles.checkboxGroup}>
            <label><input type="checkbox" /> Weekend Getaway (3-4 days)</label>
            <label><input type="checkbox" /> 1 Week</label>
            <label><input type="checkbox" /> 10+ Days</label>
          </div>
        </div>

        <div className={styles.filterGroup}>
          <label>Price Range</label>
          <div className={styles.priceRange}>
            <input type="number" placeholder="Min price" />
            <span>-</span>
            <input type="number" placeholder="Max price" />
          </div>
        </div>

        <div className={styles.filterGroup}>
          <label>Travelers</label>
          <div className={styles.priceRange}>
            <input type="number" placeholder="Number" min="1" />
          </div>
        </div>

        <div className={styles.filterGroup}>
          <label>Package Features</label>
          <div className={styles.checkboxGroup}>
            <label><input type="checkbox" /> Free Cancellation</label>
            <label><input type="checkbox" /> Guided Tours</label>
            <label><input type="checkbox" /> Airport Transfers</label>
          </div>
        </div>

        <button className={styles.applyButton}>
          Search Packages
        </button>
      </div>
    </div>
  )
}