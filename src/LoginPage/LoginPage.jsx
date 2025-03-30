import React from "react"
import './LoginPage.css'
import email_img from '../assets/email.svg'
import password_img from '../assets/password.svg'


export default function LoginPage() {

    return (
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_img} alt="email svg"/>
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="input">
                    <img src={password_img} alt="password svg"/>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            <div className="submitContainer">
                <div className="submit">
                    Login
                </div>
            </div>
            <div className="sign-up">Don't have an account? <span>Sign-up here!</span></div>
        </div>
    )
}