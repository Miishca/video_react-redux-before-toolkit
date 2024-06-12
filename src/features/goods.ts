import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: string[] = [];

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    add: (goods, action: PayloadAction<string>) => {
      goods.push(action.payload);
    },
    take: (goods, action: PayloadAction<string>) => {
      return goods.filter(good => good !== action.payload);
    },
    clear: () => [],
  },
});

export default goodsSlice.reducer;
export const { actions } = goodsSlice;