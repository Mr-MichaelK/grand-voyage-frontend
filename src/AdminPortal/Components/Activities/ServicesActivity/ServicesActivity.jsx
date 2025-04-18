import React from 'react';
import style from './ServicesActivity.module.css';
import AdminPortalSidebar from '../../Sidebar/AdminPortalSidebar';
import ServicesBody from '../../ActivityBodies/ServicesBody';

export default function ServicesActivity() {
    return (
        <div className={style.servicesContainer}>
            <AdminPortalSidebar />
            <ServicesBody />
        </div>
    );
}