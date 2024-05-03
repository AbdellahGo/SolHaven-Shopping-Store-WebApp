import React from 'react'
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Pagination = ({ pages, setCurrentPage, currentPage }) => {
    const pagesStyle = 'w-[40px] h-[40px] mr-[5px] leading-[38px] flex justify-center items-center hover:bg-heading-secondary hover:text-white rounded-full border-1 border-heading-secondary text-heading-secondary text-14 font-semibold cursor-pointer'
    const NumberPages = []
    for (let i = 0; i < pages; i++) {
        NumberPages.push(i + 1)
    }


    const handleClickPage = (type, id) => {
        if (type === 'next') {
            setCurrentPage(prev => prev === pages ? prev : prev + 1)
        }
        if (type === 'prev') {
            setCurrentPage(prev => prev === 0 ? prev : prev - 1)
        }

        if (id) {
            setCurrentPage(id)
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className='flex w-full px-12'>
            <div className='flex justify-center items-center w-full mt-40 mb-80'>
                <div className={`previous ${pagesStyle} ${currentPage === 1 ? 'invisible' : 'visible'}`} style={{ transition: 'all 0.2s ease-out' }}
                    onClick={() => handleClickPage('prev', null)}>
                    <button>
                        <MdOutlineKeyboardDoubleArrowLeft />
                    </button>
                </div>
                <ul className='flex'>
                    {NumberPages.map((item) => (
                        <li key={item} className={`${pagesStyle} ${currentPage === item ? 'bg-heading-secondary text-white' : ''}`} style={{ transition: 'all 0.2s ease-out' }}
                            onClick={() => handleClickPage(null, item)}>
                            <button>
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className={`next ${pagesStyle} ${currentPage === pages ? 'invisible' : 'visible'}`} style={{ transition: 'all 0.2s ease-out' }}
                    onClick={() => handleClickPage('next', null)}>
                    <button>
                        <MdOutlineKeyboardDoubleArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pagination