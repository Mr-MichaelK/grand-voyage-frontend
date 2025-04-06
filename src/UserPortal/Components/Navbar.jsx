import React from 'react'
import style from './Navbar.module.css'
import travelCase from '../../assets/travelCase.svg'
import userProfile from '../../assets/person.svg'
import GV_BonW_img from '../../assets/GV_BonW.jpg'


export default function Navbar() {

    return (
        <div>
            <div className={style.logoContainer}>
                <img src={GV_BonW_img} alt="Company Logo" className={style.logo} />
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
                <img src={travelCase} alt='Travel case SVG' />
                <img src={userProfile} alt='User profile SVG' />
            </div>
        </div>
    )
}