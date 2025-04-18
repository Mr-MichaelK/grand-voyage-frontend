import React from 'react';
import style from './ServiceProvidersActivity.module.css';
import AdminPortalSidebar from '../../Sidebar/AdminPortalSidebar';
import ServiceProvidersBody from '../../ActivityBodies/ServiceProvidersBody';

export default function ServiceProvidersActivity() {
    return (
        <div className={style.serviceProvidersContainer}>
            <AdminPortalSidebar />
            <ServiceProvidersBody />
        </div>
    );
}