import React, { useState } from 'react'
import { BreadCrumb, CartAndWishlistTable } from '../components'

const Wishlist = () => {
  return (
    <div>
      <BreadCrumb small />
      <CartAndWishlistTable wishlist />
    </div>
  )
}

export default Wishlist