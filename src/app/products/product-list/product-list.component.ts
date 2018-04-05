import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Product} from '../product';
import { HttpClient } from '@angular/common/http';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
  this.getProductList()
    .subscribe(result => {
      this.productList = result.slice(0, 10);
      console.log(result.slice(0, 10));
    });
  }

  public getProductList(): Observable<Product[]> {
    return this.productService.getAllProducts();
  }

  public addToCart(id, amount) {
    let cart = sessionStorage.getItem('cart');
    const input = id + ',';
    if (cart === null) {
      sessionStorage.setItem('cart', id);
    } else {
      cart = cart + ',' + id;
      sessionStorage.setItem('cart', cart);
    }
    alert("product added");
  }

}
