import React, { useState, useEffect } from 'react';
import CruiseSidebar from '../../Sidebar/CruiseSidebar';
import CruisesBody from '../../ActivityBodies/CruisesBody';
import Billing from '../BillingActivity/BillingActivity';

export default function CruisesActivity() {
  const [cruiseData, setCruiseData] = useState([]); // State to store cruise data

  // Fetch cruise data based on the filters (for now, let's assume we call an API here)
  const fetchCruiseData = (filters) => {
    /*fetch('http://localhost:8080/api/getCruises', { // Adjust the API endpoint as needed
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filters),
    })
      .then((response) => response.json())
      .then((data) => {
        setCruiseData(data); // Update state with the fetched data
      })
      .catch((error) => console.error('Error fetching cruise data:', error));*/
      let data = {
        "cruises": [
          {
            "cruiseName": "Mediterranean Dream",
            "departurePort": "Barcelona, Spain",
            "arrivalPort": "Rome, Italy",
            "nights": 7,
            "cabinType": "Luxury Suite",
            "price": 2499,
            "embarkationDate": "August 15, 2025",
            "amenities": "Pool, Spa, Fine Dining",
            "imageUrl": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          },
          {
            "cruiseName": "Caribbean Explorer",
            "departurePort": "Miami, USA",
            "arrivalPort": "Nassau, Bahamas",
            "nights": 5,
            "cabinType": "Ocean View Balcony",
            "price": 1899,
            "embarkationDate": "September 1, 2025",
            "amenities": "Casino, Theater, Kids Club",
            "imageUrl": "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          }
        ]
      }
      setCruiseData(data.cruises); // Update state with the fetched data
  };

  useEffect(() => {
    // For now, fetch data without filters or with default ones
    fetchCruiseData({});
  }, []); // Empty dependency array to run once when the component mounts

  return (
    <>
      <CruiseSidebar onFilterChange={fetchCruiseData} /> {/* Pass filter handler */}
      <CruisesBody cruiseData={cruiseData} /> {/* Pass data to CruisesBody */}
      <Billing id="billingModal" />
    </>
  );
}
