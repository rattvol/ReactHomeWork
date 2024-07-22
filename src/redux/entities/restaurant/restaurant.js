import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";

const entityAdapter = createEntityAdapter();

export const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState: entityAdapter.getInitialState({
    requestStatus: "idle",
  }),
  selectors: {
    selectRestaurantIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        state.requestStatus = "fulfilled";

        entityAdapter.setAll(state, payload);
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.requestStatus = "rejected";
      }),
});

export const { selectRestaurantIds, selectRestaurantById } =
  RestaurantSlice.selectors;
