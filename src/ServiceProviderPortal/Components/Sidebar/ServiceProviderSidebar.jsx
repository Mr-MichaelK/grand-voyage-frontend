import React from 'react';
import styles from './ServiceProviderSidebar.module.css';

const ServiceProviderSidebar = () => {
  function getTotalListings() {
    // Logic to fetch total listings
    return 245; // Placeholder value
  }

  function getMonthlyViews() {
    // Logic to fetch monthly views
    return 12456; // Placeholder value
  }

  function getLastMonthViews() {
    // Logic to fetch last month views
    return 10556; // Placeholder value
  }

  function getTrend() {
    const currentViews = getMonthlyViews();
    const lastMonthViews = getLastMonthViews();
    const trend = ((currentViews - lastMonthViews) / lastMonthViews) * 100;
    return Number(trend.toFixed(1)); // Rounds to the nearest tenth
  }
  

  function getConversionRate() {
    // Logic to fetch conversion rate
    return 64; // Placeholder value
  }

  function getTotalRevenue() {
    // Logic to fetch total revenue
    const revenueBreakdown = getRevenueBreakdown();
    return revenueBreakdown.bookings + revenueBreakdown.commissions; 
  }

  function getRevenueBreakdown() {
    // Logic to fetch revenue breakdown
    return {
      bookings: 38200,
      commissions: 7470,
    }; // Placeholder values
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.filterSection}>
        <h2 className={styles.sectionTitle}>Service Analytics</h2>

        <div className={styles.statCard}>
          <h3>Total Listings</h3>
          <div className={styles.statValue}>{getTotalListings()}</div>
          <div className={styles.statSubtext}>Active offers</div>
        </div>

        <div className={styles.statCard}>
          <h3>Monthly Views</h3>
          <div className={styles.statValue}>{getMonthlyViews()}</div>
          <div className={styles.statTrend}>
            <span className={getTrend() >= 0 ? styles.trendUp : styles.trendDown}>{getTrend() > 0 ? `+${getTrend()}%` : `${getTrend()}%`}</span> from last month
          </div>
        </div>

        <div className={styles.statCard}>
          <h3>Conversion Rate</h3>
          <div className={styles.statValue}>{getConversionRate()}%</div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: getConversionRate()+"%" }}></div>
          </div>
        </div>

        <div className={styles.statCard}>
          <h3>Total Revenue</h3>
          <div className={styles.statValue}>{getTotalRevenue()}</div>
          <div className={styles.revenueBreakdown}>
            <div><span>Bookings:</span> ${getRevenueBreakdown().bookings}</div>
            <div><span>Commissions:</span> ${getRevenueBreakdown().commissions}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderSidebar;