import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategory = createAsyncThunk("getCategory", async () => {
  const response = await axios.get(
    "https://northwind.vercel.app/api/categories"
  );

  return response.data;
});

export const postCategory = createAsyncThunk("postCategory", async (data) => {
  const response = await axios.post(
    "https://northwind.vercel.app/api/categories",
    data
  );
  return response;
});

export const deleteCategory = createAsyncThunk("deleteCategory", async (id) => {
  const response = await axios.delete(
    `https://northwind.vercel.app/api/categories/${id}`
  );
  return response;
});

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCategory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default categorySlice.reducer;
