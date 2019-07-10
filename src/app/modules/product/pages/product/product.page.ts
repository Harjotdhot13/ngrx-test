import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { Store, select } from '@ngrx/store';
import * as Actions from '@app/store/actions/product.actions';
import * as Selectors from '@app/store/selectors/product.selectors';
import { AppState } from '@app/store/state/app.state';
import { tap, switchMap } from 'rxjs/operators';

@Component({
    selector: 'product-page',
    templateUrl: 'product.page.html'
})

/* This is a smart component */
export class ProductPage implements OnInit {
    product$: Observable<Product>;

    constructor(
        private route: ActivatedRoute,
        private store: Store<AppState>
    ) { }

    ngOnInit() {
        this.product$ = this.route.paramMap.pipe(
            tap(params => {
                const productId = +params.get('productId');
                this.store.dispatch(new Actions.GetProduct(productId))
            }),
            switchMap(() => this.store.pipe(select(Selectors.selectedProduct)))
        );
    }
}
