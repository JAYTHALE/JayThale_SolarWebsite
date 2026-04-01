import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/auth`, credentials: "include", prepareHeaders: (headers, { getState }) => {
<<<<<<< HEAD
            headers.set('X-Prepared-By', 'MyFrontend');
=======
            // Example: set a custom header
            headers.set('X-Prepared-By', 'MyFrontend');
            // Example: attach token from state if needed
            // const token = getState().auth.token;
            // if (token) headers.set('Authorization', Bearer ${token});

>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
            return headers;
        },
    }),
    tagTypes: ["auth"],
    endpoints: (builder) => {
        return {
            RegisterAdmin: builder.mutation({
                query: () => {
                    return {
                        url: "/register",
                        method: "POST",

                    }
                },
                providesTags: ["auth"]
            }),
            LoginAdmin: builder.mutation({
                query: userData => {
                    return {
                        url: "/login",
                        method: "POST",
                        body: userData

                    }
                },
                invalidatesTags: ["auth"],
                transformResponse: data => {
                    localStorage.setItem("admin", JSON.stringify(data.data))
                    return data.data
                }
            }),
            LogoutAdmin: builder.mutation({
                query: userData => {
                    return {
                        url: "/logout",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["auth"],
                transformResponse: data => {
                    localStorage.removeItem("admin")
                    return data.result
                }
            }),
        }
    }
})

export const {
    useRegisterAdminMutation,
    useLoginAdminMutation,
    useLogoutAdminMutation
} = authApi
