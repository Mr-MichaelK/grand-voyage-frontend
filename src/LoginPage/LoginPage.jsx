import React from "react"
import style from './LoginPage.module.css'
import email_img from '../assets/email.svg'
import password_img from '../assets/password.svg'
import GV_BonW_img from '../assets/GV_BonW.jpg'


export default function LoginPage(props) {

    function getInputs() {
        return {
            email: getEmail(),
            password: getPassword()
        }
    }

    function isValidInputs() {
        return setEmailError()
    }

    function getEmail() {
        return document.getElementById("emailInput").value
    }

    function getPassword() {
        return document.getElementById("passwordInput").value
    }

    function isUser() {
        // if email and pass in user table return true
        /*
        function isUser(email, password) {
            // change api call
            fetch('http://localhost:8080/api/isUser', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ email, password })
            })
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json(); // expecting boolean true/false
            })
            .then(isValid => {
              if (isValid) {
                localStorage.setItem('email', email); // Store email in local storage
                localStorage.setItem('password', password); // Store password in local storage
              } else {
                console.log('Invalid email or password.');
              }
              return isValid; // Return the boolean value
            })
            .catch(error => {
              console.error('Error checking user:', error.message);
            });
          } */
        return false // temp value
    }

    function isServiceProvider() {
        // if email and pass in service provider table return true
        /*
        function isUser(email, password) {
            // change api call
            fetch('http://localhost:8080/api/isUser', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ email, password })
            })
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json(); // expecting boolean true/false
            })
            .then(isValid => {
              if (isValid) {
                localStorage.setItem('email', email); // Store email in local storage
                localStorage.setItem('password', password); // Store password in local storage
              } else {
                console.log('Invalid email or password.');
              }
              return isValid; // Return the boolean value
            })
            .catch(error => {
              console.error('Error checking user:', error.message);
            });
          } */
        return true
    }

    function setEmailError() {
        if (!getEmail()) {
            document.getElementById("emailInput").setCustomValidity("Please enter an email!")
            return false
        }
        else if (!getPassword()) {
            document.getElementById("emailInput").setCustomValidity("")
            document.getElementById("passwordInput").setCustomValidity("Please enter a password!")
            return false
        }
        else if (!isUser() && !isServiceProvider()) {
            document.getElementById("passwordInput").setCustomValidity("")
            document.getElementById("emailInput").setCustomValidity("Incorrect email or password!")
            return false
        }
        document.getElementById("emailInput").setCustomValidity("")
        document.getElementById("passwordInput").setCustomValidity("")
        return true
    }

    function logUser() {
        if (!isValidInputs()) {
            return
        }
        
        if (isUser()) {
            // go to user portal
            props.goToUserPortal()
        }
        else if (isServiceProvider()) {
            // go to sp portal
            props.goToServiceProviderPortal()
        }
    }

    return (
        <div>
            <div className={style.logoHeader}>
                <img src={GV_BonW_img} alt="Company Logo" className={style.logo} />
                <h1 className={style.companyName}>Grand Voyage</h1>
            </div>

            <form className={style.container}>
                <div className={style.header}>
                    <div className={style.text}>Login</div>
                    <div className={style.underline}></div>
                </div>
                <div className={style.inputs}>
                    <div className={style.input}>
                        <img src={email_img} alt="email svg" />
                        <input type="email" placeholder="Email" id="emailInput" required/>
                    </div>
                    <div className={style.input}>
                        <img src={password_img} alt="password svg" />
                        <input type="password" placeholder="Password" id="passwordInput" required/>
                    </div>
                </div>
                <div className={style.submitContainer}>
                    <button type="submit" onClick={logUser} className={style.submit}>
                        Login
                    </button>
                </div>
                <div className={style.signUp}>Don't have an account? <span onClick={props.switchToSignUp}>Sign-up here!</span></div>
            </form>
        </div>
    )
}