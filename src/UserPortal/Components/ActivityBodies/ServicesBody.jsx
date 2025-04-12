import React from 'react';
import HotelCard from '../Cards/HotelCard';
import styles from './ActivitiesBody.module.css';

export default function HotelsBody() {
  return (
    <div className={styles.gridContainer}>
      <h2 className={styles.gridTitle}>Available Hotels</h2>
      <div className={styles.cardGrid}>
        <HotelCard 
          title="Al Murjan Palace Hotel"
          location="Jounieh, Lebanon"
          rating={8.6}
          reviewCount={126}
          price={114}
          nights={2}
          imageUrl="/murjan-palace.jpg"
        />

        <HotelCard 
          title="Beirut Marina Suites"
          location="Beirut, Lebanon"
          rating={9.1}
          reviewCount={89}
          price={199}
          nights={3}
          imageUrl="/beirut-marina.jpg"
        />

        <HotelCard 
          title="Paris Luxury Resort"
          location="Paris, France"
          rating={9.4}
          reviewCount={245}
          price={299}
          nights={4}
          imageUrl="/paris-resort.jpg"
        />

        <HotelCard 
          title="Dubai Skyline Hotel"
          location="Dubai, UAE"
          rating={9.0}
          reviewCount={167}
          price={249}
          nights={5}
          imageUrl="/dubai-hotel.jpg"
        />
      </div>
    </div>
  );
}