import React, { useState } from 'react';
import style from './ActivitiesBody.module.css';
import CruiseCard from '../Cards/CruisesCard';
import ExpandedCruises from '../ExpandedCards/ExpandedCruises';
import CreateCard from '../Cards/CreateCard';
import rome from '../../../assets/rome.jpeg';


export default function AdminCruisesBody() {
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
            image: rome
        }
    ]);

    const handleCreate = (newCruise) => {
        setCruises(prev => [...prev, { ...newCruise, id: Date.now() }]);
    };

    const handleDelete = (id) => {
        setCruises(prev => prev.filter(c => c.id !== id));
    };

    const handleEdit = (updatedCruise) => {
        setCruises(prev =>
            prev.map(c => (c.id === updatedCruise.id ? updatedCruise : c))
        );
    };

    return (
        <>
            <div className={style.gridContainer}>
                <h2 className={style.gridTitle}>Cruise Listings</h2>
                <div className={style.cardGrid}>
                    <div onClick={() => document.getElementById("createCruiseCard").showModal()}>
                        <CreateCard type="cruise" />
                    </div>
                    {cruises.map(c => (
                        <CruiseCard
                            key={c.id}
                            cruise={c}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />
                    ))}
                </div>
            </div>
            <ExpandedCruises id="expandedCruises" onCreate={handleCreate} />
        </>
    );
}
