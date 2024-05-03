import React, { useRef, useState } from 'react'
import { blogData } from '../displayedData/data'
import DragScroll from './DragScroll'
import { Link } from 'react-router-dom'

const LatestBlogArea = () => {
    const [scrollLeft, setScrollLeft] = useState(null)
    const slider = useRef(null)
    const latestBlog = blogData.blogList.slice(0, 4)
    const spanStyles = 'font-medium hover:text-heading-secondary transition font-jost xl:text-12 text-10 text-white uppercase mr-8 pr-10 relative inline-block mb-8'
    return (
        <div className='latest-blog-area pt-30'>
            <div className='w-full px-12'>
                <DragScroll scrollLeft={scrollLeft} setScrollLeft={setScrollLeft} slider={slider}
                    sliderStyle='drag-scroll relative cursor-pointer transition-all flex gap-30 overflow-x-auto'>
                    {latestBlog.map(({ id, title, catLinks, author, postDate, mainImage }) => (
                        <div key={id} className='blog-box flex justify-center items-center relative rounded-[20px] overflow-hidden'>
                            <div className='w-full relative z-10'>
                                <img src={mainImage} alt={`${title}`} className='w-full h-auto' />
                                <span className='block w-full h-full absolute top-0 left-0 bg-[#0a0c1f80]' />
                            </div>
                            <div className='absolute z-20 px-50 text-center'>
                                <div>
                                    <span className={`${spanStyles}`}>
                                        <Link to={`/blog-details/${id}`}>
                                            {catLinks}
                                            <span className='absolute w-[3px] h-[3px] rounded-[50%] bg-[#cfd4de] top-[50%] translate-y-[-50%] right-0' />
                                        </Link>
                                    </span>
                                    <span className={`${spanStyles}`}>
                                        {author}
                                        <span className='absolute w-[3px] h-[3px] rounded-[50%] bg-[#cfd4de] top-[50%] translate-y-[-50%] right-0' />
                                    </span>
                                    <span className={`${spanStyles} m-0 p-0`}>
                                        {postDate}
                                    </span>
                                </div>
                                <h4 className='font-quicksand text-white font-bold xl:text-[24px] leading-[1.22] mb-20 text-16 Mmd:mb-8'>
                                    <Link to={`/blog-details/${id}`}>
                                        {title}
                                    </Link>
                                </h4>
                                <Link to={`/blog-details/${id}`}
                                    className='font-jost font-semibold xl:text-12 text-[10px] leading-[17px] text-center uppercase text-white'>
                                    Continue reading
                                </Link>
                            </div>
                        </div>
                    ))}
                </DragScroll>
            </div>
        </div >
    )
}

export default LatestBlogArea