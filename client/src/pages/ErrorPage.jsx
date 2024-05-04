import React from 'react'
import errorBg from '../assets/erorr-bg.png'
import errorShape from '../assets/erorr-shape.png'
import { container } from '../classes'
import { Link } from 'react-router-dom'


const ErrorPage = () => {
    return (
        <div className='py-80'>
            <div className={`${container} px-12`}>
                <div className='flex justify-center'>
                    <div className='xxl:w-6/12 lg:w-8/12 w-full text-center'>
                        <div className='mb-[55px] relative'>
                            <img loading="lazy" src={errorBg} alt="errorBg" className='mx-auto error-image max-w-full h-auto' />
                            <div className='absolute bottom-[-22px] left-[50%] translate-x-[-60%] z-[-1]'>
                                <img loading="lazy" src={errorShape} alt="errorShape" className='' />
                            </div>
                        </div>
                        <div>
                            <h4 className='font-quicksand font-bold md:text-[48px] text-[22px] leading-[40px] tracking-[-0.03em] text-heading-primary mb-[25px]'>Oops...That link is broken.</h4>
                            <p className='font-jost font-normal text-16 leading-[23px] text-link-color mb-[45px]'>Sorry for the inconvenience. Go to our homepage or check out our latest collections.</p>
                            <Link to='/' className='font-jost font-semibold text-13 leading-[19px] text-center uppercase bg-heading-secondary text-white inline-block py-16 px-35 rounded-[30px]'>Back to homepage</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage