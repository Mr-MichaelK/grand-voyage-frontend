import React from 'react'
import HotelSidebar from '../../Sidebar/HotelSidebar'
import ServicesBody from '../../ActivityBodies/ServicesBody'
import Billing from '../BillingActivity/BillingActivity'

export default function ServicesActivity() {
    return (
        <>
            <HotelSidebar></HotelSidebar>
            <ServicesBody></ServicesBody>
            <Billing id="billingModal" />
        </>
    )
}