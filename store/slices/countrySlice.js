import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCountry } = countrySlice.actions;

export default countrySlice.reducer;
