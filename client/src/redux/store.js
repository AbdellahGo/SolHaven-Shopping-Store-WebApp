import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './RTKApis/productsApi'
import { blogsApi } from './RTKApis/blogsApi'
import cartReducer from './reduxSlice/cartSlice'
import wishlistReducer from './reduxSlice/wishlistSlice'
import compareReducer from './reduxSlice/compareSlice'


export default configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,
        compare: compareReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [blogsApi.reducerPath]: blogsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(productsApi.middleware)
    .concat(blogsApi.middleware)

})