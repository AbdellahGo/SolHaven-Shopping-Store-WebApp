import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, loadCartFromLocalStorage } from '../redux/reduxSlice/cartSlice';
import { Link, useNavigate } from 'react-router-dom'


import { container } from '../classes'
import { Error, Loader, Modal, Pagination, ProductCard, ProductDetails, ProductFilter } from '../components'
import { addToWishlist, loadWishlistFromLocalStorage, removeFromWishlist } from '../redux/reduxSlice/wishlistSlice';
import { addToCompare, loadCompareFromLocalStorage, removeFromWCompare } from '../redux/reduxSlice/compareSlice';
import { emptyCart } from '../assets';

const ProductsList = ({ loader, productList, setProductList, defaultProducts, noContainer }) => {
    const [toggleGrid, setToggleGrid] = useState(4)
    const [toggleSortProducts, setToggleSortProducts] = useState(null)
    const [productId, setProductId] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [productModal, setProductModal] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { addedProductsId } = useSelector((state) => state.cart);
    const { addedWishlistProductsId } = useSelector((state) => state.wishlist);
    const { addedCompareProductsId } = useSelector((state) => state.compare);
    const pages = Math.ceil(productList?.length / 12)
    const numberOfProducts = 12 * currentPage
    const numberStartProducts = currentPage === 1 ? 0 : numberOfProducts - 12
    const finalProductsList = productList.slice(numberStartProducts, numberOfProducts)
    const fromProduct = productList.findIndex(item => item.id === finalProductsList[0]?.id) + 1;
    const toProduct = productList.findIndex(item => item.id === finalProductsList[finalProductsList.length - 1]?.id) + 1;


    const handleClickAddToCart = (id, productsList) => {
        if (!addedProductsId.includes(id)) {
            dispatch(addToCart({ products: productsList, id: id }));
        } else {
            navigate('/cart')
        }
    }
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

    const handleClickSortProducts = (sortType) => {
        setToggleSortProducts(sortType);
        let sortedContent = [...productList]; // Declare sortedContent using let
        if (sortType === 'new') {
            sortedContent.sort((a, b) => b.availability - a.availability);
        } else if (sortType === 'high') {
            sortedContent.sort((a, b) => parseInt(b.price) - parseInt(a.price));
        } else if (sortType === 'low') {
            sortedContent.sort((a, b) => parseInt(a.price) - parseInt(b.price));
        } else {
            sortedContent = [...defaultProducts]; // Reassign sortedContent
        }
        setProductList(sortedContent);
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


    useEffect(() => {
        dispatch(loadCartFromLocalStorage());
        dispatch(loadWishlistFromLocalStorage());
        dispatch(loadCompareFromLocalStorage());
    }, [dispatch])

    return (
        <div className='relative products-bar bg-gray-1'>
            <div className={`${noContainer ? '' : container} px-12`}>
                <ProductFilter fromProduct={fromProduct} toProduct={toProduct} ProductLen={productList.length} toggleSortProducts={toggleSortProducts} handleClickSortProducts={handleClickSortProducts} toggleGrid={toggleGrid} setToggleGrid={setToggleGrid} />
            </div>
            {!loader ? (
                <>
                    {productList.length > 0 ? (
                        <>
                            <Modal handleCancelModal={handleCancelModal} productModal={productModal} >
                                <ProductDetails productsListApi={productList} productModal={productModal} productId={productId} handleClickAddToWishlist={handleClickAddToWishlist} handleClickAddToCompare={handleClickAddToCompare} />
                            </Modal>
                            <div className={`${noContainer ? '' : container} px-12 relative`}>
                                <div className={`grid gap-20 ${toggleGrid === 4 ? ' xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2' : toggleGrid === 3 ? 'lg:grid-cols-3 sm:grid-cols-2' : 'grid-cols-1'}`}>
                                    <ProductCard
                                        toggleGrid={toggleGrid}
                                        addedProductsId={addedProductsId}
                                        addedWishlistProductsId={addedWishlistProductsId}
                                        addedCompareProductsId={addedCompareProductsId}
                                        handleClickAddToCart={handleClickAddToCart}
                                        handleClickIcon={handleClickIcon}
                                        content={finalProductsList || []}
                                    />
                                </div>
                            </div>
                            <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                        </>
                    ) : (
                        <Error product/>
                    )}
                </>
            ) : <Loader />}

        </div>
    )
}

export default ProductsList


