import React from 'react'
import PackageSidebar from '../../Sidebar/PackageSidebar'
import PackagesBody from '../../ActivityBodies/PackagesBody'
import Billing from '../BillingActivity/BillingActivity'

export default function PackagesActivity() {
    return (
        <div>
            <PackageSidebar></PackageSidebar>
            <PackagesBody></PackagesBody>
            <Billing id="billingModal" />
        </div>
    )
}