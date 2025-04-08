import React from 'react';
import styles from './Sidebar.module.css';

export default function FlightSidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.filterSection}>
                <h3 className={styles.sectionTitle}>Filter Flights</h3>

                <div className={styles.filterGroup}>
                    <label>Airline</label>
                    <select className={styles.filterSelect}>
                        <option value="">Any Airline</option>
                        <option>Emirates</option>
                        <option>Qatar Airways</option>
                        <option>Delta</option>
                        <option>Lufthansa</option>
                    </select>
                </div>

                <div className={styles.filterGroup}>
                    <label>Departure Airport</label>
                    <input type="text" className={styles.filterInput} placeholder="From..." />
                </div>

                <div className={styles.filterGroup}>
                    <label>Arrival Airport</label>
                    <input type="text" className={styles.filterInput} placeholder="To..." />
                </div>

                <div className={styles.filterGroup}>
                    <label>Flight Duration (hours)</label>
                    <div className={styles.priceRange}>
                        <input type="number" placeholder="Min" />
                        <span>-</span>
                        <input type="number" placeholder="Max" />
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

                <div className={styles.filterGroup}>
                    <label>Cabin Class</label>
                    <select className={styles.filterSelect}>
                        <option value="">Any Class</option>
                        <option>Economy</option>
                        <option>Premium Economy</option>
                        <option>Business</option>
                        <option>First Class</option>
                    </select>
                </div>

                <div className={styles.filterGroup}>
                    <label>Baggage Allowance</label>
                    <div className={styles.checkboxGroup}>
                        <label><input type="checkbox" /> 15kg</label>
                        <label><input type="checkbox" /> 20kg</label>
                        <label><input type="checkbox" /> 25kg</label>
                    </div>
                </div>

                <div className={styles.filterGroup}>
                    <label>Departure Date</label>
                    <input type="date" className={styles.filterInput} />
                </div>

                <div className={styles.filterGroup}>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" /> Meals Included
                    </label>
                </div>

                <div className={styles.filterGroup}>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" /> No Layover
                    </label>
                </div>

                <button className={styles.applyButton}>
                    Show Flights
                </button>
            </div>
        </div>
    )
}