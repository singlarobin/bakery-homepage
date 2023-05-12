import { createSlice } from "@reduxjs/toolkit";
import { ALL_PRODUCTS } from "../constant";

const initialState = {
  data: {
    allProducts: ALL_PRODUCTS,
    sortVal: {}
  },
};

export const AllProductsSlice = createSlice({
  name: "All Products",
  initialState,
  reducers: {
    setAllProductsSuccess: (state, action) => {
      const { data } = action?.payload || {}
      state.data.allProducts = data?.allProducts || [];
      state.data.sortVal = data?.sortVal || {};
    },
  },
});

export const { setAllProductsSuccess } = AllProductsSlice.actions;
export default AllProductsSlice.reducer;
