import React, { useEffect } from 'react'
import { AboutBanner, AboutVideo, ChooseUs, HelpYou, OurClients, Steps, WeAreDifferent } from '../components'

const About = () => {
  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [])
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