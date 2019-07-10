import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FetchProductService {
  private productUrl = '/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.productUrl).pipe(
      map((response: Response) => {
        return response;
      }),
      catchError((error: Response) => {
        return throwError('Something went wrong');
      })
    );
  }

  // getProduct(productId): Observable<any> {
  //   return this.http.get(this.productUrl + '/' + productId).pipe(
  //     map((response: Response) => {
  //       return response;
  //     }),
  //     catchError((error: Response) => {
  //       return throwError('Something went wrong');
  //     })
  //   );
  // }

  getProduct(productId): Observable<Product> {
    return this.getProducts().pipe(
      map((products: Product[]) => products.find(p => p.id == productId)),
      catchError((error: Response) => {
        return throwError('Something went wrong');
      })
    );
  }
}
