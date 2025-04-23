import React, { useState, useEffect } from 'react';
import HotelSidebar from '../../Sidebar/HotelSidebar';
import ServicesBody from '../../ActivityBodies/ServicesBody';
import Billing from '../BillingActivity/BillingActivity';

export default function ServicesActivity() {
    const [hotelListings, setHotelListings] = useState([]);

    const hardcodedData = {
        services: [
            {
                id: 1,
                hotelName: "The Grand Horizon",
                hotelChain: "LuxuryStays",
                rating: 4.5,
                reviewCount: 1287,
                nights: 3,
                roomType: "Deluxe King Room",
                pricePerNight: 210.99,
                amenities: ["WiFi", "Pool", "Gym"],
                mealPlan: "Breakfast Included",
                imageUrl: "https://example.com/images/grand-horizon.jpg",
                location: "Paris, France",
                isBooked: false
            },
            {
                id: 2,
                hotelName: "Seaside Escape",
                hotelChain: "OceanView Resorts",
                rating: 4.2,
                reviewCount: 842,
                nights: 5,
                roomType: "Ocean View Suite",
                pricePerNight: 180.75,
                amenities: ["Pool"],
                mealPlan: "All Inclusive",
                imageUrl: "https://example.com/images/seaside-escape.jpg",
                location: "Santorini, Greece",
                isBooked: false
            },
            {
              id: 3,
              hotelName: "Alcatraz Prison",
              hotelChain: "American Correctional Association",
              rating: 5,
              reviewCount: 1864,
              nights: 365,
              roomType: "Ocean View Suite",
              pricePerNight: 12.25,
              amenities: ["Gym"],
              mealPlan: "All Inclusive",
              imageUrl: "https://static.ffx.io/images/$zoom_1%2C$multiply_0.403%2C$ratio_1.777778%2C$width_1985%2C$x_13%2C$y_101/t_crop_custom/q_86%2Cf_auto/b2115c7032fafb3cd860bed1bb71e410e5063f5f",
              location: "San Fransisco, USA",
              isBooked: false
          },
          {
            id: 4,
            hotelName: "Skyline Serenity",
            hotelChain: "UrbanElite Hotels",
            rating: 4.7,
            reviewCount: 993,
            nights: 2,
            roomType: "Panoramic City View Room",
            pricePerNight: 239.50,
            amenities: ["WiFi", "Rooftop Bar", "Gym"],
            mealPlan: "Breakfast Included",
            imageUrl: "https://images.unsplash.com/photo-1501117716987-c8f11b2b5b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            location: "New York City, USA",
            isBooked: false
          },
          {
            id: 5,
            hotelName: "Mountain Whisper Lodge",
            hotelChain: "EverPeak Retreats",
            rating: 4.9,
            reviewCount: 657,
            nights: 4,
            roomType: "Chalet Suite",
            pricePerNight: 195.00,
            amenities: ["Fireplace", "Hot Tub", "Hiking Trails"],
            mealPlan: "Half Board",
            imageUrl: "https://images.unsplash.com/photo-1606312617484-cd7f0ef76388?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            location: "Zermatt, Switzerland",
            isBooked: false
          },
          {
            id: 6,
            hotelName: "Desert Bloom Resort",
            hotelChain: "SaharaLux",
            rating: 4.3,
            reviewCount: 431,
            nights: 3,
            roomType: "Tent Villa",
            pricePerNight: 160.25,
            amenities: ["Camel Rides", "Spa", "WiFi"],
            mealPlan: "Full Board",
            imageUrl: "https://images.unsplash.com/photo-1610136343304-fb0c807b47f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            location: "Marrakech, Morocco",
            isBooked: false
          }          
        ]
    };

    const fetchServiceData = () => {
        const stored = localStorage.getItem('hotelListings');
        if (stored) {
            setHotelListings(JSON.parse(stored));
        } else {
            localStorage.setItem('hotelListings', JSON.stringify(hardcodedData.services));
            setHotelListings(hardcodedData.services);
        }
    };

    useEffect(() => {
        fetchServiceData();
    }, []);

    return (
        <>
            <HotelSidebar setHotelFilters={fetchServiceData} />
            <ServicesBody serviceData={hotelListings} />
            <Billing id="billingModal" />
        </>
    );
}
