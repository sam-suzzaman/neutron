import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/v1/",
        prepareHeaders: (headers) => {
            headers.set("Cache-Control", "no-store");
            return headers;
        },
    }),
    tagTypes: ["contacts", "favourites"],
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
            invalidatesTags: ["contacts", "favourites"],
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
            invalidatesTags: ["contacts", "favourites"],
        }),
        getFavouriteContacts: builder.query({
            query: () => "favourites",
            providesTags: ["favourites"],
        }),
        addToFavourite: builder.mutation({
            query: (id) => ({
                url: `favourites/${id}`,
                method: "POST",
            }),
            invalidatesTags: ["favourites"],
        }),
        removeFromFavourite: builder.mutation({
            query: (id) => ({
                url: `favourites/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["favourites"],
        }),
    }),
});

export const {
    useGetAllContactsQuery,
    useAddContactMutation,
    useUpdateContactMutation,
    useDeleteContactMutation,
    useGetFavouriteContactsQuery,
    useAddToFavouriteMutation,
    useRemoveFromFavouriteMutation,
} = baseApi;
export default baseApi;
