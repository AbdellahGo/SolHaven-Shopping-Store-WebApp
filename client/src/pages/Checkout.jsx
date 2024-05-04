import React, { useEffect } from 'react'
import { BreadCrumb, CouponAndLoginArea } from '../components'

const Checkout = () => {
  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <div>
      <BreadCrumb small/>
      <CouponAndLoginArea/>
    </div>
  )
}

export default Checkout