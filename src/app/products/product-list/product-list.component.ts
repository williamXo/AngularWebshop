import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Product} from '../product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  this.getProductList()
    .subscribe(result => {
      this.productList = result.slice(0, 10);
      console.log(result.slice(0, 10));
    });
  }

  public getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>('https://jsonplaceholder.typicode.com/photos');
  }

}
