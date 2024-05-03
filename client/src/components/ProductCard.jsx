import React, { Fragment, useState } from 'react'

import { Link } from 'react-router-dom'
import { IoIosStar } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { IoEyeOutline } from "react-icons/io5";
import { SlLayers } from "react-icons/sl";
import { paragraphStyle } from '../classes';

const ProductCard = ({ content, handleClickIcon, handleClickAddToCart, addedWishlistProductsId, addedCompareProductsId, addedProductsId, toggleGrid }) => {
    const [showMoreInfo, setShowMoreInfo] = useState(null)

    const iconsList = [<IoMdHeartEmpty fontSize={12} />, <SlLayers fontSize={12} />, <IoEyeOutline fontSize={12} />]

    const ratingCalc = (n) => {
        const ratingStars = []
        for (let i = 0; i < 5; i++) {
            if (i < n) {
                ratingStars.push(<IoIosStar fontSize={16} color='#ffbc0b' />)
            } else {
                ratingStars.push(<IoIosStar fontSize={16} color='#ccc' />)
            }
        }

        return ratingStars
    }


    return (
        <>
            {content?.map((item) => (
                <div key={item.id} >
                    {toggleGrid !== 1 ? (
                        <div className={`h-full relative product bg-white rounded-[10px] border-1 border-white overflow-hidden`} >
                            <div className='h-[60%] relative p-20 overflow-hidden rounded-[10px]'>
                                {item.discount && (
                                    <span className='z-10 block discount absolute top-20 left-20 rounded-[2px] font-jost font-medium text-12 py-[3px] px-[9px] text-white bg-theme-3'>
                                        {item.discount}
                                    </span>
                                )}
                                <Link to={`/shop-details/${item.id}`}>
                                    <img src={item.images[0]} alt={item.title} className='w-full h-full object-cover' />
                                    {item.images[1] &&
                                        <img src={item.images[1]} alt={item.title} className='absolute top-[0] left-[0] w-full h-full transition-all opacity-0  image-hover' />
                                    }
                                </Link>
                                <div className='shopping flex flex-col absolute top-[17px] right-[17px]'>
                                    {iconsList.map((icon, i) => (
                                        <div key={i} className={` cursor-pointer invisible opacity-0 z-10 mb-[5px] rounded-full 
                                    overflow-hidden border-1  border-border-1 h-[32px] w-[32px] flex justify-center items-center
                                    ${i === 0 && (addedWishlistProductsId.includes(item.id) ? 'border-heading-secondary bg-heading-secondary text-white' : 'text-black bg-white')}
                                    ${i === 1 && (addedCompareProductsId.includes(item.id) ? 'border-heading-secondary bg-heading-secondary text-white' : 'text-black bg-white')} `}
                                            onClick={() => handleClickIcon(i, item.id, content)}>
                                            {icon}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={`h-[40%] content overflow-hidden  relative border-1 border-white bg-gray-8 pt-[11px] pr-[22px] pl-[18px] pb-35 rounded-[10px]`}>
                                <span className='inline-block text-13 text-blue-gray-600 font-jost'>
                                    <Link to={`/shop-details/${item.id}`} className='hover:underline'>{item.categories}</Link>,
                                    <Link to={`/shop-details/${item.id}`} className='hover:underline'>{item.tags}</Link>
                                </span>
                                <h4 className='font-jost text-16 text-heading-primary hover:text-heading-secondary transition text-ellipsis line-clamp-2 mb-[5px]'>
                                    <Link to={`/shop-details/${item.id}`} className='block'>
                                        {item.title}
                                    </Link>
                                </h4>
                                <div className='rating mb-[5px] flex gap-[2px]'>
                                    {ratingCalc(item.rating).map((star, i) => (
                                        <Fragment key={i}>
                                            {star}
                                        </Fragment>
                                    ))}
                                </div>
                                <div className='price font-jost'>
                                    <span className='text-theme-2 text-18 font-medium'>${item.price}</span>
                                    {item.priceDiscount && (
                                        <del className=' ml-[5px] text-14'>${item.priceDiscount}</del>
                                    )}
                                </div>
                                <div className={`toggle-arrow absolute sm:bottom-[10px] bottom-[30] left-[50%] translate-x-[-50%] z-10 w-[32px] h-[32px] flex justify-center items-center rounded-full mx-auto cursor-pointer
                                        mt-[5px] border-1 border-border-1  text-white bg-heading-secondary transition opacity-0
                                        ${showMoreInfo === item.id ? 'rotate-180' : ''}`}
                                    onClick={() => setShowMoreInfo((prev) => prev !== item.id ? item.id : '')}>
                                    <IoIosArrowUp fontSize={16} />
                                </div>
                                <div className={`${showMoreInfo === item.id ? 'more-info' : ''} h-full transition-all bg-gray-8 rounded-[10px] absolute w-full pt-[11px] pr-[22px] pl-[18px] pb-20 left-0 top-[100%]`}>
                                    <div className='mb-[10px] flex justify-center'>
                                        <button onClick={() => handleClickAddToCart(item.id, content)} className='py-[1px] px-[30px] bg-heading-secondary hover:bg-[#859a00] inline-block text-center leading-[35px] 
                                    uppercase font-semibold rounded-[50px] text-[13px] transition-all font-jost text-white'>
                                            {addedProductsId.includes(item.id) ? 'View Cart' : 'Add To Cart'}
                                        </button>
                                    </div>
                                    <div>
                                        {item.subDescription.map((desc, i) => (
                                            <p key={i} className={`flex items-center ${paragraphStyle} text-[13px] text-blue-gray-600`}><span className='mr-[10px] block h-[3px] w-[3px] bg-gray-7 rounded-full'></span> {desc}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div >
                    ) : (
                        <div key={item.id} className='product flex md:flex-row flex-col md:items-center w-full px-12 bg-white p-20 rounded-[10px] overflow-hidden'>
                            <div className='relative transition-all overflow-hidden'>
                                {item.discount && (
                                    <span className='z-10 block discount absolute top-20 left-20 rounded-[2px] font-jost font-medium text-12 py-[3px] px-[9px] text-white bg-theme-3'>
                                        {item.discount}
                                    </span>
                                )}
                                <Link to={`/shop-details/${item.id}`}>
                                    <img src={item.images[0]} alt={item.title} className='md:w-[256px] w-full h-full md:h-[256px] object-cover' />
                                    {item.images[1] &&
                                        <img src={item.images[1]} alt={item.title} className='absolute top-[0] left-[0] md:w-[256px] w-full h-full md:h-[256px] transition-all opacity-0 hover:opacity-100' />
                                    }
                                </Link>
                            </div>
                            <div className='flex-1 md:flex-row flex-col flex md:items-center md:justify-between'>
                                <div>
                                    <h4 className='font-jost text-16 leading-[20px] font-normal text-heading-primary hover:text-heading-secondary transition mb-8'>{item?.title}</h4>
                                    <div className='rating mb-[5px] flex gap-[2px]'>
                                        {ratingCalc(item.rating).map((star, i) => (
                                            <Fragment key={i}>
                                                {star}
                                            </Fragment>
                                        ))}
                                    </div>
                                    <ul>
                                        {item.specifications.map((item) => (
                                            <li className='font-jost text-[#79819c] text-14 leading-[22px] relative pl-16'>
                                                <span className='absolute left-0 top-[50%] translate-y-[-50%] h-[5px] w-[5px] rounded-full bg-[#79819c]' />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='relative md:pl-30 Mmd:mt-20'>
                                    <span className='md:block hidden absolute left-0 h-[200px] w-[1px] top-[50%] translate-y-[-50%] bg-[#ebeff4] ' />
                                    <h4 className='font-jost text-16 leading-[20px] text-link-color'>Availability: <span className='text-[#00b853]'>{item.availability} in stock</span></h4>
                                    <h3 className='font-jost font-medium text-18 leading-[26px] text-theme-2 mb-[15px]'>{item.price}</h3>
                                    <button className='bg-heading-secondary block text-white py-[3px] px-[58px] mb-10 text-center leading-[35px] uppercase Mmd:mx-auto font-semibold rounded-[50px] text-13 transition-all hover:bg-[#859a00]' onClick={() => handleClickAddToCart(item.id, content)}>
                                        {addedProductsId.includes(item.id) ? 'View Cart' : 'Add To Cart'}
                                    </button>
                                    <div className='flex Mmd:justify-center'>
                                        {iconsList.slice(0, 2).map((icon, i) => (
                                            <button key={i} className={`flex items-center  gap-[5px] text-12 mr-20 uppercase font-jost font-medium
                                            ${i === 0 && (addedWishlistProductsId.includes(item.id) ? 'text-heading-secondary' : 'text-blue-gray-600')}
                                            ${i === 1 && (addedCompareProductsId.includes(item.id) ? 'text-heading-secondary' : 'text-blue-gray-600')} `}
                                                onClick={() => handleClickIcon(i, item.id, content)}>
                                                {icon} {i === 0 ? 'wishlist' : 'Compare'}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </>
    )
}

export default ProductCard