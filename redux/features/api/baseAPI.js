import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/v1/",
    }),
    endpoints: (builder) => ({
        getAllContacts: builder.query({
            query: () => "contacts",
            providesTags: ["contacts"],
        }),
        addContact: builder.mutation({
            query: (data) => ({
                url: "contacts",
                method: "POST",
                body: data,
            }),
        }),
        updateContact: builder.mutation({
            query: ({ data, id }) => ({
                url: `contacts/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["contacts"],
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `contacts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["contacts"],
        }),
    }),
});

export const {
    useGetAllContactsQuery,
    useAddContactMutation,
    useUpdateContactMutation,
    useDeleteContactMutation,
} = baseApi;
export default baseApi;
