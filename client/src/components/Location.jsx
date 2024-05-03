import React from 'react'
import { container } from '../classes'
import { LocationData } from '../displayedData/data'
import { Link } from 'react-router-dom'
import LocationMap from './LocationMap'

const Location = () => {
    const { image, openingHours, listInfo } = LocationData
    return (
        <div className='py-80'>
            <div className={`${container} px-12`}>
                <div className='grid lg:grid-cols-2 grid-cols-1'>
                    <div className='px-12 mb-30'>
                        <div>
                            <img src={image} alt="Heaven Stress, Beverly, Melbourne" className='w-full rounded-t-[10px]' />
                        </div>
                        <div className='bg-[#f7f7f9] border-1 border-border-1 rounded-b-[10px] md:pt-[65px] pt-[50px] md:px-40 px-[15px] md:pb-50 pb-40'>
                            <ul>
                                {listInfo.map((item, i) => (
                                    <li key={i} className='text-16 font-jost leading-[23px] text-link-color mb-[2px]'>
                                        {item}
                                    </li>
                                ))}
                                <li className='text-16 font-jost leading-[23px] text-link-color mb-[2px]'>
                                    Opening Hours: <span className='text-heading-secondary'>{openingHours}</span>
                                </li>
                            </ul>
                            <Link to='shop-location' className='font-semibold text-13 leading-[19px] uppercase text-white bg-heading-secondary hover:bg-[#859a00] transition inline-block py-16 px-[47px] rounded-[30px] mt-[15px]'>
                            GET DIRECTIONS
                            </Link>
                        </div>
                    </div>
                    <div className='px-12'>
                        <LocationMap iframeStyles={'rounded-[10px]'} divStyles={'pb-[30px] w-full lg:h-full md:h-[770px] h-[350px]'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location