import React, {useState, useEffect} from 'react'
import FlightSidebar from '../../Sidebar/FlightSidebar'
import FlightsBody from '../../ActivityBodies/FlightsBody'
import Billing from '../BillingActivity/BillingActivity'
import WhatsAppFloatingButton from '../WhatsApp/WhatsAppFloatingButton'

export default function FlightsActivity() {
    const [flightListings, setFlightListings] = useState([])
    const [filteredFlights, setFilteredFlights] = useState([]);
    const [filters, setFilters] = useState(null);

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
              isBooked: false,
              providerEmail: "mike@gmail.com"
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
              isBooked: false,
              providerEmail: "mike@gmail.com"
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
              isBooked: false,
              providerEmail: "mike@gmail.com"
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

    function applyFlightFilters(flights, filters) {
      return flights.filter(flight => {
        const {
          airline,
          departureAirport,
          arrivalAirport,
          durationMin,
          durationMax,
          priceMin,
          priceMax,
          cabinClass,
          baggage,
          departureDate,
          mealsIncluded,
          noLayover,
        } = filters;
    
        if (airline && flight.airline !== airline) return false;
        if (departureAirport && flight.departureAirport !== departureAirport) return false;
        if (arrivalAirport && flight.arrivalAirport !== arrivalAirport) return false;
    
        if (durationMin && flight.flightDurationHours < Number(durationMin)) return false;
        if (durationMax && flight.flightDurationHours > Number(durationMax)) return false;
    
        if (priceMin && flight.price < Number(priceMin)) return false;
        if (priceMax && flight.price > Number(priceMax)) return false;
    
        if (cabinClass && flight.cabinClass !== cabinClass) return false;
    
        if (baggage.length > 0 && !baggage.includes(flight.baggageAllowance)) return false;
    
        if (departureDate && flight.departureDate !== departureDate) return false;
    
        if (mealsIncluded && flight.mealsIncluded !== true) return false;
    
        if (noLayover && flight.noLayover !== true) return false;
    
        return true;
      });
    }

    const fetchFlightData = () => {
      const stored = localStorage.getItem('flightListings');
      const data = stored ? JSON.parse(stored) : hardcodedData.flights;
  
      if (!stored) {
        localStorage.setItem('flightListings', JSON.stringify(data));
      }
  
      setFlightListings(data);
      if (filters) {
        const filtered = applyFlightFilters(data, filters);
        setFilteredFlights(filtered);
      } else {
        setFilteredFlights(data);
      }
    };
  
    useEffect(() => {
      fetchFlightData();
    }, []);
  
    const handleApplyFilters = (newFilters) => {
      setFilters(newFilters);
      const data = JSON.parse(localStorage.getItem('flightListings')) || hardcodedData.flights;
      const filtered = applyFlightFilters(data, newFilters);
      setFilteredFlights(filtered);
    };

    
    return (
        <>
            <FlightSidebar onApplyFilters={handleApplyFilters}></FlightSidebar>
            <FlightsBody flightData={filteredFlights}></FlightsBody>
            <Billing id="billingModal" />
            <WhatsAppFloatingButton />
        </>
    )
}