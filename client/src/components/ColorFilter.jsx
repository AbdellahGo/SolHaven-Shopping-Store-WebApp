import React from 'react'
import { IoIosCheckmark } from 'react-icons/io'

const ColorFilter = ({ colorFilter, setColorFilter, h4Styles }) => {
    const colors = ['red', 'green', 'black', 'grey', 'blue']
    return (
        <div className='border-b-1 border-dotted border-black pb-[25px] mb-30'>
            <h4 className={`${h4Styles}`}>FILTER BY COLOR</h4>
            <ul>
                {colors.map((color, i) => (
                    <li key={i} className='flex items-center gap-8 cursor-pointer text-14 leading-[30px] text-link-color font-jost'
                        onClick={() => setColorFilter((prev) => prev === color ? '' : color)}>
                        <span className={`flex items-center justify-between rounded-full h-[15px] w-[15px]`} style={{ backgroundColor: `${color}` }}>
                            {colorFilter === color && <IoIosCheckmark className='text-16 text-white'/> }
                        </span>
                        {color}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ColorFilter