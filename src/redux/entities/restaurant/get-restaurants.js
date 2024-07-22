import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "./restaurant";

export const getRestaurants = createAsyncThunk(
  `restaurant/getRestaurants`,
  async (_, { rejectWithValue, fulfillWithValue }) => {
    const response = await fetch("http://localhost:3001/api/restaurants");

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("empty result");
    }

    return fulfillWithValue(result);
  },
  {
    condition: (_, { getState }) => {
      return selectRestaurantIds(getState()).length === 0;
    },
  }
);
