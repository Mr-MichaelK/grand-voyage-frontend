import React, { useState, useEffect } from 'react';
import style from './ActivitiesBody.module.css';
import CreateCard from '../Cards/CreateCard';
import FlightCard from '../Cards/FlightCard';
import ExpandedCreateFlightCard from '../ExpandedCards/ExpandedCreateFlightCard';
import ExpandedFlight from '../ExpandedCards/ExpandedFlight';

export default function FlightBody() {

    const [flights, setFlights] = useState([
        {
            id: 1,
            title: "Direct Flight to Paris",
            departureAirport: "JFK",
            arrivalAirport: "CDG",
            duration: "7h 25m",
            class: "Business",
            price: 1299.99,
            description: "Experience luxury travel with our direct business class flight to Paris",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 2,
            title: "London Express",
            departureAirport: "LAX",
            arrivalAirport: "LHR",
            duration: "10h 45m",
            class: "First Class",
            price: 2499.99,
            description: "Premium first-class service on our non-stop flight to London",
            image: "https://images.unsplash.com/photo-1544016768-982d3a5c421d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    ]);

    const [editingFlight, setEditingFlight] = useState(null);

    useEffect(() => {
        if (editingFlight) {
            const modal = document.getElementById("editFlightModal");
            if (modal) {
                modal.showModal();
            }
        }
    }, [editingFlight]);

    function hasContract() {
        return true; // TODO: Implement contract check logic
    }

    function handleCreateFlight(newFlight) {
        if (hasContract()) {
            console.log('Creating a new flight...');
            setFlights([...flights, { ...newFlight, id: flights.length + 1 }]);
        }
    }

    const handleDeleteFlight = (flightId) => {
        setFlights(flights.filter(flight => flight.id !== flightId));
    };

    const handleEdit = (flight) => {
        setEditingFlight(flight);
    };

    const handleSaveEdit = (updatedFlight) => {
        setFlights(flights.map(flight => flight.id === updatedFlight.id ? updatedFlight : flight));
        setEditingFlight(null);
    };

    return (
        <>
            <div className={style.gridContainer}>
                <div className={style.cardGrid}>
                    <div onClick={() => document.getElementById("createFlightCard").showModal()}>
                        <CreateCard type="flight"/>
                    </div>
                    {flights.map(flight => (
                        <FlightCard
                            key={flight.id}
                            flight={flight}
                            onDelete={handleDeleteFlight}
                            onEdit={handleEdit}
                        />
                    ))}
                </div>
            </div>
            <ExpandedCreateFlightCard id="createFlightCard" onAddCard={handleCreateFlight} />
            {editingFlight && (
                <ExpandedFlight
                    id="editFlightModal"
                    flight={editingFlight}
                    onSave={handleSaveEdit}
                    onCancel={() => setEditingFlight(null)}
                />
            )}
        </>
        
    );
}
