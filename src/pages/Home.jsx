import React from 'react'
import About from '../components/About'
import Community from '../components/Community'
import Faq from '../components/Faq'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Community/>
        <Faq/>
        <About/>
    </div>
  )
}

export default Home