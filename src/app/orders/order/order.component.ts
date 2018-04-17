import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Order} from '../order';
import {OrderService} from '../order.service';
import {Router} from '@angular/router';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderList: Order[];
  allOrders = false;

  constructor(private orderService: OrderService, private router: Router, public userService: UserService) { }

  ngOnInit() {

    this.getOrders().subscribe( result => {
      this.orderList = result;
    });

  }

  public getOrders(): Observable<Order[]> {
    return this.orderService.getOrdersByUserId();
  }
  public showInfo(info) {
    alert(info);
  }
  public goToDetails(id) {
    this.router.navigate(['orders/' + id]);
}


  setAllOrders() {
    if (this.userService.$isAdmin) {
      this.allOrders = true;
      this.orderService.getAllOrders().subscribe(result => this.orderList = result);
    }
  }
}
