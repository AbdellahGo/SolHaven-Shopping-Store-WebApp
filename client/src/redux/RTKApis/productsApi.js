import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseUrl = 'https://solhaven-shopping-store-webapp.onrender.com/'

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