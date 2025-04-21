import React from 'react';
import HotelCard from '../Cards/HotelCard';
import styles from './ActivitiesBody.module.css';

export default function HotelsBody({ serviceData }) {
  return (
    <div className={styles.gridContainer}>
      <h2 className={styles.gridTitle}>Available Hotels</h2>
      <div className={styles.cardGrid}>
      {serviceData.map((hotel, index) => (
        <HotelCard
          key={index}
          hotelName={hotel.hotelName}
          hotelChain={hotel.hotelChain}
          starRating={hotel.starRating}
          roomType={hotel.roomType}
          pricePerNight={hotel.pricePerNight}
          amenities={hotel.amenities}
          mealPlan={hotel.mealPlan}
          imageUrl={hotel.imageUrl}
          location={hotel.location}
        />
      ))}

      </div>
    </div>
  );
}