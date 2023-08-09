import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProductsState from './types/ProductsState';
import * as api from './api';
import Product from './types/Product';
import ProductDto from './types/ProductDto';

const initialState: ProductsState = {
  products: [],
  toggle: false,
};

export const laodProducts = createAsyncThunk(
  'products/loadProducts',
  () => api.getAll()
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  (id: number) => api.deleteProduct(id)
);

export const createProduct = createAsyncThunk(
  'products/createProduct',
  (product: ProductDto) => api.createProduct(product)
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    changeToggleStatus: (state) => {
      state.toggle = !state.toggle;
    },
    chooseFavoriteProduct: (state, action: PayloadAction<Product>) => {
      state.favoriteProduct = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(laodProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((product) => product.id !== action.payload.id);
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      });
  },
});

export default productsSlice.reducer;
export const { changeToggleStatus, chooseFavoriteProduct } = productsSlice.actions;
