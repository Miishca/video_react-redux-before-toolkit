import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const amountSlice = createSlice({
  name: 'amount',
  initialState: 0,
  reducers: {
    add: (value, action: PayloadAction<number>) => value + action.payload,
    take: (value, action: PayloadAction<number>) => value - action.payload,
    clear: () => 0,
  },
})
export default amountSlice.reducer;
export const { actions } = amountSlice;
