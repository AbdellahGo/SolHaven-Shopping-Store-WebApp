import React, { useEffect } from 'react'
import { BreadCrumb, ContactAndLocation, ContactMapForm } from '../components'

const Contact = () => {
  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <div>
      <BreadCrumb />
      <ContactAndLocation />
      <ContactMapForm />
    </div>
  )
}

export default Contact