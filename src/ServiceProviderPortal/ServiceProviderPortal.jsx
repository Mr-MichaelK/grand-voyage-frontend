import React, {useState} from "react"
import style from './ServiceProviderPortal.module.css'
import Navbar from "./Components/Navbar"
import ContactUsActivity from "./Components/Activities/ContactUsActivity/ContactUsActivity"
import ServicesActivity from "./Components/Activities/ServicesActivity/ServicesActivity"
import FlightsActivity from "./Components/Activities/FlightsActivity/FlightsActivity"
import CruisesActivity from "./Components/Activities/CruisesActivity/CruisesActivity"
import Contract from "./Components/Contract"
import ServiceProviderSidebar from "./Components/Sidebar/ServiceProviderSidebar"
import CruiseBody from "./Components/ActivityBodies/CruiseBody"


export default function ServiceProviderPortal() {
    const [currentActivity, setCurrentActivity] = useState("services")
    let activity

    if (currentActivity === "services") {
        activity = <ServicesActivity></ServicesActivity>
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
            <Navbar switchActivity={(a) => setCurrentActivity(a)}
                    openModal={() => document.getElementById("contract").showModal()}></Navbar>
            <Contract id="contract"></Contract>
            <ServiceProviderSidebar></ServiceProviderSidebar>
            <CruiseBody></CruiseBody>
            {activity}
        </div>
    )
}