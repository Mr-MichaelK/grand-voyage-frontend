import React, { useState, useEffect } from 'react';
import style from './ActivitiesBody.module.css';
import CreateCard from '../Cards/CreateCard';
import CruiseCard from '../Cards/CruiseCard';
import ExpandedCruise from '../ExpandedCards/ExpandedCruise';
import ExpandedCreateCruiseCard from '../ExpandedCards/ExpandedCreateFlightCard';

export default function CruiseBody() {
    const [cruises, setCruises] = useState([
        {
            id: 1,
            title: "Mediterranean Dream",
            departurePort: "Barcelona",
            destination: "Rome",
            duration: 7,
            cabinType: "Luxury Suite",
            price: 2499,
            description: "Experience the beauty of the Mediterranean with our luxury cruise package.",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        }
    ]);

    const [editingCruise, setEditingCruise] = useState(null);

    useEffect(() => {
            if (editingCruise) {
                const modal = document.getElementById("editCruiseModal");
                if (modal) {
                    modal.showModal();
                }
            }
        }, [editingCruise]);

    function hasContract() {
        return true; // TODO: Implement contract check logic
    }

    function handleCreateCruise(newCruise) {
        if (hasContract()) {
            console.log('Creating a new cruise...');
            setCruises([...cruises, { ...newCruise, id: cruises.length + 1 }]);
        }
    }

    const handleDelete = (id) => {
        setCruises(cruises.filter(cruise => cruise.id !== id));
    };

    const handleEdit = (cruise) => {
        setEditingCruise(cruise);
    };

    const handleSaveEdit = (updatedCruise) => {
        setCruises(cruises.map(cruise => cruise.id === updatedCruise.id ? updatedCruise : cruise));
        setEditingCruise(null);
    };

    return (
        <>
            <div className={style.gridContainer}>
                <div className={style.cardGrid}>
                    <div onClick={() => document.getElementById("createCruiseCard").showModal()}>
                        <CreateCard type="cruise" />
                    </div>
                    {cruises.map(cruise => (
                        <CruiseCard
                            key={cruise.id}
                            cruise={cruise}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />
                    ))}
                </div>
            </div>
            <ExpandedCreateCruiseCard id="createCruiseCard" onAddCard={handleCreateCruise} />
            {editingCruise && (
                <ExpandedCruise
                    id="editCruiseModal"
                    cruise={editingCruise}
                    onSave={handleSaveEdit}
                    onCancel={() => setEditingCruise(null)}
                />
            )}
        </>
    );
}