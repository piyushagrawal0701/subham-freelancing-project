import React from 'react'
import AboutHero1 from '../../Components/Hero-Section/AboutHero1'
import OurClients from '../../Components/Our-Clients/OurClients'
// import OurTeam from '../../Components/Our Team/OurTeam'
// import Faq from '../../Components/Faq/Faq'
import Founder from '../../Components/Founder/Founder'
import AboutHeroWhoWeAre from '../../Components/Hero-Section/AboutHeroWhoWeAre'
import CoreValues from '../../Components/Core Values/CoreValues'
import WhatWeDo from '../../Components/What we Do/WhatWeDo'
import AboutMission from '../../Components/Mission/AboutMission'

const About = () => {
  return (
    <>
        <AboutHero1/>
        <OurClients/>
        <AboutHeroWhoWeAre/>
        <CoreValues/>
        <Founder/>
        <WhatWeDo/>
        <AboutMission/>

        {/* <OurTeam/> */}
        {/* <Faq/> */}
    </>
  )
}

export default About