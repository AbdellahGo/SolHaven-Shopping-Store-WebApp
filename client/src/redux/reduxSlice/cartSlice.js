import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        addedProductsId: [],
        totalQuantityProducts: 0
    },

    reducers: {
        addToCart: (state, action) => {
            const { products, id } = action.payload;
            const product = products.find(item => item.id === id);
            if (!product) return state;
            const localProducts = JSON.parse(localStorage.getItem('cart-products')) || [];

            const updatedProducts = [...localProducts, { ...product, quantity: 1 }];
            localStorage.setItem('cart-products', JSON.stringify(updatedProducts));
            return {
                ...state,
                addedProductsId: [...state.addedProductsId, id],
                totalQuantityProducts: state.totalQuantityProducts + 1
            };
        },
        addToCartWithQuantity: (state, action) => {
            const { id, quantity, productData, decrease } = action.payload
            const localProducts = JSON.parse(localStorage.getItem('cart-products')) || []

            const product = localProducts.find((product) => product.id === id)

            if (!product) {
                localStorage.setItem('cart-products', JSON.stringify([...localProducts, { ...productData, quantity: quantity }]))
                return {
                    ...state,
                    addedProductsId: [...state.addedProductsId, id],
                    totalQuantityProducts: state.totalQuantityProducts + quantity 
                }
            } else {
                const updatedProducts = localProducts.filter((product) => product.id !== id)
                localStorage.setItem('cart-products', JSON.stringify([...updatedProducts, { ...product, quantity: decrease ? product.quantity - quantity :  product.quantity + quantity }]))
                return {
                    ...state,
                    totalQuantityProducts: decrease ? state.totalQuantityProducts - quantity : state.totalQuantityProducts + quantity 
                }
            }
        },
        removeFromCart: (state, action) => {
            const productIdToRemove = action.payload;
            const localProducts = JSON.parse(localStorage.getItem('cart-products')) || [];
            const updatedProducts = localProducts.filter((product) => product.id !== productIdToRemove)
            localStorage.setItem('cart-products', JSON.stringify(updatedProducts))
            return {
                ...state,
                addedProductsId: state.addedProductsId.filter((item) => item !== productIdToRemove),
                totalQuantityProducts: updatedProducts.reduce((acc, product) => product.id !== productIdToRemove ? acc + product.quantity : acc ,0)

            }
        },
        loadCartFromLocalStorage: (state) => {
            try {
                const productsInLocal = JSON.parse(localStorage.getItem('cart-products'));
                if (productsInLocal) {
                    return {
                        ...state,
                        addedProductsId: productsInLocal.map(item => item.id),
                        totalQuantityProducts: productsInLocal.reduce((acc, product) => acc + parseInt(product.quantity), 0)
                    };
                } else {
                    return {
                        ...state,
                        addedProductsId: [],
                        totalQuantityProducts: 0
                    };
                }
            } catch (error) {
                console.error('Error parsing cart data from localStorage:', error);
            }
            return state;
        }
    }
})


export const { addToCart, loadCartFromLocalStorage, removeFromCart, addToCartWithQuantity } = cartSlice.actions
export default cartSlice.reducer