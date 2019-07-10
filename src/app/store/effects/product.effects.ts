import { Inject, Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as productActions from './../actions/product.actions';
import { mergeMap, map, withLatestFrom, catchError, switchMap } from 'rxjs/operators';
import { Action } from 'rxjs/internal/scheduler/Action';
import { FetchProductService } from '@app/modules/product/services/fetch-product.service';
import { Product } from '@app/modules/product/models/product.model';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectProducts, selectProductList } from '../selectors/product.selectors'
import * as ProductActions from '../actions/product.actions';
import { AppState } from '../state/app.state';

@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions, private fetchProductService: FetchProductService, private store: Store<AppState>) { }

    // tslint:disable-next-line: member-ordering
    @Effect()
    loadProducts$ = this.actions$.pipe(
        ofType(productActions.ActionTypes.LoadProducts),
        mergeMap(() => this.fetchProductService.getProducts().pipe(
            map((products: Product[]) => {
                return new productActions.LoadProductsSuccess(products)
            }),
            catchError(error => of(new productActions.LoadProductsFail(error))

            )))
    );

    // tslint:disable-next-line: member-ordering
    @Effect()
    getProduct$ = this.actions$.pipe(
        ofType(ProductActions.ActionTypes.GetProduct),
        map(action => action.payload),
        withLatestFrom(this.store.pipe(select(selectProductList))),
        switchMap(([id, products]) => {
            const selectedProduct = products.filter(product => product.id == id)[0];
            return of(new ProductActions.GetProductSuccess(selectedProduct));
        }),
        catchError(error => of(new productActions.GetProductFail(error)))
    )

}

