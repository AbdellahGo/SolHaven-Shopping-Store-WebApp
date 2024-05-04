import React, { useState } from 'react'
import { useGetProductDetailsQuery } from '../redux/RTKApis/productsApi'

import { IoMdStarOutline } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlLayers } from "react-icons/sl";
import { GoShareAndroid } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { addToCartWithQuantity } from '../redux/reduxSlice/cartSlice';
import { productsBar } from '../displayedData/data';
import Loader from './Loader';



const productDetailsCard = ({ notModal, productId, productModal, handleClickAddToWishlist, handleClickAddToCompare, productsListApi }) => {
    const { data, isLoading } = useGetProductDetailsQuery(productId)
    const [activeImage, setActiveImage] = useState(0)
    const [selectColor, setSelectColor] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    const { addedWishlistProductsId } = useSelector((state) => state.wishlist)
    const { addedCompareProductsId } = useSelector((state) => state.compare)
    const product = data?.product || productsBar.productsList[productId - 1]
    const listElementStyle = 'relative text-[#455770] font-jost text-13 leading-[19px] pr-20 mr-[15px]'
    const beforeElementStyle = 'sm:before:absolute sm:before:right-0 sm:before:w-[1px] sm:before:h-[12px] sm:before:bg-[#e6ecf0] sm:before:top-[50%] sm:before:translate-y-[-50%]'
    const stars = []
    const listElementClasses = 'font-jost text-15 leading-[22px] text-link-color mb-[5px]'
    const verticalListStyle = 'font-jost font-medium text-12 leading-[17px] uppercase text-heading-primary mr-[25px] mb-[5px]'


    for (let i = 0; i < 5; i++) {
        stars.push(<IoMdStarOutline key={i} className='text-yellow-700 mr-[-4px]' fontSize={14} />)
    }

    const handleClickAddToCartWithQuantity = (id, quantity, productData) => {
        dispatch(addToCartWithQuantity({ id, quantity, productData }))
    }

    return (
        <div className={`w-full ${notModal ? '' : 'flex justify-center lg:items-center items-start h-[100vh] overflow-y-auto'}`}>
            <div className={`${notModal ? '' : 'relative z-[99999999] xl:w-[1180px] lg:w-[980px] md:w-[680px] sm:[480px] w-full Mlg:mt-40 Mlg:mb-40 modal'} ${notModal ? '' : (productModal ? 'modal-slide-to-bottom' : 'modal-slide-to-top')}`}>
                <div className='bg-white rounded-[10px] xxl:pt-[35px] xxl:px-[40px] xxl:pb-[45px] pt-20 px-20 pb-16'>
                    {!isLoading ? (
                        <>
                            <div className='title pb-[25px] border-b-1 border-border-1 '>
                                <h2 className='font-jost font-medium text-24 leading-[35px] text-heading-primary'>
                                    {product?.title}
                                </h2>
                                <ul className='mt-8 flex Msm:flex-wrap items-center'>
                                    <li className={`${listElementStyle} ${beforeElementStyle} `}>
                                        Brands: <span className='text-heading-secondary font-medium'>{product?.brands}</span>
                                    </li>
                                    <li className={`${listElementStyle} ${beforeElementStyle} flex items-center`}>
                                        {stars.map((icon) => (
                                            icon
                                        ))}
                                        <span className='block text-blue-gray-600 ml-[5px] uppercase'>{product?.reviewsNum}review</span>
                                    </li>
                                    <li className={`${listElementStyle} pr-0 mr-0`}>SKU: <span className='text-heading-secondary font-medium'>{product?.SKU}</span></li>
                                </ul>
                            </div>
                            <div className='mt-[25px] flex lg:flex-row flex-col items-start'>
                                <div className='flex-1 px-[12px]'>
                                    <img src={product?.images[activeImage]} alt="product image" className='w-full object-cover' />
                                    <nav className='flex items-center justify-center'>
                                        {product?.images.length > 1 && product?.images.map((img, i) => (
                                            <div key={i} className={`${activeImage === i ? 'border-heading-secondary' : 'border-border-1'} border-1 mx-[5px] rounded-[5px]`}
                                                onClick={() => setActiveImage(i)}>
                                                <img src={img} alt="product image" className='w-60 h-60 object-cover' />
                                            </div>
                                        ))}
                                    </nav>
                                </div>
                                <div className='flex-1 px-[12px]'>
                                    <div className='pb-[25px] border-b-1 border-border-1 mb-30'>
                                        <h5 className='mb-8 font-jost font-medium text-24 leading-[35px] text-theme-2'>
                                            ${product?.price}
                                        </h5>
                                        <ul>
                                            {product?.specifications.map((item, i) => (
                                                <li key={i} className='font-jost text-14 leading-[22px] text-link-color '>
                                                    <span className='inline-block h-[5px] w-[5px] bg-link-color mr-18 rounded-full' />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='mb-[25px]'>
                                        <h4 className='mb-8 font-jost font-medium text-12 leading-[17px] uppercase text-theme-1'>
                                            color: select A color</h4>
                                        <span className={`cursor-pointer flex justify-center items-center ${selectColor ? 'p-[6px] w-fit' : 'w-[25px] h-[25px]'} rounded-full`}
                                            style={{ backgroundColor: `${product?.color}`, boxShadow: selectColor && `0 0 6px 0px ${product?.color}` }}
                                            onClick={() => setSelectColor((prev) => !prev)}>
                                            {selectColor && (
                                                <IoMdCheckmark color='white' fontSize={14} />
                                            )}
                                        </span>
                                    </div>
                                    <div className='pb-20 border-b-1 border-border-1 mb-30'>
                                        <div className='mb-[15px] flex items-center flex-wrap gap-10'>
                                            <b className='font-jost font-medium text-12 leading-[17px] uppercase text-heading-primary'>Qty:</b>
                                            <div className='flex items-center bg-blue-gray-100 rounded-[30px] border-1 border-border-1 py-10 px-30 text-link-color cursor-pointer'>
                                                <span onClick={() => setQuantity(prev => prev === 1 ? prev : prev - 1)}><FaMinus /></span>
                                                <span className='bg-blue-gray-100 w-[25px] text-center text-16 font-semibold text-link-color'>{quantity}</span>
                                                <span onClick={() => setQuantity(prev => prev === product.availability ? prev : prev + 1)}><FaPlus /></span>
                                            </div>
                                            <button className='flex-1 uppercase text-white hover:bg-[#859a00] transition bg-heading-secondary py-[13px] px-30 font-jost font-semibold text-13 text-center rounded-[30px]'
                                                onClick={() => handleClickAddToCartWithQuantity(productId, quantity, product)}>
                                                Add To Cart
                                            </button>
                                        </div>
                                        <ul className='flex items-center flex-wrap'>
                                            <li className={`${verticalListStyle}`}>
                                                <button href="#" className='flex items-center gap-[5px]' onClick={() => handleClickAddToWishlist(productId, productsListApi)}>
                                                    <IoMdHeartEmpty fontSize={14} color={`${addedWishlistProductsId.includes(productId) ? '#96ae00' : ''}`} />
                                                    Add To Wishlist
                                                </button>
                                            </li>
                                            <li className={`${verticalListStyle}`}>
                                                <button href="#" className='flex items-center gap-[5px]' onClick={() => handleClickAddToCompare(productId, productsListApi)}>
                                                    <SlLayers fontSize={14} color={`${addedCompareProductsId.includes(productId) ? '#96ae00' : ''}`} />
                                                    Add To Compare
                                                </button>
                                            </li>
                                            <li className={`${verticalListStyle} mr-0`}>
                                                <a href="https://github.com/AbdellahGo" target='_blank' className='flex items-center gap-[5px]'>
                                                    <GoShareAndroid fontSize={14} />
                                                    Share
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='mb-[25px]'>
                                        <ul>
                                            <li className={`${listElementClasses}`}>
                                                Availability: <span className='text-[#00b853]'>{product?.availability} In stock</span>
                                            </li>
                                            <li className={`${listElementClasses}`}>
                                                Categories: <span>{product?.categories}</span>
                                            </li>
                                            <li className={`${listElementClasses}`}>
                                                Categories: <span>{product?.tags}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='flex flex-col justify-center items-center bg-gray-8 rounded-[5px] p-20'>
                                        <img src={product?.paymentImage} alt="paymentImage" className='max-w-full' />
                                        <span className='block mt-[5px] text-center'>
                                            Guarantee safe & Secure checkout</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (notModal ? '' : <Loader />)}
                </div>
            </div>
        </div>
    )
}

export default productDetailsCard