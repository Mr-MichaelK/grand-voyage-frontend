import React from 'react';
import FlightCard from '../Cards/FlightCard';
import styles from './ActivitiesBody.module.css';

export default function FlightsBody() {
  return (
    <div className={styles.gridContainer}>
      <h2 className={styles.gridTitle}>Available Flights</h2>
      <div className={styles.cardGrid}>
        <FlightCard 
          airline="Middle East Airlines"
          departure="BEY"
          arrival="DXB"
          duration="3h 15m"
          class="Economy"
          price={420}
          date="August 1, 2025"
          imageUrl="/mea-logo.jpg"
        />

        <FlightCard 
          airline="Emirates"
          departure="DXB"
          arrival="LHR"
          duration="7h 30m"
          class="Business"
          price={1500}
          date="August 5, 2025"
          imageUrl="/emirates-logo.jpg"
        />

        <FlightCard 
          airline="Qatar Airways"
          departure="DOH"
          arrival="JFK"
          duration="13h 45m"
          class="First Class"
          price={3500}
          date="August 10, 2025"
          imageUrl="/qatar-logo.jpg"
        />

        <FlightCard 
          airline="Turkish Airlines"
          departure="IST"
          arrival="CDG"
          duration="3h 45m"
          class="Premium Economy"
          price={780}
          date="August 15, 2025"
          imageUrl="/turkish-airlines-logo.jpg"
        />
      </div>
    </div>
  );
}