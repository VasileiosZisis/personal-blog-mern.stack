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
  }),
});

export const { useGetBlogpostsQuery, useGetBlogpostDetailsQuery } =
  blogpostApiSlice;
