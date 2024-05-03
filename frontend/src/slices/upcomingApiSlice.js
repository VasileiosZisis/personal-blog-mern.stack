import { UPCOMING_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const upcomingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUpcoming: builder.query({
      query: () => ({
        url: UPCOMING_URL,
      }),
      providesTags: ['Upcomings'],
      keepUnusedDataFor: 5,
    }),
    createUpcoming: builder.mutation({
      query: (data) => ({
        url: UPCOMING_URL,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Upcoming'],
    }),
    deleteUpcoming: builder.mutation({
      query: (_id) => ({
        url: `${UPCOMING_URL}/${_id}`,
        method: 'delete',
      }),
    }),
  }),
});

export const {
  useGetUpcomingQuery,
  useCreateUpcomingMutation,
  useDeleteUpcomingMutation,
} = upcomingApiSlice;
