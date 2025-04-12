import React, {useState} from 'react'
import PackageCard from '../Cards/PackageCard'

export default function PackagesBody() {
    return (
        <div>
            <PackageCard packageName="Package1"
                         packageType="Housing & Travel"
                         destination="Beirut"
                         duration="4 hours"
                         price="1200"
                         travelDates="August 1, 2025"
                         inclusions="Meals & Wifi"/>

            <PackageCard packageName="Package2"
                         packageType="Housing & Travel"
                         destination="Beirut"
                         duration="4 hours"
                         price="1200"
                         travelDates="August 1, 2025"
                         inclusions="Meals & Wifi"/>

            <PackageCard packageName="Package3"
                         packageType="Housing & Travel"
                         destination="Beirut"
                         duration="4 hours"
                         price="1200"
                         travelDates="August 1, 2025"
                         inclusions="Meals & Wifi"/>
                        
            <PackageCard packageName="Package4"
                         packageType="Housing & Travel"
                         destination="Beirut"
                         duration="4 hours"
                         price="1200"
                         travelDates="August 1, 2025"
                         inclusions="Meals & Wifi"/>
        </div>
    )
}