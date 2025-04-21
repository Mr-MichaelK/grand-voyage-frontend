import React from 'react'
import FlightSidebar from '../../Sidebar/FlightSidebar'
import FlightsBody from '../../ActivityBodies/FlightsBody'
import Billing from '../BillingActivity/BillingActivity'

export default function FlightsActivity() {
    return (
        <>
            <FlightSidebar></FlightSidebar>
            <FlightsBody></FlightsBody>
            <Billing id="billingModal" />
        </>
    )
}