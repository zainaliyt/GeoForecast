import React, { useState } from "react";
import styles from '@/styles/ResponsiveMenu.module.css'


const ResponsiveMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <header className={styles.header}>
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <ul className={styles.menu}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <button
          className={`${styles.menuBtn} ${styles.hideOnDesktop}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Open"} menu
        </button>
      </header>
    );
  };
  
  export default ResponsiveMenu;