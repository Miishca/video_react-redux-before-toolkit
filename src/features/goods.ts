import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchGoods } from '../services/api';

type GoodsState = {
  goods: string[];
  loading: boolean;
  error: string | null;
};

const initialState: GoodsState = {
  goods: [],
  loading: false,
  error: null,
};

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.goods.push(action.payload);
    },
    take: (state, action: PayloadAction<string>) => {
      state.goods = state.goods.filter((good) => good !== action.payload);
    },
    clear: (state) => {
      state.goods = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.goods = action.payload;
      state.loading = false;
    })

    builder.addCase(init.rejected, (state) => {
      state.loading = false;
      state.error = 'Error';
    })
  }
});

export default goodsSlice.reducer;
export const { add, take, clear } = goodsSlice.actions;

export const init = createAsyncThunk('goods/fetch', () => {
  return fetchGoods();
});
