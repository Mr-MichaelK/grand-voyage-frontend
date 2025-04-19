import React, {useState} from "react"
import Navbar from "./Components/Navbar"
import ContractsActivity from "./Components/Activities/ContractsActivity/ContractsActivity"
import CruisesActivity from './Components/Activities/CruisesActivity/CruisesActivity'
import FlightsActivity from './Components/Activities/FlightsActivity/FlightsActivity'
import PackagesActivity from './Components/Activities/PackagesActivity/PackagesActivity'
import ServiceProvidersActivity from './Components/Activities/ServiceProvidersActivity/ServiceProvidersActivity'
import ServicesActivity from './Components/Activities/ServicesActivity/ServicesActivity'
import UsersActivity from './Components/Activities/UsersActivity/UsersActivity'
import './AdminPortal.module.css'



export default function AdminPortal() {
    
    const [currentActivity, setCurrentActivity] = useState("users")
    let activity

    if (currentActivity === "users") {
        activity = <UsersActivity></UsersActivity>
    }
    else if (currentActivity === "Packages") {
        activity = <PackagesActivity></PackagesActivity>
    }
    else if (currentActivity === "ServiceProviders") {
        activity = <ServiceProvidersActivity></ServiceProvidersActivity>
    }
    else if (currentActivity === "contracts") {
        activity = <ContractsActivity></ContractsActivity>
    }


    return (
        <div>
            <Navbar switchActivity={(a) => setCurrentActivity(a)}></Navbar>
            {activity}
        </div>
    )
}