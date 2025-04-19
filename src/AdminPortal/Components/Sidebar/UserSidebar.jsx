// filter by: Username, Email, Registration Date, Status, Role

import React from 'react';
import styles from './Sidebar.module.css';

export default function UserSidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.filterSection}>
        <h3 className={styles.sectionTitle}>Filter Users</h3>

        <div className={styles.filterGroup}>
          <label>Username</label>
          <input
            type="text"
            className={styles.filterInput}
            placeholder="Search by username..."
          />
        </div>

        <div className={styles.filterGroup}>
          <label>Email</label>
          <input
            type="email"
            className={styles.filterInput}
            placeholder="Search by email..."
          />
        </div>

        <div className={styles.filterGroup}>
          <label>Registration Date</label>
          <input type="date" className={styles.filterInput} />
        </div>

        <div className={styles.filterGroup}>
          <label>Status</label>
          <div className={styles.checkboxGroup}>
            <label><input type="checkbox" /> Active</label>
            <label><input type="checkbox" /> Pending</label>
            <label><input type="checkbox" /> Banned</label>
          </div>
        </div>

        <div className={styles.filterGroup}>
          <label>Role</label>
          <select className={styles.filterSelect}>
            <option value="">All Roles</option>
            <option>Traveler</option>
            <option>Service Provider</option>
            <option>Admin</option>
          </select>
        </div>

        <button className={styles.applyButton}>
          Show Users
        </button>
      </div>
    </div>
  );
}
