import React from 'react'
import { chooseBanner } from '../assets'
import { container } from '../classes'
import { weAreDifferentData } from '../displayedData/data'
import SectionHeader from './SectionHeader'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const WeAreDifferent = () => {
    const { subTitle, title, desc, weAreDifferentList } = weAreDifferentData
    return (
        <div className='we-are-different pt-[75px] pb-80 bg-gray-1'
            style={{ backgroundImage: `url(${chooseBanner})`, backgroundSize: 'cover' }}>
            <div className={`${container} px-12`}>
                <SectionHeader title={title} subTitle={subTitle} desc={desc}
                    subTitleStyles='font-schoolbell text-18 leading-[1.4] text-heading-secondary font-regular'
                    titleStyles='font-bold md:text-[30px] text-[28px] leading-[38px] text-heading-primary font-quicksand mt-8'
                    descStyles='font-jost text-[15px] text-link-color leading-[22px] mt-8'
                    sectionHeaderStyles='pb-[20px] text-center' />
                <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-[24px]'>
                    {weAreDifferentList.map(({ id, image, title, description }) => (
                        <div key={id} className='we-are-different-box bg-white pt-50 px-35 rounded-[20px] pb-[45px] mb-30 text-center'>
                            <div className='mb-20 move-y-axis-animation'>
                                <img src={image} alt={title} className='w-[65px] h-[65px] mx-auto' />
                            </div>
                            <div>
                                <h4 className=' mb-8 text-16 font-quicksand text-heading-primary font-bold'>
                                    {title}
                                </h4>
                                <p className='text-16 font-jost text-link-color mb-[15px] leading-[23px]' dangerouslySetInnerHTML={{ __html: description }} />
                                <Link to='about' className='flex items-center justify-center gap-8 text-heading-secondary font-semibold text-12 uppercase'>
                                    Learn More
                                    <div className='move-x-axis-animation'>
                                        <MdKeyboardDoubleArrowRight fontSize={16} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-full px-12 pb-[15px] mb-[15px] text-center'>
                    <span className='help-center font-jost text-link-color text-16'>
                        Our nearly 1.4K committed staff members are ready to help.
                        <Link to='about' className='font-medium text-16 text-heading-secondary gap-4 inline-flex items-center'>
                            Help Center
                            <div className='help-center-arrow'>
                                <MdKeyboardDoubleArrowRight fontSize={16} />
                            </div>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default WeAreDifferent