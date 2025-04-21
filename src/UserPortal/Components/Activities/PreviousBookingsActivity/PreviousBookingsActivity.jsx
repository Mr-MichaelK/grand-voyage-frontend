import React from 'react'
import HotelCard from '../../Cards/HotelCard'
import styles from './PreviousBookingsActivity.module.css'
import ExpandedService from '../ExpandedCards/ExpandedService'
import Billing from '../BillingActivity/BillingActivity'

export default function PreviousBookingsActivity(props) {
    function getPreviousBookings() {
        // return bookings from db
        return [{title: "Al Murjan Palace Hotel",
                location: "Jounieh, Lebanon",
                rating: 8.6,
                reviewCount: 126,
                price: 114,
                nights: 2,
                imageUrl: "/murjan-palace.jpg",
            },
            {title: "Al Murjan Palace Hotel",
                location: "Jounieh, Lebanon",
                rating: 8.6,
                reviewCount: 126,
                price: 114,
                nights: 2,
                imageUrl: "/murjan-palace.jpg",
            },
            {title: "Al Murjan Palace Hotel",
                location: "Jounieh, Lebanon",
                rating: 8.6,
                reviewCount: 126,
                price: 114,
                nights: 2,
                imageUrl: "/murjan-palace.jpg",
            },
            {title: "Al Murjan Palace Hotel",
                location: "Jounieh, Lebanon",
                rating: 8.6,
                reviewCount: 126,
                price: 114,
                nights: 2,
                imageUrl: "/murjan-palace.jpg",
            }]
    }
    return (
        <>
            <div className={styles.previousBookingsContainer}>
                <h1 className={styles.previousBookingsTitle}>Previous Bookings</h1>
                <div className={styles.previousBookingsList}>
                    {getPreviousBookings().map((booking, index) => (
                        <HotelCard
                            key={index}
                            title={booking.title}
                            location={booking.location}
                            rating={booking.rating}
                            reviewCount={booking.reviewCount}
                            price={booking.price}
                            nights={booking.nights}
                            isBooked={true}
                      />
                    ))}
                </div>
            </div>
            <Billing id="billingModal" />
        </>
    )
}