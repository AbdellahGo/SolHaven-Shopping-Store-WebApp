import React from 'react'
import { aboutBannerData } from '../displayedData/data'
import { aboutBanner } from '../assets'
import { container } from '../classes'
import { Link } from 'react-router-dom'

const AboutBanner = () => {
    const { title, subTitle, desc1, desc2 } = aboutBannerData
    return (
        <div className='about-banner pb-[170px] pt-[175px]'
            style={{ backgroundImage: `url(${aboutBanner})`, backgroundPosition: '50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className={`${container} px-12`}>
                <div className='px-12 text-white flex flex-col items-center text-center'>
                    <h5 className='font-jost font-semibold text-13 uppercase mb-[15px]'>
                        {subTitle}
                    </h5>
                    <h3 className='font-quicksand font-bold sm:text-60 text-40 leading-[45px] sm:mb-35 mb-[25px]'>
                        {title}
                    </h3>
                    <p className='font-jost text-16 leading-[28px] mb-[65px]'>
                        {desc1}
                        <br />
                        {desc2}
                    </p>
                    <Link to='about' className='font-jost font-semibold text-13 leading-[19px] block bg-heading-secondary py-16 px-58 rounded-[3px] uppercase '>
                        About us
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutBanner