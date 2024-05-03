import React, { useEffect, useState } from 'react'
import { countdownBg, freshShape, leaf1, leaf2, leaf3 } from '../assets'
import { container } from '../classes'
import { Link } from 'react-router-dom'

const ProductCountdown = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "July, 10, 2024";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    const buttonStyles = ' uppercase border-2 border-white px-[55px] py-[5px] font-jost text-center leading-[35px] font-semibold rounded-[50px] text-13 transition-all'
    const timer = [
        {
            id: 1,
            date: days,
            type: 'Days'
        },
        {
            id: 2,
            date: hours,
            type: 'Hour'
        },
        {
            id: 3,
            date: minutes,
            type: 'Minute'
        },
        {
            id: 4,
            date: seconds,
            type: 'Second'
        },
    ]


    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='product-countdown bg-gray-1 pb-[25px]'
            style={{ backgroundImage: `url(${countdownBg})`, backgroundPosition: '50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className={`${container} px-12`}>
                <div className='w-full px-12'>
                    <div className='pt-150 pb-[130px] px-[5px] xxl:ml-[175px] relative'>
                        <div className='mb-35'>
                            <span className='font-schoolbell text-18 leading-[25px] text-white block mb-10'>
                                ~ Deals Of The Day ~
                            </span>
                            <h2 className='text-white font-quicksand md:text-40 text-[25px] font-bold leading-[43px] mb-[25px]'>
                                Premium Drinks
                                <br className='md:block hidden' />
                                Fresh Farm Product
                            </h2>
                            <p className='font-jost text-white text-16 mb-[15px] leading-[23px]'>
                                The liber tempor cum soluta nobis eleifend option congue
                                <br className='md:block hidden' />
                                doming quod mazim placerat facere possum assam going through.
                            </p>
                        </div>
                        <div>
                            <h4 className='font-quicksand uppercase font-bold text-14 leading-[18px] text-white'>
                                Hurry up! offer end in:
                            </h4>
                            <div className='flex items-center mb-50 mt-8'>
                                {timer.map(({ id, date, type }) => (
                                    <span key={id} className='md:mr-50 mr-[15px] flex items-end'>
                                        <span className='font-medium md:text-[36px] text-20 leading-[35px] text-white'>{date}</span>
                                        <p className='font-medium text-12 lading-[17px] uppercase text-gray-9 ml-[3px]'>{type}</p>
                                    </span>
                                ))}
                            </div>
                            <div className='links-container flex sm:flex-row flex-col sm:items-center items-start gap-[15px]'>
                                <Link to='shop' className={`${buttonStyles}`} >Shop Now</Link>
                                <Link to='shop' className={`${buttonStyles}`}>View Menu</Link>
                            </div>
                        </div>
                        <div className='lg:block hidden'>
                            <img src={leaf1} alt="leaf1" className='absolute transition-all hover:translate-y-[-10px] left-[-175px] top-[140px] ' />
                            <img src={leaf2} alt="leaf2" className='absolute transition-all hover:translate-y-[-10px] xxl:right-[520px] xl:right-[410px] lg:right-[-10px] xxl:bottom-[180px] xl:bottom-[10px] lg:bottom-[0]' />
                            <img src={leaf3} alt="leaf3" className='absolute transition-all hover:translate-y-[-10px] xxl:right-[30px] xl:right-[90px] lg:right-[360px] xl:top-[215px] top-[220px]' />
                            <img src={freshShape} alt="freshShape" className='absolute transition-all hover:translate-y-[-10px] xxl:right-[250px] xl:right-[155px] right-[0] bottom-[270px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCountdown