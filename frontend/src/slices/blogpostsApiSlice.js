import { BLOGPOSTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const blogpostApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogposts: builder.query({
      query: () => ({
        url: BLOGPOSTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getBlogpostDetails: builder.query({
      query: (blogpostId) => ({
        url: `${BLOGPOSTS_URL}/${blogpostId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createBlogpost: builder.mutation({
      query: (data) => ({
        url: `${BLOGPOSTS_URL}`,
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
      invalidatesTags: ['Blogpost'],
    }),
  }),
});

export const {
  useGetBlogpostsQuery,
  useGetBlogpostDetailsQuery,
  useCreateBlogpostMutation,
  useUpdateBlogpostMutation,
} = blogpostApiSlice;
