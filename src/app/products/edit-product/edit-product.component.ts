import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {


  product: Product = new Product;
  title: string;
  id: number;
  constructor(private productService: ProductService,  private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe( p => this.id  = p['id'])

    this.getProduct().subscribe( result => {
      this.product = result;
      this.title = result.title;

    });
  }

  public getProduct(): Observable<Product> {
    return this.productService.getProductById(this.id);
  }

  public onSubmit() {
   this.productService.updateProductById(this.id, this.product);
  }

}
