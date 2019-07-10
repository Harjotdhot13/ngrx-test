import { Product } from '@app/modules/product/models/product.model';

export interface ProductsState {
    products: Product[],
    selectedProduct: Product,
    loading: boolean,
    error: string
}
