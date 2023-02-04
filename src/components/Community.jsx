import React from 'react'
import styles from './Community.module.css'
import {FaDiscord, FaInstagram, FaLink, FaTwitter} from 'react-icons/fa'


const Community = () => {
  return (
    <div 
    id='/community'
    className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.top_section}>
                <h1>COMMUNITY</h1>
                <p>
                The Collab0x community is an ecosystem of users, developers, designers, and educators
                </p>
            </div>
            <hr/>
            <div className={styles.middle_section}>
                <h3>Join the conversation</h3>
                
                <div>

Collab0x’s global and vibrant community drives the success of the Protocol. Join the conversation on Discord, Twitter, and Reddit to stay up to date on the latest community news.
                </div>
                    <div>
                    <div>
                       <div 
                       className={styles.social_top}
                       style={{border:'none',width:"90%"}}>
                        <FaDiscord/>
                        Discord
                        
                        </div>
                         
                        <p style={{fontSize:'1rem'}}>Ask questions and engage the Community </p>
                    </div>
                    <div>
                        <div
                        className={styles.social_top}
                        style={{border:'none',width:"90%"}}
                        >
                        <FaTwitter/>
                        Twitter
                        </div>
                        
                        <p  style={{fontSize:'1rem'}}>follow the latest from our Twitter.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div
                            className={styles.social_top}
                            style={{border:'none',width:"90%"}}
                            >
                            <FaInstagram/>
                            Instagram
                            </div>
                        </div>
                    <div>
                            <FaLink/>
                            Linktree</div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Community