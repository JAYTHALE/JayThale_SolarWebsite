import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const photoApi = createApi({
    reducerPath: "customerApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}`, credentials: "include" }),
    tagTypes: ["photo"],
    endpoints: (builder) => {
        return {
            getallphotos: builder.query({
                query: () => {
                    return {
                        url: "/getallphotos",
                        method: "GET"
                    }
                },
                providesTags: ["photo"]
            }),

        }
    }
})

export const { useGetallphotosQuery } = photoApi
