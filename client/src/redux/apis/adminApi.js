import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/admin`, credentials: "include" }),
    tagTypes: ["admin"],
    endpoints: (builder) => {
        return {
            getContact: builder.query({
                query: () => {
                    return {
                        url: "/fetch",
                        method: "GET"
                    }
                },
                providesTags: ["admin"]
            }),
        }
    }
})

export const { useGetContactQuery } = adminApi