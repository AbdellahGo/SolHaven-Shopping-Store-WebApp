import React, { useRef, useState } from 'react'
import { container } from '../classes'
import SectionHeader from './SectionHeader'
import { blogData } from '../displayedData/data'
import DragScroll from './DragScroll'
import BlogBarList from './BlogBarList'
import { useGetBlogsListQuery } from '../redux/RTKApis/blogsApi'
import Loader from './Loader'
import Error from './Error'

const BlogBar = () => {
    const { data: blogsListApi, isLoading, error } = useGetBlogsListQuery()
    const [scrollLeft, setScrollLeft] = useState(null)
    const slider = useRef(null)
    const { title, subTitle, desc, blogList } = blogData



    return (
        <div className='bg-gray-1 py-[100px] '>
            <div className={`${container} px-12`}>
                <SectionHeader title={title} subTitle={subTitle} desc={desc}
                    subTitleStyles='font-schoolbell text-18 leading-[1.4] text-heading-secondary font-regular'
                    titleStyles='font-bold md:text-[30px] text-[28px] leading-[38px] text-heading-primary font-quicksand mt-8'
                    descStyles='font-jost text-[15px] text-link-color leading-[22px] mt-8'
                    sectionHeaderStyles='pb-[20px] text-center' />
                <div>
                    {!isLoading ? (
                        <>
                            {!error ? (
                                <DragScroll scrollLeft={scrollLeft} setScrollLeft={setScrollLeft} slider={slider} sliderStyle='drag-scroll relative Mxxl:cursor-pointer transition-all flex gap-20 overflow-x-auto'>
                                    <BlogBarList content={blogsListApi ? blogsListApi : blogList} />
                                </DragScroll>
                            ) : <Error blog/>}
                        </>
                    ) : <Loader />}
                </div>
            </div>

        </div>
    )
}

export default BlogBar