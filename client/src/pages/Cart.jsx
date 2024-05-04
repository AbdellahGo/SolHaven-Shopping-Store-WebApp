import { useEffect } from 'react'
import { BreadCrumb, CartAndWishlistTable } from '../components'


const Cart = () => {
  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <div>
      <BreadCrumb small />
      <CartAndWishlistTable/>
    </div>
  )
}

export default Cart