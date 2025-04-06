import React from 'react'
import style from './Navbar.module.css'
import travelCase from '../../assets/travelCase.svg'
import userProfile from '../../assets/person.svg'
import GV_WonT_L_img from '../../assets/GV_WonT_L.png'


export default function Navbar() {

    return (
        <div className={style.navbar}>
            <div className={style.logoContainer}>
                <img src={GV_WonT_L_img} alt="Company Logo" className={style.logo} />
                <h1 className={style.companyName}>Grand Voyage</h1>
            </div>
            <div className={style.buttonContainer}>
                <button>About Us</button>
                <button>Services</button>
                <button>Packages</button>
                <button>Flights</button>
                <button>Cruises</button>
                <button>Contact Us</button>
            </div>
            <div className={style.profileContainer}>
                <div className={style.profileIcon}>
                    <img className={style.travelCase} src={travelCase} alt='Travel case SVG' />
                    <span className={style.tooltip} data-tooltip="My Bookings">My Bookings</span>
                </div>
                <div className={style.profileIcon}>
                    <img className={style.userProfile} src={userProfile} alt='User profile SVG' />
                    <span className={style.tooltip} data-tooltip="My Account">My Account</span>
                </div>
            </div>
        </div>
    )
}