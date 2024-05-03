import { createSlice } from '@reduxjs/toolkit'


export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        addedWishlistProductsId: [],
    },

    reducers: {
        addToWishlist: (state, action) => {
            const { products, id } = action.payload
            const product = products.find(item => item.id === id)
            if (!product) return state
            const localProducts = JSON.parse(localStorage.getItem('wishlist-products')) || []
            const updatedProducts = JSON.stringify([...localProducts, product])
            localStorage.setItem('wishlist-products', updatedProducts)
            return {
                ...state,
                addedWishlistProductsId: [...state.addedWishlistProductsId, id]
            }

        },
        removeFromWishlist: (state, action) => {
            const productIdToRemove = action.payload;
            const localProducts = JSON.parse(localStorage.getItem('wishlist-products')) || [];
            const updatedProducts = JSON.stringify(localProducts.filter((product) => product.id !== productIdToRemove))
            localStorage.setItem('wishlist-products', updatedProducts)
            return {
                ...state,
                addedWishlistProductsId: state.addedWishlistProductsId.filter((item) => item !== productIdToRemove)
            }


        },
        loadWishlistFromLocalStorage: (state) => {
            try {
                const productsInLocal = JSON.parse(localStorage.getItem('wishlist-products'));
                if (productsInLocal) {
                    return {
                        ...state,
                        addedWishlistProductsId: productsInLocal.map(item => item.id),
                    };
                }
            } catch (error) {
                console.error('Error parsing cart data from localStorage:', error);
            }
            return state;
        }
    }
})


export const { addToWishlist, removeFromWishlist, loadWishlistFromLocalStorage, } = wishlistSlice.actions
export default wishlistSlice.reducer