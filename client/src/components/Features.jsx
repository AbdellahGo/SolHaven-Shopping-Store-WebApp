import React from 'react'
import { featuresShape } from '../assets'
import { container } from '../classes'
import { featuresData } from '../displayedData/data'

const Features = () => {
    return (
        <div className='bg-gray-1 pb-40 pt-50'
            style={{ backgroundImage: `url(${featuresShape})`, backgroundRepeat: 'repeat-x' }}>
                <div className={`${container} px-12`}>
                    <div className='border-b-1 border-indigo-500 pb-[15px] grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                        {featuresData.map(({id, icon, title, desc}) => (
                            <div key={id} className='px-12 mb-30 text-center'>
                                <div className='pulse-container mb-10'>
                                    <img src={icon} alt={title} className='mx-auto pulse w-[25px] h-[25px]' />
                                </div>
                                <div>
                                    <h4 className='font-quicksand uppercase font-bold text-12 text-white mb-[2px]'>
                                        {title}
                                    </h4>
                                    <p className='text-gray-10 text-14 font-jost'>{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    )
}

export default Features