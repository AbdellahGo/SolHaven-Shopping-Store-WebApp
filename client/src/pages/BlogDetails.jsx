import React from 'react'
import { BlogDetailsArea, BreadCrumb } from '../components'
import { useParams } from 'react-router-dom'
import { useGetBlogDetailsQuery, useGetBlogsListQuery } from '../redux/RTKApis/blogsApi'

const BlogDetails = () => {
    const { id: blogId } = useParams()
    const { data, isLoading } = useGetBlogDetailsQuery(blogId)
    const {data: blogsList} = useGetBlogsListQuery()
    
    
    if (isLoading) return 'loading...'
    

    return (
        <div>
            <BreadCrumb specificLinkName={data?.blog?.title} small />
            <BlogDetailsArea blogData={data} blogId={parseInt(blogId)} blogsList={blogsList}/>
        </div>
    )
}

export default BlogDetails