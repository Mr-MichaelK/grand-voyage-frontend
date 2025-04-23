import React, { useState, useEffect } from 'react';
import CruiseSidebar from '../../Sidebar/CruiseSidebar';
import CruisesBody from '../../ActivityBodies/CruisesBody';
import Billing from '../BillingActivity/BillingActivity';

const hardcodedData = {
  cruises: [
    {
      id: 1,
      isBooked: false,
      cruiseName: "Mediterranean Dream",
      departurePort: "Barcelona, Spain",
      arrivalPort: "Rome, Italy",
      nights: 7,
      cabinType: "Luxury Suite",
      price: 2499,
      embarkationDate: "August 15, 2025",
      amenities: "Pool, Spa, Fine Dining",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      isBooked: false,
      cruiseName: "Caribbean Explorer",
      departurePort: "Miami, USA",
      arrivalPort: "Nassau, Bahamas",
      nights: 5,
      cabinType: "Ocean View Balcony",
      price: 1899,
      embarkationDate: "September 1, 2025",
      amenities: "Casino, Theater, Kids Club",
      imageUrl: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ]
};

export default function CruisesActivity() {
  const [cruiseData, setCruiseData] = useState([]);

  const fetchCruiseData = () => {
    const stored = localStorage.getItem('cruiseListings');
    if (stored) {
      setCruiseData(JSON.parse(stored));
    } else {
      localStorage.setItem('cruiseListings', JSON.stringify(hardcodedData.cruises));
      setCruiseData(hardcodedData.cruises);
    }
  };

  useEffect(() => {
    fetchCruiseData();
    
    // Add event listener for storage changes
    const handleStorageChange = (e) => {
      if (e.key === 'cruiseListings' || e.type === 'storage') {
        fetchCruiseData();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <>
      <CruiseSidebar onFilterChange={fetchCruiseData} />
      <CruisesBody cruiseData={cruiseData} />
      <Billing id="billingModal" />
    </>
  );
}
