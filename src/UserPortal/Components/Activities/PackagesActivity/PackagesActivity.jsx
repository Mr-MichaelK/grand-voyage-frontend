import React from 'react'
import PackageSidebar from '../../Sidebar/PackageSidebar'
import PackagesBody from '../../ActivityBodies/PackagesBody'

export default function PackagesActivity() {
    return (
        <>
            <PackageSidebar></PackageSidebar>
            <PackagesBody></PackagesBody>
        </>
    )
}