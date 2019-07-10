import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { ProductsState } from '../state/product.state';

export const selectProducts = (state: AppState) => state.products;

export const selectProductList = createSelector(selectProducts, (state: ProductsState) => state.products);

export const selectedProduct = createSelector(selectProducts, (state: ProductsState) => state.selectedProduct);

