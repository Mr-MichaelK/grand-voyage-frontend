import React, { useState } from 'react';
import styles from './Card.module.css';
import ExpandedService from '../Activities/ExpandedCards/ExpandedService';

const HotelCard = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardImageContainer}>
          <img src={props.imageUrl} alt={props.title} className={styles.cardImage} />
        </div>
        
        <div className={styles.cardContent}>
          <div className={styles.cardInfo}>
            <h3 className={styles.cardTitle}>{props.title}</h3>
            <p className={styles.cardSubtitle}>{props.location}</p>
            <div className={styles.cardMeta}>
              <span className={styles.cardMetaMain}>{props.rating} Excellent</span>
              <span className={styles.cardMetaSecondary}>({props.reviewCount} reviews)</span>
            </div>
          </div>

          <div className={styles.cardFooter}>
            <div className={styles.cardPrice}>US${props.price}</div>
            <div className={styles.cardDetails}>{props.nights} nights</div>
            <button className={styles.cardButton} onClick={openModal}>
              {props.buttonLabel || 'View Deal'}
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <ExpandedService 
          serviceData={props}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default HotelCard;