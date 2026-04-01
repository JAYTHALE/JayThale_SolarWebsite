import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const customerApi = createApi({
    reducerPath: "customerApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/admin`, credentials: "include" }),
    tagTypes: ["customer"],
    endpoints: (builder) => {
        return {
            Customercontact: builder.mutation({
                query: userData => {
                    return {
                        url: "/create",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["customer"]
            }),
<<<<<<< HEAD
            
=======
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567

        }
    }
})

export const { useCustomercontactMutation } = customerApi
