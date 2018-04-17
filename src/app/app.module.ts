import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { HttpClientModule, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './products/product/product.component';

import {ApiService} from './api/api.service';
import {AuthorizationService} from './api/authorization.service';
import {UserService} from './user/user.service';
import {ProductService} from "./products/product.service";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {AppRoutingModule} from './app-routing.module';
import {  MatButtonModule,
          MatCardModule,
          MatListModule,
          MatMenuModule,
          MatToolbarModule,
          MatIconModule,
          MatSidenavModule,
          MatSelectModule,
          MatInputModule,
          MatCheckboxModule,
          MatGridListModule} from '@angular/material';
import { OrderComponent } from './orders/order/order.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import {OrderService} from "./orders/order.service";
import { AdminComponent } from './admin/admin.component';
import {Interceptor} from './Interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    AddProductComponent,
    EditProductComponent,
    MenuComponent,
    ProductComponent,
    OrderComponent,
    OrderDetailComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    AppRoutingModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule

  ],
  providers: [
    AuthorizationService,
    ApiService,
    UserService,
    ProductService,
    OrderService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
