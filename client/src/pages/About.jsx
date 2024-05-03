import React from 'react'
import { AboutBanner, AboutVideo, ChooseUs, HelpYou, OurClients, Steps, WeAreDifferent } from '../components'

const About = () => {
  return (
    <div className='about'>
      <AboutBanner />
      <HelpYou/>
      <Steps/>
      <ChooseUs/>
      <AboutVideo/>
      <WeAreDifferent/>
      <OurClients/>
    </div>
  )
}

export default About