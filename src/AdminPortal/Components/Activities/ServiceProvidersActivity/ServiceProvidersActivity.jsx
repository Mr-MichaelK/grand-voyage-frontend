import React from 'react';
import style from './ServiceProvidersActivity.module.css';
import ServiceProviderSidebar from '../../Sidebar/ServiceProviderSidebar';
import ServiceProvidersBody from '../../ActivityBodies/ServiceProvidersBody';

export default function ServiceProvidersActivity() {
    return (
        <div className={style.serviceProvidersContainer}>
            <ServiceProviderSidebar />
            <ServiceProvidersBody />
        </div>
    );
}