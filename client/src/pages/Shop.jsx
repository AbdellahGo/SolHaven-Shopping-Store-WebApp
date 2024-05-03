import React, { useEffect, useState } from 'react'
import { BreadCrumb, CategoryFilter, ColorFilter, ProductsList, RatingFilter, ShopBanner, SideBanner } from '../components'
import { container } from '../classes'
import { useGetCategoriesListQuery, useGetProductsListQuery } from '../redux/RTKApis/productsApi';
import BrandFilter from './BrandFilter';

const Shop = () => {
  const [categoryFilter, setCategoryFilter] = useState('')
  const [colorFilter, setColorFilter] = useState('')
  const [brandFilter, setBrandFilter] = useState('')
  const [ratingFilter, setRatingFilter] = useState('')
  const { data: categoriesListApi } = useGetCategoriesListQuery()
  const { data, isLoading } = useGetProductsListQuery();
  const [productList, setProductList] = useState([]);
  const [defaultProducts, setDefaultProducts] = useState([])

  const h4Styles = 'mb-8 font-bold text-14 leading-[18px] tracking-[-0.03em] uppercase text-heading-primary font-quicksand'


  const handleClickResetFilters = () => {
    setCategoryFilter('')
    setColorFilter('')
    setBrandFilter('')
    setRatingFilter('')
  }

  useEffect(() => {
    if (!isLoading) {
      setProductList(data);
      setDefaultProducts(data);
    }
  }, [data, isLoading]);

  if (isLoading) return 'Loading...';


  return (
    <div className='bg-gray-1'>
      <BreadCrumb small />
      <div className='pb-200'>
        <div className={`${container}`}>
          <div className='flex xl:flex-row xl:gap-[12px] gap-[30px] flex-col'>
            <div className='xl:w-3/12 w-full '>
              <div className='bg-white pt-[25px] px-30 mb-35 pb-18 rounded-[10px]'>
                <CategoryFilter categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} categoriesList={categoriesListApi} h4Styles={h4Styles} />
                <ColorFilter colorFilter={colorFilter} setColorFilter={setColorFilter} h4Styles={h4Styles} />
                <BrandFilter brandFilter={brandFilter} setBrandFilter={setBrandFilter} h4Styles={h4Styles} />
                <RatingFilter ratingFilter={ratingFilter} setRatingFilter={setRatingFilter} h4Styles={h4Styles} />
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
              <ProductsList noContainer productList={productList} setProductList={setProductList} defaultProducts={defaultProducts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop





