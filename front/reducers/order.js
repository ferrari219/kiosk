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
    builder.addCase().addDefaultCase((state) => state),
});

export default orderSlice;
