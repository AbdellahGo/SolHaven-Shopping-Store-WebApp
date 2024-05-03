import React from 'react'
import { IoIosCheckmark } from 'react-icons/io'

const CategoryFilter = ({ categoriesList, h4Styles, categoryFilter, setCategoryFilter }) => {
    return (
        <div className='border-b-1 border-dotted border-black pb-[25px] mb-30'>
            <h4 className={`${h4Styles}`}>Product Categories</h4>
            <ul>
                {categoriesList.map(({ id, title, numberOfItems }) => (
                    <li key={id} className='flex items-center gap-8 cursor-pointer text-14 leading-[30px] text-link-color font-jost'
                        onClick={() => setCategoryFilter((prev) => prev === title ? '' : title)}>
                        <span className={`${categoryFilter !== title ? 'p-[6.5px] bg-white border-1 border-blue-gray-300' : ''} bg-heading-secondary rounded-[2px] text-white`}>
                            {categoryFilter === title ? <IoIosCheckmark  /> : ''}
                        </span>
                        {title} ({numberOfItems})
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryFilter