import React from 'react';
import styles from './ExpandedService.module.css';

export default function ExpandedService({ serviceData, onClose, onSubmit, isBooked }) {
    if (!serviceData) return null;

    const submitButton = !isBooked ? <button
                                        type="button"
                                        className={styles.primaryButton}
                                        onClick={onSubmit}
                                    >
                                        Book Now
                                    </button> 
                                    : 
                                    <button
                                        type="button"
                                        className={styles.primaryButton}
                                        onClick={onSubmit}
                                    >
                                        Cancel Booking
                                    </button>

    return (
        <div className={styles.modalContainer}>
            <dialog className={styles.contractContainer} open>
                <h1 className={styles.contractTitle}>{serviceData.title}</h1>

                <div className={styles.modalContent}>
                    <div className={styles.detailsSection}>
                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Location:</span>
                            <span>{serviceData.location}</span>
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Rating:</span>
                            <span>{serviceData.rating} Excellent ({serviceData.reviewCount} reviews)</span>
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Duration:</span>
                            <span>{serviceData.nights} Nights</span>
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Room Type:</span>
                            <span>{serviceData.roomType || 'Standard Room'}</span>
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Amenities:</span>
                            <div className={styles.amenitiesList}>
                                {serviceData.amenities?.split(',').map((amenity, index) => (
                                    <span key={index} className={styles.amenityBadge}>
                                        {amenity.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <form className={styles.bookingForm}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="guests">Number of Guests</label>
                                <input
                                    type="number"
                                    id="guests"
                                    min="1"
                                    max="4"
                                    defaultValue="2"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="roomSelection">Room Selection</label>
                                <select id="roomSelection">
                                    <option value="standard">Standard Room</option>
                                    <option value="deluxe">Deluxe Room</option>
                                    <option value="suite">Suite</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="checkIn">Check-in Date</label>
                                <input type="date" id="checkIn" />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="checkOut">Check-out Date</label>
                                <input type="date" id="checkOut" />
                            </div>

                            <div className={styles.priceSummary}>
                                <h3>Total Price: US${serviceData.price}</h3>
                                <small>Per night, includes all taxes and fees</small>
                            </div>

                            <div className={styles.modalButtons}>
                                <button
                                    type="button"
                                    className={styles.secondaryButton}
                                    onClick={onClose}
                                >
                                    Close
                                </button>
                                
                                {submitButton}
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
} 