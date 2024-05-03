import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";

const RecentProducts = ({ productsList }) => {

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
        <div className='bg-white rounded-[10px] pt-35 px-30 pb-[25px]'>
            <h4 className='font-bold text-20 leading-[25px] tracking-[-0.03em] text-heading-primary mb-[15px]'>
                Recent Products
            </h4>
            {productsList?.slice(2, 4)?.map(({ id, images, title, categories, rating, price }) => (
                <div key={id} className='border-dashed first-of-type:border-b-1 bg-white border-[#b45353] mb-[15px] pb-12'>
                    <div>
                        <img src={images[0]} alt="product image" className='max-w-full' />
                    </div>
                    <div>
                        <span>
                            <Link to={`/shop-details/${id}`} className='text-16 text-[#4d5574] font-jost'>{categories}</Link>
                        </span>
                        <h4 className='mt-[5px] mb-8 font-jost text-16 leading-[20px] text-heading-primary overflow-hidden break-words'>
                            <Link to={`/shop-details/${id}`}>{title}</Link>
                        </h4>
                        <div className='rating mb-[5px] flex gap-[2px]'>
                            {ratingCalc(rating).map((star, i) => (
                                <Fragment key={i}>
                                    {star}
                                </Fragment>
                            ))}
                        </div>
                        <div>
                            <span className='text-theme-2 font-medium text-18'>${price}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div >
    )
}

export default RecentProducts