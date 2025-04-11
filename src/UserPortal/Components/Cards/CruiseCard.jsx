import React from 'react';
import styles from './Card.module.css';

const CruiseCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <img 
          src={props.imageUrl} 
          alt={props.cruiseName} 
          className={styles.cardImage} 
        />
      </div>
      
      <div className={styles.cardContent}>
        <div className={styles.cardInfo}>
          <h3 className={styles.cardTitle}>{props.cruiseName}</h3>
          <p className={styles.cardSubtitle}>
            {props.departurePort} → {props.arrivalPort}
          </p>
          <div className={styles.cardMeta}>
            <span className={styles.cardMetaMain}>{props.nights} Nights</span>
            <span className={styles.cardMetaSecondary}>{props.cabinType}</span>
          </div>
        </div>

        <div className={styles.cardFooter}>
          <div className={styles.cardPrice}>US${props.price}</div>
          <div className={styles.cardDetails}>
            <div>Departs: {props.embarkationDate}</div>
            <div>Amenities: {props.amenities}</div>
          </div>
          <button className={styles.cardButton}>
            {props.buttonLabel || 'View Cruise'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CruiseCard;