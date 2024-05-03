import React from 'react'
import { container } from '../classes'
import { helpYouData } from '../displayedData/data'
import { IoIosCheckmark } from "react-icons/io";
import { leaf1, leaf2, sliderBg1 } from '../assets';




const HelpYou = () => {
    const { title, desc, list } = helpYouData
    return (
        <div className='pb-60 pt-[100px]'>
            <div className={`${container} px-12`}>
                <div className='grid lg:grid-cols-2 grid-cols-1 items-center'>
                    <div className='px-12 mb-30 relative'>
                        <img src={sliderBg1} alt="sliderBg1" className='slider-bg1 w-full md:w-[535px]'/>
                        <div className='md:block hidden'>
                            <img src={leaf2} alt="leaf image" className='leaf-image1 absolute bottom-[-120px] right-[95px]' />
                            <img src={leaf1} alt="leaf image" className='leaf-image2 absolute top-[-55px] left-0' />
                        </div>
                    </div>
                    <div className='px-12 mb-30'>
                        <div className='font-jost font-semibold text-10 leading-[14px] uppercase text-heading-primary mb-10'>
                            <span className='text-white font-medium mr-8 bg-heading-secondary inline-block py-[3px] px-16 rounded-[30px]'>
                                About us
                            </span>
                            <span>Welcome to Orfarm</span>
                        </div>
                        <h3 className='font-quicksand font-bold text-36 leading-[40px] text-heading-primary mb-[25px]' dangerouslySetInnerHTML={{ __html: title }} />
                            <p className='font-jost text-16 leading-[23px] text-link-color mb-[25px]' dangerouslySetInnerHTML={{ __html: desc }} />
                            <ul>
                                {list.map((item, i) => (
                                    <li key={i} className='flex gap-[5px] items-center mb-[15px] font-jost text-16 text-link-color'>
                                            <IoIosCheckmark fontSize={10} className=' w-[25px] h-[25px] rounded-full bg-heading-secondary text-white leading-[25px]'/>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpYou