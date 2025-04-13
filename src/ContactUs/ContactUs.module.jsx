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
            </div>
        </div>
    )
}