import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';
import ExpandedService from '../Activities/ExpandedCards/ExpandedService';

const HotelCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    // On mount, check if there's local storage data for this hotel
    const storedServices = JSON.parse(localStorage.getItem("hotelListings")) || [];
    const hotel = storedServices.find(service => service.id === props.id);
    if (hotel) {
      setIsBooked(hotel.isBooked);
    }
  }, [props.id]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const updateLocalStorageBooking = (hotelId, bookingStatus) => {
    const storedServices = JSON.parse(localStorage.getItem("hotelListings")) || [];
    const updatedServices = storedServices.map(service =>
      service.id === hotelId ? { ...service, isBooked: bookingStatus } : service
    );
    localStorage.setItem("hotelListings", JSON.stringify(updatedServices));
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
              {isBooked ? 'Cancel' : 'Book'}
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <ExpandedService 
          serviceData={props}
          onClose={closeModal}
          onSubmit={handleSubmit}
          isBooked={isBooked}
        />
      )}
    </>
  );
};

export default HotelCard;
