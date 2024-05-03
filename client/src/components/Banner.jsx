import React from 'react'
import { container } from '../classes'
import { bannerData } from '../displayedData/data'
import { Link } from 'react-router-dom'


const Banner = () => {



    return (
        <div className='bg-gray-1 pb-60'>
            <div className={`${container} px-12`}>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-24'>
                    {bannerData.map(({ id, title, subTitle, desc, image }) => (
                        <div key={id} className='rounded-[10px] overflow-hidden lg:mb-30 transition-all hover:translate-y-[-20px]'>
                            <Link to='shop' className='block'>
                                <div className='pt-[31px] relative px-40 pb-[27px] min-h-[220px]'>
                                    <img src={image} alt="banner" className='absolute w-full top-0 z-[1] h-full object-cover left-0' />
                                    <div className='relative z-10'>
                                        <span className={`${id !== 2 ? 'text-yellow-500' : 'text-white'} font-jost font-medium text-14 block uppercase mb-10`}>{subTitle}</span>
                                        <h4 className='font-quicksand font-bold xxl:text-24 text-24 xl:text-20 leading-[30px] text-white mb-30' dangerouslySetInnerHTML={{ __html: title }} />
                                        <p className='font-jost text-white text-16'>{desc}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Banner