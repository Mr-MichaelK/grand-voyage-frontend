import React from 'react';
import style from './CruisesActivity.module.css';
import CruiseSidebar from '../../Sidebar/CruiseSidebar';
import CruisesBody from '../../ActivityBodies/CruisesBody';

export default function CruisesActivity() {
    return (
        <div className={style.cruisesContainer}>
            <CruiseSidebar />
            <CruisesBody />
        </div>
    );
}