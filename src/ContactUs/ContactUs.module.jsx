import React from "react"
import './ContactUs.css'

export default function ServiceProviderPortal() {
    return (
        <div className="contact-container">
            <div className="contact-card">
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-description">
                    Planning your next adventure? Reach out to us with any questions or travel inquiries!
                </p>
                <form className="contact-form">
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

                <div className="social-section">
                    <h3>Connect with us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <img src="../assets/facebook.jpeg" alt="Facebook" className="social-img" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <img src="../assets/instagram.jpeg" alt="Instagram" className="social-img" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <img src="../assets/twitter.png" alt="Twitter" className="social-img" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <img src="../assets/linkedin.jpeg" alt="LinkedIn" className="social-img" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}