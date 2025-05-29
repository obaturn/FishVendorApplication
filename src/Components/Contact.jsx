import React from 'react';
import styles from './ContactStyle.module.css';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Welcome to <span>Movicks Creation</span></h1>
        <p>Say hello at <a href="mailto:akintoyetoluwalase912@gmail.com">akintoyetoluwalase912@gmail.com</a></p>
        <p>Need fresh fish? Reach out below or send us a WhatsApp message.</p>

        <div className={styles.icons}>
          <a href="mailto:akintoyetoluwalase912@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/2348104375142?text=Hello%20Movicks%20Creation!%20I%27d%20like%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com/your_instagram_username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

        <footer className={styles.footer}>&copy; 2025 Movicks Creation</footer>
      </div>

      <div className={styles.right}>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
        >
          <input className={styles.formInput} type="text" name="name" placeholder="Name" required />
          <input className={styles.formInput} type="email" name="email" placeholder="Email" required />
          <input className={styles.formInput} type="text" name="subject" placeholder="Subject" />
          <textarea className={styles.formTextarea} name="message" rows="5" placeholder="Message" required></textarea>
          <button className={styles.button} type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
