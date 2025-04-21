import React, {useState, useEffect} from 'react'
import FlightSidebar from '../../Sidebar/FlightSidebar'
import FlightsBody from '../../ActivityBodies/FlightsBody'
import Billing from '../BillingActivity/BillingActivity'

export default function FlightsActivity() {
    const [flightData, setFlightData] = useState([])

    const fetchFlightData = (filters) => {
        /*// Convert filters object to query string
            const queryParams = new URLSearchParams(filters).toString();

            fetch(`http://localhost:8080/api/getCruises?${queryParams}`, {
              method: 'GET',
            })
              .then((response) => response.json())
              .then((data) => {
                setFlightData(data); // Or setCruiseData, depending on what you meant
              })
              .catch((error) => console.error('Error fetching cruise data:', error));*/
          let data = {
            "flights": [
            {
              "airline": "Emirates",
              "departureAirport": "Beirut–Rafic Hariri International Airport",
              "arrivalAirport": "Dubai International Airport",
              "flightDurationHours": 4,
              "price": 450,
              "cabinClass": "Business",
              "baggageAllowance": "25kg",
              "departureDate": "2025-06-15",
              "mealsIncluded": true,
              "noLayover": true,
              "flightNumber": "EK958",
              "imageUrl": "https://example.com/emirates-plane.jpg"
            },
            {
              "airline": "Qatar Airways",
              "departureAirport": "Beirut–Rafic Hariri International Airport",
              "arrivalAirport": "Hamad International Airport",
              "flightDurationHours": 3.5,
              "price": 390,
              "cabinClass": "Economy",
              "baggageAllowance": "20kg",
              "departureDate": "2025-06-15",
              "mealsIncluded": false,
              "noLayover": true,
              "flightNumber": "QR421",
              "imageUrl": "https://example.com/qatar-plane.jpg"
            }
          ]};
          setFlightData(data.flights); // Update state with the fetched data
    };

    useEffect(() => {
        // For now, fetch data without filters or with default ones
        fetchFlightData({});
      }, []); // Empty dependency array to run once when the component mounts
    
    return (
        <>
            <FlightSidebar onApplyFilters={fetchFlightData}></FlightSidebar>
            <FlightsBody flightData={flightData}></FlightsBody>
            <Billing id="billingModal" />
        </>
    )
}