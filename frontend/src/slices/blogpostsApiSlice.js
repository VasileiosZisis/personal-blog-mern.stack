import { BLOGPOSTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const blogpostApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogposts: builder.query({
      query: ({ pageNumber, keyword }) => ({
        url: BLOGPOSTS_URL,
        params: {
          pageNumber,
          keyword,
        },
      }),
      providesTags: ['Blogposts'],
      keepUnusedDataFor: 5,
    }),
    getLatestBlogposts: builder.query({
      query: () => ({
        url: `${BLOGPOSTS_URL}/latest`,
      }),
      providesTags: ['Blogposts'],
      keepUnusedDataFor: 5,
    }),
    getAnimeBlogposts: builder.query({
      query: ({ pageNumberAnim }) => ({
        url: `${BLOGPOSTS_URL}/anime`,
        params: {
          pageNumberAnim,
        },
      }),
      providesTags: ['Blogposts'],
      keepUnusedDataFor: 5,
    }),
    getBookBlogposts: builder.query({
      query: ({ pageNumberBook }) => ({
        url: `${BLOGPOSTS_URL}/books`,
        params: {
          pageNumberBook,
        },
      }),
      providesTags: ['Blogposts'],
      keepUnusedDataFor: 5,
    }),
    getGameBlogposts: builder.query({
      query: ({ pageNumberGame }) => ({
        url: `${BLOGPOSTS_URL}/games`,
        params: {
          pageNumberGame,
        },
      }),
      providesTags: ['Blogposts'],
      keepUnusedDataFor: 5,
    }),
    getTvBlogposts: builder.query({
      query: ({ pageNumberTV }) => ({
        url: `${BLOGPOSTS_URL}/tv`,
        params: {
          pageNumberTV,
        },
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
      invalidatesTags: ['Blogposts'],
    }),
  }),
});

export const {
  useGetBlogpostsQuery,
  useGetLatestBlogpostsQuery,
  useGetAnimeBlogpostsQuery,
  useGetBookBlogpostsQuery,
  useGetGameBlogpostsQuery,
  useGetTvBlogpostsQuery,
  useGetBlogpostDetailsQuery,
  useCreateBlogpostMutation,
  useUpdateBlogpostMutation,
  useUploadBlogpostMutation,
  useDeleteBlogpostMutation,
} = blogpostApiSlice;
