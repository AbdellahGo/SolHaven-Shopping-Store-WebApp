import React, { useEffect, useState } from 'react'
import { BreadCrumb, CategoryFilter, ColorFilter, ProductsList, RatingFilter, ShopBanner, SideBanner, PriceFilter } from '../components'
import { container } from '../classes'
import { useGetCategoriesListQuery, useGetProductsListQuery } from '../redux/RTKApis/productsApi';
import BrandFilter from './BrandFilter';

const Shop = () => {
  const h4Styles = 'mb-8 font-bold text-14 leading-[18px] tracking-[-0.03em] uppercase text-heading-primary font-quicksand'
  const { data: categoriesListApi } = useGetCategoriesListQuery()
  const { data, isLoading } = useGetProductsListQuery();
  const [productList, setProductList] = useState([]);
  const [defaultProducts, setDefaultProducts] = useState([])

  // const [categoryFilter, setCategoryFilter] = useState('')
  // const [priceFilter, setPriceFilter] = useState('')
  // const [colorFilter, setColorFilter] = useState('')
  // const [brandFilter, setBrandFilter] = useState('')
  // const [ratingFilter, setRatingFilter] = useState('')



  // const handleClickResetFilters = () => {
  //   setCategoryFilter('')
  //   setPriceFilter('')
  //   setColorFilter('')
  //   setBrandFilter('')
  //   setRatingFilter('')
  //   setProductList(data)
  // }
  // const handleFilterByCategory = (category) => {
  //   setCategoryFilter((prev) => prev === category ? '' : category)
  //   let filteredProducts = []
  //   if (priceFilter || colorFilter || brandFilter || ratingFilter) {
  //     filteredProducts = productList?.filter(product => product.categories.trim().toLowerCase() === category)
  //   } else {
  //     filteredProducts = data?.filter(product => category ? product.categories.trim().toLowerCase() === category : product )
  //   }
  //   setProductList(filteredProducts)
  //   setDefaultProducts(filteredProducts)
  // }

  // const handleFilterByPrice = (price) => {
  //   setPriceFilter((prev) => prev === price ? '' : price)
  //   const minPrice = parseInt(price.split('-')[0])
  //   const maxPrice = parseInt(price.split('-')[1])
  //   let filteredProducts = []
  //   if (categoryFilter || colorFilter || brandFilter || ratingFilter) {
  //     filteredProducts = productList?.filter(product => parseInt(product.price) >= minPrice && parseInt(product.price) <= maxPrice)
  //   } else {
  //     filteredProducts = data?.filter(product => price ? parseInt(product.price) >= minPrice && parseInt(product.price) <= maxPrice : product)
  //   }
  //   setProductList(filteredProducts)
  //   setDefaultProducts(filteredProducts)
  // }

  // const handleFilterByColor = (color) => {
  //   setColorFilter((prev) => prev === color ? '' : color)
  //   let filteredProducts = []
  //   if (categoryFilter || priceFilter || brandFilter || ratingFilter) {
  //     filteredProducts = productList?.filter(product => product.color === color)
  //   } else {
  //     filteredProducts = data?.filter(product => color ? product.color === color : product)
  //   }
  //   setProductList(filteredProducts)
  //   setDefaultProducts(filteredProducts)
  // }


  // const handleFilterByBrand = (brand) => {
  //   setBrandFilter((prev) => prev === brand ? '' : brand)
  //   let filteredProducts = []
  //   if (categoryFilter || priceFilter || colorFilter || ratingFilter) {
  //     filteredProducts = productList?.filter(product => product.brands.trim().toLowerCase() === brand)
  //   } else {
  //     filteredProducts = data?.filter(product => brand ? product.brands.trim().toLowerCase() === brand : product)
  //   }
  //   setProductList(filteredProducts)
  //   setDefaultProducts(filteredProducts)
  // }


  // const handleFilterByRating = (rating) => {
  //   setRatingFilter((prev) => prev === rating ? '' : rating)
  //   let filteredProducts = []
  //   if (categoryFilter || priceFilter || colorFilter || brandFilter) {
  //     filteredProducts = productList?.filter(product => parseInt(product.rating) === rating)
  //   } else {
  //     filteredProducts = data?.filter(product => rating ? parseInt(product.rating) === rating : product)
  //   }
  //   setProductList(filteredProducts)
  //   setDefaultProducts(filteredProducts)
  // }

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
                <CategoryFilter categoryFilter={filters.category} handleFilterByCategory={handleFilterByCategory} categoriesList={categoriesListApi || []} h4Styles={h4Styles} />
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





