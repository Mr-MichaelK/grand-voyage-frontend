import React, { useState, useEffect } from 'react';
import HotelCard from '../../Cards/HotelCard';
import CruiseCard from '../../Cards/CruiseCard';
import FlightCard from '../../Cards/FlightCard';
import PackageCard from '../../Cards/PackageCard';
import styles from './PreviousBookingsActivity.module.css';
import ExpandedService from '../ExpandedCards/ExpandedService';
import Billing from '../BillingActivity/BillingActivity';

export default function PreviousBookingsActivity(props) {
  const [hotelBookings, setHotelBookings] = useState([]);
  const [flightBookings, setFlightBookings] = useState([]);
  const [cruiseBookings, setCruiseBookings] = useState([]);
  const [packageBookings, setPackageBookings] = useState([]);

  useEffect(() => {
    fetchHotelBookings();
    fetchFlightBookings();
    fetchCruiseBookings();
    fetchPackageBookings();
  }, []);

  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  function fetchHotelBookings() {
    /*
    fetch("http://localhost:8080/api/bookings/hotels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(data => setHotelBookings(data))
      .catch(err => console.error("Error fetching hotel bookings:", err));
      */
  }

  function fetchFlightBookings() {
    /*
    fetch("http://localhost:8080/api/bookings/flights", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(data => setFlightBookings(data))
      .catch(err => console.error("Error fetching flight bookings:", err));
      */
  }

  function fetchCruiseBookings() {
    /*
    fetch("http://localhost:8080/api/bookings/cruises", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(data => setCruiseBookings(data))
      .catch(err => console.error("Error fetching cruise bookings:", err));
      */
  }

  function fetchPackageBookings() {
    /*
    fetch("http://localhost:8080/api/bookings/packages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(data => setPackageBookings(data))
      .catch(err => console.error("Error fetching package bookings:", err));
      */
  }

  return (
    <>
      <div className={styles.previousBookingsContainer}>
        <h1 className={styles.previousBookingsTitle}>Previous Bookings</h1>
        <div className={styles.previousBookingsList}>
          
          {hotelBookings.map((hotel, index) => (
            <HotelCard
              key={`hotel-${index}`}
              id={hotel.id}
              hotelName={hotel.hotelName}
              hotelChain={hotel.hotelChain}
              rating={hotel.rating}
              reviewCount={hotel.reviewCount}
              nights={hotel.nights}
              roomType={hotel.roomType}
              pricePerNight={hotel.pricePerNight}
              amenities={hotel.amenities}
              mealPlan={hotel.mealPlan}
              imageUrl={hotel.imageUrl}
              location={hotel.location}
              isBooked={true}
              buttonLabel="Booked"
            />
          ))}

          {flightBookings.map((flight, index) => (
            <FlightCard
              key={`flight-${index}`}
              id={flight.id}
              departure={flight.departure}
              arrival={flight.arrival}
              date={flight.date}
              airline={flight.airline}
              seatClass={flight.seatClass}
              duration={flight.duration}
              imageUrl={flight.imageUrl}
              isBooked={true}
              buttonLabel="Booked"
            />
          ))}

          {cruiseBookings.map((cruise, index) => (
            <CruiseCard
              key={`cruise-${index}`}
              id={cruise.id}
              cruiseLine={cruise.cruiseLine}
              destination={cruise.destination}
              departurePort={cruise.departurePort}
              nights={cruise.nights}
              roomType={cruise.roomType}
              amenities={cruise.amenities}
              imageUrl={cruise.imageUrl}
              isBooked={true}
              buttonLabel="Booked"
            />
          ))}

          {packageBookings.map((pkg, index) => (
            <PackageCard
              key={`package-${index}`}
              id={pkg.id}
              packageName={pkg.packageName}
              destination={pkg.destination}
              nights={pkg.nights}
              hotelName={pkg.hotelName}
              flightInfo={pkg.flightInfo}
              cruiseInfo={pkg.cruiseInfo}
              price={pkg.price}
              imageUrl={pkg.imageUrl}
              isBooked={true}
              buttonLabel="Booked"
            />
          ))}

        </div>
      </div>
      <Billing id="billingModal" />
    </>
  );
}
