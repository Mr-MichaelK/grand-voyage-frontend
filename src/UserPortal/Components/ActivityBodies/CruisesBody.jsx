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
          imageUrl="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
          imageUrl="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
          imageUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
          imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
        />
      </div>
    </div>
  );
}