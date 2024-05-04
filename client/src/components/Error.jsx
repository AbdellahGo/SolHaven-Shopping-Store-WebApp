import React from 'react'
import { CiCircleAlert } from "react-icons/ci";
import { emptyCart } from '../assets';

const Error = ({ errorMessage, blog, product }) => {
    return (
            <div className='mt-80 pb-80 text-center'>
                <div className='mb-30'>
                    <img src={emptyCart} alt="emptyCart image" className='w-[283px] h-[171px] mx-auto' />
                </div>
                <h4 className='text-[26px] font-quicksand text-heading-primary font-normal leading-[1.2] mb-8'>
                    Sorry, the {product && 'products'} {blog && 'blog'} failed to load!!!
                </h4>
                <p className='font-jost text-16 font-normal text-link-color mb-[15px] leading-[23px]'>We will try to fix this error as soon as possible, or report it via this email: <span className='text-heading-secondary font-semibold'>AbdellahGoy40@gamil.com</span></p>
            </div>
    )
}

export default Error