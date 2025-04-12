import React from 'react'
import FlightSidebar from '../../Sidebar/FlightSidebar'
import FlightsBody from '../../ActivityBodies/FlightsBody'

export default function FlightsActivity() {
    return (
        <>
            <FlightSidebar></FlightSidebar>
            <FlightsBody></FlightsBody>
        </>
    )
}