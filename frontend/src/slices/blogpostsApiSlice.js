import { BASE_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const blogpostApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogposts: builder.query({
      query: () => ({
        url: BASE_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetBlogpostsQuery } = blogpostApiSlice;
