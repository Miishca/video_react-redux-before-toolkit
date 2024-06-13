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
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    set: (state, action: PayloadAction<string[]>) => {
      state.goods = action.payload;
    },
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