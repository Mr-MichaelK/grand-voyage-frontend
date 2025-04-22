import React, { useState } from 'react';
import styles from './Card.module.css';
import ExpandedFlight from '../Activities/ExpandedCards/ExpandedFlight';

const FlightCard = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [isBooked, setIsBooked] = useState(props.isBooked);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    function bookListing(flightId) {
        /*
        fetch(`http://localhost:8080/api/hotels/book/${flightId}`, {
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
        
      function cancelBooking(flightId) {
        /*
          fetch(`http://localhost:8080/api/hotels/cancel/${flightId}`, {
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
                    <img src={props.imageUrl} alt={props.airline} className={styles.cardImage} />
                </div>

                <div className={styles.cardContent}>
                    <div className={styles.cardInfo}>
                        <h3 className={styles.cardTitle}>{props.airline}</h3>
                        <p className={styles.cardSubtitle}>
                            {props.departure} → {props.arrival}
                        </p>
                        <div className={styles.cardMeta}>
                            <span className={styles.cardMetaMain}>{props.duration}</span>
                            <span className={styles.cardMetaSecondary}>{props.class}</span>
                        </div>
                    </div>

                    <div className={styles.cardFooter}>
                        <div className={styles.cardPrice}>US${props.price}</div>
                        <div className={styles.cardDetails}>{props.date}</div>
                        <button className={styles.cardButton} onClick={openModal}>
                            {props.buttonLabel || 'View Deal'}
                        </button>
                    </div>
                </div>
            </div>
            {showModal && (
                <ExpandedFlight 
                    flightData={props}
                    onClose={closeModal}
                    onSubmit={handleSubmit}
                    isBooked={isBooked}
                />
            )}
        </>
    );
};

export default FlightCard;