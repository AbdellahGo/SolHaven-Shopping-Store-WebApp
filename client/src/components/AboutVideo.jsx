import React, { useState } from 'react'
import { FiTriangle } from "react-icons/fi";
import { container } from '../classes';
import { aboutVideoData } from '../displayedData/data';
import SectionHeader from './SectionHeader';
import { videoBg1 } from '../assets';
import Modal from './Modal';
import { HiOutlineXMark } from "react-icons/hi2";


const AboutVideo = () => {
    const { title, desc, subTitle, aboutVideoList } = aboutVideoData

    const [videoModal, setVideoModal] = useState(false)

    const handleCancelModal = () => {
        setVideoModal(false)
    }

    return (
        <div className='mb-50 mt-80'>
            <Modal handleCancelModal={handleCancelModal} productModal={videoModal} >
                <div className={`${container} px-12  flex justify-center items-center h-full`}>
                    <div className=' flex justify-center items-center  w-full h-full p-20 '>
                        <div className='relative z-[99999999]'>
                            <button onClick={() => setVideoModal(false)}>
                                <HiOutlineXMark className=' absolute w-35 h-35 text-white text-20 top-20 right-[-42px]' />
                            </button>
                            <iframe className='md:w-[800px] md:h-[400px] Mmd:max-w-[500px] Mmd:max-h-[300px]'
                                src={`//www.youtube.com/embed/Vgte7oCgNtU?autoplay=${videoModal ? 1 : 0}&cc_load_policy=1&controls=1&disablekb=0&enablejsapi=0&fs=1&iv_load_policy=1&loop=0&rel=0&showinfo=1&start=0&wmode=transparent&theme=dark&mute=0`}>
                            </iframe>
                        </div>
                    </div>
                </div>
            </Modal>
            <div className={`${container} px-12`}>
                <SectionHeader title={title} subTitle={subTitle} desc={desc}
                    subTitleStyles='font-schoolbell text-18 leading-[1.4] text-heading-secondary font-regular'
                    titleStyles='font-bold md:text-[30px] text-[28px] leading-[38px] text-heading-primary font-quicksand mt-8'
                    descStyles='font-jost text-[15px] text-link-color leading-[22px] mt-8'
                    sectionHeaderStyles='pb-[20px] text-center' />
                <div className='px-12 mb-[25px] relative flex justify-center items-center'>
                    <img src={videoBg1} alt="videoBg1" className='w-full rounded-[10px]' />
                    <div className='absolute'>
                        <span className='cursor-pointer h-60 w-60 leading-[55px] text-center bg-[#ffffff4d] flex justify-center items-center rounded-full border-1 border-white'
                            onClick={() => setVideoModal(true)}>
                            <FiTriangle className='text-white text-18 ml-[2px] rotate-90' />
                        </span>
                    </div>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
                    {aboutVideoList.map(({ id, number, title, description }) => (
                        <div key={id} className='px-12 mb-30'>
                            <div className='mb-[5px]'>
                                <span className='font-jost font-semibold text-24 leading-[35px] uppercase text-heading-secondary flex items-baseline'>{number}</span>
                            </div>
                            <div>
                                <h4 className='font-bold font-quicksand mb-8 text-20 leading-[25px] text-heading-primary'>{title}</h4>
                                <p className='font-jost text-16 leading-[23px] text-link-color' dangerouslySetInnerHTML={{ __html: description }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutVideo