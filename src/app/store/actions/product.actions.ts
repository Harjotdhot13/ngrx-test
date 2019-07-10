import { Action } from '@ngrx/store';
import { Product } from '@app/modules/product/models/product.model';

export enum ActionTypes {
    LoadProducts = '[Product] Load',
    LoadProductsSuccess = '[Product] Load Success',
    LoadProductsFail = '[Product] Load Fail',
    GetProduct = '[Product] Get Product',
    GetProductSuccess = '[Product] Get Product Success',
    GetProductFail = '[Product] Get Product Fail',
}

export class LoadProducts implements Action {
    readonly type = ActionTypes.LoadProducts;

}

export class LoadProductsSuccess implements Action {
    readonly type = ActionTypes.LoadProductsSuccess;

    constructor(public payload: Product[]) { }
}

export class LoadProductsFail implements Action {
    readonly type = ActionTypes.LoadProductsFail;
    constructor(public payload: any) { }

}

export class GetProduct implements Action {
    readonly type = ActionTypes.GetProduct;
    constructor(public payload: number) { }
}

export class GetProductSuccess implements Action {
    readonly type = ActionTypes.GetProductSuccess;

    constructor(public payload: Product) { }
}

export class GetProductFail implements Action {
    readonly type = ActionTypes.GetProductFail;
    constructor(public payload: any) { }

}

export type Actions = LoadProducts | LoadProductsSuccess | LoadProductsFail | GetProduct | GetProductSuccess | GetProductFail;
