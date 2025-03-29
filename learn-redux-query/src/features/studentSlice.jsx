import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://67e66f816530dbd3110ffabb.mockapi.io";


// these tags are used for refetching the data when the new data is add in our api then it 
// invalidate the cached data and geve us a new data after refetching and stored that data in cache...

export const studentApi = createApi({
    reducerPath: 'studentApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['Student'], // step 1 : Add TagTypes...
    endpoints: (builder) => ({
        getStudents: builder.query({
            query: () => "/students",
            providesTags: ['Student'], // step 2 : provide tags...
        }),
        addStudents: builder.mutation({
            query: (student) => ({
                url: "/students",
                method: "POST",
                body: student,
            }),
            invalidatesTags: ['Student'] // step 3 : invalidate tags to trigger refetch...
        }),
        deleteStudents: builder.mutation({
            query: (id) => ({
                url: `/students/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Student"],
        })
    })
})

export const { useGetStudentsQuery, useAddStudentsMutation, useDeleteStudentsMutation } = studentApi;