import React, { useState } from 'react'
import { container } from '../classes'
import BlogBarList from './BlogBarList'
import { blogData } from '../displayedData/data'
import Pagination from './Pagination'
import { useGetBlogsListQuery } from '../redux/RTKApis/blogsApi'

const Blogs = () => {
  const {data: blogsListApi, isLoading} = useGetBlogsListQuery()
  const {blogList} = blogData
  const [currentPage, setCurrentPage] = useState(1)
  const pages = Math.ceil(blogList.length / 6)
  const numberOfBlogs = 6 * currentPage
  const numberStartBlogs = currentPage === 1 ? 0 : numberOfBlogs - 6
  const finalBlogsList = blogsListApi ? blogsListApi.slice(numberStartBlogs, numberOfBlogs): blogList.slice(numberStartBlogs, numberOfBlogs)


  if (isLoading) return 'loading...'

  return (
    <div className='pt-80'>
      <div className={`${container} px-12`}>
        <div className='grid lg:grid-cols-3 grid-cols-1 xl:gap-[24px]'>
          <BlogBarList content={finalBlogsList} />
        </div>
        <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </div>
    </div>
  )
}

export default Blogs