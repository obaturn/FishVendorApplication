import React from 'react';
import styles from './Bottom.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../Assets/AM.png'; // Make sure this path is correct

export default function Bottom() {
    return (
        <div className={styles.footer}>
            <div className={styles.column}>
                <h3>Who We Are</h3>
                <p>We are Movicks Creation</p>
                <img src={logo} alt="Movicks Creation Logo" className={styles.logo} />
            </div>

            <div className={styles.column}>
                <h3>Contact Us</h3>
                <p>Movicks Creation, Ajah Under Bridge, Lagos, Nigeria</p>
                <p>Around Ilaje Road, Ajah, Lagos</p>
                <p>Email: <a href='mailto:akintoyetoluwalase912@gmail.com'>akintoyetoluwalase912@gmail.com</a></p>
                <p>Phone: <a href='tel:+2349031234567'>+2349031234567</a></p>
            </div>

            <div className={styles.column}>
                <h3>Get Connected</h3>
                <div className={styles.socialIcons}>
                    <a href="https://facebook.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://youtube.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </div>
    );
}
