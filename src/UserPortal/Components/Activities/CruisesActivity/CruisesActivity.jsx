import React from 'react'
import CruiseSidebar from '../../Sidebar/CruiseSidebar'
import CruisesBody from '../../ActivityBodies/CruisesBody'

export default function CruisesActivity() {
    return (
        <>
            <CruiseSidebar></CruiseSidebar>
            <CruisesBody></CruisesBody>
        </>
    )
}