import React from 'react'
import { container } from '../classes'
import { stepsData } from '../displayedData/data'

const Steps = () => {
    return (
        <div className='mb-35 mt-35'>
            <div className={`${container} px-12`}>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[24px]'>
                    {stepsData.map(({id, image, title, description}) => (
                        <div key={id} className='step-box mb-40 px-10 py-[15px] text-center border-1 border-blue-gray-200 rounded-[10px]'>
                            <div className='mb-[15px] move-y-axis-animation'>
                                <img src={image} alt={title} className='w-[64px] h-[64px] object-cover mx-auto' />
                            </div>
                            <div>
                                <h4 className='font-quicksand font-bold text-16 text-heading-primary mb-[15px]'>
                                    {title}
                                </h4>
                                <p dangerouslySetInnerHTML={{__html: description}} className='text-16 font-jost text-link-color mb-[15px] leading-[23px]'/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Steps