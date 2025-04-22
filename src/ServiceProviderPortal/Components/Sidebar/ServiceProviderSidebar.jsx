import React, {useState, useEffect, use} from 'react';
import styles from './ServiceProviderSidebar.module.css';

const ServiceProviderSidebar = () => {
  const [totalListings, setTotalListings] = useState(0);
  const [monthlyViews, setMonthlyViews] = useState(0);
  const [lastMonthViews, setLastMonthViews] = useState(0);
  const [trend, setTrend] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [revenueBreakdown, setRevenueBreakdown] = useState({ bookings: 0, commissions: 0 });

  useEffect(() => {
    getTotalListings();
    getMonthlyViews();
    getLastMonthViews();
    getConversionRate();
    getRevenueBreakdown();
  }, []);

  useEffect(() => {
    if (lastMonthViews !== 0) {
      const trendValue = ((monthlyViews - lastMonthViews) / lastMonthViews) * 100;
      setTrend(Number(trendValue.toFixed(1)));
    } else {
      setTrend(0); // Avoid division by zero
    }
  }, [monthlyViews, lastMonthViews]);
  

  function getTotalListings() {
    // Logic to fetch total listings
    /*const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  fetch("http://localhost:8080/api/listings/total-count", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => {
      if (!res.ok) {
        throw new Error("Failed to fetch total listing count");
      }
      return res.json();
    })
    .then(data => {
      console.log("Total number of listings:", data.count);
      // You can also set it into state if you want to display it in your component
      // setTotalCount(data.count);
    })
    .catch(err => console.error("Error fetching total listing count:", err)); */
    setTotalListings(245); // Placeholder value
  }

  function getMonthlyViews() {
    // Logic to fetch monthly views
    setMonthlyViews(12456); // Placeholder value
  }

  function getLastMonthViews() {
    // Logic to fetch last month views
    setLastMonthViews(10556); // Placeholder value
  }
  

  function getConversionRate() {
    // Logic to fetch conversion rate
    setConversionRate(64); // Placeholder value
  }

  function getTotalRevenue() {
    // Logic to fetch total revenue
    return revenueBreakdown.bookings + revenueBreakdown.commissions; 
  }

  function getRevenueBreakdown() {
    // Logic to fetch revenue breakdown
    setRevenueBreakdown({
      bookings: 38200,
      commissions: 7470,
    }); // Placeholder values
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.filterSection}>
        <h2 className={styles.sectionTitle}>Service Analytics</h2>

        <div className={styles.statCard}>
          <h3>Total Listings</h3>
          <div className={styles.statValue}>{totalListings}</div>
          <div className={styles.statSubtext}>Active offers</div>
        </div>

        <div className={styles.statCard}>
          <h3>Monthly Views</h3>
          <div className={styles.statValue}>{monthlyViews}</div>
          <div className={styles.statTrend}>
            <span className={trend >= 0 ? styles.trendUp : styles.trendDown}>{trend > 0 ? `+${trend}%` : `${trend}%`}</span> from last month
          </div>
        </div>

        <div className={styles.statCard}>
          <h3>Conversion Rate</h3>
          <div className={styles.statValue}>{conversionRate}%</div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: conversionRate +"%" }}></div>
          </div>
        </div>

        <div className={styles.statCard}>
          <h3>Total Revenue</h3>
          <div className={styles.statValue}>{revenueBreakdown.bookings + revenueBreakdown.commissions}</div>
          <div className={styles.revenueBreakdown}>
            <div><span>Bookings:</span> ${revenueBreakdown.bookings}</div>
            <div><span>Commissions:</span> ${revenueBreakdown.commissions}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderSidebar;