import React, { useEffect } from 'react'
import { container } from '../classes'
import { ProductDescription, ProductDetails, RecentProducts, ShippingInfo, SideBanner } from '../components'
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, loadWishlistFromLocalStorage, removeFromWishlist } from '../redux/reduxSlice/wishlistSlice';
import { addToCompare, loadCompareFromLocalStorage, removeFromWCompare } from '../redux/reduxSlice/compareSlice';
import { loadCartFromLocalStorage } from '../redux/reduxSlice/cartSlice';

const ShopDetailsArea = ({ productData, productId, productsList }) => {
    const dispatch = useDispatch()
    const { addedWishlistProductsId } = useSelector((state) => state.wishlist);
    const { addedCompareProductsId } = useSelector((state) => state.compare);

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

    useEffect(() => {
        dispatch(loadCartFromLocalStorage())
        dispatch(loadWishlistFromLocalStorage());
        dispatch(loadCompareFromLocalStorage());
    }, [dispatch])

    return (
        <div className='bg-gray-1 mb-50'>
            <div className={`${container} px-12`}>
                <div className='flex gap-[24px] lg:flex-row flex-col'>
                    <div className='lg:w-[80%] w-full pb-30'>
                        <ProductDetails notModal productId={productId} productsListApi={productsList} handleClickAddToWishlist={handleClickAddToWishlist} handleClickAddToCompare={handleClickAddToCompare} />
                        <ProductDescription productData={productData} />
                    </div>
                    <div className='lg:w-[20%] w-full pb-30'>
                        <ShippingInfo />
                        <SideBanner />
                        <RecentProducts productsList={productsList}  productId={productId}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopDetailsArea