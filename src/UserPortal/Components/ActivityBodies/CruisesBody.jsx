import React from 'react';
import CruiseCard from '../Cards/CruiseCard';
import styles from './ActivitiesBody.module.css';

export default function CruisesBody() {
  return (
    <div className={styles.gridContainer}>
      <h2 className={styles.gridTitle}>Available Cruises</h2>
      <div className={styles.cardGrid}>
        <CruiseCard 
          cruiseName="Mediterranean Dream"
          departurePort="Barcelona, Spain"
          arrivalPort="Rome, Italy"
          nights={7}
          cabinType="Luxury Suite"
          price={2499}
          embarkationDate="August 15, 2025"
          amenities="Pool, Spa, Fine Dining"
          imageUrl="/med-cruise.jpg"
        />

        <CruiseCard 
          cruiseName="Caribbean Explorer"
          departurePort="Miami, USA"
          arrivalPort="Nassau, Bahamas"
          nights={5}
          cabinType="Ocean View Balcony"
          price={1899}
          embarkationDate="September 1, 2025"
          amenities="Casino, Theater, Kids Club"
          imageUrl="/caribbean-cruise.jpg"
        />

        <CruiseCard 
          cruiseName="Nordic Fjords Adventure"
          departurePort="Oslo, Norway"
          arrivalPort="Bergen, Norway"
          nights={10}
          cabinType="Premium Suite"
          price={3499}
          embarkationDate="July 20, 2025"
          amenities="Spa, Excursions, Gym"
          imageUrl="/nordic-cruise.jpg"
        />

        <CruiseCard 
          cruiseName="Asian Discovery"
          departurePort="Singapore"
          arrivalPort="Tokyo, Japan"
          nights={14}
          cabinType="Family Cabin"
          price={4299}
          embarkationDate="October 10, 2025"
          amenities="Cultural Tours, Pool, Cinema"
          imageUrl="/asia-cruise.jpg"
        />
      </div>
    </div>
  );
}