import React from 'react'
import Hero1 from '../../Components/Hero-Section/Hero1'
import Hero2 from '../../Components/Hero-Section/Hero2'
import Misson1 from '../../Components/Mission/Misson1'
import Hero3 from '../../Components/Hero-Section/Hero3'
import Connect from '../../Components/Connect/Connect'
// import Faq from '../../Components/Faq/Faq'
import Features from '../../Components/Features/Features'
// import HeroSlider1 from '../../Components/Hero Slider/HeroSlider1'

const Home = () => {
  return (
    <>
    <Hero1/>
    <Hero2/>
    {/* <HeroSlider1/> */}
    <Misson1/>
    <Hero3/>
    <Features/>
    <Connect/>
    {/* <Faq/> */}
    </>
  )
}

export default Home