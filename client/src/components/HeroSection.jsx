import { useEffect, useRef, useState } from 'react'
import { container } from '../classes'
import { SectionHeader } from '../components'
import { heroSectionData } from '../displayedData/data'
import { leaf1, leaf2, leaf3, leaf4 } from '../assets'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const HeroSection = () => {
    const sliderImageRef = useRef(null)
    const subTitleRef = useRef(null)
    const titleRef = useRef(null)
    const descRef = useRef(null)
    const buttonRef = useRef(null)
    const [slider, setSlider] = useState(1)
    const { desc, subTitle, slidImages } = heroSectionData

    const refs = [subTitleRef, titleRef, descRef, buttonRef]
    const classes = ['slid-to-top', 'slid-to-top-2', 'slid-to-top-3', 'slid-to-top-4']

    useEffect(() => {
        // Ensure sliderImage.current is defined
        if (sliderImageRef.current) {
          // Add class to slide the image to the left
          sliderImageRef.current.classList.add('slid-to-left');
      
          // Add classes to other refs and remove them after a delay
          refs.forEach((ref, index) => {
            ref.current.classList.add(classes[index]);
            const timeoutId = setTimeout(() => {
              ref.current.classList.remove(classes[index]);
            }, 500 + 100 * index);
            return () => clearTimeout(timeoutId);
          });
      
          // Remove the 'slid-to-left' class after a delay of 500 milliseconds
          const timeoutId1 = setTimeout(() => {
            if (sliderImageRef.current) {
              sliderImageRef.current.classList.remove('slid-to-left');
            }
          }, 500);
      
          // Cleanup function to clear the timeout in case component unmounts or dependency changes
          return () => clearTimeout(timeoutId1);
        }
      }, [slider]);





    return (
        <div className='hero-section relative overflow-hidden w-full xxl:pt-[90px] md:pt-50 pt-20 xxl:pb-[161px] xl:pb-[165px] lg:pb-[185px] md:pb-[177px] sm:pb-[134px] pb-[78px]'>
          <div className='absolute w-full bg-heading-secondary h-[200px] bottom-[0px] left-0 gradient-primary z-[-1]' />
            <div className={`${container}`}>
                <div className='flex sm:flex-row flex-col justify-between items-center'>
                    <SectionHeader button desc={desc} subTitle={subTitle} title={slidImages[slider - 1].title} refs={refs}
                        sectionHeaderStyles='md:flex-none sm:flex-1 px-12 pt-20 xxl:w-[600px] xl:w-[546px] lg:w-[556px] md:w-[336px] sm:w-[246px] w-full'
                        subTitleStyles='text-heading-secondary font-medium uppercase font-jost text-16'
                        titleStyles='font-quicksand font-bold xxl:text-[65px] xl:text-[60px] lg:text-[53px] md:text-[36px] text-[30px] Msm:pr-[50px] sm:text-[27px] text-theme-1 sm:mt-[35px] mt-[20px] xxl:leading-[66px] xl:leading-[61px] lg:leading-[51px] md:leading-[39px] sm:leading-[28px]'
                        descStyles='xxl:pr-[70px] xl:pr-0 lg:pr-[60px]  sm:mt-[30px] mt-[20px] md:text-18 text-18 sm:text-[15px] text-link-color font-jost'
                        buttonStyles='inline-block hover:bg-heading-primary transition-all bg-heading-secondary rounded-[50px] text-white font-jost text-13 font-semibold leading-[23px] md:py-[13px] py-[8px] uppercase md:px-[53px] px-[30px] lg:mt-[60px] mt-[20px]' />

                    <div className='relative xxl:w-[746px] xl:w-[476px] lg:w-[386px] md:w-[266px] sm:w-[246px] md:flex-none flex-1 w-full md:mr-[70px] Mmd:pt-50 pr-[12px]'>
                        <img ref={sliderImageRef} src={slidImages[slider - 1].image} alt="slidImages" className={`w-full`} />
                        <div className='w-full h-full absolute top-0 transition hover:translate-x-[20px]'>
                            <img src={leaf1} alt="leaf1" className='md:block hidden absolute xxl:bottom-[-30px] xl:bottom-0 lg:bottom-[-10px] md:bottom-[-150px] xxl:left-[-210px] xl:left-[-170px] lg:left-[-120px] md:left-[-170px]' />
                            <img src={leaf2} alt="leaf2" className='md:block hidden absolute xxl:top-[-60px] xxl:right-[-120px] xl:right-[320px] lg:right-[200px] md:right-[110px] xl:top-[-70px] md:top-[-80px]' />
                            <img src={leaf3} alt="leaf3" className='md:block hidden absolute xl:top-0 lg:top-[-80px] md:top-[-100px] xxl:left-0 xl:left-[-70px] lg:left-[120px] md:left-[130px]' />
                            <img src={leaf4} alt="leaf4" className='md:block hidden absolute bottom-[-170px] xxl:right-[180px] xl:bottom-[-150px] xl:right-[0px]' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='arrow-left cursor-pointer opacity-0 absolute arrowMedia:top-[50%] top-[90%] translate-y-[-50%] left-40 rounded-full transition bg-[#96ae0080] hover:bg-heading-secondary w-60 h-60
            flex justify-center items-center' onClick={() => setSlider((prev) => prev === 1 ? 1 : prev - 1)}>
                <MdOutlineKeyboardArrowLeft fontSize='25px' color='#fff' />
            </div>
            <div className='arrow-right cursor-pointer opacity-0 absolute arrowMedia:top-[50%] top-[90%] translate-y-[-50%] right-40 rounded-full transition bg-[#96ae0080] hover:bg-heading-secondary w-60 h-60
            flex justify-center items-center' onClick={() => setSlider((prev) => prev === 3 ? 3 : prev + 1)}>
                <MdOutlineKeyboardArrowRight fontSize='25px' color='#fff' />
            </div>
        </div>
    )
}

export default HeroSection