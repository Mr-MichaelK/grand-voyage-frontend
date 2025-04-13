import React from 'react';
import PackageCard from '../Cards/PackageCard';
import styles from './ActivitiesBody.module.css';

export default function PackagesBody() {
  return (
    <div className={styles.gridContainer}>
      <h2 className={styles.gridTitle}>Available Packages</h2>
      <div className={styles.cardGrid}>
        <PackageCard 
          packageName="Package1"
          packageType="Housing & Travel"
          destination="Beirut"
          duration="4 hours"
          price="1200"
          travelDates="August 1, 2025"
          inclusions="Meals & Wifi"
        />

        <PackageCard 
          packageName="Package2"
          packageType="Housing & Travel"
          destination="Beirut"
          duration="4 hours"
          price="1200"
          travelDates="August 1, 2025"
          inclusions="Meals & Wifi"
        />

        <PackageCard 
          packageName="Package3"
          packageType="Housing & Travel"
          destination="Beirut"
          duration="4 hours"
          price="1200"
          travelDates="August 1, 2025"
          inclusions="Meals & Wifi"
        />
                    
        <PackageCard 
          packageName="Package4"
          packageType="Housing & Travel"
          destination="Beirut"
          duration="4 hours"
          price="1200"
          travelDates="August 1, 2025"
          inclusions="Meals & Wifi"
        />
      </div>
    </div>
  );
}