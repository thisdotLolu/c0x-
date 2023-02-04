import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.container}
    
    >
        <div 
        id='about'
        className={styles.inner}>
        <h1>ABOUT</h1>
        <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
        </h2>
        </div>
    </div>
  )
}

export default About