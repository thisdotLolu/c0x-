import React, { useCallback } from 'react'
import styles from './Hero.module.css'
import {loadFull} from 'tsparticles';
import Particles from 'react-particles';


const Hero = () => {
    const particlesInit = useCallback(async engine =>{
        await loadFull(engine);
    },[])

    const particlesLoaded =useCallback(async engine=>{
        console.log(engine);
    })
  return (
  <div className={styles.container}>
            
        <Particles
        style={{position:"relative",height:'100vh'}}
        // style={{height:'50vh'}}
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        
        options={{
            fullScreen: { 
                enable: false,
                zIndex:0        
            },
            background:{
                color:{
                    value:'#17171A'
                },
            },
            fpsLimit:120,
            interactivity:{
                events:{
                    onClick:{
                        enable: true,
                        mode:'push'
                    },
                    onHover:{
                        enable: true,
                        mode:'attract'
                    },
                    mode:{
                        push:{
                            quantity:4
                        },
                        repulse:{
                            duration:0.4,
                            distance:100
                        }
                    }
                }
            },
            particles:{
                color:{
                    value:'#fff'
                },
                links:{
                    enable:true,
                    width:0.2,
                    opacity:0.5
                },
                move:{
                    enable:true,
                    direction:'none',
                    outModes:{
                        default:"bounce"
                    },
                    random:false,
                    speed:0.2,
                    straight:false
                },
                collisions:{
                    enable:true,
                },
                number:{
                    value:50,
                    density:{
                        enable:true,
                        area:400
                    }
                },
                shape:{
                    type:'circle'
                },
                size:{
                    min:1,
                    max:5
                }
            },
            detectRetina:true
        }}
        />
        <div
        className={styles.header}
        
        >
        <h1>CollabOx</h1>
        <div className={styles.hero_subtext}>
            <p>collaborate.</p>
            <p>trustlessly.</p>
            <p>onChain.</p>
        </div>
        <button className={styles.launch_app}>Launch App</button>
        </div>
        
        
  </div>
    
  )
}

export default Hero