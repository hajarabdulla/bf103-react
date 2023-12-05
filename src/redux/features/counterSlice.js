import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increaseCounter: (state) => {
      return (state += 1);
    },

    descreaseCounter: (state) => {
      return (state -= 1);
    },
  },
});

export const { increaseCounter, descreaseCounter } = counterSlice.actions;
export default counterSlice.reducer;
