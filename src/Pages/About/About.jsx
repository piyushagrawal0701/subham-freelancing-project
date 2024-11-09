import React from 'react'
import AboutHero1 from '../../Components/Hero-Section/AboutHero1'
import OurClients from '../../Components/Our-Clients/OurClients'
// import OurTeam from '../../Components/Our Team/OurTeam'
import Faq from '../../Components/Faq/Faq'
import Founder from '../../Components/Founder/Founder'

const About = () => {
  return (
    <>
        <AboutHero1/>
        <OurClients/>
        <Founder/>
        {/* <OurTeam/> */}
        <Faq/>
    </>
  )
}

export default About