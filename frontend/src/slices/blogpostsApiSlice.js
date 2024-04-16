import { BLOGPOSTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const blogpostApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogposts: builder.query({
      query: () => ({
        url: BLOGPOSTS_URL,
      }),
      providesTags: ['Blogposts'],
      keepUnusedDataFor: 5,
    }),
    getBlogpostDetails: builder.query({
      query: (_id) => ({
        url: `${BLOGPOSTS_URL}/${_id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createBlogpost: builder.mutation({
      query: (data) => ({
        url: BLOGPOSTS_URL,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Blogpost'],
    }),
    updateBlogpost: builder.mutation({
      query: (data) => ({
        url: `${BLOGPOSTS_URL}/${data._id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Blogposts'],
    }),
    uploadBlogpost: builder.mutation({
      query: (data) => ({
        url: `${BLOGPOSTS_URL}/${data.get('_id')}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Blogposts'],
    }),
    deleteBlogpost: builder.mutation({
      query: (_id) => ({
        url: `${BLOGPOSTS_URL}/${_id}`,
        method: 'delete',
      }),
    }),
  }),
});

export const {
  useGetBlogpostsQuery,
  useGetBlogpostDetailsQuery,
  useCreateBlogpostMutation,
  useUpdateBlogpostMutation,
  useUploadBlogpostMutation,
  useDeleteBlogpostMutation,
} = blogpostApiSlice;
