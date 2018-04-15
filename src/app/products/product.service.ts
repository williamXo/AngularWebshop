import {Injectable} from '@angular/core';


import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {ApiService} from '../api/api.service';
import {AuthorizationService} from '../api/authorization.service';
import {Product} from './product';

@Injectable()
export class ProductService {
  constructor(private api: ApiService, private authService: AuthorizationService, private router: Router) {
  }

  public getAllProducts(): Observable<Product[]> {
    return this.api.get<Product[]>('products');
  }
  public getProductById(id): Observable<Product> {
    return this.api.get<Product>('products/' + id);
  }

  public updateProductById(id: number, product: Product) {
    this.api.put('products/update', product).subscribe(
      result => alert('product updated'),
      error => alert('something went wrong')
     );
  }
}
