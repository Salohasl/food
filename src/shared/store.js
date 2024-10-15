import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../entities/product/productSlice.js'

export default configureStore({
    reducer: {
        product: productReducer
    }
})