import React from 'react'
import styles from './Navbar.module.css'
import {Link} from 'react-scroll'


const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.leftNav}>
                <Link 
                className={styles.nav_link}
                activeClass="active" to="/community" spy={true} smooth={true} offset={50} duration={500}>Community</Link>
                <Link 
                className={styles.nav_link}
                activeClass="active" to="/faq" spy={true} smooth={true} offset={50} duration={500}>FAQ</Link>
                <Link 
                className={styles.nav_link}
                activeClass="active" to="/about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
                <button className={styles.launch_app}>Launch App</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar