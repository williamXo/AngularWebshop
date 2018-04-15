import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './products/product/product.component';
import {HomeComponent} from './home/home.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {LoginComponent} from './login/login.component';
import {CartComponent} from "./cart/cart.component";
import {OrderComponent} from "./orders/order/order.component";
import {OrderDetailComponent} from "./orders/order-detail/order-detail.component";
import {AdminComponent} from "./admin/admin.component";
import {EditProductComponent} from "./products/edit-product/edit-product.component";


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'producten', component: ProductListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'product', component: ProductComponent },
    { path: 'cart', component: CartComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'orders', component: OrderComponent },
    { path: 'orders/:id', component: OrderDetailComponent },
    { path: 'edit/:id', component: EditProductComponent }


];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}

