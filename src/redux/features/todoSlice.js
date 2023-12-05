import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo: (state, { payload }) => {
      return [...state, payload];
    },
    deleteTodo: (state, { payload }) => {
      return state.filter((item) => item.id != payload);
    },
    completeTodo: (state, { payload }) => {
      const completedTask = state.map((item) => {
        if (item?.id == payload) {
          return { ...item, isComplete: !item?.isComplete };
        } else {
          return item;
        }
      });

      return completedTask;
    },
    removeAll: (state) => {
      state = [];
    },
  },
});

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;
