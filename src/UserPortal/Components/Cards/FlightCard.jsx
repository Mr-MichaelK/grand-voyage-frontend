import React, { useState } from 'react';
import styles from './Card.module.css';
import ExpandedFlight from '../Activities/ExpandedCards/ExpandedFlight';

const FlightCard = (props) => {
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
                            {props.buttonLabel || 'Book Now'}
                        </button>
                    </div>
                </div>
            </div>
            {showModal && (
                <ExpandedFlight 
                    flightData={props}
                    onClose={closeModal}
                />
            )}
        </>
    );
};

export default FlightCard;