import React, { useState } from 'react'
import { container } from '../classes'
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";


const ProductFilter = ({ toggleGrid, setToggleGrid, toggleSortProducts, handleClickSortProducts, fromProduct, toProduct, ProductLen }) => {
    const [toggleFilterMenu, setToggleFilterMenu] = useState(false)
    const gridButtons = [{ id: 1, icon: <TfiLayoutGrid4 />, grid: 4 }, { id: 2, icon: <TfiLayoutGrid3 />, grid: 3 }, { id: 3, icon: <TfiMenuAlt />, grid: 1 }]
    const filterToggleMenu = [{ id: 1, dataValue: null, text: 'Default sorting' }, { id: 2, dataValue: 'new', text: 'New Arrivals' }, { id: 3, dataValue: 'high', text: 'Price High To Low' }, { id: 4, dataValue: 'low', text: 'Price Low To High' }]
    const selectedFilter = filterToggleMenu.find((item) => item.dataValue === toggleSortProducts);
    const selectedText = selectedFilter ? selectedFilter.text : '';

    return (
        <div className='mb-30'>
            <div className='rounded-[10px] py-[7px] px-20 bg-white grid md:grid-cols-3 grid-cols-1'>
                <div className='px-12 flex items-center Mmd:justify-center'>
                    <span className='font-jost text-14 leading-[40px] text-link-color'>Showing {fromProduct} -{toProduct} of {ProductLen} products</span>
                </div>
                <div className='px-12 flex justify-center items-center'>
                    {gridButtons.map(({ id, icon, grid }) => (
                        <button key={id} className={`${toggleGrid === grid ? 'text-heading-secondary' : 'text-link-color'} py-8 px-16`}
                            onClick={() => setToggleGrid(grid)}>
                            {icon}
                        </button>
                    ))}
                </div>
                <div className='px-12 flex md:justify-end justify-center items-center'>
                    <div className='relative cursor-pointer pl-18 pr-30 text-link-color' onClick={() => setToggleFilterMenu(prev => !prev)}>
                        <span className='font-jost text-14 leading-[40px]'>
                            {selectedText}
                        </span>
                        <IoIosArrowDown className='absolute text-10 right-12 top-[50%] translate-y-[-50%]' />
                        <ul className={`${toggleFilterMenu ? 'opacity-100  translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-[-21] scale-[0.75]'} absolute bg-white mt-4 overflow-hidden pointer-events-none top-full left-0 z-10 origin-center transition-all`}>
                            {filterToggleMenu.map(({ id, dataValue, text }) => (
                                <li key={id} className={`${toggleSortProducts === dataValue ? 'font-bold' : 'font-medium'} font-jost cursor-pointer text-14 leading-[40px] min-w-max min-h-40 pl-18 pr-[29px] text-left transition-all`}
                                    onClick={() => handleClickSortProducts(dataValue)}>
                                    {text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductFilter