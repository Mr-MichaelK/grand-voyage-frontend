import React from 'react'
import CruiseSidebar from '../../Sidebar/CruiseSidebar'
import CruisesBody from '../../ActivityBodies/CruisesBody'
import Billing from '../BillingActivity/BillingActivity'

export default function CruisesActivity() {
    return (
        <>
            <CruiseSidebar></CruiseSidebar>
            <CruisesBody></CruisesBody>
            <Billing id="billingModal" />
        </>
    )
}