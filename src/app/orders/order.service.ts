import { Injectable } from '@angular/core';
import {ApiService} from "../api/api.service";
import {AuthorizationService} from "../api/authorization.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Product} from "../products/product";
import {Order} from "./order";

@Injectable()
export class OrderService {

  constructor(private api: ApiService, private authService: AuthorizationService) {
  }

  public getAllOrders(): Observable<Order[]> {
    return this.api.get<Order[]>('order');
  }

  public getOrdersByUserId(): Observable<Order[]> {
    return this.api.get<Order[]>('order/user/');
  }

  public getOrderById(id): Observable<Order> {
    return this.api.get<Order>('order/' + id);
  }

  placeOrder(productList) {
    const order = new Order();
      order.products = productList;
      return this.api.post('order', order).subscribe(
        result => alert('order placed '),
        error => alert('something went wrong')
      );
  }



  public updateProductById(id: number, product: Product) {
    this.api.put('products/update', product).subscribe(
      result => alert('product updated'),
      error => alert('something went wrong')
    );
  }
}
