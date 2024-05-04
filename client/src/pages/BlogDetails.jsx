import React, { useEffect, useState } from 'react'
import { BlogDetailsArea, BreadCrumb } from '../components'
import { useParams } from 'react-router-dom'
import { useGetBlogDetailsQuery, useGetBlogsListQuery } from '../redux/RTKApis/blogsApi'

const BlogDetails = () => {
    const { id: blogId } = useParams()
    const { data, isLoading } = useGetBlogDetailsQuery(blogId)
    const { data: blogsList } = useGetBlogsListQuery()
    const [blogDetailsData, setBlogDetailsData] = useState({})



    useEffect(() => {
        if (data) {
            setBlogDetailsData(data?.blog)
        }
    }, [blogId, isLoading])

    useEffect(() => {
        window.scrollTo({ top: 0 })
      }, [])

    if (isLoading) return 'loading...'

    return (
        <div>

            <BreadCrumb specificLinkName={data?.blog?.title} small />
            <BlogDetailsArea blogDetailsData={blogDetailsData}
                setBlogDetailsData={setBlogDetailsData} blogId={parseInt(blogId)} blogsList={blogsList || []} />
        </div>
    )
}

export default BlogDetails