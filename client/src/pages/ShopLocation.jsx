import React, { useEffect } from 'react'
import { BreadCrumb, Location } from '../components'

const ShopLocation = () => {
  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <div>
      <BreadCrumb/>
      <Location/>
    </div>
  )
}

export default ShopLocation