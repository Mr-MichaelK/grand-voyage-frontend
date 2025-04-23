import React, { useState, useEffect } from 'react';
import style from './ActivitiesBody.module.css';
import CreateCard from '../Cards/CreateCard';
import ServiceCard from '../Cards/ServiceCard';
import ExpandedCreateHousingCard from '../ExpandedCards/ExpandedCreateHousingCard';
import ExpandedService from '../ExpandedCards/ExpandedServices';

export default function ServicesBody() {
    const [services, setServices] = useState([]);
    const [editingService, setEditingService] = useState(null);

    // Replace this with actual user email from your auth context or similar
    const loggedInEmail = localStorage.getItem("email"); // Example SP email

    useEffect(() => {
        const fetchServices = () => {
            const storedServices = localStorage.getItem('hotelListings');
            if (storedServices) {
                const parsedServices = JSON.parse(storedServices);
                // Filter services by provider's email
                const filteredServices = parsedServices.filter(service => service.providerEmail === loggedInEmail);
                setServices(filteredServices);
            }
        };
        fetchServices();
    }, [loggedInEmail]); // Only fetch when the SP email changes

    useEffect(() => {
        if (editingService) {
            const modal = document.getElementById("editServiceModal");
            if (modal) {
                modal.showModal();
            }
        }
    }, [editingService]);

    function hasContract() {
        return true; // TODO: Implement contract check logic
    }

    const handleDeleteService = (serviceId) => {
        setServices(services.filter(service => service.id !== serviceId));
    };

    const handleEdit = (service) => {
        setEditingService(service);
    };

    const handleSaveEdit = (updatedService) => {
        setServices(services.map(service => service.id === updatedService.id ? updatedService : service));
        setEditingService(null);
    };

    const handleAddService = (newService) => {
        if (!hasContract()) {
            console.error("No contract found. Cannot add service.");
            return;
        }
        setServices([...services, { ...newService, id: services.length + 1 }]);
    };

    return (
        <>
            <div className={style.gridContainer}>
                <div className={style.cardGrid}>
                    <div onClick={() => document.getElementById("createHousingCard").showModal()}>
                        <CreateCard type="housing"/>
                    </div>
                    {services.map(service => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            onDelete={handleDeleteService}
                            onEdit={handleEdit}
                        />
                    ))}
                </div>
            </div>
            <ExpandedCreateHousingCard id="createHousingCard" onAddCard={handleAddService} />
            {editingService && (
                <ExpandedService
                    id="editServiceModal"
                    service={editingService}
                    onSave={handleSaveEdit}
                    onCancel={() => setEditingService(null)}
                />
            )}
        </>
    );
}
