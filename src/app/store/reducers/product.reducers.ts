import { ActionTypes, Actions } from '../actions/product.actions';
import { Product } from '@app/modules/product/models/product.model';
import { ProductsState } from '../state/product.state';

export interface ProductsData {
    loading: boolean;
    products: Product[];
    selectedProduct: Product;
    error: string
}

export const intialState: ProductsData = {
    products: [],
    loading: false,
    selectedProduct: null,
    error: null
};

export function ProductReducer(
    state = intialState,
    action: Actions
): ProductsState {
    switch (action.type) {

        case ActionTypes.LoadProductsSuccess: {
            return {
                ...state, products: action.payload, loading: false, error: ''
            };
        }

        case ActionTypes.LoadProductsFail: {
            return {
                ...state,
                products: null,
                loading: false,
                error: action.payload
            };
        }

        case ActionTypes.GetProductSuccess: {
            return {
                ...state,
                selectedProduct: action.payload,
                loading: false,
                error: ''
            };

        }

        case ActionTypes.GetProductFail: {
            return {
                ...state,
                selectedProduct: null,
                loading: false,
                error: action.payload
            };
        }

        default:
            return state;
    }
}

export const appReducers = {
    products: ProductReducer
};
