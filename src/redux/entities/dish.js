import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../materials/normalized-mock.js";

export const DishSlice = createSlice({
  name: "dish",
  initialState: {
    entities: normalizedDishes.reduce((acc, item) => {
      acc[item.id] = item;

      return acc;
    }, {}),
    ids: normalizedDishes.map((item) => item.id),
  },
  selectors: {
    selectDishIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
  },
});

export const { selectDishIds, selectDishById } = DishSlice.selectors;
