import { configureStore } from "@reduxjs/toolkit";


import authReducer from "./Auth/AuthSlice"
import userReducer from "./User/UserSlice"
import productReducer from "./Products/ProductSlice"

const store = configureStore({
    reducer: {auth:authReducer, user: userReducer, products: productReducer} 
})

export default store
