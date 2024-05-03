import React, { useRef, useState } from 'react'
import { container } from '../classes'
import { ourClientsData } from '../displayedData/data'
import { IoIosStarOutline } from "react-icons/io";
import SectionHeader from './SectionHeader';
import DragScroll from './DragScroll';

const OurClients = () => {
    const [scrollLeft, setScrollLeft] = useState(null)
    const slider = useRef(null)
    const { subTitle, title, desc, ourClientsList } = ourClientsData
    const rating = []

    for (let i = 0; i < 5; i++) {
        rating.push(<IoIosStarOutline key={i} className='-mr-[3px]' />)
    }

    return (
        <div className='pb-[55px] pt-80'>
            <div className={`${container} px-12`}>
                <SectionHeader title={title} subTitle={subTitle} desc={desc}
                    subTitleStyles='font-schoolbell text-18 leading-[1.4] text-heading-secondary font-regular'
                    titleStyles='font-bold md:text-[30px] text-[28px] leading-[38px] text-heading-primary font-quicksand mt-8'
                    descStyles='font-jost text-[15px] text-link-color leading-[22px] mt-8'
                    sectionHeaderStyles='pb-[20px] text-center' />
                <DragScroll scrollLeft={scrollLeft} setScrollLeft={setScrollLeft} slider={slider} sliderStyle='drag-scroll relative Mxxl:cursor-pointer transition-all flex gap-[31px] overflow-x-auto'>
                    {ourClientsList.map(({ id, image, title, job, description }) => (
                        <div key={id} className='xxl:min-w-[430px] xl:min-w-[364px] lg:min-w-[457px] min-w-full text-center border-1 border-blue-gray-200 rounded-[10px] pt-40 px-[42px] pb-35'>
                            <div className='mb-[25px]'>
                                <img src={image} alt="avatar" className='h-[70px] w-[70px] rounded-[50px] mx-auto' />
                            </div>
                            <div>
                                <p dangerouslySetInnerHTML={{ __html: description }} className='text-16 font-jost leading-[26px] pb-[5px] text-link-color mb-[15px]' />
                                <div className='mb-[5px] text-yellow-700 flex justify-center'>
                                    {rating.map((star) => (
                                        star
                                    ))}
                                </div>
                                <h4 className='font-bold text-13 text-heading-primary uppercase mb-0 font-quicksand'>
                                    {title}
                                </h4>
                                <span className='font-jost text-link-color block'>
                                    {job}</span>
                            </div>
                        </div>
                    ))}
                </DragScroll>
            </div>
        </div>
    )
}

export default OurClients