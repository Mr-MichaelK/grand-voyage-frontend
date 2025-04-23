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
            },
            {
              id: 3,
              airline: "Turkish Airlines",
              departureAirport: "Beirut–Rafic Hariri International Airport",
              arrivalAirport: "Istanbul Airport",
              flightDurationHours: 2.5,
              price: 320,
              cabinClass: "Economy",
              baggageAllowance: "20kg",
              departureDate: "2025-06-16",
              mealsIncluded: true,
              noLayover: true,
              flightNumber: "TK827",
              imageUrl: "https://example.com/turkish-airlines.jpg",
              isBooked: false
            },
            {
              id: 4,
              airline: "Lufthansa",
              departureAirport: "Beirut–Rafic Hariri International Airport",
              arrivalAirport: "Frankfurt Airport",
              flightDurationHours: 4.5,
              price: 510,
              cabinClass: "Premium Economy",
              baggageAllowance: "23kg",
              departureDate: "2025-06-17",
              mealsIncluded: true,
              noLayover: false,
              flightNumber: "LH1301",
              imageUrl: "https://example.com/lufthansa-plane.jpg",
              isBooked: false
            },
            {
              id: 5,
              airline: "Middle East Airlines",
              departureAirport: "Beirut–Rafic Hariri International Airport",
              arrivalAirport: "Paris Charles de Gaulle Airport",
              flightDurationHours: 5,
              price: 475,
              cabinClass: "Economy",
              baggageAllowance: "23kg",
              departureDate: "2025-06-18",
              mealsIncluded: true,
              noLayover: true,
              flightNumber: "ME211",
              imageUrl: "https://example.com/mea-plane.jpg",
              isBooked: false
            },
            {
              id: 6,
              airline: "British Airways",
              departureAirport: "Beirut–Rafic Hariri International Airport",
              arrivalAirport: "London Heathrow Airport",
              flightDurationHours: 5.2,
              price: 560,
              cabinClass: "Business",
              baggageAllowance: "30kg",
              departureDate: "2025-06-19",
              mealsIncluded: true,
              noLayover: false,
              flightNumber: "BA148",
              imageUrl: "https://example.com/british-airways.jpg",
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