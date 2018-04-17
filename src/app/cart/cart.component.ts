import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Product} from "../products/product";
import {ProductService} from "../products/product.service";
import {UserService} from "../user/user.service";
import {OrderService} from "../orders/order.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList: Product[] = new Array();
  totalPrice: number = 0;

  constructor(private productService: ProductService, public userService: UserService, private orderService:OrderService) { }

  ngOnInit() {
this.getShopppingCartList();
  }



  public getShopppingCartList() {
    const cart = sessionStorage.getItem('cart');
    const productList = cart.split(',');

     productList.map( entry => {
       this.getProduct(entry).subscribe(result => {
         this.cartList.push(result);
         this.totalPrice += result.price;
       });
     });

    console.log(this.cartList);
  }


  public getProduct(id): Observable<Product> {
    return this.productService.getProductById(id);
  }
  public getProductList(): Observable<Product[]> {
    return this.productService.getAllProducts();
  }

  public placeOrder() {
    if (this.userService.$isLogedIn) {
    this.orderService.placeOrder(this.cartList);
    }else {
      alert("you need to be logged in to place an order");
    }
  }

}
