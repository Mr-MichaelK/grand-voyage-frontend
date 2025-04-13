import React from 'react'
import style from './ContactUsActivity.module.css'
import twitterIcon from '../../../../assets/twitter.png'
import InstagramIcon from '../../../../assets/instagram.jpeg'
import FacebookIcon from '../../../../assets/facebook.jpeg'
import LinkedInIcon from '../../../../assets/linkedIn.jpeg'

export default function ContactUsActivity() {
    return (
        <div className={style.contactContainer}>
            <div className={style.contactCard}>
                <h1 className={style.contactTitle}>Contact Us</h1>
                <p className={style.contactDescription}>
                    Planning your next adventure? Reach out to us with any questions or travel inquiries!
                </p>
                <form className={style.contactForm}>
                    <label>
                        Full Name
                        <input type="text" placeholder="Your Name" required />
                    </label>
                    <label>
                        Email Address
                        <input type="email" placeholder="Your Email" required />
                    </label>
                    <label>
                        Message
                        <textarea placeholder="Write your message here..." rows="5" required />
                    </label>
                    <button type="submit">Send Message</button>
                </form>

                <div className={style.socialSection}>
                    <h3>Connect with us</h3>
                    <div className={style.socialIcons}>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <img src={FacebookIcon} alt="Facebook" className={style.socialImg} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <img src={InstagramIcon} alt="Instagram" className={style.socialImg} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <img src={twitterIcon} alt="Twitter" className={style.socialImg} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <img src={LinkedInIcon} alt="LinkedIn" className={style.socialImg} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}