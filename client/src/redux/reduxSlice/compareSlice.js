import { createSlice } from '@reduxjs/toolkit'


export const compareSlice = createSlice({
    name: 'compare',
    initialState: {
        addedCompareProductsId: [],
    },

    reducers: {
        addToCompare: (state, action) => {
            const { products, id } = action.payload
            const product = products.find(item => item.id === id)
            if (!product) return state
            const localProducts = JSON.parse(localStorage.getItem('compare-products')) || []
            const updatedProducts = JSON.stringify([...localProducts, product])
            localStorage.setItem('compare-products', updatedProducts)
            return {
                ...state,
                addedCompareProductsId: [...state.addedCompareProductsId, id]
            }

        },
        removeFromWCompare: (state, action) => {
            const productIdToRemove = action.payload;
            const localProducts = JSON.parse(localStorage.getItem('compare-products')) || [];
            const updatedProducts = JSON.stringify(localProducts.filter((product) => product.id !== productIdToRemove))
            localStorage.setItem('compare-products', updatedProducts)
            console.log('productIdToRemove' + productIdToRemove);
            console.log(state.addedCompareProductsId.filter((item) => item !== productIdToRemove));
            return {
                ...state,
                addedCompareProductsId: state.addedCompareProductsId.filter((item) => item !== productIdToRemove)
            }


        },
        loadCompareFromLocalStorage: (state) => {
            try {
                const productsInLocal = JSON.parse(localStorage.getItem('compare-products'));
                if (productsInLocal) {
                    return {
                        ...state,
                        addedCompareProductsId: productsInLocal.map(item => item.id),
                    };
                }
            } catch (error) {
                console.error('Error parsing cart data from localStorage:', error);
            }
            return state;
        }
    }
})


export const { addToCompare, removeFromWCompare, loadCompareFromLocalStorage, } = compareSlice.actions
export default compareSlice.reducer