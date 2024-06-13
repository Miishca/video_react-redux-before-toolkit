import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type GoodsState = {
  goods: string[];
  loading: boolean;
  error: string;
}


const initialState: GoodsState = {
  goods: [],
  loading: false,
  error: '',
};

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.goods.push(action.payload);
    },
    take: (state, action: PayloadAction<string>) => {
      state.goods = state.goods.filter(good => good !== action.payload);
    },
    clear: (state) => {
      state.goods = [];
    },
  },
});

export default goodsSlice.reducer;
export const { actions } = goodsSlice;