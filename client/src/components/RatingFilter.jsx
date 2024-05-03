import React, { Fragment } from 'react'
import { IoIosCheckmark, IoIosStar } from 'react-icons/io'

const RatingFilter = ({ ratingFilter, setRatingFilter, h4Styles }) => {
    const ratingNumbers = [5, 4, 3, 2, 1]
    const ratingCalc = (n) => {
        const ratingStars = []
        for (let i = 0; i < 5; i++) {
            if (i < n) {
                ratingStars.push(<IoIosStar fontSize={16} color='#ffbc0b' />)
            } else {
                ratingStars.push(<IoIosStar fontSize={16} color='#ccc' />)
            }
        }

        return ratingStars
    }
    return (
        <div className='border-b-1 border-dotted border-black pb-[25px] mb-30'>
            <h4 className={`${h4Styles}`}>FILTER BY RATING</h4>
            <ul>
                {ratingNumbers.map((num) => (
                    <li key={num} className='flex items-center gap-8 cursor-pointer text-14 leading-[30px] text-link-color font-jost'
                        onClick={() => setRatingFilter((prev) => prev === num ? '' : num)}>
                        <span className={`${ratingFilter !== num ? 'p-[6.5px] bg-white border-1 border-blue-gray-300' : ''} bg-heading-secondary rounded-[2px] text-white`}>
                            {ratingFilter === num ? <IoIosCheckmark /> : ''}
                        </span>
                        <div className='rating mb-[5px] flex items-center gap-[2px]'>
                            {ratingCalc(num).map((star, i) => (
                                <Fragment key={i}>
                                    {star}
                                </Fragment>
                            ))}
                            ({num} Star)
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RatingFilter