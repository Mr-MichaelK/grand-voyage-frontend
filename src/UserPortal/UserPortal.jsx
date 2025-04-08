import React from "react"
import Navbar from "./Components/Navbar"
import style from './UserPortal.module.css'
import HotelSidebar from "./Components/Sidebar/HotelSidebar"
import FlightSidebar from "./Components/Sidebar/FlightSidebar"
import CruiseSidebar from "./Components/Sidebar/CruiseSidebar"
import PackageSidebar from "./Components/Sidebar/PackageSidebar"

export default function UserPortal() {

    return (
        <div>
            <PackageSidebar />
        </div>
    )
}