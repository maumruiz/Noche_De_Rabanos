import React from 'react'

import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav>
        <div className={styles.navbar}>
            <div className={styles.navContainer}>
                <input className={styles.checkbox} type="checkbox" name="" id="" />
                <div className={styles.hamburgerLines}>
                    <span className={`${styles.line} ${styles.line1}`}></span>
                    <span className={`${styles.line} ${styles.line2}`}></span>
                    <span className={`${styles.line} ${styles.line3}`}></span>
                </div>
                <div className={styles.logo}>
                    <h1>Doggo</h1>
                </div>
                <div className={styles.menuItems}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">blogs</a></li>
                    <li><a href="#">portfolio</a></li>
                    <li><a href="#">contact</a></li>
                </div>
            </div>
        </div>
    </nav>
  )
}
