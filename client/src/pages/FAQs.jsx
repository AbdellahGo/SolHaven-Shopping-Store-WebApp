import React, { useEffect } from 'react'
import { BreadCrumb, Faq } from '../components'

const FAQs = () => {

  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <div className='faqs'>
      <BreadCrumb />
      <Faq />
    </div>
  )
}

export default FAQs