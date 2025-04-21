import React, { useState, useEffect } from 'react';
import HotelSidebar from '../../Sidebar/HotelSidebar'
import ServicesBody from '../../ActivityBodies/ServicesBody'
import Billing from '../BillingActivity/BillingActivity'

export default function ServicesActivity() {
    const [serviceData, setServiceData] = useState([]); // State to store service data

    const fetchServiceData = (filters) => {
        /*fetch('http://localhost:8080/api/getCruises', { // Adjust the API endpoint as needed
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(filters),
        })
          .then((response) => response.json())
          .then((data) => {
            setServiceData(data); // Update state with the fetched data
          })
          .catch((error) => console.error('Error fetching service data:', error));*/
          let data = {
            "services": [
                {
                  "id": 1,
                  "hotelName": "Marriott Downtown",
                  "hotelChain": "Marriott",
                  "starRating": 5,
                  "roomType": "Suite",
                  "pricePerNight": 250,
                  "amenities": ["Pool", "Gym", "WiFi"],
                  "mealPlan": "All Inclusive",
                  "imageUrl": "https://example.com/images/marriott.jpg",
                  "location": "New York, NY"
                },
                {
                  "id": 2,
                  "hotelName": "Hilton Garden Inn",
                  "hotelChain": "Hilton",
                  "starRating": 4,
                  "roomType": "Double",
                  "pricePerNight": 180,
                  "amenities": ["WiFi", "Gym"],
                  "mealPlan": "Breakfast Included",
                  "imageUrl": "https://example.com/images/hilton.jpg",
                  "location": "Los Angeles, CA"
                },
                {
                  "id": 3,
                  "hotelName": "Hyatt Regency",
                  "hotelChain": "Hyatt",
                  "starRating": 5,
                  "roomType": "Single",
                  "pricePerNight": 200,
                  "amenities": ["Pool", "WiFi"],
                  "mealPlan": "Breakfast Included",
                  "imageUrl": "https://example.com/images/hyatt.jpg",
                  "location": "Chicago, IL"
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