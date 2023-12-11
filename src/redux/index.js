import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import todoSlice from "./features/todoSlice";
import categorySlice from "./features/categorySlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoSlice,
    category: categorySlice,
  },
});
