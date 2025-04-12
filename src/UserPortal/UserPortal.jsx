import React from "react"
import Navbar from "./Components/Navbar"
import style from './UserPortal.module.css'
import HotelSidebar from "./Components/Sidebar/HotelSidebar"
import FlightSidebar from "./Components/Sidebar/FlightSidebar"
import CruiseSidebar from "./Components/Sidebar/CruiseSidebar"
import PackageSidebar from "./Components/Sidebar/PackageSidebar"
import HotelCard from "./Components/Cards/HotelCard"
import FlightCard from "./Components/Cards/FlightCard"
import CruiseCard from "./Components/Cards/CruiseCard"
import PackageCard from "./Components/Cards/PackageCard"
import AboutUsPage from "./Components/AboutUsActivity"

export default function UserPortal() {

    return (
        <div>
            <AboutUsPage />
        </div>
    )
}