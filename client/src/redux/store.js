import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/authApi";
import { adminApi } from "./apis/adminApi";
import { customerApi } from "./apis/customerApi";
import authSlice from "./slices/authslice"
import { photoApi } from "./apis/photoApi";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        [customerApi.reducerPath]: customerApi.reducer,
        [photoApi.reducerPath]: photoApi.reducer,
        auth: authSlice
    },
    middleware: def => [...def(), authApi.middleware, adminApi.middleware, customerApi.middleware, photoApi.middleware]
})

export default reduxStore
