import React from 'react';
import style from './FlightsActivity.module.css';
import FlightSidebar from '../../Sidebar/FlightSidebar';
import FlightsBody from '../../ActivityBodies/FlightsBody';

export default function FlightsActivity() {
    return (
        <div className={style.flightsContainer}>
            <FlightSidebar />
            <FlightsBody />
        </div>
    );
}