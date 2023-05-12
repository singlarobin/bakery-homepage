import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    totalCount: 0,
    totalPrice: 0,
    productList: []
  },
};

export const CartSlice = createSlice({
  name: "All Products",
  initialState,
  reducers: {
    updateCart: (state, action) => {
        const { data } = action?.payload || {}
      state.data.totalCount = data?.totalCount || 0;
      state.data.totalPrice = data?.totalPrice || 0;
      state.data.productList = data?.productList || [];
    },
  },
});

export const { updateCart } = CartSlice.actions;
export default CartSlice.reducer;
