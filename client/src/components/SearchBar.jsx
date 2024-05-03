import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { HiOutlineXMark } from "react-icons/hi2";
import { searchSlidToBottom, searchSlidToTop } from '../classes';


const SearchBar = ({ toggleSearchBar, setToggleSearchBar, searchBarInput, handleSearchBar }) => {

    return (
        <div className={`absolute z-10 w-full bg-white border-b-1 transition-1 border-heading-secondary p-[30px] ${toggleSearchBar ? searchSlidToBottom : searchSlidToTop}`}>
            <div className='relative flex justify-center items-center'>
                <HiOutlineXMark fontSize={30} className='x-mark-icon' onClick={() => setToggleSearchBar(false)} />
                <div className='py-[100px] px-12 '>
                    <h3 className='text-center mx-auto uppercase font-quicksand text-18 font-bold text-theme-1 Msm:w-[200px]'>What Are You Looking For?</h3>
                    <div className='mt-35 pl-20 pr-[25px] py-10 flex items-center gap-[5px] border-border-1 border-[1px]'>
                        <input ref={searchBarInput} type="text" placeholder='Search Product...' className='font-jost block xxl:w-[630px] md:w-[530px] sm:w-[430px] w-[200px] text-16 placeholder:text-14 font-500 placeholder:font-500 text-theme-1 placeholder:text-gray-7' />
                        <button onClick={() => handleSearchBar('bar')}>
                            <CiSearch fontSize={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar