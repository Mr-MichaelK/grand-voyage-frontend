import React from 'react';
import style from './CruisesActivity.module.css';
import CruiseBody from '../../ActivityBodies/CruiseBody';

export default function CruisesActivity() {
    return (
        <div className={style.cruisesContainer}>
            <CruiseBody />
        </div>
    );
}