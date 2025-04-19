import React from 'react';
import styles from './Sidebar.module.css';

export default function CruiseSidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.filterSection}>
        <h3 className={styles.sectionTitle}>Filter Cruises</h3>

        <div className={styles.filterGroup}>
          <label>Cruise Ship</label>
          <input type="text" className={styles.filterInput} placeholder="Search by ship name..." />
        </div>

        <div className={styles.filterGroup}>
          <label>Departure Port</label>
          <input type="text" className={styles.filterInput} placeholder="Embarkation port..." />
        </div>

        <div className={styles.filterGroup}>
          <label>Arrival Port</label>
          <input type="text" className={styles.filterInput} placeholder="Disembarkation port..." />
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
          <label>Cruise Duration</label>
          <div className={styles.checkboxGroup}>
            <label><input type="checkbox" /> 3-5 Nights</label>
            <label><input type="checkbox" /> 7-10 Nights</label>
            <label><input type="checkbox" /> 10+ Nights</label>
          </div>
        </div>

        <div className={styles.filterGroup}>
          <label>Cabin Type</label>
          <select className={styles.filterSelect}>
            <option value="">Any Cabin</option>
            <option>Interior</option>
            <option>Ocean View</option>
            <option>Balcony</option>
            <option>Suite</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label>Amenities</label>
          <div className={styles.checkboxGroup}>
            <label><input type="checkbox" /> Pool</label>
            <label><input type="checkbox" /> Spa</label>
            <label><input type="checkbox" /> Casino</label>
            <label><input type="checkbox" /> Theater</label>
          </div>
        </div>

        <div className={styles.filterGroup}>
          <label>Price Range</label>
          <div className={styles.priceRange}>
            <input type="number" placeholder="Min" />
            <span>-</span>
            <input type="number" placeholder="Max" />
          </div>
        </div>

        <button className={styles.applyButton}>
          Show Cruises
        </button>
      </div>
    </div>
  )
}