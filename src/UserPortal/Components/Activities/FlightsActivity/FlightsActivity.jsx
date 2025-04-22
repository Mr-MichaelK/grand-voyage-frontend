import React, {useState, useEffect} from 'react'
import FlightSidebar from '../../Sidebar/FlightSidebar'
import FlightsBody from '../../ActivityBodies/FlightsBody'
import Billing from '../BillingActivity/BillingActivity'

export default function FlightsActivity() {
    const [flightListings, setFlightListings] = useState([])

    const hardcodedData = {
      flights: [
            {
              id: 1,
              airline: "Emirates",
              departureAirport: "Beirut–Rafic Hariri International Airport",
              arrivalAirport: "Dubai International Airport",
              flightDurationHours: 4,
              price: 450,
              cabinClass: "Business",
              baggageAllowance: "25kg",
              departureDate: "2025-06-15",
              mealsIncluded: true,
              noLayover: true,
              flightNumber: "EK958",
              imageUrl: "https://example.com/emirates-plane.jpg",
              isBooked: false
            },
            {
              id: 2,
              airline: "Qatar Airways",
              departureAirport: "Beirut-Rafic Hariri International Airport",
              arrivalAirport: "Hamad International Airport",
              flightDurationHours: 3.5,
              price: 390,
              cabinClass: "Economy",
              baggageAllowance: "20kg",
              departureDate: "2025-06-15",
              mealsIncluded: false,
              noLayover: true,
              flightNumber: "QR421",
              imageUrl: "https://example.com/qatar-plane.jpg",
              isBooked: false
            }
          ]
    }

    const fetchFlightData = () => {
            const stored = localStorage.getItem('flightListings');
            if (stored) {
                setFlightListings(JSON.parse(stored));
            } else {
                localStorage.setItem('flightListings', JSON.stringify(hardcodedData.flights));
                setFlightListings(hardcodedData.flights);
            }
        };
    
        useEffect(() => {
          fetchFlightData();
        }, []);

    
    return (
        <>
            <FlightSidebar onApplyFilters={fetchFlightData}></FlightSidebar>
            <FlightsBody flightData={flightListings}></FlightsBody>
            <Billing id="billingModal" />
        </>
    )
}