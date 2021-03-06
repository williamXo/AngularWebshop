///<reference path="../../products/product.ts"/>
import { Component, OnInit } from '@angular/core';
import {Order} from "../order";
import {Observable} from "rxjs/Observable";
import {OrderService} from "../order.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../products/product";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order:  Order = new Order();
  productList: Product[]  = new Array();
  id: number;
  totalPrice = 0;
  constructor(private orderService: OrderService,  private router: ActivatedRoute) { }

  ngOnInit() {
  this.router.params.subscribe( p => this.id  = p['id'])

    this.getOrder().subscribe( result => {
      this.order = result;
      this.productList = result.products;
      let products = result.products.length;
      for (let i = 0; i<products; i++) {
        this.totalPrice += result.products[i].price;
      }
    });
  }

  public getOrder(): Observable<Order> {
    return this.orderService.getOrderById(this.id);
  }
  public showInfo(info) {
    alert(info);
  }

}

