import React from 'react'
import { shopBanner } from '../assets'

const ShopBanner = () => {
    return (
        <div className='px-12'>
            <div className='py-[45px] rounded-[10px] mb-30 Mmd:bg-no-repeat Mmd:bg-cover' style={{ backgroundImage: `url(${shopBanner})` }}>
                <div className='text-center'>
                    <span className='font-medium text-14 leading-[20px] text-center uppercase text-yellow-700 inline-block mb-8'>
                        The Salad
                    </span>
                    <h4 className='font-quicksand font-bold text-24 leading-[25px] text-center uppercase text-white mb-20'>
                        Fresh & Natural <br /> Healthy Food Special Offer
                    </h4>
                    <p className='text-16 leading-[23px] text-white'>Do not miss the current offers of us!</p>
                </div>
            </div>
        </div>
    )
}

export default ShopBanner