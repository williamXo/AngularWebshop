import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Product} from "../products/product";
import {ProductService} from "../products/product.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList: Product[] = new Array();

  constructor(private productService: ProductService) { }

  ngOnInit() {
this.getShopppingCartList();
  }



  public getShopppingCartList() {
    let cart = sessionStorage.getItem('cart');
    let productList = cart.split(',');

     productList.map( entry => {
       this.getProduct(entry).subscribe(result => this.cartList.push(result));
     });

    console.log(this.cartList);
  }


  public getProduct(id): Observable<Product> {
    return this.productService.getProductById(id);
  }
  public getProductList(): Observable<Product[]> {
    return this.productService.getAllProducts();
  }

}
