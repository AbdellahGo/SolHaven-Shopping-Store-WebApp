import React, { useEffect, useState } from 'react'
import { container } from '../classes'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { loadCompareFromLocalStorage, removeFromWCompare } from '../redux/reduxSlice/compareSlice';
import { addToCartWithQuantity, loadCartFromLocalStorage } from '../redux/reduxSlice/cartSlice';

const CompareTable = () => {
    const thTdStyles = 'border-1 border-[#0000001a] p-8 m-[0.5rem]'
    const [compareProducts, setCompareProducts] = useState(JSON.parse(localStorage.getItem('compare-products')) || [])
    const dispatch = useDispatch()

    const handleRemoveProduct = (id) => {
        dispatch(removeFromWCompare(id))
        setCompareProducts(JSON.parse(localStorage.getItem('compare-products') || []))
    }

    const handleAddProductToCart = (id, product) => {
        dispatch(addToCartWithQuantity({ id, quantity: 1, productData: product }))
    }


    useEffect(() => {
        dispatch(loadCompareFromLocalStorage());
        dispatch(loadCartFromLocalStorage());
    }, [dispatch])

    return (
        <div className='py-120'>
            <div className={`${container} px-12`}>
                <div className='px-12 overflow-x-auto text-center font-jost'>
                    {compareProducts.length > 0 ? (
                        <table className='overflow-x-auto caption-bottom border-collapse'>
                            <tbody>
                                <tr>
                                    <th className={`${thTdStyles}`}>Product</th>
                                    {compareProducts.map(({ id, images, title }) => (
                                        <td key={id} className={`${thTdStyles}  min-w-[500px]`}>
                                            <div>
                                                <img src={images[0]} alt="product image" className='m-auto mb-15 h-auto w-200' />
                                                <h4 className='text-18 font-jost text-heading-primary leading-[1.2]'>
                                                    <Link to={`/shop-details/${id}`}>
                                                        {title}
                                                    </Link>
                                                </h4>
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <th className={`${thTdStyles}`}>Description</th>
                                    {compareProducts.map(({ id, productDescription }) => (
                                        <td key={id} className={`${thTdStyles}`}>
                                            <div>
                                                <p className='text-16 font-jost text-link-color leading-[23px]'>
                                                    <Link to={`shop-details/${id}`}>
                                                        {productDescription}
                                                    </Link>
                                                </p>
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <th className={`${thTdStyles}`}>Price</th>
                                    {compareProducts.map(({ id, price, priceDiscount }) => (
                                        <td key={id} className={`${thTdStyles}`}>
                                            <div className='text-14 text-black font-medium'>
                                                <span className='inline-block mr-[7px]'>${price}</span>
                                                <span className='inline-block text-[#8c8c8c] line-through'>${priceDiscount}</span>
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <th className={`${thTdStyles}`}>Add to cart</th>
                                    {compareProducts.map((product) => (
                                        <td key={product.id} className={`${thTdStyles}`}>
                                            <div>
                                                <button className='py-[1px] text-white bg-heading-secondary hover:bg-[#859a00] inline-block text-center leading-[35px] uppercase font-semibold rounded-[50px] text-13 transition px-40'
                                                    onClick={() => handleAddProductToCart(product.id, product)}>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <th className={`${thTdStyles}`}>Rating</th>
                                    {compareProducts.map(({ id, rating }) => (
                                        <td key={id} className={`${thTdStyles}`}>
                                            <div class="flex justify-center items-center text-16 text-heading-primary">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <strong className="mx-2 leading-[18px]">{rating}</strong>
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <th className={`${thTdStyles}`}>Remove</th>
                                    {compareProducts.map(({ id }) => (
                                        <td key={id} className={`${thTdStyles}`}>
                                            <div >
                                                <button className='text-16 text-black'
                                                    onClick={() => handleRemoveProduct(id)}>
                                                    <FaRegTrashAlt />
                                                </button>
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    ) : (
                        <div className='text-center'>
                            <h3 className='mb-8 font-quicksand text-[#2d2a6e] text-30 leading-[1.2] font-normal'>No Compare product</h3>
                            <Link to='/shop' className='py-[1px] px-40 text-white bg-heading-secondary inline-block text-center leading-[35px] uppercase font-semibold rounded-[50px] text-13 transition hover:bg-[#859a00]'>
                                Shop now
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CompareTable