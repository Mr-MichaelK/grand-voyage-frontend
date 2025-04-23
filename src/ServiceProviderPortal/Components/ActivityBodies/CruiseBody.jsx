import React, { useState, useEffect } from 'react';
import style from './ActivitiesBody.module.css';
import CreateCard from '../Cards/CreateCard';
import CruiseCard from '../Cards/CruiseCard';
import ExpandedCruise from '../ExpandedCards/ExpandedCruise';
import ExpandedCreateCruiseCard from '../ExpandedCards/ExpandedCreateFlightCard';

export default function CruiseBody() {
    const [cruises, setCruises] = useState([]);
    const [editingCruise, setEditingCruise] = useState(null);

    // Replace this with actual user email from your auth context or similar
    const loggedInEmail = localStorage.getItem("email"); // Example SP email

    useEffect(() => {
        const fetchCruises = () => {
            const storedCruises = localStorage.getItem('cruiseListings');
            if (storedCruises) {
                const parsedCruises = JSON.parse(storedCruises);
                // Filter cruises by provider's email
                const filteredCruises = parsedCruises.filter(cruise => cruise.providerEmail === loggedInEmail);
                setCruises(filteredCruises);
            }
        };
        fetchCruises();
    }, [loggedInEmail]); // Only fetch when the SP email changes

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
