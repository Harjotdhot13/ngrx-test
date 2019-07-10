import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})

// This is a dumb component used to display product on web page
export class ProductShowComponent {
  @Input() product: Product;

  constructor() { }

}
