import { createSlice } from '@reduxjs/toolkit';
import { ADD_ORDER } from '../actions/order';

export const initialState = {
  addOrderLoading: true, //주문하기
  addOrderDone: false,
  addOrderError: null,

  orderList: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(ADD_ORDER.pending, (state) => {
        state.addOrderLoading = true;
        state.addOrderDone = false;
        state.addOrderError = null;
      })
      .addCase(ADD_ORDER.fulfilled, (state, action) => {
        state.addOrderLoading = false;
        state.addOrderDone = true;
        state.orderList.unshift(action.payload);
      })
      .addCase(ADD_ORDER.rejected, (state, action) => {
        state.addOrderLoading = false;
        state.addOrderError = action.payload;
      })
      .addDefaultCase((state) => state),
});

export default orderSlice;
