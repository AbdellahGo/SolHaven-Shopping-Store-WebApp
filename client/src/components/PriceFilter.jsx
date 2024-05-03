import React from 'react'
import { IoIosCheckmark } from 'react-icons/io'

const PriceFilter = ({ priceFilter, handleFilterByPrice, h4Styles }) => {
    const prices = [{ id: 1, priceVale: '1$ - 10$', price: '1-10' },
    { id: 2, priceVale: '10$ - 30$', price: '10-30' },
    { id: 3, priceVale: '30$ - 50$', price: '30-50' },
    { id: 4, priceVale: '50$ - 80$', price: '50-80' },
    { id: 5, priceVale: '80$ - 100$', price: '80-100' },
    { id: 6, priceVale: '100$ - 130$', price: '100-130' }]
    return (
        <div className='border-b-1 border-dotted border-black pb-[25px] mb-30'>
            <h4 className={`${h4Styles}`}>FILTER BY PRICE</h4>
            <ul>
                {prices.map(({ id, priceVale, price }) => (
                    <li key={id} className='flex items-center gap-8 cursor-pointer text-14 leading-[30px] text-link-color font-jost'
                        onClick={() => handleFilterByPrice(priceFilter === price.trim() ? '' : price.trim())}>
                        <span className={`${priceFilter !== price.trim() ? 'p-[6.5px] bg-white border-1 border-blue-gray-300' : ''} bg-heading-secondary rounded-[2px] text-white`}>
                            {priceFilter === price.trim() ? <IoIosCheckmark /> : ''}
                        </span>
                        {priceVale} 
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PriceFilter