import { Component, OnInit } from '@angular/core';
import * as Actions from '@app/store/actions/product.actions';
import { Store, select } from '@ngrx/store';
import { AppState } from '@app/store/state/app.state';

@Component({
  selector: 'landing-page',
  templateUrl: './landing.page.html'
})
export class LandingPage implements OnInit {
  constructor(private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new Actions.LoadProducts());
  }
}
