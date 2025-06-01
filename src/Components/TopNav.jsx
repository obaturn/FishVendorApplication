import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🆕
import styles from "./TopBar.module.css";
import { FiMenu, FiX } from "react-icons/fi";

export default function TopNav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate(); // 🆕

    const logoUrl = "https://res.cloudinary.com/dkrpginfm/image/upload/v1748454506/AM_zl7jlo.png";

    return (
        <nav className={styles.topNav}>
            <div className={styles.logoContainer}>
                <img src={logoUrl} alt="Logo" className={styles.logo} />
            </div>
            <div className={styles.spacer} />
            <div className={styles.navLinks}>
                <button className={styles.navButton} onClick={() => navigate('/about')}>About Us</button>
                <button className={styles.navButton}>Profile</button>
                <button className={styles.navButton} onClick={() => navigate('/contact')}>Contact</button> {/* 🆕 */}
                <button className={styles.navButton}>Sign Up</button>
            </div>
            <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </div>
            {menuOpen && (
                <div className={styles.dropdownMenu}>
                    <button className={styles.navButton} onClick={() => { navigate('/about'); setMenuOpen(false); }}>About Us</button> 
                    <button className={styles.navButton} onClick={() => setMenuOpen(false)}>Profile</button>
                    <button className={styles.navButton} onClick={() => { navigate('/contact'); setMenuOpen(false); }}>Contact</button> {/* 🆕 */}
                    <button className={styles.navButton} onClick={() => setMenuOpen(false)}>Register</button>
                </div>
            )}
        </nav>
    );
}
