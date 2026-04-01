import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/authApi";


const parseLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    try {
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.warn(`Error parsing localStorage key "${key}":`, error);
        return null;
    }
};

const authSlice = createSlice({
    name: "authSlice",
    initialState: { admin: parseLocalStorage("admin"), },
    reducers: {
        adminLogout: (state) => {
            localStorage.removeItem("admin");
            state.admin = null;
        },
    },
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.LoginAdmin.matchFulfilled, (state, { payload }) => {
            state.admin = payload;
            localStorage.setItem("admin", JSON.stringify(payload));
        })
        .addMatcher(authApi.endpoints.LogoutAdmin.matchFulfilled, (state) => {
            state.admin = null;
        })

})

export const { adminLogout } = authSlice.actions
export default authSlice.reducer