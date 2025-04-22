import React, { useState, useEffect } from 'react';
import HotelSidebar from '../../Sidebar/HotelSidebar'
import ServicesBody from '../../ActivityBodies/ServicesBody'
import Billing from '../BillingActivity/BillingActivity'

export default function ServicesActivity() {
    const [serviceData, setServiceData] = useState([]); // State to store service data

    const fetchServiceData = (filters) => {
        /*const queryParams = new URLSearchParams(filters).toString();

        fetch(`http://localhost:8080/api/getCruises?${queryParams}`)
          .then((response) => response.json())
          .then((data) => {
            setServiceData(data); // Update state with the fetched data
          })
          .catch((error) => console.error('Error fetching service data:', error));
        */
          let data = {
            "services": [
              {
                "id": 1,
                "hotelName": "The Grand Horizon",
                "hotelChain": "LuxuryStays",
                "rating": 4.5,
                "reviewCount": 1287,
                "nights": 3,
                "roomType": "Deluxe King Room",
                "pricePerNight": 210.99,
                "amenities": [
                  "Free WiFi",
                  "Swimming Pool",
                  "Spa",
                  "Gym",
                  "Airport Shuttle",
                  "Breakfast Included"
                ],
                "mealPlan": "Half Board",
                "imageUrl": "https://example.com/images/grand-horizon.jpg",
                "location": "Paris, France",
                "isBooked": false
              },
              {
                "id": 2,
                "hotelName": "Seaside Escape",
                "hotelChain": "OceanView Resorts",
                "rating": 4.2,
                "reviewCount": 842,
                "nights": 5,
                "roomType": "Ocean View Suite",
                "pricePerNight": 180.75,
                "amenities": [
                  "Private Beach",
                  "All-Inclusive",
                  "Outdoor Pool",
                  "Bar",
                  "Pet Friendly"
                ],
                "mealPlan": "All Inclusive",
                "imageUrl": "https://example.com/images/seaside-escape.jpg",
                "location": "Santorini, Greece",
                "isBooked": true
              }
            ]
            
              
          }
          setServiceData(data.services); // Update state with the fetched data
    }

    useEffect(() => {
        // For now, fetch data without filters or with default ones
        fetchServiceData({});
      }, []); // Empty dependency array to run once when the component mounts

    return (
        <>
            <HotelSidebar setHotelFilters={fetchServiceData}></HotelSidebar>
            <ServicesBody serviceData={serviceData}></ServicesBody>
            <Billing id="billingModal" />
        </>
    )
}