import React, { useState } from 'react';
import styles from './Card.module.css';
import ExpandedPackage from '../Activities/ExpandedCards/ExpandedPackage';

const PackageCard = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [isBooked, setIsBooked] = useState(props.isBooked);
    

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    function bookListing(packageId) {
        /*
        fetch(`http://localhost:8080/api/hotels/book/${packageId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Booking failed');
          }
          return response.json();
        })
        .then(data => {
          console.log('Booking successful:', data);
        })
        .catch(error => {
          console.error('Error booking hotel:', error);
          
        })*/};
        
      function cancelBooking(packageId) {
        /*
          fetch(`http://localhost:8080/api/hotels/cancel/${packageId}`, {
              method: 'DELETE',
              headers: {
              'Content-Type': 'application/json'
              }
          })
          .then(response => {
              if (!response.ok) {
              throw new Error('Cancellation failed');
              }
              return response.json();
          })
          .then(data => {
              console.log('Cancellation successful:', data);
          })
          .catch(error => {
              console.error('Error cancelling booking:', error);
          });
          */
      }
    
      const handleSubmit = () => {
        const id = props.id;
        if (!isBooked) {
          bookListing(id);
        } else {
          cancelBooking(id);
        }
        setIsBooked(!isBooked);
        closeModal();
      };

    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardImageContainer}>
                    <img
                        src={props.imageUrl}
                        alt={props.packageName}
                        className={styles.cardImage}
                    />
                </div>

                <div className={styles.cardContent}>
                    <div className={styles.cardInfo}>
                        <h3 className={styles.cardTitle}>{props.packageName}</h3>
                        <p className={styles.cardSubtitle}>{props.destination}</p>
                        <div className={styles.cardMeta}>
                            <span className={styles.cardMetaMain}>{props.duration}</span>
                            <span className={styles.cardMetaSecondary}>{props.packageType}</span>
                        </div>
                    </div>

                    <div className={styles.cardFooter}>
                        <div className={styles.cardPrice}>US${props.price}</div>
                        <div className={styles.cardDetails}>
                            <div>{props.travelDates}</div>
                            <div>Includes: {props.inclusions}</div>
                        </div>
                        <button className={styles.cardButton} onClick={openModal}>
                            {props.buttonLabel || 'View Package'}
                        </button>
                    </div>
                </div>
            </div>
            {showModal && (
                <ExpandedPackage 
                    packageData={props}
                    onClose={closeModal}
                    onSubmit={handleSubmit}
                    isBooked={isBooked}
                />
            )}
        </>
    );
};

export default PackageCard;