import React, { useEffect, useState } from 'react'
import { BreadCrumb, CategoryFilter, ColorFilter, ProductsList, RatingFilter, ShopBanner, SideBanner, PriceFilter } from '../components'
import { container } from '../classes'
import { useGetCategoriesListQuery, useGetProductsListQuery } from '../redux/RTKApis/productsApi';
import BrandFilter from './BrandFilter';
import { categoriesData } from '../displayedData/data';

const Shop = () => {

  const h4Styles = 'mb-8 font-bold text-14 leading-[18px] tracking-[-0.03em] uppercase text-heading-primary font-quicksand'
  const { data: categoriesListApi } = useGetCategoriesListQuery()
  const { data, isLoading } = useGetProductsListQuery();
  const [productList, setProductList] = useState([]);
  const [defaultProducts, setDefaultProducts] = useState([])

  const [filters, setFilters] = useState({
    category: '',
    price: '',
    color: '',
    brand: '',
    rating: ''
  });

  const handleClickResetFilters = () => {
    setFilters({
      category: '',
      price: '',
      color: '',
      brand: '',
      rating: ''
    });
    setProductList(data);
  };

  const handleFilterChange = (filterKey, filterValue) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterKey]: prevFilters[filterKey] === filterValue ? '' : filterValue
    }));
  };

  const filterProducts = (product) => {
    const { category, price, color, brand, rating } = filters;
    return (
      (!category || product.categories.trim().toLowerCase() === category) &&
      (!price || (parseInt(product.price) >= parseInt(price.split('-')[0]) && parseInt(product.price) <= parseInt(price.split('-')[1]))) &&
      (!color || product.color === color) &&
      (!brand || product.brands.trim().toLowerCase() === brand) &&
      (!rating || parseInt(product.rating) === parseInt(rating))
    );
  };

  const applyFilters = () => {
    const filteredProducts = data?.filter(filterProducts);
    setProductList(filteredProducts);
    setDefaultProducts(filteredProducts);
  };

  useEffect(() => {
    applyFilters();
  }, [filters, data]);

  const handleFilterByCategory = (category) => {
    handleFilterChange('category', category);
  };

  const handleFilterByPrice = (price) => {
    handleFilterChange('price', price);
  };

  const handleFilterByColor = (color) => {
    handleFilterChange('color', color);
  };

  const handleFilterByBrand = (brand) => {
    handleFilterChange('brand', brand);
  };

  const handleFilterByRating = (rating) => {
    handleFilterChange('rating', rating);
  };


  useEffect(() => {
    if (!isLoading) {
      setProductList(data);
      setDefaultProducts(data);
    }
  }, [data, isLoading]);



  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [])

  if (isLoading) return 'Loading...';


  return (
    <div className='bg-gray-1'>
      <BreadCrumb small />
      <div className='pb-200'>
        <div className={`${container}`}>
          {console.log(categoriesListApi)}
          <div className='flex xl:flex-row xl:gap-[12px] gap-[30px] flex-col'>
            <div className='xl:w-3/12 w-full '>
              <div className='bg-white pt-[25px] px-30 mb-35 pb-18 rounded-[10px]'>
                <CategoryFilter categoryFilter={filters.category} handleFilterByCategory={handleFilterByCategory} categoriesList={categoriesListApi || categoriesData || []} h4Styles={h4Styles} />
                <PriceFilter priceFilter={filters.price} handleFilterByPrice={handleFilterByPrice} h4Styles={h4Styles} />
                <ColorFilter colorFilter={filters.color} handleFilterByColor={handleFilterByColor} h4Styles={h4Styles} />
                <BrandFilter brandFilter={filters.brand} handleFilterByBrand={handleFilterByBrand} h4Styles={h4Styles} />
                <RatingFilter ratingFilter={filters.rating} handleFilterByRating={handleFilterByRating} h4Styles={h4Styles} />
                <div>
                  <h4 className={`${h4Styles} mb-20`}>Reset Filter</h4>
                  <button className='w-full my-[15px] font-quicksand font-bold text-12 leading-[15px] tracking-[-0.03em] uppercase bg-heading-secondary text-white rounded-[30px] block p-10 text-center'
                    onClick={handleClickResetFilters}>
                    Reset
                  </button>
                </div>
              </div>
              <SideBanner />
            </div>
            <div className='xl:w-10/12 w-full '>
              <ShopBanner />
              <ProductsList noContainer productList={productList || []} setProductList={setProductList} defaultProducts={defaultProducts || []} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop





