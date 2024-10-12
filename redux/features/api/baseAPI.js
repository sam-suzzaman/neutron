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
    }),
});

export const { useGetAllContactsQuery, useAddContactMutation } = baseApi;
export default baseApi;
