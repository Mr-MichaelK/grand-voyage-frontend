import React from "react"
import style from './LoginPage.module.css'
import email_img from '../assets/email.svg'
import password_img from '../assets/password.svg'
import GV_BonW_img from '../assets/GV_BonW.jpg'


export default function LoginPage(props) {

    return (
        <div>
            <div className={style.logoHeader}>
                <img src={GV_BonW_img} alt="Company Logo" className={style.logo} />
                <h1 className={style.companyName}>Grand Voyage</h1>
            </div>

            <div className={style.container}>
                <div className={style.header}>
                    <div className={style.text}>Login</div>
                    <div className={style.underline}></div>
                </div>
                <div className={style.inputs}>
                    <div className={style.input}>
                        <img src={email_img} alt="email svg" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className={style.input}>
                        <img src={password_img} alt="password svg" />
                        <input type="password" placeholder="Password" />
                    </div>
                </div>
                <div className={style.submitContainer}>
                    <div className={style.submit}>
                        Login
                    </div>
                </div>
                <div className={style.signUp}>Don't have an account? <span onClick={props.switchToSignUp}>Sign-up here!</span></div>
            </div>
        </div>
    )
}