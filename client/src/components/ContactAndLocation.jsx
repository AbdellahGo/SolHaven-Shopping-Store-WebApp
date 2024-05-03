import React from 'react'
import { container } from '../classes'
import { contactAndLocationData } from '../displayedData/data'

const ContactAndLocation = () => {
    const { title, desc, locationsList } = contactAndLocationData
    return (
        <div className='mb-[45px]'>
            <div className={`${container} px-12`}>
                <div className='text-center px-12 mb-40 mt-20'>
                    <h5 className='font-medium text-10 mb-8 leading-[10px] uppercase text-white bg-heading-secondary inline-block py-[5px] px-[15px] rounded-[30px]'>CONTACT US</h5>
                    <h5 className='font-quicksand font-bold text-36 leading-[40px] tracking-[-0.03em] text-heading-primary mb-20'>
                        {title}
                    </h5>
                    <p className='text-[15px] leading-[22px] text-link-color font-jost'>{desc}</p>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-[24px]'>
                    {locationsList.map(({ id, image, location, listInfo }) => (
                        <div key={id} className='mb-30'>
                            <div className='mb-[15px]'>
                                <img src={image} alt={location} className='w-full rounded-[10px]' />
                            </div>
                            <div>
                                <h4 className='font-quicksand font-bold text-[15px] mb-8 leading-[19px] uppercase text-heading-primary'>
                                    {location}
                                </h4>
                                <ul>
                                    {listInfo.map((item, i) => (
                                        <li key={i} className='text-16 leading-[23px] text-link-color mb-[2px]'>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactAndLocation