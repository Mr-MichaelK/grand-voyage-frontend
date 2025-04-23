import React, { useState, useEffect } from 'react';
import style from './ActivitiesBody.module.css';
import CreateCard from '../Cards/CreateCard';
import FlightCard from '../Cards/FlightCard';
import ExpandedCreateFlightCard from '../ExpandedCards/ExpandedCreateFlightCard';
import ExpandedFlight from '../ExpandedCards/ExpandedFlight';

export default function FlightBody() {
    const [flights, setFlights] = useState([]);
    const [editingFlight, setEditingFlight] = useState(null);

    // Replace this with actual user email from your auth context or similar
    const loggedInEmail = localStorage.getItem("email"); // Example SP email

    useEffect(() => {
        const fetchFlights = () => {
            const storedFlights = localStorage.getItem('flightListings');
            if (storedFlights) {
                const parsedFlights = JSON.parse(storedFlights);
                // Filter flights by provider's email
                const filteredFlights = parsedFlights.filter(flight => flight.providerEmail === loggedInEmail);
                setFlights(filteredFlights);
            }
        };
        fetchFlights();
    }, [loggedInEmail]); // Only fetch when the SP email changes

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
                        <CreateCard type="flight" />
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
