import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../materials/normalized-mock.js";

export const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    entities: normalizedRestaurants.reduce((acc, item) => {
      acc[item.id] = item;

      return acc;
    }, {}),
    ids: normalizedRestaurants.map((item) => item.id),
    idsAndName: normalizedRestaurants.map((item) => ({
      id: item.id,
      name: item.name,
    })),
  },
  selectors: {
    selectRestaurantIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantIdsAndNames: (state) => state.idsAndName,
  },
});

export const {
  selectRestaurantIds,
  selectRestaurantById,
  selectRestaurantIdsAndNames,
} = RestaurantSlice.selectors;
