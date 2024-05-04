import React, { useState } from 'react'
import { container } from '../classes'
import BlogBarList from './BlogBarList'
import { blogData } from '../displayedData/data'
import Pagination from './Pagination'
import { useGetBlogsListQuery } from '../redux/RTKApis/blogsApi'
import Loader from './Loader'
import Error from './Error'

const Blogs = () => {
  const { data: blogsListApi, isLoading, error } = useGetBlogsListQuery()
  const { blogList } = blogData
  const [currentPage, setCurrentPage] = useState(1)
  const pages = Math.ceil(blogList.length / 6)
  const numberOfBlogs = 6 * currentPage
  const numberStartBlogs = currentPage === 1 ? 0 : numberOfBlogs - 6
  const finalBlogsList = blogsListApi ? blogsListApi.slice(numberStartBlogs, numberOfBlogs) : blogList.slice(numberStartBlogs, numberOfBlogs)

  return (
    <div className='pt-80'>
      <div className={`${container} px-12`}>
        {!isLoading ? (
          <>
            {!error ? (
              <>
                <div className='grid lg:grid-cols-3 grid-cols-1 xl:gap-[24px]'>
                  <BlogBarList content={finalBlogsList} />
                </div>
                <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
              </>
            ) : <Error  blog />}
          </>
        ) : <Loader />}
      </div>
    </div>
  )
}

export default Blogs