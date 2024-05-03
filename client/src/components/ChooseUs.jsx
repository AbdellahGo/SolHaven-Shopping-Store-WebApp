import React from 'react'
import { chooseUsData } from '../displayedData/data'
import { container } from '../classes'
import SectionHeader from './SectionHeader'

const ChooseUs = () => {
    const { subTitle, title, desc, amazingWorkList } = chooseUsData
    return (
        <div className='choose-us bg-gray-1 pb-50 pt-80'>
            <div className={`${container} px-12 `}>
                <SectionHeader title={title} subTitle={subTitle} desc={desc}
                    subTitleStyles='font-schoolbell text-18 leading-[1.4] text-heading-secondary font-regular'
                    titleStyles='font-bold md:text-[30px] text-[28px] leading-[38px] text-heading-primary font-quicksand mt-8'
                    descStyles='font-jost text-[15px] text-link-color leading-[22px] mt-8'
                    sectionHeaderStyles='pb-[20px] text-center' />
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[24px] mb-30 text-center'>
                    {amazingWorkList.map(({ id, image, boxTitle, description }) => (
                        <div key={id}>
                            <div className='mb-30 rounded-[10px]'>
                                <img src={image} alt={boxTitle} className='w-full object-cover' />
                            </div>
                            <div>
                                <h4 className='font-quicksand font-bold text-20 text-heading-primary mb-10'>{boxTitle}</h4>
                                <p dangerouslySetInnerHTML={{__html: description}} className='text-15 font-jost text-link-color'/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ChooseUs