import React, { useEffect, useState } from 'react'
import { BreadCrumb, CartAndWishlistTable } from '../components'

const Wishlist = () => {
  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <div>
      <BreadCrumb small />
      <CartAndWishlistTable wishlist />
    </div>
  )
}

export default Wishlist