import React from 'react';
import style from './FlightsActivity.module.css';
import AdminPortalSidebar from '../../Sidebar/AdminPortalSidebar';
import FlightsBody from '../../ActivityBodies/FlightsBody';

export default function FlightsActivity() {
    return (
        <div className={style.flightsContainer}>
            <AdminPortalSidebar />
            <FlightsBody />
        </div>
    );
}