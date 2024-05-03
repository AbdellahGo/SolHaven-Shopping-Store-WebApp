import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseUrl = 'http://localhost:8080'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getProductsList: builder.query({
            query: () => '/products'
        }),
        getCategoriesList: builder.query({
            query: () => '/categories'
        }),
        getProductDetails: builder.query({
            query: (id) => `/products/${id}`
        }),
    })
})



export const  {useGetProductsListQuery, useGetCategoriesListQuery, useGetProductDetailsQuery} = productsApi