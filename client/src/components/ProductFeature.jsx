import React from 'react'
import { container } from '../classes'
import { featureThumb, leaf1, leaf2, leaf3 } from '../assets'
import { Link } from 'react-router-dom'

const ProductFeature = () => {
    return (
        <div className='bg-gray-1 pb-80 pt-80'>
            <div className={`${container} px-12`}>
                <div className='flex items-center lg:flex-row flex-col gap-8'>
                    <div className='lg:w-[50%] px-20 w-full relative'>
                        <img src={featureThumb} alt="featureThumb" className='hover:translate-y-[-20px] transition-all w-full' />
                        <div className='md:block hidden'>
                            <img src={leaf1} alt="leaf image" className='hover:translate-y-[-20px] transition-all max-w-full top-[30px] left-0 absolute' />
                            <img src={leaf2} alt="leaf image" className='hover:translate-y-[-20px] transition-all max-w-full xl:top-[20px] top-0 lg:top-[-70px] right-[-53px] absolute' />
                        </div>
                    </div>
                    <div className='lg:w-[50%] w-full relative'>
                        <div className='xl:ml-75 xl:mr-75 pb-40 pt-[45px]'>
                            <div className='mb-35'>
                                <h4 className='font-schoolbell text-18 leading-[1.4] text-heading-secondary'>
                                    ~ The Best For Your ~
                                </h4>
                                <h4 className='font-quicksand md:text-40 text-28 leading-[1.1] font-bold text-heading-primary mb-[25px]'>
                                    Organic Drinks <br className='xl:block lg:hidden' />
                                    <span className='text-heading-secondary'>Easy Healthy</span> - Happy Life
                                </h4>
                                <p className='mb-[15px] font-jost text-16 leading-[1.4] text-link-color'>
                                    The liber tempor cum soluta nobis eleifend option congue
                                    doming quod mazim placerat facer possim assum.
                                </p>
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-24'>
                                <div>
                                    <div className='font-jost mb-[25px]'>
                                        <h4 className='text-heading-primary text-14 font-medium uppercase leading-[20px] pb-[5px] border-dashed border-b-1 border-blue-gray-300'>
                                            Fresh Fruits:
                                        </h4>
                                        <span className='block text-16 text-link-color pt-[5px]'>Apples, Berries & Cherries</span>
                                    </div>
                                    <div className='md:mb-[45px] mb-20'>
                                        <h4 className='text-heading-primary text-14 font-medium uppercase leading-[20px] pb-[5px] border-dashed border-b-1 border-blue-gray-300'>
                                            Expiry Date:
                                        </h4>
                                        <span className='block text-16 text-link-color pt-[5px]'>See on The Bottle Cap</span>
                                    </div>
                                    <Link to='shop' className='bg-heading-primary py-[5px] px-[55px] hover:bg-heading-secondary transition inline-block text-center leading-[35px] uppercase text-white font-semibold rounded-[50px] text-13'>View More</Link>
                                </div>
                                <div>
                                    <div className='font-jost mb-[25px]'>
                                        <h4 className='text-heading-primary text-14 font-medium uppercase leading-[20px] pb-[5px] border-dashed border-b-1 border-blue-gray-300'>
                                            Ingredient:
                                        </h4>
                                        <span className='block text-16 text-link-color pt-[5px]'>Energy, Protein, Sugars</span>
                                    </div>
                                    <div className='md:mb-[45px] mb-20'>
                                        <h4 className='text-heading-primary text-14 font-medium uppercase leading-[20px] pb-[5px] border-dashed border-b-1 border-blue-gray-300'>
                                            Bootle Size:
                                        </h4>
                                        <span className='block text-16 text-link-color pt-[5px]'>500ml – 1000ml</span>
                                    </div>
                                    <Link to='shop' className='bg-heading-secondary py-[5px] px-[55px] hover:bg-[#859a00] transition inline-block text-center leading-[35px] uppercase text-white font-semibold rounded-[50px] text-13'>View More</Link>
                                </div>
                            </div>
                        </div>
                        <img src={leaf3} alt="leaf image" className='hover:translate-y-[-20px] transition-all absolute md:block hidden xl:top-0 lg:top-[170px] lg:right-[430px] xl:right-[-10px] right-0 top-0' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductFeature