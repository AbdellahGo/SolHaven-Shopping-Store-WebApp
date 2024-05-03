import React from 'react'
import { IoIosCheckmark } from 'react-icons/io'
const BrandFilter = ({brandFilter, setBrandFilter, h4Styles}) => {
    const brands = ['Vons', 'Super Market', 'Aldi', 'Albertsons', 'Ralphs', 'ShopRite']
    return (
        <div className='border-b-1 border-dotted border-black pb-[25px] mb-30'>
            <h4 className={`${h4Styles}`}>FILTER BY BRAND</h4>
            <ul>
                {brands.map((brand, i) => (
                    <li key={i} className='flex items-center gap-8 cursor-pointer text-14 leading-[30px] text-link-color font-jost'
                        onClick={() => setBrandFilter((prev) => prev === brand ? '' : brand)}>
                        <span className={`${brandFilter !== brand ? 'p-[6.5px] bg-white border-1 border-blue-gray-300' : ''} bg-heading-secondary rounded-[2px] text-white`}>
                            {brandFilter === brand ? <IoIosCheckmark /> : ''}
                        </span>
                        {brand}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BrandFilter