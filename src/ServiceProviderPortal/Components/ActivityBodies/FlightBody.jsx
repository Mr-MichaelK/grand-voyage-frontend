import React from 'react';
import style from './ActivitiesBody.module.css';
import CreateCard from '../Cards/CreateCard';

export default function FlightBody() {
    return (
        <div className={style.gridContainer}>
            <div className={style.cardGrid}>
                <CreateCard />
            </div>
        </div>
    );
}
