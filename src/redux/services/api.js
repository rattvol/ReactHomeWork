import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Review"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
    }),
    getRestaurantById: builder.query({
      query: (restaurantId) => ({
        url: "/restaurants",
        params: { restaurantId },
      }),
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getUserById: builder.query({
      query: (userId) => ({
        url: "/users",
        params: { userId },
      }),
    }),
    getDishByRestaurantId: builder.query({
      query: (restaurantId) => ({
        url: "dishes",
        params: { restaurantId },
      }),
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => ({
        url: "reviews",
        params: { restaurantId },
      }),
      providesTags: (result, _, productId) =>
        result.concat({ type: "Review", productId }),
    }),
    createReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: (result, _, { restaurantId }) => [
        { type: "Review", id: result.id },
        { type: "Review", restaurantId },
      ],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetDishByRestaurantIdQuery,
  useCreateReviewMutation,
  useGetUsersQuery,
  useGetUserByIdQuery,
} = apiSlice;
