import React from 'react';
import style from './ServicesActivity.module.css';
import ServiceSidebar from '../../Sidebar/ServiceSidebar';
import ServicesBody from '../../ActivityBodies/ServicesBody';

export default function ServicesActivity() {
    return (
        <div className={style.servicesContainer}>
            <ServiceSidebar />
            <ServicesBody />
        </div>
    );
}