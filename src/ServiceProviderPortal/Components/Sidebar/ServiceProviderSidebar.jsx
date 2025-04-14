import React from 'react';
import styles from './ServiceProviderSidebar.module.css';

const ServiceProviderSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.filterSection}>
        <h2 className={styles.sectionTitle}>Service Analytics</h2>

        <div className={styles.statCard}>
          <h3>Total Listings</h3>
          <div className={styles.statValue}>245</div>
          <div className={styles.statSubtext}>Active offers</div>
        </div>

        <div className={styles.statCard}>
          <h3>Monthly Views</h3>
          <div className={styles.statValue}>12,456</div>
          <div className={styles.statTrend}>
            <span className={styles.trendUp}>+18%</span> from last month
          </div>
        </div>

        <div className={styles.statCard}>
          <h3>Conversion Rate</h3>
          <div className={styles.statValue}>64%</div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '64%' }}></div>
          </div>
        </div>

        <div className={styles.statCard}>
          <h3>Total Revenue</h3>
          <div className={styles.statValue}>$45,670</div>
          <div className={styles.revenueBreakdown}>
            <div><span>Bookings:</span> $38,200</div>
            <div><span>Commissions:</span> $7,470</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderSidebar;