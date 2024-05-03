import React, { useEffect, useState } from 'react'
import { container } from '../classes'
import { Link } from 'react-router-dom'
import { FaXmark } from "react-icons/fa6";
import { addToCartWithQuantity, loadCartFromLocalStorage, removeFromCart } from '../redux/reduxSlice/cartSlice'
import { loadWishlistFromLocalStorage, removeFromWishlist } from '../redux/reduxSlice/wishlistSlice'
import { useDispatch, useSelector } from 'react-redux';


const CartAndWishlistTable = ({ wishlist }) => {
    const { addedProductsId } = useSelector(state => state.cart)
    const [tbodyContent, setTbodyContent] = useState(JSON.parse(localStorage.getItem(wishlist ? 'wishlist-products' : 'cart-products')) || [])
    const dispatch = useDispatch()
    const CustomBorder = 'border-t-1 border-r-1 border-border-1'
    const total = tbodyContent.reduce((acc, product) => acc + (parseInt(product.price) * product.quantity), 0);


    const handleRemoveProduct = (id) => {
        if (wishlist) {
            dispatch(removeFromWishlist(id))
            setTbodyContent(JSON.parse(localStorage.getItem('wishlist-products')))
        } else {
            dispatch(removeFromCart(id))
            setTbodyContent(JSON.parse(localStorage.getItem('cart-products')))
        }
    }

    const handleClickIncreaseQuantity = (id, product) => {
        if (product.quantity !== product.availability) {
            dispatch(addToCartWithQuantity({ id, quantity: 1, productData: product }))
            setTbodyContent(JSON.parse(localStorage.getItem('cart-products')))
        }
    }

    const handleClickDecreaseQuantity = (id, product) => {
        if (product.quantity !== 1) {
            dispatch(addToCartWithQuantity({ id, quantity: 1, productData: product, decrease: true }))
            setTbodyContent(JSON.parse(localStorage.getItem('cart-products')))
        }
    }

    const handleAddProductToCart = (id, product) => {
        dispatch(addToCartWithQuantity({ id, quantity: 1, productData: product }))
    }

    const handleClickClearCart = () => {
        alert('Are you sure you want to remove all items ?')
        localStorage.setItem('cart-products', JSON.stringify([]));
        dispatch(loadCartFromLocalStorage());
        setTbodyContent(JSON.parse(localStorage.getItem('cart-products')))
    }

    useEffect(() => {
        if (wishlist) {
            dispatch(loadWishlistFromLocalStorage());
            dispatch(loadCartFromLocalStorage());
        } else {
            dispatch(loadCartFromLocalStorage());
        }
    }, [dispatch])


    useEffect(() => {
        // Update the products data from localStorage or Redux store when tbodyContent changes
        const productsData = JSON.parse(localStorage.getItem(wishlist ? 'wishlist-products' : 'cart-products')) || [];
        setTbodyContent(productsData);
    }, [addedProductsId]);

    return (
        <div className='pb-80'>
            <div className={`${container} px-12`}>
                <div className='px-12'>
                    {tbodyContent.length > 0 ? (
                        <div className='table-content overflow-x-auto'>
                            <table className='bg-white border-1  border-border-1 xl:w-full lg:w-[150%] md:w-[200%] w-[300%] caption-bottom border-collapse '>
                                <thead className='border-[0px]'>
                                    <tr className='border-[0px]'>
                                        <th className='border-b-1 border-r-1 border-border-1'>Images</th>
                                        <th className='border-b-1 border-r-1 border-border-1'>Courses</th>
                                        <th className='border-b-1 border-r-1 border-border-1'>Unit Price</th>
                                        {wishlist ? (
                                            <th className='border-b-1 border-r-1 border-border-1'>Add To Cart</th>
                                        ) : (
                                            <>
                                                <th className='border-b-1 border-r-1 border-border-1'>Quantity</th>
                                                <th className='border-b-1 border-r-1 border-border-1'>Total</th>
                                            </>
                                        )}
                                        <th className='border-b-1 border-r-1 border-border-1'>Remove</th>
                                    </tr>
                                </thead>
                                <tbody className='border-t-[0px] '>
                                    {tbodyContent.sort((a, b) => a.id - b.id).map((product) => {
                                        return (
                                            <tr key={product?.id} className='border-[0px]'>
                                                <td className={`${CustomBorder} py-20 px-10 align-middle w-fit text-16`}>
                                                    <Link to={`shop-details/${product?.id}`}>
                                                        <img src={product.images[0]} alt="product image" className='m-auto w-[125px]' />
                                                    </Link>
                                                </td>
                                                <td className={`${CustomBorder} font-jost text-16 font-medium capitalize text-center`}>
                                                    <Link to={`shop-details/${product?.id}`}>
                                                        {product.title}
                                                    </Link>
                                                </td>
                                                <td className={`${CustomBorder} text-center px-20 py-10 align-middle font-jost text-16`}>
                                                    <span>${product.price}</span>
                                                </td>
                                                {wishlist ? (
                                                    <td className={`${CustomBorder} text-center px-20 py-10 align-middle font-jost text-16`}>
                                                        <button className='bg-heading-secondary text-center text-white font-semibold font-jost rounded-[50px] inline-block text-13 uppercase px-[53px] py-[13px] transition hover:bg-heading-primary'
                                                            onClick={() => handleAddProductToCart(product.id, product)}>
                                                            Add To Cart
                                                        </button>
                                                    </td>
                                                ) : (
                                                    <>
                                                        <td className={`${CustomBorder} text-center px-20 py-10 align-middle font-jost text-16`}>
                                                            <span className='inline-flex items-center justify-center w-[25px] h-[30px] border-1 border-border-1 cursor-pointer text-center text-14'
                                                                onClick={() => handleClickDecreaseQuantity(product.id, product)}>-</span>
                                                            <span className='inline-flex items-center justify-center w-80 rounded-[3px] h-[30px] border-y-1 border-border-1 text-center text-14'>{product.quantity}</span>
                                                            <span className='inline-flex items-center justify-center w-[25px] h-[30px] border-1 border-border-1 cursor-pointer text-center text-14'
                                                                onClick={() => handleClickIncreaseQuantity(product.id, product)}>+</span>
                                                        </td>
                                                        <td className={`${CustomBorder} text-center px-20 py-10 align-middle font-jost text-16`}>
                                                            <span>${product.price * product?.quantity}.00</span>
                                                        </td>
                                                    </>
                                                )}
                                                <td className={`${CustomBorder} text-center px-20 py-10 align-middle font-jost text-16`}>
                                                    <button onClick={() => handleRemoveProduct(product.id)}>
                                                        <FaXmark className='text-16' />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className='pt-[100px] text-center'>
                            <h3 className='mb-8 font-quicksand text-[#2d2a6e] text-30 leading-[1.2] font-normal'>Your {wishlist ? 'wishlist' : 'cart'} is empty</h3>
                            <Link to='/shop' className='py-[1px] px-40 text-white bg-heading-secondary inline-block text-center leading-[35px] uppercase font-semibold rounded-[50px] text-13 transition hover:bg-[#859a00]'>
                                Return to shop
                            </Link>
                        </div>
                    )}
                </div>
                {
                    !wishlist && tbodyContent.length > 0 && (
                        <>
                            <div className='px-12 mt-50 flex md:flex-row flex-col  md:items-center justify-between'>
                                <div className='flex items-baseline flex-wrap'>
                                    <input type="text" className='h-[52px] px-[15px] mr-10 Mmd:mb-[15px] rounded-[8px] font-jost' style={{ border: '1px solid #e6ecf0' }} readOnly value='' placeholder='Coupon code' />
                                    <button className='bg-heading-secondary text-center text-white font-jost font-semibold rounded-[50px] inline-block text-13 uppercase md:px-[53px] px-[30px] md:py-[13px] py-[8px] transition hover:bg-heading-primary'>
                                        Apply Coupon
                                    </button>
                                </div>
                                <div className='Mmd:mt-[15px]'>
                                    <button className='text-white font-jost text-center bg-heading-secondary font-semibold inline-block text-13 uppercase md:px-[53px] px-[30px] md:py-[13px] py-[8px] rounded-[50px] transition hover:bg-heading-primary'
                                        onClick={handleClickClearCart}>
                                        Clear cart
                                    </button>
                                </div>
                            </div>
                            <div className='px-12 flex justify-end'>
                                <div className='md:w-2/5 w-full pt-50'>
                                    <h2 className='text-25 mb-20 capitalize font-quicksand'>
                                        Cart totals
                                    </h2>
                                    <ul className='border-1 border-border-1 mb-20'>
                                        <li className='text-14 font-jost text-link-color py-10 px-30 border-b-1 border-border-1 flex justify-between items-center'>
                                            Subtotal
                                            <span>${total}</span>
                                        </li>
                                        <li className='text-14 font-jost text-link-color py-10 px-30 flex justify-between items-center'>
                                            Total
                                            <span>${total}</span>
                                        </li>
                                    </ul>
                                    <Link to='checkout' className='bg-heading-secondary text-center text-white font-semibold rounded-[50px] inline-block text-13 uppercase md:py-[13px] py-[8px] md:px-[53px] px-[30px] transition hover:bg-heading-primary'>
                                        Proceed to Checkout
                                    </Link>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div >
    )
}

export default CartAndWishlistTable