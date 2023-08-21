import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./slices/countrySlice";

export const store = configureStore({
  reducer: {
    country: countrySlice,
  },
});
