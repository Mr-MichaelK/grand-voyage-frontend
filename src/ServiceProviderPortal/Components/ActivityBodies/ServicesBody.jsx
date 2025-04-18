import React, { useState } from 'react';
import style from './ActivitiesBody.module.css';
import CreateCard from '../Cards/CreateCard';
import ServiceCard from '../Cards/ServiceCard';
import ExpandedCreateHousingCard from '../ExpandedCards/ExpandedCreateHousingCard';

export default function ServicesBody() {
    const [services, setServices] = useState([
        {
            id: 1,
            title: "Luxury Suite - Grand Hotel",
            category: "Hotel",
            duration: "Per Night",
            location: "Dubai, UAE",
            price: 299.99,
            image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 2,
            title: "Modern Downtown Apartment",
            category: "Apartment",
            duration: "Per Night",
            location: "Manhattan, NY",
            price: 199.99,
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    ]);

    function hasContract() {
        return true; // TODO: Implement contract check logic
    }

    const handleDeleteService = (serviceId) => {
        setServices(services.filter(service => service.id !== serviceId));
    };

    const handleEditService = (service) => {
        // TODO: Implement edit functionality
        console.log('Editing service:', service);
    };

    const handleAddService = (newService) => {
        if (!hasContract()) {
            console.error("No contract found. Cannot add service.");
            return;
        }
        setServices([...services, { ...newService, id: services.length + 1 }]);
    }

    return (
        <>
            <div className={style.gridContainer}>
                <div className={style.cardGrid}>
                    <div onClick={() => document.getElementById("createHousingCard").showModal()}><CreateCard type="housing"/></div>
                    {services.map(service => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            onDelete={handleDeleteService}
                            onEdit={handleEditService}
                        />
                    ))}
                </div>
            </div>
            <ExpandedCreateHousingCard id="createHousingCard" onAddCard={handleAddService} />
        </>

    );
}
