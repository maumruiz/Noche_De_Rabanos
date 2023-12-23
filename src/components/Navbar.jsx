import { Link } from 'react-router-dom';

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
                    <h1> Doggo </h1>
                </div>
                <div className={styles.menuItems}>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/aboutUs">Sobre Nosotros</Link></li>
                    <li><Link to="/ourArtwork">PiezLink en 3D</Link></li>
                    <li><Link to="/ourProcess">Nuestro Proceso</Link></li>
                </div>
            </div>
        </div>
    </nav>
  )
}
