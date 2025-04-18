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
    
    const [currentActivity, setCurrentActivity] = useState("aboutUs")
    let activity

    if (currentActivity === "aboutUs") {
        activity = <AboutUsActivity></AboutUsActivity>
    }
    else if (currentActivity === "services") {
        activity = <ServicesActivity></ServicesActivity>
    }
    else if (currentActivity === "packages") {
        activity = <PackagesActivity></PackagesActivity>
    }
    else if (currentActivity === "flights") {
        activity = <FlightsActivity></FlightsActivity>
    }
    else if (currentActivity === "cruises") {
        activity =<CruisesActivity></CruisesActivity>
    }
    else if (currentActivity === "contactUs") {
        activity = <ContactUsActivity></ContactUsActivity>
    }


    return (
        <div>
            <Navbar switchActivity={(a) => setCurrentActivity(a)}></Navbar>
            {activity}
        </div>
    )
}