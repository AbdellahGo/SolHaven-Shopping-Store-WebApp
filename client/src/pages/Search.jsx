import React, { useEffect, useState } from 'react';
import { BreadCrumb, Categories, ProductsList } from '../components';
import { useGetProductsListQuery } from '../redux/RTKApis/productsApi';
import { useLocation } from 'react-router-dom';

const Search = () => {
    const { search } = useLocation();
    const match = search.match(/(?:\?category=([^&]+)|\?searchText=([^&]+)).*$/);
    const { data, isLoading } = useGetProductsListQuery();
    const [productList, setProductList] = useState([])
    const [defaultProducts, setDefaultProducts] = useState([])


    
    const filterProductsByCategoryOrSearchTerm = (data) => {
        if (!data) return []; // Return empty array if data is not available yet
        const category = match && match[1] && match[1].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        const searchText = match && match[2 ]&& match[2].split('%20').join(' ');
        return data.filter(product => {
            if (category) {
                return product.categories === category.split('-').join();
            } else if (searchText) {
                return product.title.includes(searchText) || product.categories.includes(searchText);
            }
            return data; // If no category or searchText is provided, return all products
        });
    };

    useEffect(() => {
        setProductList(filterProductsByCategoryOrSearchTerm(data));
        setDefaultProducts(filterProductsByCategoryOrSearchTerm(data))
    }, [search, data]);


    useEffect(() => {
        window.scrollTo({ top: 0 })
      }, [])

    if (isLoading) return 'Loading...';

    return (
        <div className='bg-gray-8'>
            <BreadCrumb styles='bg-gray-1' small />
            <Categories />
            <ProductsList defaultProducts={defaultProducts} productList={productList} setProductList={setProductList} />
        </div>
    );
};

export default Search;
