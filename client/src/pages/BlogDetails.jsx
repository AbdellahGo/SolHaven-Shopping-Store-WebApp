import React, { useEffect, useState } from 'react'
import { BlogDetailsArea, BreadCrumb, Error, Loader } from '../components'
import { useParams } from 'react-router-dom'
import { useGetBlogDetailsQuery, useGetBlogsListQuery } from '../redux/RTKApis/blogsApi'
import { container } from '../classes'

const BlogDetails = () => {
    const { id: blogId } = useParams()
    const { data, isLoading, error } = useGetBlogDetailsQuery(blogId)
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


    return (
        <div>
            <BreadCrumb specificLinkName={data?.blog?.title} small />
            {!isLoading ? (
                <>
                {!error ? (
                    <BlogDetailsArea blogDetailsData={blogDetailsData}
                    setBlogDetailsData={setBlogDetailsData} blogId={parseInt(blogId)} blogsList={blogsList || []} />
                ): (
                    <div className={`${container}`}>
                        <Error blog/>
                    </div>
                )}
                </>
            ) : <Loader />}
        </div>
    )
}

export default BlogDetails