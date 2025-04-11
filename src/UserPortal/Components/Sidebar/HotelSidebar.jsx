import React from 'react';
import styles from './Sidebar.module.css';

export default function HotelSidebar() {

    return (
        <div className={styles.sidebar}>
            <div className={styles.filterSection}>
                <h3 className={styles.sectionTitle}>Filter Hotels</h3>

                <div className={styles.filterGroup}>
                    <label>Hotel Name</label>
                    <input type="text" className={styles.filterInput} placeholder="Search by name..." />
                </div>

                <div className={styles.filterGroup}>
                    <label>Hotel Chain</label>
                    <select className={styles.filterSelect}>
                        <option value="">Any Chain</option>
                        <option>Hilton</option>
                        <option>Marriott</option>
                        <option>Hyatt</option>
                    </select>
                </div>

                <div className={styles.filterGroup}>
                    <label>Star Rating</label>
                    <div className={styles.checkboxGroup}>
                        {[1, 2, 3, 4, 5].map(star => (
                            <label key={star} className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    name="starRating"
                                    value={star}
                                />
                                {star} Star{star !== 1 ? 's' : ''}
                            </label>
                        ))}
                    </div>
                </div>

                <div className={styles.filterGroup}>
                    <label>Room Type</label>
                    <div className={styles.checkboxGroup}>
                        <label><input type="checkbox" /> Single</label>
                        <label><input type="checkbox" /> Double</label>
                        <label><input type="checkbox" /> Suite</label>
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
                    <label>Amenities</label>
                    <div className={styles.checkboxGroup}>
                        <label><input type="checkbox" /> Pool</label>
                        <label><input type="checkbox" /> Gym</label>
                        <label><input type="checkbox" /> WiFi</label>
                    </div>
                </div>

                <div className={styles.filterGroup}>
                    <label>Meal Plans</label>
                    <select className={styles.filterSelect}>
                        <option value="">Any Plan</option>
                        <option>Breakfast Included</option>
                        <option>All Inclusive</option>
                    </select>
                </div>

                <button className={styles.applyButton}>
                    Show Results
                </button>
            </div>
        </div>
    )
}