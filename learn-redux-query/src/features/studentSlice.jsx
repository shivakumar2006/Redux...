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
        getStudent: builder.query({
            query: (id) => `/students/${id}`,
            providesTags: ["Student"],
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
        }),
        updateStudent: builder.mutation({
            query: ({id, ...rest}) => ({ // here we use rest because the id is not changes here of the user but we need to change the nam and email that's why we write ...rest here(not change the id but change the student name and email)
                url: `/students/${id}`,
                method: "PUT", 
                body: rest,
            }),
            invalidatesTags: ["Student"]
        })
    })
})

export const { useGetStudentsQuery, useAddStudentsMutation, useDeleteStudentsMutation, useGetStudentQuery, useUpdateStudentMutation } = studentApi;