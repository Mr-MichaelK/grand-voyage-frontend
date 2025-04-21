import React, {useState} from "react"
import Navbar from "./Components/Navbar"
import ContractsActivity from "./Components/Activities/ContractsActivity/ContractsActivity"
import PackagesActivity from './Components/Activities/PackagesActivity/PackagesActivity'
import ServiceProvidersActivity from './Components/Activities/ServiceProvidersActivity/ServiceProvidersActivity'
import UsersActivity from './Components/Activities/UsersActivity/UsersActivity'
import './AdminPortal.module.css'

export default function AdminPortal() {
    
    const [currentActivity, setCurrentActivity] = useState("contracts")
    let activity

    if (currentActivity === "contracts") {
        activity = <ContractsActivity></ContractsActivity>
    }
    else if (currentActivity === "packages") {
        activity = <PackagesActivity></PackagesActivity>
    }
    else if (currentActivity === "serviceproviders") {
        activity = <ServiceProvidersActivity></ServiceProvidersActivity>
    }
    else if (currentActivity === "users") {
        activity = <UsersActivity></UsersActivity>
    }
    return (
        <div>
            <Navbar switchActivity={(a) => setCurrentActivity(a)}></Navbar>
            {activity}
        </div>
    )
}