import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getDishes } from "./get-dishes";

const entityAdapter = createEntityAdapter();

export const DishSlice = createSlice({
  name: "dish",
  initialState: entityAdapter.getInitialState({
    requestStatus: "idle",
  }),
  selectors: {
    selectDishIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        state.requestStatus = "fulfilled";

        entityAdapter.setAll(state, payload);
      })
      .addCase(getDishes.rejected, (state) => {
        state.requestStatus = "rejected";
      }),
});

export const { selectDishIds, selectDishById } = DishSlice.selectors;
