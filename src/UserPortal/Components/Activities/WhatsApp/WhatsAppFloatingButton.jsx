// WhatsAppFloatingButton.jsx
import React from 'react';
import styles from './WhatsAppFloatingButton.module.css';
import { FaWhatsapp } from 'react-icons/fa'; // Install react-icons package first

const WhatsAppFloatingButton = () => {
  const phoneNumber = '1234567890'; 
  const message = 'Hello! I need assistance with your services.'; 

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div className={styles.container}>
      <button 
        className={styles.whatsappButton}
        onClick={openWhatsApp}
        aria-label="Contact us via WhatsApp"
      >
        <FaWhatsapp className={styles.icon} />
      </button>
    </div>
  );
};

export default WhatsAppFloatingButton;