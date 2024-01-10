// reducers/products.js
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
 name: 'products',
 initialState: {
  list: [] as any,
 },
 reducers: {
  setProducts: (state, action) => {
   state.list = action.payload;
  },
  addProduct: (state, action) => {
   state.list.push(action.payload);
  },
  removeProduct: (state, action) => {
   state.list = state.list.filter((product: any) => product.id !== action.payload);
  },
 },
});

export const { setProducts, addProduct, removeProduct } = productsSlice.actions;

export default productsSlice.reducer;
