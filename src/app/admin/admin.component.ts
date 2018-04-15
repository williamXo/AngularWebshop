import { Component, OnInit } from '@angular/core';
import {ProductService} from "../products/product.service";
import {Product} from "../products/product";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  productList: Product[];

  constructor(private productService: ProductService, private router: Router) {

  }

  ngOnInit() {
    this.getProductList()
      .subscribe(result => {
        this.productList = result;
      });
  }


  public getProductList(): Observable<Product[]> {
    return this.productService.getAllProducts();
  }


  public goToDetails(id) {
    this.router.navigate(['edit/' + id]);

  }
}
