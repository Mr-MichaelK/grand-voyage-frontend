import React from 'react';
import style from './CruisesActivity.module.css';
import AdminPortalSidebar from '../../Sidebar/AdminPortalSidebar';
import CruisesBody from '../../ActivityBodies/CruisesBody';

export default function CruisesActivity() {
    return (
        <div className={style.cruisesContainer}>
            <AdminPortalSidebar />
            <CruisesBody />
        </div>
    );
}