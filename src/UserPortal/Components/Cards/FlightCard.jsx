import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';
import ExpandedFlight from '../Activities/ExpandedCards/ExpandedFlight';

const FlightCard = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [isBooked, setIsBooked] = useState(false);

    useEffect(() => {
        // On mount, check if there's local storage data for this flight
        const storedFlights = JSON.parse(localStorage.getItem("flightListings")) || [];
        const flight = storedFlights.find(flight => flight.id === props.id);
        if (flight) {
          setIsBooked(flight.isBooked);
        }
      }, [props.id]);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const updateLocalStorageBooking = (flightId, bookingStatus) => {
      const storedFlights = JSON.parse(localStorage.getItem("flightListings")) || [];
      const updatedFlights = storedFlights.map(flight =>
        flight.id === flightId ? { ...flight, isBooked: bookingStatus } : flight
      );
      localStorage.setItem("flightListings", JSON.stringify(updatedFlights));
    };

    const handleSubmit = () => {
      const newBookingStatus = !isBooked;
      updateLocalStorageBooking(props.id, newBookingStatus);
      setIsBooked(newBookingStatus);
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
                            {isBooked ? 'Cancel' : 'Book'}
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