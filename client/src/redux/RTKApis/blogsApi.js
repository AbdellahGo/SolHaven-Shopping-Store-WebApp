import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseUrl = 'http://localhost:8080'

export const blogsApi = createApi({
    reducerPath: 'blogsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getBlogsList: builder.query({
            query: () => '/blogs'
        }),
        getBlogDetails: builder.query({
            query: (id) => `/blogs/${id}`
        }),
    })
})



export const  {useGetBlogDetailsQuery, useGetBlogsListQuery} = blogsApi