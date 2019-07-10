import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPage } from '@product/pages/product/product.page';
import { SharedModule } from '@shared/shared.module';
import { ProductShowComponent } from './pages/product-show/product-show.component';

export const productRoutes: Routes = [
  {
    path: ':productId',
    component: ProductPage
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(productRoutes)],
  declarations: [ProductPage, ProductShowComponent],
  exports: [ProductShowComponent]
})
export class ProductModule {}
