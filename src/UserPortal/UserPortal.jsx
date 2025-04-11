import React, {useState} from "react"
import Navbar from "./Components/Navbar"
import AboutUsActivity from './Components/Activities/AboutUsActivity/AboutUsActivity'
import ContactUsActivity from './Components/Activities/ContactUsActivity/ContactUsActivity'
import CruisesActivity from './Components/Activities/CruisesActivity/CruisesActivity'
import FlightsActivity from './Components/Activities/FlightsActivity/FlightsActivity'
import PackagesActivity from './Components/Activities/PackagesActivity/PackagesActivity'
import PreviousBookingsActivity from './Components/Activities/PreviousBookingsActivity/PreviousBookingsActivity'
import ProfileActivity from './Components/Activities/ProfileActivity/ProfileActivity'
import ServicesActivity from './Components/Activities/ServicesActivity/ServicesActivity'
import style from './UserPortal.module.css'
import HotelSidebar from "./Components/Sidebar/HotelSidebar"
import FlightSidebar from "./Components/Sidebar/FlightSidebar"
import CruiseSidebar from "./Components/Sidebar/CruiseSidebar"
import PackageSidebar from "./Components/Sidebar/PackageSidebar"
import HotelCard from "./Components/Cards/HotelCard"
import FlightCard from "./Components/Cards/FlightCard"
import CruiseCard from "./Components/Cards/CruiseCard"
import PackageCard from "./Components/Cards/PackageCard"

export default function UserPortal() {
    const [currentActivity, setCurrentActivity] = useState("packages")
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
    else if (currentActivity === "previousBookings") {
        activity = <PreviousBookingsActivity></PreviousBookingsActivity>
    }
    else if (currentActivity === "profile") {
        activity = <ProfileActivity></ProfileActivity>
    }

    return (
        <div>
            <PackageCard />
            <Navbar switchActivity={(a) => setCurrentActivity(a)}></Navbar>
            {activity}
        </div>
    )
}