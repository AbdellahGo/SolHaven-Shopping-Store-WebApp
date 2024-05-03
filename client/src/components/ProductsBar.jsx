import React, { useEffect, useRef, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, loadCartFromLocalStorage } from '../redux/reduxSlice/cartSlice';
import { Link, useNavigate } from 'react-router-dom'

import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { container } from '../classes'
import { categoriesControlData, productsBar } from '../displayedData/data'
import { DragScroll, Modal, ProductsBarList, SectionHeader, ProductDetails } from '../components'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useGetProductsListQuery } from '../redux/RTKApis/productsApi';
import { addToWishlist, loadWishlistFromLocalStorage, removeFromWishlist } from '../redux/reduxSlice/wishlistSlice';
import { addToCompare, loadCompareFromLocalStorage, removeFromWCompare } from '../redux/reduxSlice/compareSlice';

const ProductsBar = ({ categoriesControl, relatedProducts }) => {
    const { title, subTitle, desc, productsList } = productsBar
    const { data: productsListApi, isLoading } = useGetProductsListQuery()
    const [scrollLeft, setScrollLeft] = useState(null)
    const [leftOrRight, setLeftOrRight] = useState(null)
    const slider = useRef(null)
    const arrowLeft = useRef(null)
    const arrowRight = useRef(null)
    const [productId, setProductId] = useState(null)
    const [productModal, setProductModal] = useState(false)
    const [activeCategory, setActiveCategory] = useState('All')
    const [filterProducts, setFilterProducts] = useState([])

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { addedProductsId } = useSelector((state) => state.cart);
    const { addedWishlistProductsId } = useSelector((state) => state.wishlist);
    const { addedCompareProductsId } = useSelector((state) => state.compare);

    const handleClickAddToCart = (id, productsList) => {
        if (!addedProductsId.includes(id)) {
            dispatch(addToCart({ products: productsList, id: id }));
        } else {
            navigate('/cart')
        }
    }
    console.log(productsListApi);
    const handleClickAddToWishlist = (id, productsList) => {
        if (!addedWishlistProductsId.includes(id)) {
            dispatch(addToWishlist({ products: productsList, id: id }));
        } else {
            dispatch(removeFromWishlist(id));
        }
    }
    const handleClickAddToCompare = (id, productsList) => {
        if (!addedCompareProductsId.includes(id)) {
            dispatch(addToCompare({ products: productsList, id: id }));
        } else {
            dispatch(removeFromWCompare(id));
        }
    }

    const handleClickIcon = (i, id, content) => {
        setProductId(id)
        if (i === 0) {
            handleClickAddToWishlist(id, content)
        }
        if (i === 1) {
            handleClickAddToCompare(id, content)
        }
        if (i === 2) {
            document.body.style.cssText = 'overflow: hidden'
            setProductModal(true)
        }
    }
    const handleCancelModal = () => {
        document.body.style.cssText = 'overflow: inset'
        setProductModal(false)
    }

    const handleLeftArrowClick = () => {
        slider.current.classList.add('drag-scroll-smooth')
        setScrollLeft(slider.current.scrollLeft);
        slider.current.scrollLeft = scrollLeft - 228
        setLeftOrRight('left')
    }

    const handleRightArrowClick = () => {
        slider.current.classList.add('drag-scroll-smooth')
        setScrollLeft(slider.current.scrollLeft);
        slider.current.scrollLeft = scrollLeft + 228
        setLeftOrRight('right')

    }


    const filterProductsByCategory = (category) => {
        setActiveCategory(category);
        // Filter products based on the selected category
        const filteredProducts = category === 'All' ? productsListApi : productsListApi.filter((product) => product.categories === category);
        setFilterProducts(filteredProducts);
    };

    useEffect(() => {
        if (leftOrRight === 'left') {
            handleLeftArrowClick()
        }
        if (leftOrRight === 'right') {
            handleRightArrowClick()
        }
    }, [scrollLeft])

    useEffect(() => {
        dispatch(loadCartFromLocalStorage());
        dispatch(loadWishlistFromLocalStorage());
        dispatch(loadCompareFromLocalStorage());
    }, [dispatch])

    useEffect(() => {
        // Initially set filterProducts based on the active category
        filterProductsByCategory(activeCategory);
    }, [productsListApi]);

    if (isLoading) return 'loading...'

    return (
        <div className={`relative products-bar ${relatedProducts ? 'bg-white' : 'bg-gray-1'} ${categoriesControl ? 'pb-[70px]' : ''}`}>
            <Modal handleCancelModal={handleCancelModal} productModal={productModal} >
                <ProductDetails productsListApi={productsListApi} productModal={productModal} productId={productId} handleClickAddToWishlist={handleClickAddToWishlist} handleClickAddToCompare={handleClickAddToCompare} />
            </Modal>
            <div className={`${container} px-12 relative`}>
                {!relatedProducts && (
                    <SectionHeader title={title} subTitle={subTitle} desc={desc}
                        subTitleStyles='font-schoolbell text-18 leading-[1.4] text-heading-secondary font-regular'
                        titleStyles='font-bold md:text-[30px] text-[28px] leading-[38px] text-heading-primary font-quicksand mt-8'
                        descStyles='font-jost text-[15px] text-link-color leading-[22px] mt-8'
                        sectionHeaderStyles='pb-[20px] text-center' />
                )}
                {categoriesControl && (
                    <div className='flex flex-wrap  gap-10 mb-[15px] justify-center items-center'>
                        {categoriesControlData.map(({ id, title, category }) => (
                            <button key={id} className={`  md:text-16 text-14 font-medium font-jost block md:px-[22px] md:py-[12px] rounded-[5px] px-12 py-8 mb-8 transition-all ${activeCategory === category ? 'bg-heading-secondary text-white' : 'bg-white text-link-color'}`}
                                onClick={() => filterProductsByCategory(category)}>
                                {title}
                            </button>
                        ))}
                    </div>
                )}
                <div className='drag-scroll-parent'>
                    <DragScroll scrollLeft={scrollLeft} setScrollLeft={setScrollLeft} slider={slider} sliderStyle='drag-scroll relative Mxxl:cursor-pointer transition-all flex gap-20 overflow-x-auto'>
                        <ProductsBarList relatedProductCart={relatedProducts ? true : false} addedProductsId={addedProductsId}
                            addedWishlistProductsId={addedWishlistProductsId}
                            addedCompareProductsId={addedCompareProductsId}
                            handleClickAddToCart={handleClickAddToCart}
                            handleClickIcon={handleClickIcon}
                            content={categoriesControl ? filterProducts : (productsListApi ? productsListApi.slice(0, relatedProducts ? 4 : 20) : productsList.slice(0, relatedProducts ? 4 : 20))} />
                    </DragScroll>
                    <div className='py-10 rounded-10px flex justify-center gap-20 items-center mt-20'>
                        <span ref={arrowLeft} className='cursor-pointer rounded-full transition items-center justify-center text-white
                        bg-[#96ae0080] hover:bg-heading-secondary sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] flex'
                            onClick={handleLeftArrowClick}>
                            <IoIosArrowBack />
                        </span>
                        <span ref={arrowRight} className='cursor-pointer rounded-full transition items-center justify-center text-white
                        bg-[#96ae0080] hover:bg-heading-secondary sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] flex'
                            onClick={handleRightArrowClick}>
                            <IoIosArrowForward />
                        </span>
                    </div>
                    {
                        categoriesControl && (
                            <div className='text-center pb-[15px] mt-[25px] font-jost'>
                                <span className='text-16 text-link-color '>
                                    Discover thousands of other quality products.
                                    <Link to='/shop' className='font-medium text-16 text-heading-secondary inline-flex items-center'>Shop All Products
                                        <span className='ml-[5px] block'>
                                            <MdKeyboardDoubleArrowRight fontSize={16} />
                                        </span>
                                    </Link>
                                </span>
                            </div>
                        )
                    }
                </div>

            </div>

        </div>
    )
}

export default ProductsBar