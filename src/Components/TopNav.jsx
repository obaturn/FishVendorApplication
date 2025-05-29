import React, { useState } from "react";
import styles from "./TopBar.module.css";

import { FiMenu, FiX } from "react-icons/fi"; // Install react-icons if not already

export default function TopNav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const logoUrl = "https://res.cloudinary.com/dkrpginfm/image/upload/v1748454506/AM_zl7jlo.png"; // Replace with your logo URL if needed

    return (
        <nav className={styles.topNav}>
            <div className={styles.logoContainer}>
                <img
                    src={logoUrl}
                    alt="Logo"
                    className={styles.logo}
                />
            </div>
            <div className={styles.spacer} />
            <div className={styles.navLinks}>
                <button className={styles.navButton}>About Us</button>
                <button className={styles.navButton}>Profile</button>
                <button className={styles.navButton}>Contact</button>
                <button className={styles.navButton}>Sign Up</button>
            </div>
            <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </div>
            {menuOpen && (
                <div className={styles.dropdownMenu}>
                    <button className={styles.navButton} onClick={() => setMenuOpen(false)}>About Us</button>
                    <button className={styles.navButton} onClick={() => setMenuOpen(false)}>Profile</button>
                    <button className={styles.navButton} onClick={() => setMenuOpen(false)}>Contact</button>
                    <button className={styles.navButton} onClick={() => setMenuOpen(false)}>Register</button>
                </div>
            )}
        </nav>
    );
}