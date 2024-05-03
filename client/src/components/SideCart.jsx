import { Link } from 'react-router-dom';
import { cartSlidToLeft, cartSlidToRight } from '../classes'
import { FaXmark } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/reduxSlice/cartSlice';
import { emptyCart } from '../assets';



const SideCart = ({ toggleCart, setToggleCart }) => {
  const products = JSON.parse(localStorage.getItem('cart-products')) || []
  const buttonStyle = 'block rounded-[30px] text-center leading-[1.5] p-14 font-semibold text-13 uppercase border-1 border-heading-secondary'
  const total = products.reduce((acc, product) => acc + (parseInt(product.price) * product.quantity), 0);

  const dispatch = useDispatch()

  const handleClickRemoveProduct = (id) => {
    dispatch(removeFromCart(id))
  }

  return (
    <div className={`fixed bg-white top-0 right-0 sm:w-[380px] w-full z-10 h-[100vh] transition-1 ${toggleCart ? cartSlidToLeft : cartSlidToRight}`}>
      <div className='px-[30px] py-16 bg-gray-1 mb-20 flex items-center justify-between'>
        <h4 className='font-quicksand font-bold text-14 text-heading-primary uppercase'>Your Cart</h4>
        <button className='text-heading-secondary rounded-[4px] hover:bg-heading-secondary hover:text-white transition h-[35px] flex justify-center items-center w-[35px]' style={{ border: '1px solid' }}
          onClick={() => setToggleCart(false)}>
          <FaXmark fontSize={18} />
        </button>
      </div>
      {products.length > 0 ? (
        <div className='px-[30px] justify-between flex items-stretch flex-col' style={{ height: 'calc(100vh - 84px)' }}>
          <ul className='overflow-y-scroll overscroll-y-contain' style={{ height: 'calc(100vh - 380px)', scrollbarWidth: 'none' }}>
            {products.map(({ id, price, title, images, quantity }) => (
              <li key={id} className='py-[15px] border-b-1 border-border-1 flex items-center Msm:flex-wrap'>
                <div className='mr-20 relative'>
                  <img src={images[0]} alt="product image" className='w-[70px]' />
                  <div className='absolute text-heading-secondary p-[2px] left-0 top-0 cursor-pointer border-[2px] rounded-full'
                    onClick={() => handleClickRemoveProduct(id)}>
                    <FaXmark fontSize={10} />
                  </div>
                </div>
                <div className='font-jost'>
                  <span className='text-14 text-heading-primary'>{title}</span>
                  <div className='font-semibold text-12 text-heading-primary'>
                    <span>{quantity} x</span>
                    <span className='text-heading-secondary'> ${(quantity) * parseInt(price)}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className='mb-[30px]'>
            <div className='font-jost font-semibold text-14 uppercase text-heading-primary mb-[25px] pt-[25px] border-t-1 border-border-1 flex items-center justify-between'>
              <span>SubTotal:</span>
              <span className='text-18 font-bold'>${total}</span>
            </div>
            <div>
              <Link to='cart' className={`text-heading-secondary hover:bg-heading-secondary hover:text-white transition ${buttonStyle} mb-10`}
                onClick={() => setToggleCart(false)}>
                View Cart
              </Link>
              <Link to='checkout' className={`text-white hover:bg-[#859a00] bg-heading-secondary transition ${buttonStyle}`}
                onClick={() => setToggleCart(false)}>
                Checkout
              </Link>
            </div>
          </div>
          <div className='font-jost py-[13px] px-[30px] bg-theme-2 text-center'>
            <span className='text-white text-14'>Free shipping for orders <b className='font-semibold uppercase'>under 10km</b> </span>
          </div>
        </div>
      ) : (
        <div className='pt-[100px] text-center px-40'>
          <img src={emptyCart} alt="emptyCart image" className='w-full' />
          <p className='font-jost text-16 text-link-color mb-[15px] leading-[23px]'>Your Cart is empty</p>
          <Link to='shop' className='py-[1px] px-[40px] bg-heading-secondary inline-block text-center leading-[35px] uppercase font-semibold font-jost rounded-[50px] text-13 transition hover:bg-[#859a00] text-white'
            onClick={() => setToggleCart(false)}>
            Go To Shop
          </Link>
        </div>
      )}
    </div>
  )
}

export default SideCart